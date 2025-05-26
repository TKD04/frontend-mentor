import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import stylisticPlugin from "@stylistic/eslint-plugin";
import prettierConfig from "eslint-config-prettier";
import jsdocPlugin from "eslint-plugin-jsdoc";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import reactPlugin from "eslint-plugin-react";
import reactCompilerPlugin from "eslint-plugin-react-compiler";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import regexpPlugin from "eslint-plugin-regexp";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unicornPlugin from "eslint-plugin-unicorn";
import vitestPlugin from "eslint-plugin-vitest";
import globals from "globals";
import tseslint from "typescript-eslint";

// https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config
const compat = new FlatCompat({
  allConfig: eslint.configs.all,
  baseDirectory: import.meta.dirname,
  recommendedConfig: eslint.configs.recommended,
});
// Replace the deprecated "@typescript-eslint@^7" rules with the latest ones in "eslint-config-airbnb-typescript"
// https://gist.github.com/xfournet/ed9f2f02e411b86188bad4aeb9b1bddb
const legacyRulesToLatestOnes = new Map([
  [
    "@typescript-eslint/no-throw-literal",
    "@typescript-eslint/only-throw-error",
  ],
  ...[
    "brace-style",
    "comma-dangle",
    "comma-spacing",
    "func-call-spacing",
    "indent",
    "keyword-spacing",
    "lines-between-class-members",
    "no-extra-semi",
    "space-before-blocks",
    "quotes",
    "semi",
    "space-before-function-paren",
    "space-infix-ops",
    "object-curly-spacing",
  ].map((rule) => [`@typescript-eslint/${rule}`, `@stylistic/${rule}`]),
]);
const fixupDeprecatedTsEslintRules = (configs) =>
  configs.map((config) => {
    const copiedConfig = config;
    const hasRules = copiedConfig.rules !== undefined;

    delete copiedConfig.plugins;
    delete copiedConfig.parser;
    if (hasRules) {
      for (const [
        legacyRule,
        latestRule,
      ] of legacyRulesToLatestOnes.entries()) {
        const hasLegacyRule = copiedConfig.rules[legacyRule] !== undefined;
        const hasLatestRule = copiedConfig.rules[latestRule] !== undefined;

        if (hasLegacyRule) {
          const ruleValue = copiedConfig.rules[legacyRule];

          // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
          delete copiedConfig.rules[legacyRule];
          if (!hasLatestRule) {
            copiedConfig.rules[latestRule] = ruleValue;
          }
        }
      }
    }

    return copiedConfig;
  });
const config = tseslint.config(
  {
    // https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
    ignores: ["dist/", "docs/", ".next/", "out/", "public/", "coverage/"],
  },
  {
    extends: [
      compat.extends("airbnb"),
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      fixupDeprecatedTsEslintRules(compat.extends("airbnb-typescript")),
      unicornPlugin.configs.all,
      regexpPlugin.configs["flat/all"],
      perfectionistPlugin.configs["recommended-natural"],
      prettierConfig,
    ],
    files: [
      "{app,components,features}/**/*.{ts,tsx}",
      "{constants,hooks,lib}/**/*.ts",
      "*.{js,mjs,cjs,ts}",
    ],
    ignores: ["next-env.d.ts"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    name: "base",
    plugins: {
      "@next/next": nextPlugin,
      "@stylistic": stylisticPlugin,
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      // https://github.com/vercel/next.js/discussions/49337#discussioncomment-5998603
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // https://johnnyreilly.com/typescript-5-importsnotusedasvalues-error-eslint-consistent-type-imports
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/no-absolute-path": "off",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "{app,components,features}/**/*.test.{ts,tsx}",
            "{constants,hooks,lib}/**/*.test.ts",
            "*.config.{js,mjs,cjs,ts}",
            "gulpfile.{js,mjs,cjs}",
          ],
        },
      ],
      // Remove "ForOfStatement" from eslint-config-airnbnb to avoid conflict with "unicorn/no-array-for-each"
      // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v56.0.1/docs/rules/no-array-for-each.md
      // https://github.com/airbnb/javascript/issues/1271
      "no-restricted-syntax": [
        "error",
        {
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
          selector: "ForInStatement",
        },
        {
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
          selector: "LabeledStatement",
        },
        {
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
          selector: "WithStatement",
        },
      ],
      // Disable perfectionist/sort-imports to avoid conflicts with eslint-plugin-simple-import-sort
      "perfectionist/sort-imports": "off",
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
    },
    settings: {
      // Merge "node" in eslint-config-airbnb-typescript and "typescript"
      "import/resolver": {
        node: {
          extensions: [".mjs", ".js", ".json", ".ts", ".d.ts"],
        },
        typescript: true,
      },
    },
  },
  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ["*.{js,mjs,cjs}"],
    name: "js",
  },
  {
    extends: [jsdocPlugin.configs["flat/recommended-typescript-error"]],
    files: [
      "{app,components,features}/**/*.ts",
      "{constants,hooks,lib}/**/*.ts",
    ],
    name: "jsdoc",
    plugins: {
      jsdoc: jsdocPlugin,
    },
  },
  {
    extends: [
      compat.extends("airbnb/hooks"),
      reactPlugin.configs.flat["jsx-runtime"],
      reactCompilerPlugin.configs.recommended,
    ],
    files: ["{app,components,features}/**/*.{ts,tsx}"],
    name: "react",
    plugins: {
      "react-refresh": reactRefreshPlugin,
    },
    rules: {
      // https://gist.github.com/jeremy-code/548a9ffda0aba85523251c061a9feb30
      "react-refresh/only-export-components": [
        "error",
        {
          allowExportNames: [
            /**
             * Route segment config exports. Will be disabled if `dynamicIO` is
             * enabled in `next.config.js`.
             * @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config}
             */
            "experimental_ppr",
            "dynamic",
            "dynamicParams",
            "revalidate",
            "fetchCache",
            "runtime",
            "preferredRegion",
            "maxDuration",
            /**
             * @see {@link https://nextjs.org/docs/app/api-reference/functions/generate-image-metadata}
             */
            "generateImageMetadata",
            /**
             * @see {@link https://nextjs.org/docs/app/api-reference/functions/generate-static-params}
             */
            "generateStaticParams",
            /**
             * @see {@link https://nextjs.org/docs/app/api-reference/functions/generate-metadata#the-metadata-object}
             */
            "metadata",
            /**
             * @see {@link https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function}
             */
            "generateMetadata",
            /**
             * @see {@link https://nextjs.org/docs/app/api-reference/functions/generate-viewport#the-viewport-object}
             */
            "viewport",
            /**
             * @see {@link https://nextjs.org/docs/app/api-reference/functions/generate-viewport#generateviewport-function}
             */
            "generateViewport",
            /**
             * Image Metadata
             * @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#config-exports}
             * @see {@link https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#config-exports}
             */
            "size",
            "contentType",
            "alt",
          ],
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    extends: [vitestPlugin.configs.all],
    files: [
      "{app,components,features}/**/*.test.{ts,tsx}",
      "{constants,hooks,lib}/**/*.test.ts",
    ],
    name: "test",
    settings: {
      vitest: {
        typecheck: true,
      },
    },
  }
);

export default config;
