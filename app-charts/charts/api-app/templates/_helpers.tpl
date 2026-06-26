{{/* Docker config JSON for registry auth */}}
{{- define "api-app.dockerconfigjson" -}}
{{- $auth := printf "%s:%s" .Values.registry.username .Values.registry.token | b64enc -}}
{
  "auths": {
    {{- if eq (default "" .Values.registry.provider) "github" }}
    "ghcr.io": {
      "username": "{{ .Values.registry.username }}",
      "password": "{{ .Values.registry.token }}",
      "auth": "{{ $auth }}"
    }
    {{- else if eq (default "" .Values.registry.provider) "gitlab" }}
    "registry.gitlab.com": {
      "username": "{{ .Values.registry.username }}",
      "password": "{{ .Values.registry.token }}",
      "auth": "{{ $auth }}"
    }
    {{- else if eq (default "" .Values.registry.provider) "bitbucket" }}
    "registry.bitbucket.org": {
      "username": "{{ .Values.registry.username }}",
      "password": "{{ .Values.registry.token }}",
      "auth": "{{ $auth }}"
    }
    {{- else }}
    "{{ required "registry.server is required when registry.provider is not github/gitlab/bitbucket" .Values.registry.server }}": {
      "username": "{{ required "registry.username is required" .Values.registry.username }}",
      "password": "{{ required "registry.token is required" .Values.registry.token }}",
      "auth": "{{ $auth }}"
    }
    {{- end }}
  }
}
{{- end -}}
