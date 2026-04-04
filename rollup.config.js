import json from '@rollup/plugin-json';

export default {
  input: 'src/app.js',
  output: {
    file: 'public/bundle.js',
    format: 'cjs',
  },
  plugins: [json()],
};
