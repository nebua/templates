# NebuaCloud App Charts

Public runtime Helm charts for applications deployed by NebuaCloud into customer or private clusters.

This package intentionally contains only generic runtime deployment charts. It does not contain NebuaCloud build infrastructure, Argo Workflows, Tekton pipelines, Kaniko configuration, or internal deployment orchestration.

## Charts

- `charts/web-app`: frontend/static/web applications
- `charts/api-app`: backend/API applications

## Boundary

Use these charts from customer-side Argo CD instances. Keep private CI/CD infrastructure in the private `k8s/cicd-infra` repository.

Recommended flow:

```text
NebuaCloud infra builds and pushes the image
NebuaCloud agent/backend creates or updates the Argo CD Application
Client Argo CD pulls one of these runtime charts
Client Argo CD deploys the already-built image
```

## Private Registries

Prefer creating image pull secrets separately through the agent and passing them with `imagePullSecrets`.

The `registry.*` values remain available for compatibility, but avoid storing long-lived registry tokens in Argo CD Applications for client clusters.

## Example

```bash
helm template my-app ./charts/web-app \
  --set image.repository=ghcr.io/example/my-app \
  --set image.tag=latest \
  --set ingress.hosts[0].host=my-app.example.com
```
