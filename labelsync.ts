import { commonLabels, note, repos, scope, theme, type } from './prisma-labs-labelsync/lib/core'

//prettier-ignore
export default repos([
  {
    name: 'nexus-future',
    destroyUnknownLabels: false,
    labels: [
      ...commonLabels,
      type('design', theme.shiny, ''),
      type('epic', theme.social, ''),
      note('regression', ''),
      scope('app',       ''),
      scope('cli/create', ''),
      scope('cli/dev', ''),
      scope('cli', ''),
      scope('builder', ''),
      scope('autocomplete', ''),
      scope('db-workflow', ''),
      scope('core', ''),
      scope('core', ''),
      scope('deps', ''),
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
      scope('deployment', ''),
      scope('settings', ''),
      scope('testing', ''),
      scope('docs/recipe', ''),
      scope('docs/inline', ''),
      { name: 'plugin/prisma', color: '#eee' },
    ]
  },
])
