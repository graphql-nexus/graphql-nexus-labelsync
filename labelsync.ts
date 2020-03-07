import { commonLabels, note, repos, scope, type } from './prisma-labs-labelsync/lib/core'

//prettier-ignore
export default repos([
  {
    name: 'nexus-future',
    destroyUnknownLabels: false,
    labels: [
      ...commonLabels,
      type('design', '#FFCF2D', ''),
      type('epic', '#FFCF2D', ''),
      type('epic', '#FFCF2D', ''),
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
      scope('server', ''),
      scope('settings', ''),
      scope('testing', ''),
      scope('docs/recipe', ''),
      scope('docs/inline', '')
    ]
  },
])
