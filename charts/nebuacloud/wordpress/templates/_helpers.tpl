{{/*
Expand the name of the chart.
*/}}
{{- define "wordpress.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
*/}}
{{- define "wordpress.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{- define "wordpress.labels" -}}
app.kubernetes.io/name: {{ include "wordpress.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
helm.sh/chart: {{ printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" }}
{{- end }}

{{- define "wordpress.selectorLabels" -}}
app.kubernetes.io/name: {{ include "wordpress.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Name of the Secret holding the DB password - either the user-supplied
existingSecret, or one this chart creates itself from externalDatabase.password.
*/}}
{{- define "wordpress.dbSecretName" -}}
{{- if .Values.externalDatabase.existingSecret }}
{{- .Values.externalDatabase.existingSecret }}
{{- else }}
{{- include "wordpress.fullname" . }}-db
{{- end }}
{{- end }}

{{- define "wordpress.dbSecretPasswordKey" -}}
{{- if .Values.externalDatabase.existingSecret }}
{{- .Values.externalDatabase.existingSecretPasswordKey }}
{{- else }}
{{- "db-password" }}
{{- end }}
{{- end }}