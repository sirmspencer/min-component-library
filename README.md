# min-component-library

*Written with LLM assistance.*

Minimal TypeScript library that emits ES modules with named exports. It exists only to
support the shadow-cljs hot reload reproduction in
[`shadow-esm-hmr-repro`](../shadow-esm-hmr-repro), which is where the bug and the fix
are described.

The only properties that matter for the reproduction are that `tsc` emits
`export const` declarations (`"module": "esnext"` in `tsconfig.json`) and that the
package's `main` points at that output. React is deliberately absent, since the bug
concerns how shadow-cljs rewrites any ESM named export and has nothing to do with React.

## Build

```
npm install
npm run build
```

## Use from the repro

Linked by relative path, so `build/` is live in the consuming application:

```json
"dependencies": { "@ms/min-component-library": "file:../min-component-library" }
```
