
module.exports = {
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFiles: ["./src/setupTests.js"],
    clearMocks: true,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "jest-transform-stub"
    },
    coverageDirectory: "coverage",
    moduleFileExtensions: ["js", "json", "jsx", "mp4"],
    testMatch: ["**/tests/**/*.js?(x)", "**/?(*.)+(test).js?(x)"],
    testPathIgnorePatterns: ["\\\\node_modules\\\\"],
    transform: {
      "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
    },
    watchPlugins: [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname"
    ]
  };
  