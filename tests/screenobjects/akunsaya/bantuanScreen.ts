import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class BantuanScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }
    
    //define selectors using getter methods
    private get tabInformasi () { return $('~tabInformasi'); }
    private get searchKataKunci () { return $('~searchKataKunci'); }
    private get menuAkunSaya () { return $('~buttonMenu_0'); }
    private get menuBelanja () { return $('~buttonMenu_1'); }
    private get menuMisi () { return $('~buttonMenu_2'); }
    private get menuInformasiLainnya () { return $('~buttonMenu_3'); }

    private get tabKontak () { return $('~tabKontak'); }
    private get btnBantuanTelepon () { return $('~btnBantuanTelepon'); }
    private get btnBantuanBude () { return $('~btnBantuanBude'); }
      private get selectKategoriPertanyaan () { return $('~selectKategoriPertanyaan'); }
      private get selectKategori () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]'); }
      private get inputDetailKendala () { return $('~inputDetailKendala'); }
      private get btnKirim () { return $('~btnKirim'); }
      private get btnOK () { return $('//*[@resource-id="android:id/button1"]'); }
      private get inputPesan() { return $('~inputTulisPesan'); }
      private get btnSendChat() { return $('~btnSendChat'); }
    private get btnBantuanEmail () { return $('~btnBantuanEmail'); }
    private get btnBantuanWhatsapp () { return $('~btnBantuanWhatsapp'); }

    private get tabPesanBantuan () { return $('~tabPesanBantuan'); }
    private get searchChat () { return $('~searchChat'); }
    private get buttonFloatingChat () { return $('~buttonFloatingChat'); }


    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.tabInformasi).toBeDisplayed();
        await expect(this.searchKataKunci).toBeDisplayed();
        await expect(this.menuAkunSaya).toBeDisplayed();
        // await expect(this.menuBelanja).toBeDisplayed();
        // await expect(this.menuMisi).toBeDisplayed();
        // await expect(this.menuInformasiLainnya).toBeDisplayed();
        await expect(this.tabKontak).toBeDisplayed();
        await expect(this.tabPesanBantuan).toBeDisplayed();
    }

    async openKontak () {
        await this.tabKontak.click();
        await expect(this.btnBantuanTelepon).toBeDisplayed();
        await expect(this.btnBantuanBude).toBeDisplayed();
        await expect(this.btnBantuanEmail).toBeDisplayed();
        await expect(this.btnBantuanWhatsapp).toBeDisplayed();
    }

    async inputKendala ({ kendala } : { kendala:string; }) {
        await this.btnBantuanBude.click();
        await this.selectKategoriPertanyaan.click();
        await this.selectKategori.click();
        await this.inputDetailKendala.setValue(kendala);
        await this.btnKirim.click();
    }

    async chatBUDE ({ msg } : { msg:string; }) {
        await this.btnOK.click();
        await this.inputPesan.setValue(msg);
        await this.btnSendChat.click();
        await driver.pause(3000);
    }

    async callChat () {
        await driver.pause(3000);
        await expect(this.tabKontak).toBeDisplayed();
        await this.tabKontak.click();
        await expect(this.btnBantuanTelepon).toBeDisplayed();
        await this.btnBantuanTelepon.click();
        await driver.pause(3000);
        await Gestures.swipetoBack();
        await Gestures.swipetoBack();
        await expect(this.btnBantuanWhatsapp).toBeDisplayed();
        await this.btnBantuanWhatsapp.click();
        await driver.pause(3000);
    }
}

export default new BantuanScreen();