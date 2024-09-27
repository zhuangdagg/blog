import type { CodegenConfig } from '@graphql-codegen/cli'

export default <CodegenConfig> {
    schema: {
        'http://localhost:8000/graphql': {
            headers: {
                authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InpodWFuZyIsInB3ZCI6IjY2NiIsImlhdCI6MTcyNzM1OTIzMn0.Ql8adWrp6anRm7mvaEaqR-n_O9Z0PrTlPZiQ9li5LAk`
            },
        }
    },
    documents: ['api/**/*.ts', '**/*.vue'],
    generates: {
        './api/graphql-codegen/': {
            preset: 'client'
        }
    }
}