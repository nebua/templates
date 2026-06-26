# framework-templates

A public monorepo of production-ready starter templates for popular frontend, backend, and fullstack frameworks. Each template includes real pages, endpoints, and UI, and runs in Docker for easy local development and deployment.

## Structure

```
templates/
  charts/     # Public marketplace/service Helm charts for Argo CD
  app-charts/ # Public runtime Helm charts for customer-cluster deployments
  frontend/   # UI frameworks (React, Vue, Angular, etc.)
  backend/    # API frameworks (NestJS, Express, Django, etc.)
  fullstack/  # Combined frontend + backend (Next.js, Nuxt, Django+React, etc.)
README.md     # This file
```

## App Charts

`app-charts/` contains public, generic Helm charts used by client-side Argo CD to deploy already-built images:

- `app-charts/charts/web-app`
- `app-charts/charts/api-app`

These charts are intentionally separated from private NebuaCloud build infrastructure. They do not include Argo Workflows, Tekton, Kaniko, or internal CI/CD orchestration.

## Catalog Charts

`charts/` contains public marketplace and managed-service Helm charts used by Argo CD project sources, such as Bitnami service charts and other reusable application charts.

Keep custom runtime charts in `app-charts/charts` and service/catalog charts in `charts` so custom deployments do not mix with the broader service catalog.

## How to Run Any Template

1. Enter the template folder (e.g. `cd templates/frontend/react-vite-ts`)
2. Build and run with Docker:
   ```
   docker build -t my-template .
   docker run --rm -p 3000:3000 my-template
   ```
3. Open your browser to the port shown in the Dockerfile (usually 3000, 8080, or 8000)

## What You'll See

### Frontend Templates
- Home page with navigation
- Admin/Dashboard page
- Layout (header/sidebar/footer)
- UI components (cards, tables, forms)

### Backend Templates
- Health endpoint (e.g. `/health`)
- CRUD API (e.g. `/users`)
- Controller/router separation

### Fullstack Templates
- Home and Admin/Dashboard pages
- Backend API
- Frontend consumes backend API
- Simple authentication (mocked or basic)

## Templates Included

See each subfolder for available templates. Every template is fully functional, not a blank starter.

---

**No mobile, infra-only, or metadata files. All templates are Dockerized and ready to use.**
