# eslint-config-frontwerk-typescript

![Node Version][node-version-badge] ![Npm version][npm-version-badge]
[![Npm downloads][npm-downloads-badge]][npm-downloads-badge] ![License][license-badge]

This package provides [Frontwerk][frontwerkorg]'s TypeScript .eslintrc as an extensible shared [ESLint][eslint] config.

## Usage

1. Install the versions of the package, including its `peerDependencies`:

```sh
npm install --dev eslint-config-frontwerk-typescript @typescript-eslint/{eslint-plugin,parser} eslint eslint-plugin-import typescript
```

Or with **yarn**:

```sh
yarn add --dev eslint-config-frontwerk-typescript @typescript-eslint/{eslint-plugin,parser} eslint eslint-plugin-import typescript
```

2. Extend your desired config file in your `.eslintrc`. We expose two configurations:

> Semantic rules use the TypeScript compiler to inspect static types and validate code patterns. These rules require that a valid tsconfig.json file be present and referenced in your `parserOptions`'s `project` inside of your `.eslintrc`. When using the recommended (default) config, be sure to pass a `tsconfig.json` in your `.eslintrc`.

- The recommended (default) config that includes the TypeScript rules that require type checking. Add `"extends": "frontwerk-typescript"` to your `.eslintrc`.

> ```
> {
>   "extends": "frontwerk-typescript",
>   "parserOptions": {
>      "project": "./tsconfig.json"
>    },
> }
> ```

- A config without the TypeScript rules that require type checking. Add `"extends": "frontwerk-typescript/no-type-checking"` to your `.eslintrc`.

## Related

- `eslint-config-frontwerk-typescript` is based on the ESLint rules defined in [eslint-config-frontwerk][eslint-config-frontwerk].
- If you're using [ReactJS][reactjs], check out [eslint-config-frontwerk-react][eslint-config-frontwerk-react].

## Contributing

- Run tests with `npm run test` or `yarn test`.
- Run the lint with `npm run lint` or `yarn lint`.

For details, check out the [Contributing][contributing] guide.

# LICENSE

MIT

[eslint]: https://eslint.org/
[typescript]: https://www.typescriptlang.org/
[frontwerkorg]: https://frontwerk.org
[license]: https://github.com/tricinel/eslint-config-frontwerk-typescript/blob/master/LICENSE
[node-version-badge]: https://img.shields.io/node/v/eslint-config-frontwerk-typescript.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/eslint-config-frontwerk-typescript.svg?style=flat-square
[npm-version-badge]: https://img.shields.io/npm/v/eslint-config-frontwerk-typescript.svg?style=flat-square
[npm-downloads-badge]: https://img.shields.io/npm/dt/eslint-config-frontwerk-typescript.svg?style=flat-square
[contributing]: ./Contributing.md
[eslint-config-frontwerk]: https://github.com/tricinel/eslint-config-frontwerk
[reactjs]: https://reactjs.org/
[eslint-config-frontwerk-react]: https://github.com/tricinel/eslint-config-frontwerk-react
