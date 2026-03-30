/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': ['jest-preset-angular', {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
    }],
  },
  transformIgnorePatterns: [
    // 讓 Angular、rxjs 和相關套件也能被 jest-preset-angular 轉譯
    'node_modules/(?!(@angular|@ngx-translate|rxjs|cub-lib-view-rootng|cub-lib-view-iconfont|cub-lib-view-utilities|primeng|@primeuix|@angular-architects)/)',
  ],
  moduleNameMapper: {
    // 忽略樣式檔匯入
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    // 設定路徑別名，對應 tsconfig.json 中的 paths
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^env/(.*)$': '<rootDir>/src/environments/$1',
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/out-tsc/',
    '/.angular/',
    '/src/test.ts'
  ],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs', 'jsx'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/**/*.spec.new.ts',
    '!src/main.ts',
    '!src/polyfills.ts',
    '!src/test.ts',
    '!src/bootstrap.ts',
    '!src/environments/*.ts',
    '!src/assets/**/*.ts',
    '!src/typings.d.ts',
  ],
  coverageDirectory: './coverage',
  coverageReporters: [
    'text',
    'text-summary',
    'html',
    'lcov',
    'clover',
    'json',
    'json-summary'
  ],
  coverageThreshold: {
    global: {
      statements: 85,
      branches: 85,
      functions: 85,
      lines: 85,
    },
  },
  maxWorkers: 1,
  testTimeout: 30000,
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
