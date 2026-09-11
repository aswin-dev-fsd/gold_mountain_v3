# Security

Treat security as a release requirement.

Check for:
- secret leakage and unsafe environment variable usage
- injection risks (SQL, command, template, XSS, SSRF where applicable)
- broken authorization/authentication assumptions
- insecure file upload/download paths
- unsafe redirects and URL handling
- dependency vulnerabilities and suspicious packages
- client/server boundary mistakes
- logging of credentials or personal data

Default to least privilege. Never weaken security controls just to make tests pass without explicitly calling out the tradeoff.
