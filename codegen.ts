import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'packages/gql-schema/src/schema.graphql',
  generates: {
    'packages/gql-schema/src/generated/schema-types.ts': {
      plugins: ['typescript'],
      config: {
        enumsAsTypes: true
      }
    },
    'services/api/src/generated/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '../context#GraphQLContext',
        enumsAsTypes: true,
      }
    },
    'apps/web/src/gql/': {
      preset: 'client',
      documents: ['apps/web/src/**/*.{graphql,gql}'],
      presetConfig: {
        fragmentMasking: false,
      }
    },
    'apps/admin/src/gql/': {
      preset: 'client',
      documents: ['apps/admin/src/**/*.{graphql,gql}'],
      presetConfig: {
        fragmentMasking: false,
      }
    }
  },
  ignoreNoDocuments: true
};

export default config;
