# Admin API Documentation

## Overview
The Admin API provides endpoints for dashboard management of projects. Unlike the public API, the admin API returns all projects (both published and unpublished) and allows full CRUD operations.

## API Endpoints

### 1. Get All Projects (Admin)
**Endpoint:** `GET /api/admin/projects`

**Purpose:** Fetch all projects for dashboard management (includes unpublished projects)

**Query Parameters:**
- `category` (optional): Filter by project category
- `limit` (optional): Number of projects to return (default: 100)
- `page` (optional): Page number for pagination (default: 1)

**Response:**
```json
{
  "success": true,
  "projects": [
    {
      "_id": "project-id",
      "title": "Project Title",
      "description": "Project description",
      "is_published": false,
      "category": "full-stack",
      ...
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 100,
    "total": 25,
    "pages": 1
  }
}
```

**Used By:**
- Dashboard projects listing page (`/dashboard/projects`)

---

### 2. Get Single Project (Admin)
**Endpoint:** `GET /api/admin/projects/[id]`

**Purpose:** Fetch a single project by ID (includes unpublished projects)

**Parameters:**
- `id` (required): Project ID

**Response:**
```json
{
  "project": {
    "_id": "project-id",
    "title": "Project Title",
    "description": "Project description",
    "is_published": false,
    "category": "full-stack",
    "thumbnail": "image-url",
    "skills": ["React", "Node.js"],
    "is_featured": false,
    "liveUrl": "https://example.com",
    "githubLink1": "https://github.com/...",
    "githubLink2": "https://github.com/...",
    "galleryImages": ["image1.jpg", "image2.jpg"],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

**Error Response (404):**
```json
{
  "error": "Project not found"
}
```

**Used By:**
- Dashboard project detail page (`/dashboard/projects/[id]`)
- Dashboard project edit page (`/dashboard/projects/[id]/edit`)

---

### 3. Update Project (Admin)
**Endpoint:** `PUT /api/admin/projects/[id]`

**Purpose:** Update a project (admin access)

**Parameters:**
- `id` (required): Project ID

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "is_published": true,
  "category": "full-stack",
  "thumbnail": "image-url",
  "skills": ["React", "Node.js"],
  "is_featured": false,
  "liveUrl": "https://example.com",
  "githubLink1": "https://github.com/...",
  "githubLink2": "https://github.com/...",
  "galleryImages": ["image1.jpg", "image2.jpg"],
  "order": 1
}
```

**Response:**
```json
{
  "message": "Project updated successfully",
  "project": { ... }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Database validation failed",
  "details": [
    {
      "field": "title",
      "message": "Title is required"
    }
  ]
}
```

**Used By:**
- Dashboard project edit page (`/dashboard/projects/[id]/edit`)

---

### 4. Delete Project (Admin)
**Endpoint:** `DELETE /api/admin/projects/[id]`

**Purpose:** Delete a project (admin access)

**Parameters:**
- `id` (required): Project ID

**Response:**
```json
{
  "message": "Project deleted successfully",
  "project": { ... }
}
```

**Error Response (404):**
```json
{
  "error": "Project not found"
}
```

**Used By:**
- Dashboard project detail page (`/dashboard/projects/[id]`)

---

## Comparison: Public vs Admin APIs

| Feature | Public API | Admin API |
|---------|-----------|-----------|
| Endpoint | `/api/projects/public` | `/api/admin/projects` |
| Published Projects | ✅ Yes | ✅ Yes |
| Unpublished Projects | ❌ No | ✅ Yes |
| List All | ✅ Yes | ✅ Yes |
| Get Single | ✅ Yes (404 if unpublished) | ✅ Yes (all projects) |
| Create | ❌ No | ✅ Yes |
| Update | ❌ No | ✅ Yes |
| Delete | ❌ No | ✅ Yes |
| Use Case | Public website | Admin dashboard |

---

## Security Considerations

### Current Implementation
- ⚠️ **No authentication** - Admin endpoints are currently public
- ⚠️ **No authorization** - Anyone can access admin endpoints

### Recommended Enhancements
1. **Add Authentication**
   - Implement JWT token validation
   - Verify admin user credentials
   - Add session management

2. **Add Authorization**
   - Check user role (admin/user)
   - Verify permissions for each action
   - Log admin actions for audit trail

3. **Rate Limiting**
   - Implement rate limiting on admin endpoints
   - Prevent brute force attacks
   - Monitor suspicious activity

---

## Usage Examples

### Fetch All Projects (Dashboard)
```javascript
const response = await fetch('/api/admin/projects');
const data = await response.json();
console.log(data.projects); // All projects including unpublished
```

### Fetch Single Project (Edit Page)
```javascript
const response = await fetch(`/api/admin/projects/${projectId}`);
const data = await response.json();
console.log(data.project); // Project details
```

### Update Project (Publish)
```javascript
const response = await fetch(`/api/admin/projects/${projectId}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    ...projectData,
    is_published: true
  })
});
const data = await response.json();
console.log(data.message); // "Project updated successfully"
```

### Delete Project
```javascript
const response = await fetch(`/api/admin/projects/${projectId}`, {
  method: 'DELETE'
});
const data = await response.json();
console.log(data.message); // "Project deleted successfully"
```

---

## Related Documentation

- [SEO Private Projects Protection](./SEO-PRIVATE-PROJECTS.md)
- [Public API Endpoints](./API-DOCUMENTATION.md) (if exists)
- [Dashboard Implementation](./DASHBOARD-IMPLEMENTATION.md) (if exists)

---

## Changelog

### Version 1.0 (Current)
- ✅ Created `/api/admin/projects` endpoint
- ✅ Created `/api/admin/projects/[id]` endpoint
- ✅ Updated dashboard to use admin endpoints
- ✅ Separated public and admin API concerns
