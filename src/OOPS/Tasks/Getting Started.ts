// ===========================
// Getting Started
// ===========================

// Project banner
export function showProjectBanner(): void {
  const PROJECT_NAME: string = "Enterprise Automation System";
  const VERSION: string = "1.0.0";
  const AUTHOR: string = "QA Team";

  console.log("=======================================");
  console.log(` ${PROJECT_NAME} | v${VERSION}`);
  console.log(` Author: ${AUTHOR}`);
  console.log(" Started: " + new Date().toLocaleDateString());
  console.log("=======================================\n");
}

// Simple Hello World
export function helloWorld(): void {
  console.log("Hello, World!  TypeScript environment is working.\n");
}
