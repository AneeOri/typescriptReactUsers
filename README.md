# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

the objetive of this technical test is to create a similar application to the one provided in this link: https://xxxx, to achieve this, you must use the API provided by
https://rendomuser.me/.

Here are the steps to follow:

-fetch 100 rows fo data using te API
-display the data in a table format, similar to the example
-provde the option to color rows sa shown in the example
-allow the data to be stored by country as demonstrated in the example
-enable the ability to delete a row as shown in the example
-implement a feature that allows the user to restore the initial state, meaning that all deleted rows will be recovered
-handle any potential errors that may occur
-implement a feature that allows the user is changing filter by country
-sort by clicking on the column header
-provide a readme.md file with the instructions on how to run the application.
