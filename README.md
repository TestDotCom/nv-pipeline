# neuvector-evaluation
A simple workload to test NeuVector. The CI/CD pipeline works as follow:

1. we build a _snapshot_ through Github actions (CI) and push the resulting image on Github packages
2. we call the NeuVector REST API to scan the repository for vulnerabilities
3. if the snapshot is within a certain threshold, it is promoted to _release_ and we push it on ACR
