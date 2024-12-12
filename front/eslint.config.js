export const eslintConfig = ['../eslint.config.js', 'react-app']
export const parserOptions = {
  project: './tsconfig.json',
}
export const overrides = [
  {
    files: ['vite.config.ts'],
    parserOptions: {
      project: './tsconfig.node.json',
    },
  },
]
export const rules = {
  'no-console': [
    'error',
    {
      allow: ['info', 'error', 'warn'],
    },
  ],
  '@typescript-eslint/no-restricted-imports': [
    'error',
    {
      patterns: [
        {
          group: ['@webapp/backend/**', '!@webapp/backend/**/', '!@webapp/backend/**/input'],
          allowTypeImports: true,
          message: 'Only types and input schemas are allowed to be imported from backend workspace',
        },
      ],
    },
  ],
}
