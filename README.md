# eslint-config-ibm
ESLint configuration for the IBM coding style.

[![NPM version](https://img.shields.io/npm/v/eslint-config-ibm.svg)](https://www.npmjs.com/package/eslint-config-ibm)
[![Downloads](https://img.shields.io/npm/dm/eslint-config-ibm.svg)](https://www.npmjs.com/package/eslint-config-ibm)

## ESLint version support

The following table shows the ESLint versions supported by the various versions of this package:

| ESLint version | eslint-config-ibm |
| -------------- | ----------------- |
| 6.8            | 1.4 - 1.8         |

## Installation

```bash
$ npm install eslint eslint-config-ibm --save-dev
```

## Usage

Add `ibm` to the `extends` section in your ESLint configuration file:

```javascript
{
  'extends': 'ibm',
}
```

For more information, please refer to the _Extending Configuration Files_ section in the ESLint documentation page: https://eslint.org/docs/user-guide/configuring#extending-configuration-files
