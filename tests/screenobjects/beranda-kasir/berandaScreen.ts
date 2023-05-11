import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class BerandaScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/b.t.a.f');
    }
    
    //define selectors using getter methods
    private get menuKasir () { return $('~menuKasir'); }
    private get btnLewati () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[5]'); }
    
    private get cardPembelian () { return $('~menuPembelian'); }
    private get cardTokoOnline () { return $('~menuCOO'); }
    private get cardLangganan () { return $('~menuLangganan'); }
    private get cardLaporan () { return $('~menuReport'); }
    
    private get menuBeranda () { return $('~menu0'); }
    private get menuProduk () { return $('~menu1'); }
    private get menuChat () { return $('~menu2'); }
    private get menuAkunSaya () { return $('~menu3'); }

    private get btnOK () { return $('//*[@resource-id="android:id/button1"]'); }
    private get btnAlertOfflineModePositive () { return $('~btnAlertOfflineModePositive'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.menuKasir).toBeDisplayed();
        await expect(this.cardPembelian).toBeDisplayed();
        await expect(this.cardTokoOnline).toBeDisplayed();
        await expect(this.cardLangganan).toBeDisplayed();
        await expect(this.cardLaporan).toBeDisplayed();
        await expect(this.menuBeranda).toBeDisplayed();
        await expect(this.menuProduk).toBeDisplayed();
        await expect(this.menuChat).toBeDisplayed();
        await expect(this.menuAkunSaya).toBeDisplayed();
        await driver.pause(2000);
    }

    async clickKasir () {
        await this.menuKasir.click();
        await this.btnLewati.click();
    } 
    
    async lewati () {
        await this.btnLewati.click();
    }

    async clickTokoOnline () {
        await this.cardTokoOnline.click();
    }

    async clickOK () {
        await this.btnOK.click();
    }
}

export default new BerandaScreen();