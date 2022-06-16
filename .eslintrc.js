const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-undef': 'off',
    'no-extra-boolean-cast': 'error', // 禁止隐式类型转换
    'no-inner-declarations': 'error', // 禁止在代码内部进行函数声明
    'use-isnan': 'error', // 判断NaN一定要用 isNaN 方法
    'eqeqeq': 'error', // 禁止出现 ==、=!会带来隐式的类型转换
    'no-caller': 'error', // 禁止使用 arguments.caller 或者 arguments.callee
    'no-extend-native': 'error', // 禁止扩展原生对象原型
    'no-sequences': 'error', // 禁止使用逗号运算符
    'no-with': 'error', // 禁止使用 with 语句
    'no-sparse-arrays': 'error', // 禁止稀疏数组
    'no-extra-bind': 'error', // 禁止使用 bind
    'no-useless-call': 'error', // 禁止使用 Function.prototype.call()
    'yoda': 'error', // 禁用 yada 表达式
    'no-delete-var': 'error', // 禁用 delete 操作符
    // 'no-undef': 'error', // 禁用未声明的变量
    'spaced-comment': 'error', // 强制在注释中石油一致的空格
    'no-var': 'error', // 禁止使用 var
  }
})
