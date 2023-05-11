import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class KepingScreen extends AppScreen {
    constructor () {
        super('//*[@resource-id="HomeTab"]');
    }
    
    //define selectors using getter methods
    private get jumlahKeping () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.widget.TextView[2]'); }
    private get tabTukarKeping () { return $('//*[@resource-id="react-tabs-0"]'); }
    private get cardVoucherBelanja () { return $('(//android.view.View[@content-desc="163"])[1]'); }
    private get jumlahBeli () { return $('//*[@resource-id="voucher"]'); }
    private get kepingDibutuhkan () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.widget.TextView[3]'); }
    private get btnTukar () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.widget.Button'); }
    private get popUpTitle () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View/android.app.Dialog/android.view.View[1]'); }
    private get popUpDesc () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View/android.app.Dialog/android.view.View[2]'); }
    private get btnTutup () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[2]/android.view.View/android.app.Dialog/android.widget.Button'); }
    private get btnHistory () { return $('//android.view.View[@content-desc="Lihat Riwayat Penukaran"]'); }
    private get listTabKepingMasuk () { return $('//*[@resource-id="react-tabs-3"]'); }
    private get tabKepingMasuk () { return $('//*[@resource-id="react-tabs-2"]'); }
    private get dateTimeMasuk () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.widget.TextView[1]'); }
    private get typeMasuk () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.widget.TextView[2]'); }
    private get amountMasuk () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[3]/android.view.View/android.view.View/android.widget.TextView[3]'); }
    private get tabKepingDigunakan () { return $('//*[@resource-id="react-tabs-4"]'); }
    private get listTabKepingDigunakan () { return $('//*[@resource-id="react-tabs-5"]'); }
    private get dateTimeDigunakan () { return $('//android.view.View[@content-desc="image 01/09/2022 11:37 Voucher Belanja -1 keping"]'); }
    private get typeDigunakan () { return $('//android.view.View[@content-desc="image 08/06/2022 04:26 Voucher Belanja S-080622 -1 keping"]/android.widget.TextView[2]'); }
    private get amountDigunakan () { return $('//android.view.View[@content-desc="image 08/06/2022 04:26 Voucher Belanja S-080622 -1 keping"]/android.widget.TextView[3]'); }
    private get btnClose () { return $('~btnHeaderBack'); }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await this.jumlahKeping.waitForDisplayed();
        await this.tabTukarKeping.waitForDisplayed();
        await this.tabKepingMasuk.waitForDisplayed();
        await this.tabKepingDigunakan.waitForDisplayed();
    }

    async showJumlahKeping () {
        await this.jumlahKeping.waitForDisplayed();
        await driver.pause(2000);
        console.log('Jumlah Keping: '+await this.jumlahKeping.getText());
    }

    async openTabKepingMasuk () {
        await expect(this.tabKepingMasuk).toBeDisplayed();
        await this.tabKepingMasuk.click();
    }

    async openTabKepingDigunakan () {
        await expect(this.tabKepingDigunakan).toBeDisplayed();
        await this.tabKepingDigunakan.click();
    }

    async tukarVoucherBelanja () {
        await this.cardVoucherBelanja.click();
        await expect(this.jumlahBeli).toBeDisplayed();
        console.log('Jumlah Beli: '+await this.jumlahBeli.getText());
        await expect(this.kepingDibutuhkan).toBeDisplayed();
        console.log('Keping Dibutuhkan: '+await this.kepingDibutuhkan.getText());
        await expect(this.btnTukar).toBeDisplayed();
        await this.btnTukar.click();
        // await expect(this.popUpTitle).toBeDisplayed();
        // await expect(this.popUpDesc).toBeDisplayed();
        // await expect(this.btnTutup).toBeDisplayed();
        await expect(this.btnHistory).toBeDisplayed();
        await this.btnHistory.click();
    }

    async historyCheck () {
        await expect(this.listTabKepingDigunakan).toBeDisplayed();
        // console.log('Keping Digunakan: ');
        // await expect(this.dateTimeDigunakan).toBeDisplayed();
        // console.log(await this.dateTimeDigunakan.getText());
        // await expect(this.typeDigunakan).toBeDisplayed();
        // console.log(await this.typeDigunakan.getText());
        // await expect(this.amountDigunakan).toBeDisplayed();
        // console.log(await this.amountDigunakan.getText());
    }

    async kepingMasukCheck () {
        await expect(this.listTabKepingMasuk).toBeDisplayed();
        // console.log('Keping Masuk: ');
        // await expect(this.dateTimeMasuk).toBeDisplayed();
        // console.log(await this.dateTimeMasuk.getText());
        // await expect(this.typeMasuk).toBeDisplayed();
        // console.log(await this.typeMasuk.getText());
        // await expect(this.amountMasuk).toBeDisplayed();
        // console.log(await this.amountMasuk.getText());
    }

    async close () {
        await this.btnClose.click();
    }
}

export default new KepingScreen();