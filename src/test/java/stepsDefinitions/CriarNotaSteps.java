package stepsDefinitions;

import static org.junit.Assert.assertEquals;
import static utils.Utils.driver;

import org.openqa.selenium.By;

import io.appium.java_client.MobileBy;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.TelaInicialPage;

public class CriarNotaSteps {

	TelaInicialPage tela = new TelaInicialPage(driver);

	@Dado("que eu aciono o get started")
	public void queEuAcionoOGetStarted() {
		tela.acionarBotaoGetStarted();
	}

	@Quando("eu criar uma nova nota")
	public void euCriarUmaNovaNota() {
		tela.acionarBotaoNewNote();
	}

	@Quando("eu informar no campo title {string}")
	public void euInformarNoCampoTitle(String title) {
		tela.editarCampoTitulo(title);
	}

	@Quando("eu informar no campo note {string}")
	public void euInformarNoCampoNote(String note) {
		tela.editarCampoNota(note);
	}

	@Quando("eu acionar o botao voltar")
	public void euAcionarOBotaoVoltar() {
		tela.acionarBotaoVoltar();
	}

	@Entao("o aplicativo cadastra a nota com o titulo {string}")
	public void oAplicativoCadastraANotaComOTitulo(String title) {
		assertEquals(title, driver.findElement(By.id("com.google.android.keep:id/index_note_title")).getText());
	}
	
	@Quando("eu acionar o menu")
	public void euAcionarOMenu() {
	    tela.acionarBotaoMenu();
	}

	@Quando("eu acionar a aba settings")
	public void euAcionarAAbaSettings() {
	    tela.acionarBotaoSettings();
	}

	@Quando("eu tocar no switch")
	public void euTocarNoSwitch() {
	    tela.acionarBotaoSwitch();
	}

	@Entao("o switch fica desabilitado")
	public void oSwitchFicaDesabilitado() {
		assertEquals("Display rich link previews OFF", driver.findElement(By.id("com.google.android.keep:id/settings_enable_web_embeds")).getText());
	}
	
	@Quando("eu tocar e segurar a nota")
	public void euTocarESegurarANota() {
	    tela.clickLongo();
	}

	@Quando("eu acionar as opcoes")
	public void euAcionarAsOpcoes() {
	    tela.acionarBotaoOpcoes();
	}

	@Quando("eu tocar em deletar")
	public void euTocarEmDeletar() {
	    tela.acionarDeletar();
	}

	@Entao("o sistema adiciona a nota na lixeira")
	public void oSistemaAdicionaANotaNaLixeira() {
	    assertEquals("Note moved to trash", driver.findElement(By.id("com.google.android.keep:id/snackbar_text")).getText());
	}

	@Quando("^eu selecionar a nota$")
	public void euSelecionarANota() throws Throwable {
		driver.findElement(MobileBy.AndroidUIAutomator("new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().textContains(\"Titulo 1\").instance(0))"));
		tela.acionarNotaScroll();
	}

	@Quando("^arrastar a nota para a direita$")
	public void arrastarANotaParaADireita() throws Throwable {
		tela.swipeDireita();
	}

}
