# YASH2204V - Github Copilot with TypeScript

I'll guide you through the step-by-step process to properly set up a TypeScript project:
OR
**SIMPLE CLONE THE REPO:) much easier approach.**

1. **First, create your project structure**:
```
your-project/
  ├── src/           (for TypeScript files)
  ├── dist/          (for compiled JavaScript)
  ├── tsconfig.json  (TypeScript configuration)
  └── package.json   (Node.js project configuration)
```

2. **Initialize your project** (Open terminal in your project folder):
```bash
# Create a new directory and navigate into it
mkdir my-typescript-project
cd my-typescript-project

# Initialize a new Node.js project
npm init -y

# Install TypeScript as a dev dependency
npm install typescript --save-dev
```

3. **Create the folder structure**:
```bash
# Create source and distribution directories
mkdir src
mkdir dist
```

4. **Create tsconfig.json** in your root directory:
```json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "rootDir": "./src",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}
```

5. **Update package.json** to add build scripts:
```json
{
    "scripts": {
        "build": "tsc",
        "watch": "tsc -w"
    }
}
```

6. **Move your TypeScript code** into `src/index.ts`:
```typescript
// src/index.ts
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");
    }
    return a / b;
}

try {
    const result = divide(10, 2);
    console.log(result);
} catch (error) {
    console.error(error);
}

export { divide };  // Export the function if you need to use it in other files
```

7. **Configure VS Code settings** to hide generated JavaScript files:
- Create or open `.vscode/settings.json` in your project:
```json
{
    "files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.hg": true,
        "**/CVS": true,
        "**/.DS_Store": true,
        "dist": false,
        "**/*.js": {
            "when": "$(basename).ts"
        }
    }
}
```

8. **Add .gitignore** file:
```gitignore
node_modules/
dist/
*.js
!*.config.js
```

9. **Compile and Run**:
```bash
# Compile TypeScript to JavaScript
npm run build

# Or watch for changes
npm run watch
```

Now your project is properly set up! Here's how to use it:

1. Write all your TypeScript code in the `src` folder
2. The compiled JavaScript will automatically go to the `dist` folder
3. Use `npm run build` to compile once
4. Use `npm run watch` to automatically compile when files change

If you want to run your code:
```bash
# Compile first
npm run build

# Then run the compiled JavaScript
node dist/index.js
```

For your specific case:
1. Move your current `practice-ts.ts` to `src/practice.ts`
2. The compiled JavaScript will automatically appear in `dist/practice.js`
3. In VS Code, you'll only see the TypeScript files in the `src` folder

This setup prevents naming conflicts and keeps your project organized. The TypeScript files and their compiled JavaScript counterparts are kept separate, and VS Code won't show you both files at the same time, avoiding confusion.