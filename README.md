# vscode-eslint crash bug

eslint extension keep crashing in a project created by vue-cli 3, while `yarn run lint` works well.

download [this repository](https://github.com/zliy/eslint-crash-example), open in vscode, install dependences (`yarn`), reload vscode, go to `src/main.js`, then eslint extension will crash immediately

## step to reproduce

1. create a project with vue-cli 3, Check these configurations: `CSS Pre-processors` , `Sass/SCSS (with dart-sass)`, `ESLint + Airbnb config`

2. go to `src/main.js`, change `import App from './App.vue;'` to `import App from '@/App.vue';` (webpack alias), or import a nonexistent file, like `import './somefile'`, eslint extension will crash immediately

3. no this problem when using `node-sass` instead of `dart-sass`



## versions

vscode-eslint: 1.8.0

vscode: 1.31.1

eslint: 5.14.1

node: v8.11.3


## error info:

```
...

[Info  - 11:49:42 AM] ESLint library loaded from: /Users/project-path/node_modules/eslint/lib/api.js
dyld: lazy symbol binding failed: Symbol not found: __ZN2v816FunctionTemplate3NewEPNS_7IsolateEPFvRKNS_20FunctionCallbackInfoINS_5ValueEEEENS_5LocalIS4_EENSA_INS_9SignatureEEEiNS_19ConstructorBehaviorENS_14SideEffectTypeE
  Referenced from: /Users/project-path/node_modules/fibers/bin/darwin-x64-64/fibers.node
  Expected in: flat namespace

dyld: Symbol not found: __ZN2v816FunctionTemplate3NewEPNS_7IsolateEPFvRKNS_20FunctionCallbackInfoINS_5ValueEEEENS_5LocalIS4_EENSA_INS_9SignatureEEEiNS_19ConstructorBehaviorENS_14SideEffectTypeE
  Referenced from: /Users/project-path/node_modules/fibers/bin/darwin-x64-64/fibers.node
  Expected in: flat namespace

[Info  - 11:49:46 AM] Connection to server got closed. Server will restart.

...
```