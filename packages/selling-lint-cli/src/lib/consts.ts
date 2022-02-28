export const cwd = process.cwd()

export const targetFile = 'private'

export const eslintPackageName = 'eslint-config-selling'

export const commitlintPackageName = '@mirror/commitlint-config-selling'

export const stylelintPackageName = 'stylelint-config-selling'

export const packageMap = {
  folderName: {
    'eslint-config-selling': 'eslint-config-selling',
    '@mirror/commitlint-config-selling': 'commitlint-config-selling',
    'stylelint-config-selling': 'stylelint-config-selling'
  },
  lintType: {
    'eslint-config-selling': 'eslint',
    '@mirror/commitlint-config-selling': 'commitlint',
    'stylelint-config-selling': 'stylelint'
  },
  depsName: {
    'eslint-config-selling': 'eslintDeps',
    '@mirror/commitlint-config-selling': 'commitlintDeps',
    'stylelint-config-selling': 'stylelintDeps'
  }
}

export const safeDependencies = ['eslint', 'commitlint', 'stylelint']

export const VERSION_ENUM = {
  UNINSTALLED: Symbol(),
  NEW: Symbol(),
  OLD: Symbol()
}