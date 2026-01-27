export default {
  extends: ['stylelint-config-standard'],
  rules: {
    // Updated rules for Stylelint v16+
    'color-no-invalid-hex': true,
    'selector-class-pattern': null, // Allows any class naming pattern
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['Anek Devanagari'],
      },
    ],
  },
  ignoreFiles: ['node_modules/**/*', 'dist/**/*'],
};
