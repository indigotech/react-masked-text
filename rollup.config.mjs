// rollup.config.mjs
const ts = require('rollup-plugin-ts');
const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const copy = require("rollup-plugin-copy");

let includePathOptions = {
  paths: ['src'],
  extensions: ['.js', '.ts', '.tsx']
};


export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    name: 'My Bundle',
    format: "umd"
  },
  name: 'ReactTextMask',
  globals: {
    react: 'React'
  },
  external: ['react'],
  globals: {
    react: 'react'
  },
  plugins: [
    copy({ 'src/masks/internal-dependencies': 'dist/internal-dependencies' }),
    resolve({ jsnext: true }),
    babel(),
    ts()
  ]
}
