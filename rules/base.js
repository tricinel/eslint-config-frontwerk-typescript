module.exports = {
  rules: {
    // Require that member overloads be consecutive
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
    '@typescript-eslint/adjacent-overload-signatures': 'error',

    // Always use T[] or readonly T[] for all array types, instead of Array<T> or ReadonlyArray<T>
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    '@typescript-eslint/array-type': ['error', { default: 'array' }],

    // Warn against the use of @ts-<directive> comments
    // Currently supports: @ts-expect-error, @ts-ignore, @ts-nocheck, @ts-check
    // The @ts-check directive is allowed
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    '@typescript-eslint/ban-ts-comment': 'warn',

    // Warn against the use of // @ts-ignore comments
    /* eslint-disable @typescript-eslint/naming-convention */
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: 'Avoid using the `Object` type. Did you mean `object`?',
          Function:
            'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          Boolean: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          Number: 'Avoid using the `Number` type. Did you mean `number`?',
          String: 'Avoid using the `String` type. Did you mean `string`?',
          Symbol: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
        }
      }
    ],
    /* eslint-enable @typescript-eslint/naming-convention */

    // Enforce the one true brace style (1tbs)
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',
    '@typescript-eslint/brace-style': ['error', '1tbs'],

    // Prefer that literals exposed by classes are done using the readonly fields and not getters
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],

    // Require a space after a comma and not before it, in variable declarations, array/object literals, function parameters, etc.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    '@typescript-eslint/comma-spacing': [
      'error',
      { before: false, after: true }
    ],

    // Enforce consistent use of assertion styles using "const x = { ... } as T;" for example
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      { assertionStyle: 'as' }
    ],

    // Enforce using "interface" instead of "type" for object type definitions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

    // Enforce default parameters to be the last parameters in the function definition
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',

    // Disallow whitespace between the function's name and the parentheses that invoke it
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],

    // Allow developers to name their generic types as they see fit
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/generic-type-naming.md
    '@typescript-eslint/generic-type-naming': 'off',

    // Set a specific tab width
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],

    // Allow developers to name their interfaces as they see fit, no prefix style enforced
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
    '@typescript-eslint/interface-name-prefix': 'off',

    // Enforce the semicolon style for separating members in interfaces and type literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    '@typescript-eslint/member-delimiter-style': 'error',

    // Allow developers to name their properties however they want, without enforcing specific prefixes for each visibility level (public, private, protected)
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-naming.md
    '@typescript-eslint/member-naming': 'off',

    // Group and order fields, constructors and methods in a class declaration
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
    '@typescript-eslint/member-ordering': [
      'error',
      { default: ['field', 'constructor', 'method'] }
    ],

    // Enforce using property signature for functions instead of method signature
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
    '@typescript-eslint/method-signature-style': ['error', 'property'],

    // Enforce a particular naming convention for everything across your codebase
    // Follow ESLint's guidelines
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },

      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE']
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },

      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      },

      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ],

    // Disallow Array constructors
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // Requires that .toString() is only called on objects which provide useful information when stringified
    // This will help you avoid [object Object] in your strings
    // '' + {}; // -> incorrect
    // 'Text' + true; // -> correct
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
    '@typescript-eslint/no-base-to-string': 'error',

    // Disallow duplicate class members
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    // Disallow deleting computed keys from objects
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
    '@typescript-eslint/no-dynamic-delete': 'error',

    // Disallow empty functions, it should at least have a comment
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': [
      'error',
      { allow: ['arrowFunctions'] }
    ],

    // Disallow empty interfaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    '@typescript-eslint/no-empty-interface': 'error',

    // Warn against using any explicitly
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    '@typescript-eslint/no-explicit-any': 'warn',

    // Disallow extra non-null assertion
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Disallow unnecessary parentheses
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'multi-line',
        enforceForArrowConditionals: false
      }
    ],

    // Disallow unnecessary semicolons
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    // Disallow a class used as a namespace
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    '@typescript-eslint/no-extraneous-class': 'error',

    // Disallow the use of eval()-like methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    '@typescript-eslint/no-implied-eval': 'error',

    // Disallow explicit types where they can be easily inferred
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    '@typescript-eslint/no-inferrable-types': 'error',

    // "Magic numbers" are numbers that occur multiple times in code without an explicit meaning
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'off',
      {
        ignore: [1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreEnums: true
      }
    ],

    // Disallow attempts to define constructors for interfaces or new for classes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
    '@typescript-eslint/no-misused-new': 'error',

    // Disallow using modules and namespaces without declare or inside a definition file
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
    '@typescript-eslint/no-namespace': [
      'error',
      { allowDeclarations: true, allowDefinitionFiles: true }
    ],

    // Disallow using a non-null assertion after an optional chain expression
    // Requires TypeScript 3.7 or greater
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallow non-null assertions using the ! postfix operator
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    '@typescript-eslint/no-non-null-assertion': 'error',

    // Allow the use of parameter properties in class constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
    '@typescript-eslint/no-parameter-properties': 'off',

    // Disallow invocation of require() and prefer import instead
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow assigning variables to "this" and prefer arrow functions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    '@typescript-eslint/no-this-alias': ['error', { allowDestructuring: true }],

    // Restrict what can be thrown as an exception to Error objects or extended Error objects
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    '@typescript-eslint/no-throw-literal': 'error',

    // Disallow the use of type aliases in favor of interfaces and simplified types
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
    '@typescript-eslint/no-type-alias': [
      'error',
      {
        allowTupleTypes: 'always',
        allowMappedTypes: 'always',
        allowAliases: 'in-unions-and-intersections',
        allowCallbacks: 'always'
      }
    ],

    // Disallow unnecessary equality comparisons against boolean literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

    // Disallow an unused expression which has no effect on the state of the program
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true, // For example a && b()
        allowTernary: true, // For example  a ? b() : c(),
        allowTaggedTemplates: true // For example  tag`some string`
      }
    ],

    // Disallow the use of variables that are declared and not used anywhere in the code
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_'
      }
    ],

    // Disallow the use of variables before they are defined
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true }
    ],

    // Disallow class constructors that can be safely removed without changing how the class works
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    // Disallow the use of require statements except in import statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    '@typescript-eslint/no-var-requires': 'error',

    // Prefer usage of as const over literal type
    // Enable this if you're using TypeScript < 3.4
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
    '@typescript-eslint/prefer-as-const': 'off',

    // Require using for-of loops instead of the standard for loops over arrays
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
    '@typescript-eslint/prefer-for-of': 'error',

    // Warn when using an interface or object type literal with a single call signature instead of a function type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
    '@typescript-eslint/prefer-function-type': 'warn',

    // Require using "namespace" instead of "module" to declare custom Typescript modules
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Enforce the usage of the nullish operator as opposed to checking for relying upon logical OR operator chaining
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
    '@typescript-eslint/prefer-nullish-coalescing': 'error',

    // Prefer using concise optional chain expressions instead of chained logical ands
    // Disable this if not using TypeScript 3.7+
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
    '@typescript-eslint/prefer-optional-chain': 'error',

    // Prefer that function parameters are typed as readonly to prevent accidental mutation of inputs
    // We should leave this to the developer to decide
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',

    // Enforce template literal expressions to be of string type (allow numbers)
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      { allowNumber: true }
    ],

    // Disallow returning await; e.g. return await foo();
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',

    // Enforce single quotes where needed
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],

    // Require semicolons at the end of statements
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],

    // Disallow a space before the function opening parenthesis, except for async functions
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],

    // Require that any boolean expression is limited to true booleans rather than casting another primitive to a boolean at runtime
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'always', types: 'prefer-import', lib: 'always' }
    ],

    // Require a space after the colon in type annotations and no spaces before it
    // Require a space before and after the =>
    // e.g. let foo: string; // ok
    // e.g. let foo : string; let bar :string; let baz:string; // not ok
    // e.g. let foo: () => string; // ok
    // e.g. let foo: ()=> string; let bar: () =>string; let baz: ()=>string; // not ok
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          colon: {
            before: false
          }
        }
      }
    ],

    // Don't require type annotations to exist, let's leave this to the compiler
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
    '@typescript-eslint/typedef': 'off',

    // Warn if any two overloads could be unified into one by using a union or an optional/rest parameter
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
    '@typescript-eslint/unified-signatures': 'warn',

    // Bans // tslint:<rule-flag> comments from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
    '@typescript-eslint/ban-tslint-comment': 'error',

    // Bans trailing comma
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
    '@typescript-eslint/comma-dangle': ['error'],

    // Require using the built-in type Record to create an empty object defining only an index signature
    // e.g. `type Foo = { [key: string]: number }` is equivalent to `type Foo = Record<string, number>`
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

    // Enforces consistent usage of type imports
    // e.g. `type Foo = { [key: string]: number }` is equivalent to `type Foo = Record<string, number>`
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ],

    // Variables don't need to be initialised at definition
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    '@typescript-eslint/init-declarations': ['off'],

    // Enforce consistent spacing around keywords and keyword-like tokens
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    '@typescript-eslint/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],

    // Always require an empty line between class members
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    '@typescript-eslint/lines-between-class-members': ['error', 'always'],

    // Disallow non-null assertion in locations that may be confusing
    // e.g. `a! == b` or `a! === b`
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',

    // Require that all imports from a single module exists in a single import statement
    // This is disabled because it's handled with eslint-plugin-import (https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
    '@typescript-eslint/no-duplicate-imports': 'off',

    // Disallow the usage of this keywords outside of classes or class-like objects
    // This rule applies only in strict mode
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    '@typescript-eslint/no-invalid-this': 'error',

    // Disallows usage of void type outside of generic or return types
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
    '@typescript-eslint/no-invalid-void-type': 'off',

    // Disallow writing functions within loops
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    '@typescript-eslint/no-loop-func': 'error',

    // Disallow the use of number literals that immediately lose precision at runtime when converted to a JS Number due to 64-bit floating-point rounding
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    '@typescript-eslint/no-loss-of-precision': 'error',

    // Disallow variables that have multiple declarations in the same scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    '@typescript-eslint/no-redeclare': 'error',

    // Eliminate shadowed variable declarations
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    '@typescript-eslint/no-shadow': [
      'error',
      {
        builtinGlobals: true,
        ignoreTypeValueShadow: true,
        ignoreFunctionTypeParameterNameValueShadow: true
      }
    ],

    // Prefer using @ts-expect-error over @ts-ignore
    // Added in TypeScript 3.9
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
    '@typescript-eslint/prefer-ts-expect-error': 'warn',

    // Require spaces around infix operators
    // foo+bar //not ok
    // foo + bar //ok
    // var foo = bar|0 // also ok
    // Overrides the ESLint rule
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
    '@typescript-eslint/space-infix-ops': ['error', { int32Hint: true }]
  }
};
