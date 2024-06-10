export interface DeployOptions {
  target: string; // The target to execute, e.g., "deploy"
  base: string; // The base branch to compare against, e.g., "origin/main"
  head: string; // The head branch or commit, e.g., "feature-branch"
}
