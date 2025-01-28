module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['RSB-'],
      headerPattern: /^(RSB-\d+) (\w+): (.+)$/,
      headerCorrespondence: ['ticket', 'type', 'subject'],
      noteKeywords: [
        'BREAKING CHANGE', // default
        'BREAKING-CHANGE', // default
        '\\[.+\\]:', // fix for links
        'links:', // fix for links
      ],
    },
  },
  rules: {
    'references-empty': [1, 'never'],
    'header-max-length': [2, 'always', 72],
    'footer-max-line-length': [1, 'always', 100],
  },
};
