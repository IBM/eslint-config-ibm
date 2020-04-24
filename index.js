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
    'for-direction': 'off',
    /**
     * Stylistic Issues
     * https://eslint.org/docs/rules/#stylistic-issues
     */
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
  },
};
