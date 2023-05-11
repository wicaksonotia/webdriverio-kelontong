import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';
import WebView from '../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class ListOrderScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView');
    }
    
    //define selectors using getter methods
    private get tabSemua () { return $('~Semua'); }
    private get tabDiubah () { return $('~Diubah'); }
    private get tabDibatalkan () { return $('~Dibatalkan'); }
    private get tabDiproses () { return $('~Diproses'); }
    private get tabDikirim () { return $('~Dikirim'); }

    private get ddListOrder () { return $('//*[@resource-id="orderListFilter"]'); }
    private get selectListOrder () { return $('//*[@resource-id="label[1]-official-store"]'); }
    private get btnPilih () { return $('//*[@resource-id="popupBtnSubmit-Pilih-List-Order"]'); }

    private get btnLihatDetailPembelianCOO () { return $('~linkOrderDetail[1]'); }
    private get btnLihatDetailPembelianCOS () { return $('~linkOrderDetail[1]'); }
    private get btnLihatDetailPembelianDikirim () { return $('~linkOrderDetail-9fe20cd0-304d-49e5-b7cc-5ab6b7a25bf5'); }
    private get btnKonfirmasiPenerimaan () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.widget.Button[2]'); }

    private get btnChatSRC () { return $('//*[@resource-id="btnChatSeller"]'); }
    private get btnBatalkanTransaksi () { return $('//*[@resource-id="btnCancelOrder"]'); }

    private get btnBack () { return $('//*[@resource-id="btnGoBack"]'); }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.tabSemua).toBeDisplayed();
        await expect(this.tabDiubah).toBeDisplayed();
        await expect(this.tabDibatalkan).toBeDisplayed();
        await expect(this.tabDiproses).toBeDisplayed();
        await expect(this.tabDikirim).toBeDisplayed();
        await expect(this.ddListOrder).toBeDisplayed();
    }

    async openTabDikirim () {
        await this.tabDikirim.click();
    }

    async konfirmasiPenerimaan () {
        await expect(this.btnLihatDetailPembelianDikirim).toBeDisplayed();
        await this.btnLihatDetailPembelianDikirim.click();
        await expect(this.btnKonfirmasiPenerimaan).toBeDisplayed();
        await this.btnKonfirmasiPenerimaan.click();
    }

    async listOrder () {
        // list orrder COO (Pesan Antar)
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnLihatDetailPembelianCOO, 50);
        await expect(this.btnLihatDetailPembelianCOO).toBeDisplayed();
        await this.btnLihatDetailPembelianCOO.click();
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnChatSRC, 5);
        await expect(this.btnChatSRC).toBeDisplayed();
        await driver.pause(3000);
        await this.btnBack.click();
        await driver.pause(3000);

        // list orrder COS (Katalog SRC)
        await this.ddListOrder.click();
        await this.selectListOrder.click();
        await this.btnPilih.click();
        await driver.pause(3000);
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnLihatDetailPembelianCOS, 50);
        await expect(this.btnLihatDetailPembelianCOS).toBeDisplayed();
        await this.btnLihatDetailPembelianCOS.click();
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnBatalkanTransaksi, 5);
        await expect(this.btnBatalkanTransaksi).toBeDisplayed();
        await expect(this.btnChatSRC).toBeDisplayed();
        await driver.pause(3000);
        await this.btnBack.click();
        await driver.pause(3000);
    } 

    async listOrderProd () {
        // list orrder COO (Pesan Antar)
        await driver.pause(3000);

        // list orrder COS (Katalog SRC)
        await this.ddListOrder.click();
        await this.selectListOrder.click();
        await this.btnPilih.click();
        await driver.pause(3000);
    } 
}

export default new ListOrderScreen();