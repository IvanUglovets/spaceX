
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacex-production.up.railway.app/",
  documents: "src/gql/*.gql",
  generates: {
    "src/__generated__/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"]
    }
  },
  config: {
    constEnums: true,
    immutableTypes: true
  }
};

export default config;
