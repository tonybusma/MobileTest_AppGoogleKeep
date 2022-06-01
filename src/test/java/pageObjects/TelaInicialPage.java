package pageObjects;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import static utils.Utils.*;
import io.appium.java_client.AppiumDriver;
import io.appium.java_client.MobileElement;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;

public class TelaInicialPage {

	public TelaInicialPage(AppiumDriver<?> driver) {
		PageFactory.initElements(new AppiumFieldDecorator(driver), this);
	}

	@AndroidFindBy(id = "com.google.android.keep:id/skip_welcome")
	private MobileElement botaoGetStarted;
	
	@AndroidFindBy(id = "com.google.android.keep:id/new_note_button")
	private MobileElement botaoNewNote;
	
	@AndroidFindBy(id = "com.google.android.keep:id/editable_title")
	private MobileElement campoTitulo;
	
	@AndroidFindBy(id = "com.google.android.keep:id/edit_note_text")
	private MobileElement campoNota;
	
	@AndroidFindBy(accessibility = "Open navigation drawer")
	private MobileElement botaoVoltar;
	
	@AndroidFindBy(accessibility = "Open navigation drawer")
	private MobileElement botaoMenu;
	
	@AndroidFindBy(id = "com.google.android.keep:id/drawer_link_settings")
	private MobileElement botaoSettings;
	
	@AndroidFindBy(id = "com.google.android.keep:id/settings_enable_web_embeds")
	private MobileElement botaoSwitch;
	
	@AndroidFindBy(accessibility = "More options")
	private MobileElement botaoOpcoes;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Delete']")
	private MobileElement deletar;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Nota 1']")
	private MobileElement notaParaExcluir;
	
	@AndroidFindBy(xpath = "//android.widget.TextView[@text='Titulo 1']")
	private MobileElement notaScroll;

	public void acionarBotaoGetStarted() {
		botaoGetStarted.click();
	}
	
	public void acionarBotaoNewNote() {
		botaoNewNote.click();
	}
	
	public void editarCampoTitulo(String title) {
		campoTitulo.sendKeys("Nota 1");
	}
	
	public void editarCampoNota(String note) {
		campoNota.sendKeys("Esta nota é um teste");
	}
	
	public void acionarBotaoVoltar() {
		botaoVoltar.click();
	}
	
	public void acionarBotaoMenu() {
		botaoMenu.click();
	}
	
	public void acionarBotaoSettings() {
		botaoSettings.click();
	}
	
	public void acionarBotaoSwitch() {
		botaoSwitch.click();
	}
	
	public void acionarBotaoOpcoes() {
		botaoOpcoes.click();
	}
	
	public void acionarDeletar() {
		deletar.click();
	}
	
	public void clickLongo() {
		Actions cliqueLongo = new Actions(driver);
		cliqueLongo.clickAndHold(notaParaExcluir).perform();
	}
	
	public void acionarNotaScroll() throws InterruptedException {
		notaScroll.click();
		//Thread.sleep(2000); 2 seg
	}
	
	public void swipeDireita() throws InterruptedException {
		Thread.sleep(8000);
		swipeRight();
		Thread.sleep(2000);
	}
	
}