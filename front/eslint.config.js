import reactApp from 'eslint-config-react-app'

export default {
  extends: [reactApp, '../.eslintrc.yml'],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['vite.config.ts'],
      parserOptions: {
        project: './tsconfig.node.json',
      },
    },
  ],
}
