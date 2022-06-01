$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CriarNota.feature");
formatter.feature({
  "name": "Google keep",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@totalTest"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "criar uma nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@totalTest"
    },
    {
      "name": "@newNote"
    }
  ]
});
formatter.step({
  "name": "eu criar uma nova nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euCriarUmaNovaNota()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo title \"Nota 1\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euInformarNoCampoTitle(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu informar no campo note \"Esta nota � um teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euInformarNoCampoNote(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao voltar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOBotaoVoltar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o aplicativo cadastra a nota com o titulo \"Nota 1\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarNotaSteps.oAplicativoCadastraANotaComOTitulo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "interagir com switch das configuracoes",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@totalTest"
    },
    {
      "name": "@switch"
    }
  ]
});
formatter.step({
  "name": "eu acionar o menu",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarOMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar a aba settings",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarAAbaSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu tocar no switch",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euTocarNoSwitch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o switch fica desabilitado",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarNotaSteps.oSwitchFicaDesabilitado()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...rich link previews O[FF]\u003e but was:\u003c...rich link previews O[N]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepsDefinitions.CriarNotaSteps.oSwitchFicaDesabilitado(CriarNotaSteps.java:65)\r\n\tat ✽.o switch fica desabilitado(file:src/test/resources/features/CriarNota.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "excluir nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@totalTest"
    },
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "eu tocar e segurar a nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euTocarESegurarANota()"
});
formatter.result({
  "error_message": "org.openqa.selenium.json.JsonException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SRHMFS2\u0027, ip: \u002710.0.0.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:332)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat java.base/java.util.HashMap.forEach(HashMap.java:1425)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.base/java.lang.Iterable.forEach(Iterable.java:75)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat java.base/java.util.HashMap.forEach(HashMap.java:1425)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:330)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:647)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\tat pageObjects.TelaInicialPage.clickLongo(TelaInicialPage.java:95)\r\n\tat stepsDefinitions.CriarNotaSteps.euTocarESegurarANota(CriarNotaSteps.java:70)\r\n\tat ✽.eu tocar e segurar a nota(file:src/test/resources/features/CriarNota.feature:26)\r\n\tSuppressed: org.openqa.selenium.json.JsonException: Attempting to close incomplete json stream\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SRHMFS2\u0027, ip: \u002710.0.0.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\t\tat org.openqa.selenium.json.JsonOutput.close(JsonOutput.java:279)\r\n\t\tat org.openqa.selenium.json.Json.toJson(Json.java:44)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\t\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\t\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\t\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\t\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\t\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\t\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\t\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\t\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\t\tat pageObjects.TelaInicialPage.clickLongo(TelaInicialPage.java:95)\r\n\t\tat stepsDefinitions.CriarNotaSteps.euTocarESegurarANota(CriarNotaSteps.java:70)\r\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\t\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\t\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\t\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\t\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\t\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\t\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\t\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\t\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\t\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\t\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\t\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\t\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\t\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\t\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\t\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\t\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\t\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\t\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\t\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\t\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\t\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\t\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\t\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\t\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\t\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\t\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\t\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:768)\r\n\t\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\t\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:328)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat java.base/java.util.HashMap.forEach(HashMap.java:1425)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.base/java.lang.Iterable.forEach(Iterable.java:75)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat java.base/java.util.HashMap.forEach(HashMap.java:1425)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.convertUsingMethod(JsonOutput.java:330)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$16(JsonOutput.java:155)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$21(JsonOutput.java:168)\r\n\tat java.base/java.util.LinkedHashMap$LinkedValues.forEach(LinkedHashMap.java:647)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$22(JsonOutput.java:168)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$null$23(JsonOutput.java:177)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.forEach(SingletonImmutableBiMap.java:65)\r\n\tat org.openqa.selenium.json.JsonOutput.lambda$new$24(JsonOutput.java:176)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:264)\r\n\tat org.openqa.selenium.json.JsonOutput.write(JsonOutput.java:255)\r\n\tat org.openqa.selenium.json.Json.toJson(Json.java:42)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:227)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpCommandCodec.encode(AbstractHttpCommandCodec.java:117)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:152)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:639)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:595)\r\n\tat pageObjects.TelaInicialPage.clickLongo(TelaInicialPage.java:95)\r\n\tat stepsDefinitions.CriarNotaSteps.euTocarESegurarANota(CriarNotaSteps.java:70)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:768)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Can\u0027t locate an element by this strategy: By.chained({By.xpath: //android.widget.TextView[@text\u003d\u0027Nota 1\u0027]})\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:126)\r\n\tat io.appium.java_client.pagefactory.interceptors.InterceptorOfASingleElement.intercept(InterceptorOfASingleElement.java:59)\r\n\tat io.appium.java_client.android.AndroidElement$$EnhancerByCGLIB$$b598166c.toJson(\u003cgenerated\u003e)\r\n\t... 82 more\r\nCaused by: org.openqa.selenium.TimeoutException: Expected condition failed: waiting for io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction@5c645b43 (tried for 1 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:304)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.waitFor(AppiumElementLocator.java:99)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.findElement(AppiumElementLocator.java:119)\r\n\t... 84 more\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.chained({By.xpath: //android.widget.TextView[@text\u003d\u0027Nota 1\u0027]})\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SRHMFS2\u0027, ip: \u002710.0.0.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat io.appium.java_client.pagefactory.bys.builder.ByChained.findElement(ByChained.java:74)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.bys.ContentMappedBy.findElement(ContentMappedBy.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator.lambda$0(AppiumElementLocator.java:120)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:172)\r\n\tat io.appium.java_client.pagefactory.AppiumElementLocator$WaitingFunction.apply(AppiumElementLocator.java:1)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\t... 86 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "eu acionar as opcoes",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euAcionarAsOpcoes()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu tocar em deletar",
  "keyword": "E "
});
formatter.match({
  "location": "CriarNotaSteps.euTocarEmDeletar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o sistema adiciona a nota na lixeira",
  "keyword": "Entao "
});
formatter.match({
  "location": "CriarNotaSteps.oSistemaAdicionaANotaNaLixeira()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "rolar e selecionar nota",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@totalTest"
    },
    {
      "name": "@scroll"
    }
  ]
});
formatter.step({
  "name": "eu selecionar a nota",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.euSelecionarANota()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SRHMFS2\u0027, ip: \u002710.0.0.163\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.2\u0027\nDriver info: io.appium.java_client.AppiumDriver\nCapabilities {appActivity: com.google.android.keep.act..., appPackage: com.google.android.keep, automationName: uiautomator2, databaseEnabled: false, desired: {appActivity: com.google.android.keep.act..., appPackage: com.google.android.keep, automationName: uiautomator2, deviceName: emulator-5554, platformName: android}, deviceApiLevel: 24, deviceManufacturer: Google, deviceModel: Android SDK built for x86, deviceName: emulator-5554, deviceScreenDensity: 420, deviceScreenSize: 1080x1920, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.625, platform: LINUX, platformName: Android, platformVersion: 7.0, statBarHeight: 63, takesScreenshot: true, viewportRect: {height: 1731, left: 0, top: 63, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: 32c8da6b-5282-4332-a2cb-cf9473ce2ac6\n*** Element info: {Using\u003d-android uiautomator, value\u003dnew UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().textContains(\"Titulo 1\").instance(0))}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:41)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:61)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.MobileBy.findElement(MobileBy.java:61)\r\n\tat io.appium.java_client.MobileBy$ByAndroidUIAutomator.findElement(MobileBy.java:214)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:57)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat stepsDefinitions.CriarNotaSteps.euSelecionarANota(CriarNotaSteps.java:90)\r\n\tat ✽.eu selecionar a nota(file:src/test/resources/features/CriarNota.feature:33)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Contexto"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "que eu aciono o get started",
  "keyword": "Dado "
});
formatter.match({
  "location": "CriarNotaSteps.queEuAcionoOGetStarted()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "arrastar nota para a direita",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@totalTest"
    },
    {
      "name": "@swide"
    }
  ]
});
formatter.step({
  "name": "arrastar a nota para a direita",
  "keyword": "Quando "
});
formatter.match({
  "location": "CriarNotaSteps.arrastarANotaParaADireita()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});