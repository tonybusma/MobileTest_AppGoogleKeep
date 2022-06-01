package stepsDefinitions;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import static utils.Utils.*;

public class Hooks {
	
	@Before()
	public void setUp() throws Exception {
		acessarKeep();
	}
	
	@After()
	public void fecharTeste(Scenario scenario) throws Exception {
		capturarScreenshot(scenario);
		driver.quit();
	}

}
