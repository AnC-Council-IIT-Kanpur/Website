// globals.d.ts

// Declare the global window object extension
interface Window {
    instgrm: any; // Use the appropriate type instead of `any` if known
  }
  
  // Declare the module for TypeScript to recognize it as a module
  declare module 'globals' {
    export {};
  }
  