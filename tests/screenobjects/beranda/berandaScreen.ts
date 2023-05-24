import Gestures from '../../helpers/Gestures';
import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class BerandaScreen extends AppScreen {
    constructor() {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }

    //define selectors using getter methods
    private get panah1() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah2() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah3() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah4() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah5() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah6() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah7() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah8() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah9() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }

    private get panah1ca() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah2ca() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah3ca() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah4ca() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah5ca() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah6ca() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah7ca() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah8ca() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }
    private get panah9ca() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'); }

    private get btnNotification() { return $('~btnNotification'); }
    private get btnQr() { return $('~btnQr'); }

    private get cardBanner() { return $('~banner_5'); }
    private get cardBannerFirst() { return $('~banner_6'); }
    private get cardBannerLast() { return $('~banner_7'); }

    // detail banner
    private get bannerCard() { return $('~banner_6'); }
    private get banner() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup'); }
    private get bannerName() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]'); }
    private get bannerDescription() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[2]'); }

    private get upgNanti() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView'); }
    private get accountName() { return $('~consumerName'); }
    private get btnKeping() { return $('(//android.view.ViewGroup[@content-desc="btnVoucher"])[1]'); }
    private get btnVoucher() { return $('(//android.view.ViewGroup[@content-desc="btnVoucher"])[2]'); }

    private get menuPesanAntar() { return $('~menuPesanAntar'); }
    private get menuHiburan() { return $('~menuHiburan'); }
    private get menuPeluang() { return $('~menuPeluang'); }
    private get menuSRCTerdekat() { return $('~menuTokoTerdekat'); }
    private get menuKatalogSRC() { return $('~menuKatalogSRC'); }
    private get menuAngket() { return $('~menuAngket'); }

    private get bottomBarBeranda() { return $('//android.view.ViewGroup[@content-desc="bottomBarBeranda"]/android.view.ViewGroup'); }
    private get bottomBarDaftarBelanja() { return $('//android.view.ViewGroup[@content-desc="bottomBarDaftarBelanja"]/android.view.ViewGroup'); }
    private get bottomBarPesan() { return $('//android.view.ViewGroup[@content-desc="bottomBarPesan"]/android.view.ViewGroup'); }
    private get bottomBarAkunSaya() { return $('//android.view.ViewGroup[@content-desc="bottomBarAkunSaya"]'); }

    private get cbDSA() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup'); }
    private get btnLanjut() { return $('~btnLanjut'); }
    private get btnSetuju() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[3]'); }
    private get btnOK() { return $('~btnOK'); }
    private get popupNotification() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup'); }
    private get btnYES() { return $('~btn1PopupNotif'); }

    private get btnBack() { return $('~btnHeaderBack'); }

    private get btnKirim() { return $('~btnKIRIM'); }

    private get btnVersiTerbaru() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]'); }

    //a method to encapsule automation code to interact with the page 
    async beforeshowAccountName() {
        await this.panah1.click();
        await this.panah2.click();
        await this.panah3.click();
        await this.panah4.click();
        await this.panah5.click();
        await this.panah6.click();
        await this.panah7.click();
        await this.panah8.click();
        await this.panah9.click();
    }

    async beforeshowAccountName12() {
        await this.panah1.click();
        await this.panah2.click();
        await this.panah3.click();
        await this.panah1.click();
        await this.panah4.click();
        await this.panah5.click();
        await this.panah6.click();
        await this.panah7.click();
        await this.panah8.click();
        await this.panah9.click();
    }

    async beforeshowAccountNameca() {
        await this.panah1ca.click();
        await this.panah2ca.click();
        await this.panah3ca.click();
        await this.panah4ca.click();
        await this.panah5ca.click();
        await this.panah6ca.click();
        await this.panah7ca.click();
        await this.panah8ca.click();
        await this.panah9ca.click();
    }

    async showAccountName({ shopname }: { shopname: string }) {
        await expect(this.accountName).toBeDisplayed();
        await expect(this.accountName).toHaveText(shopname)
        console.log('Account Name: ' + await this.accountName.getText());
    }

    async nanti() {
        await this.upgNanti.waitForDisplayed();
        await this.upgNanti.click();
    }

    async page() {
        // await this.btnNotification.waitForDisplayed();
        // await this.btnQr.waitForDisplayed();
        // await this.btnKeping.waitForDisplayed();
        await this.btnVoucher.waitForDisplayed();
        await this.menuPesanAntar.waitForDisplayed();
        // await this.menuHiburan.waitForDisplayed();
        // await this.menuPeluang.waitForDisplayed();
        // await this.menuSRCTerdekat.waitForDisplayed();
        await this.menuKatalogSRC.waitForDisplayed();
        // await this.menuAngket.waitForDisplayed();
        // await this.bottomBarBeranda.waitForDisplayed();
        // await this.bottomBarDaftarBelanja.waitForDisplayed();
        // await this.bottomBarAkunSaya.waitForDisplayed();
        // await this.bottomBarPesan.waitForDisplayed();
        // await driver.pause(1000);
    }

    async clickNanti() {
        await this.btnVersiTerbaru.click();
    }

    async waitBanner() {
        await this.cardBanner.waitForDisplayed();
        await driver.pause(5000);
    }

    async clickQR() {
        await this.btnQr.click();
    }

    async clickNotification() {
        await this.btnNotification.click();
    }

    async openBanner() {
        await Gestures.checkIfDisplayedWithSwipeRight(await this.cardBannerLast, 10);
        await Gestures.checkIfDisplayedWithSwipeLeft(await this.cardBannerFirst, 10);
        await this.cardBannerFirst.click();
        await driver.pause(7000);
    }

    async clickKeping() {
        await this.btnKeping.click();
    }

    async clickVoucher() {
        await this.btnVoucher.click();
    }

    async clickPesanAntar() {
        await this.menuPesanAntar.click();
    }

    async clickHiburan() {
        await this.menuHiburan.click();
    }

    async clickPeluang() {
        await this.menuPeluang.click();
    }

    async clickTerdekat() {
        await this.menuSRCTerdekat.click();
    }

    async clickKatalogSRC() {
        await this.menuKatalogSRC.click();
    }

    async clickAngket() {
        await this.menuAngket.click();
    }

    async clickBeranda() {
        await this.bottomBarBeranda.click();
    }

    async clickDaftarBelanja() {
        await this.bottomBarDaftarBelanja.click();
    }

    async clickPesan() {
        await this.bottomBarPesan.click();
    }

    async clickAkunSaya() {
        await this.bottomBarAkunSaya.click();
    }

    async clickOKAK() {
        await this.btnOK.click();
    }

    async clickLanjut() {
        await this.cbDSA.click();
        await this.btnLanjut.click();
    }

    // create account
    async clickOK() {
        await this.btnOK.click();
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnKirim, 5);
        await this.btnKirim.click();
        await driver.pause(3000);
    }

    async clickSetuju() {
        await this.btnSetuju.click();
        await driver.pause(5000);
    }

    // banner (merokok-employee)
    async clickYES() {
        await this.popupNotification.waitForDisplayed();
        await this.btnYES.click();
        await driver.pause(3000);
    }

    async clickBanner() {
        await this.cardBanner.waitForDisplayed({
            timeout: 120000
        });
        await this.cardBanner.click();
        await expect(this.banner).toBeDisplayed();
        await expect(this.bannerName).toBeDisplayed();
        await expect(this.bannerDescription).toBeDisplayed();
        await driver.pause(5000);
        await this.btnBack.click();
    }

    // banner (nonmerokok-nonemployee)
    async refresh() {
        await Gestures.swipeDownCustom();
        await driver.pause(10000);
    }
}

export default new BerandaScreen();