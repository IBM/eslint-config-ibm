'use strict';

module.exports = {
  /**
   * All rules as listed in the ESLint rules page:
   * https://eslint.org/docs/rules/.
   */
  rules: {
    /**
     * Possible Errors
     * https://eslint.org/docs/rules/#possible-errors
     */
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'off',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'require-atomic-updates': 'warn',
    'use-isnan': 'error',
    'valid-typeof': ['error', { requireStringLiterals: true }],
    /**
     * Best Practices
     * https://eslint.org/docs/rules/#best-practices
     */
    'accessor-pairs': 'warn',
    'array-callback-return': 'warn',
    'block-scoped-var': 'off',
    'class-methods-use-this': 'off',
    'complexity': ['warn', { max: 20 }],
    'consistent-return': 'warn',
    'curly': ['error', 'multi-line', 'consistent'],
    'default-case': 'warn',
    'default-param-last': 'error',
    'dot-location': ['error', 'property'],
    /**
     * Strict Mode
     * https://eslint.org/docs/rules/#strict-mode
     */
    'strict': 'off',
    /**
     * Variables
     * https://eslint.org/docs/rules/#variables
     */
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'warn',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'off',
    'no-undefined': 'off',
    'no-unused-vars': 'error',
    'no-use-before-define': 'warn',
    /**
     * Stylistic Issues
     * https://eslint.org/docs/rules/#stylistic-issues
     */
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': ['error', 'never'],
    'brace-style': 'error',
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
  },
};
