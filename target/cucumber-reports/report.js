$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Calculate borrow",
  "description": "",
  "id": "calculate-borrow",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "calcualting borrow for single user",
  "description": "",
  "id": "calculate-borrow;calcualting-borrow-for-single-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user launches application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on single",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "select \"1\" dependants",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "clicks on busying a home to live in",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "with income of \"80000\" dollars",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Other incomes \"10000\" dollars",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Living expenses \"500\" dollars",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "other expenses \"0\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Other Loan Repayments \"100\" doallars",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Other commitments \"0\" dollars",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "credit card limit \"10000\" dollars",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "he click on calculate borrow",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "amount should be \"479000\" dollars",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculateBorrowStep.userlaunchesapplication()"
});
formatter.result({
  "duration": 4794436500,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class Steps.CalculateBorrowStep\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:40)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:26)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:34)\r\n\t... 33 more\r\nCaused by: org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d103.0.5060.114)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-9SVALQ7O\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.114, chrome: {chromedriverVersion: 103.0.5060.53 (a1711811edd7..., userDataDir: C:\\Users\\91778\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58715}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: df20521b221cc5deb1b3177638365e8c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat Base.BaseStep.\u003cinit\u003e(BaseStep.java:18)\r\n\tat Steps.CalculateBorrowStep.\u003cinit\u003e(CalculateBorrowStep.java:13)\r\n\t... 38 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculateBorrowStep.user_clicks_on_single()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 8
    }
  ],
  "location": "CalculateBorrowStep.select_dependants(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculateBorrowStep.clicks_on_busying_a_home_to_live_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "80000",
      "offset": 16
    }
  ],
  "location": "CalculateBorrowStep.with_income_of_dollars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 15
    }
  ],
  "location": "CalculateBorrowStep.other_incomes_dollars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 17
    }
  ],
  "location": "CalculateBorrowStep.living_expenses_dollars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 16
    }
  ],
  "location": "CalculateBorrowStep.other_expenses(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 23
    }
  ],
  "location": "CalculateBorrowStep.other_Loan_Repayments_doallars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 19
    }
  ],
  "location": "CalculateBorrowStep.other_commitments_dollars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 19
    }
  ],
  "location": "CalculateBorrowStep.credit_card_limit_dollars(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculateBorrowStep.he_click_on_calculate_borrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "479000",
      "offset": 18
    }
  ],
  "location": "CalculateBorrowStep.amount_should_be_dollars(String)"
});
formatter.result({
  "status": "skipped"
});
});