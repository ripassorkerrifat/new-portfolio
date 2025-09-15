"use client";
import React, {useState, useEffect, useRef, Suspense} from "react";
import dynamic from "next/dynamic";
import "./TextEditor.css";

// Dynamically import JoditReact (SSG-safe)
const JoditReact = dynamic(() => import("jodit-react"), {
    ssr: false,
});

interface EditorProps {
    value: string;
    // eslint-disable-next-line no-unused-vars
    onChange: (value: string) => void;
}

const TextEditor: React.FC<EditorProps> = ({value, onChange}) => {
    const editor = useRef(null); // Create ref for Jodit editor
    const [content, setContent] = useState(value || ""); // Local state for the editor content

    useEffect(() => {
        setContent(value); // Ensure that the content updates if the `value` prop changes
    }, [value]);

    // Handle content change and trigger onChange prop
    const handleEditorChange = (newContent: string) => {
        if (newContent !== value) {
            onChange(newContent);
        }
    };

    const config = {
        placeholder: "Type here...",
        readonly: false,
        toolbarSticky: false,
        height: 200,
        toolbarAdaptive: false,
        toolbar: true,
        buttons: [
            "bold",
            "italic",
            "underline",
            "strikethrough",
            "|",
            "font",
            "fontsize",
            "|",
            "align",
            "|",
            "ul",
            "ol",
            "|",
            "link",
            "hr",
            "|",
            "undo",
            "redo",
            "|",
            "fullsize",
        ],
        showCharsCounter: false,
        showWordsCounter: false,
        showXPathInStatusbar: false,
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <JoditReact
                ref={editor}
                value={content}
                config={config}
                onBlur={handleEditorChange}
            />
        </Suspense>
    );
};

export default TextEditor;
