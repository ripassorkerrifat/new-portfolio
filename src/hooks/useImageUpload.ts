import { useState } from 'react';

interface UploadResult {
  url: string;
  public_id: string;
}

interface UseImageUploadReturn {
  uploading: boolean;
  uploadImage: (file: File) => Promise<UploadResult>;
  error: string | null;
}

export const useImageUpload = (): UseImageUploadReturn => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<UploadResult> => {
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Upload failed');
      }

      if (!result.success) {
        throw new Error(result.error || 'Upload failed');
      }

      return {
        url: result.url,
        public_id: result.public_id,
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Upload failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setUploading(false);
    }
  };

  return {
    uploading,
    uploadImage,
    error,
  };
};
