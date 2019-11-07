exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost',
      browser: 'chrome',
      restart: false,
      smartWait: 12000,
    }
  },
  include: {
    I: 'customStep.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'marketcube-demo',

  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/login/loginSteps.js',
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
  },
}