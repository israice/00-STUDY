````markdown
03:46:15 DONE

- `npm init` to build `package.json`
- `.ts` files to perform type checks
- how to convert TypeScript to JavaScript
- library for live TypeScript compiling
- `tsc --init` to create the `tsconfig.json` file
- main `tsconfig.json` options

---

# Getting Started

Enter the folder and run:

```bash
npm init
````

Press Enter repeatedly. This will create `package.json`, which is like the project’s passport file.

Version is `(1.0.0)`:

* **1** – Major Updates
* **0** – Minor Updates
* **0** – Patch Updates

Resulting file:

```json
{
  "name": "test1",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

You can add any commands under `scripts`, for example a start command or a test-run command:

```json
"scripts": {
  "start": "node index.js",  <========
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

Then run:

```bash
npm run start
```

---

# Installing Axios

Library for REST requests:

```bash
npm install axios
```

It will automatically update `package.json`. To inspect the library:

```js
const axios = require("axios");
console.log(Object.keys(axios));
```

Then run:

```bash
npm run start
```

This will display the list.

If the `node_modules` folder is missing in the project, you can restore it with:

```bash
npm i
```

---

# TypeScript

When you use TypeScript, install it globally:

```bash
npm install -g typescript
```

## Build Command

Add a build command to convert TS to JS with the same file name:

```json
"scripts": {
  "build": "tsc index.ts",  <========
  "start": "node index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

Run:

```bash
npm run build
```

---

# Live Reload with Nodemon

Use nodemon as a live server:

```bash
npm install nodemon --save-dev
```

It will rebuild the entire project after each change, LIVE. Replace `node` with `nodemon`:

```json
"scripts": {
  "build": "tsc index.ts",
  "start": "nodemon index.js",  <========
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

---

# tsconfig.json

Generate the config file:

```bash
tsc --init
```

This creates `tsconfig.json` with local TS project settings.

Change the build script:

```json
"scripts": {
  "build": "tsc --watch",  <========
  "start": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

### rootDir

Specify which folder to compile:

```json
"rootDir": "./src"
```

Only files in `src` will be compiled.

### outDir

Compile into a separate folder:

```json
"outDir": "./dist"
```

Avoid mixing TS and JS in the same folder.

### target

Set the JS version:

```json
"target": "ES2024"
```

### noEmitOnError

Show all errors while writing code:

```json
"noEmitOnError": true
```

## Run Dist

Change nodemon target to the compiled files:

```json
"scripts": {
  "build": "tsc --watch",
  "start": "nodemon ./dist/index.js",  <========
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

```
```
