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
    'camelcase': 'error',
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'consistent-this': 'off',
    'eol-last': 'warn',
    'func-call-spacing': 'error',
    'func-name-matching': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off',
    'indent': ['error', 2],
    'jsx-quotes': 'error',
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'off',
    'linebreak-style': 'error',
    'lines-around-comment': 'error',
    'lines-between-class-members': 'error',
    'max-depth': 'off',
    'max-len': ['error', {
      code: 80,
      tabWidth: 2,
      ignoreUrls: true,
    }],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'error',
    'multiline-ternary': ['error, always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'no-array-constructor': 'error',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': ['error', {max: 2}],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'off',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': ['error', {  consistent: true }],
    'object-curly-spacing': ["error", "never"],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
  },
};
