import { note, repos, scope, theme, type } from './prisma-labs-labelsync/lib/core'

//prettier-ignore
export default repos([
  {
    name: 'nexus',
    destroyUnknownLabels: false,
    labels: [
      type('design', theme.shiny, ''),
      type('epic', theme.social, ''),
      note('regression', ''),
      scope('app',       ''),
      scope('cli/dev', ''),
      scope('cli', ''),
      scope('builder', ''),
      scope('autocomplete', ''),
      scope('db-workflow', ''),
      scope('core', ''),
      scope('dev-mode', ''),
      scope('doctor', ''),
      scope('generate', ''),
      scope('layout', ''),
      scope('logger', ''),
      scope('plugins', ''),
      scope('schema-context', ''),
      scope('schema', 'Related to the @nexus/schema component or its usage in framework'),
      scope('schema/backing-types'),
      scope('server', ''),
      scope('vscode', 'Related to integration with VSCode'),
      scope('deployment', ''),
      scope('settings', ''),
      scope('testing', ''),
      scope('docs/recipe', ''),
      scope('auth', 'Related to authentication or authorization'),
      scope('tsconfig', 'Related to interop with tsconfig settings/files'),
      scope('docs/inline', ''),
      scope('docs/examples', 'Related to the examples repo'),
      scope('scaffolding', '', { alias: ['scope/cli/create'] }),
      { name: 'plugin/prisma', color: '#eee' },
      { name: 'platform/windows', color: '#eee' },
      { name: 'platform/macos', color: '#eee' },
      { name: 'platform/linux', color: '#eee' },
    ]
  },
  {
    name: 'nexus-schema-plugin-prisma',
    destroyUnknownLabels: false,
    labels: [
      type('epic',            theme.social,   ''),
      type('meta',            theme.neutral,  ''),
      note('prisma1',                         'specific to the version of nexus-prisma based on Prisma 1'),
      scope('architecture'),
      scope('auth',                           'Relates to Prisma crud/model auth'),
      scope('config'),
      scope('crud'),
      scope('distributed-data'),
      scope('mapping'),
      scope('projecting',                     'Exposing Prisma Models in the GQL API'),
      scope('resolving',                      'Relates to implementing resolvers'),
      scope('runtime-validation'),
      scope('schema'),
      scope('synchronized-projectors'),
      scope('typegen',                        'Relates to typegen/codegen systems'),
      scope('workflow'),
    ]
  },
  {
    name: "schema",
    destroyUnknownLabels: false,
    labels: []
  }
])
