import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';
import WebView from '../../helpers/WebView';

//sub screen containing specific selectors and methods for a specific screen
class PesanAntarScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView');
    }
    
    //define selectors using getter methods
    private get cardStore () { return $('//*[@resource-id="store-0"]'); }
    private get linkToOrderList () { return $('~linkToOrderList'); }
    private get searchClientInput () { return $('//*[@resource-id="search-client-input"]'); }

    private get btnGoBack () { return $('//*[@resource-id="btnGoBack"]'); }
    private get headerSearchInput () { return $('//*[@resource-id="header-search-input"]'); }
    private get linkToCart () { return $('~linkToCart"]'); }

    private get btnSubscription () { return $('//*[@resource-id="btn-subscription"]'); }
      private get btnPopUpSubscribe () { return $('//*[@resource-id="btn-popup-subscribe"]'); }

    private get btnFavoritku() { return $('//*[@resource-id="category-0"]'); }
    private get btnRokok() { return $('//*[@resource-id="category-1"]'); }
    private get btnMakanan() { return $('//*[@resource-id="category-2"]'); }
    private get btnMinuman () { return $('//*[@resource-id="category-3"]'); }
    private get btnPerawatan () { return $('//*[@resource-id="category-4"]'); }
    private get btnAlatTulis () { return $('//*[@resource-id="category-5"]'); }
    private get btnPerabotan () { return $('//*[@resource-id="category-6"]'); }
    private get btnLainLain () { return $('//*[@resource-id="category-7"]'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await WebView.waitForWebViewContextLoaded();
        await expect(this.cardStore).toBeDisplayed();
        await expect(this.linkToOrderList).toBeDisplayed();
        await expect(this.searchClientInput).toBeDisplayed();
    }

    async clickCardStore () {
        await this.cardStore.click();
    }

    async statusBerlangganan ({ status } : { status:string }) {
        await expect(this.btnSubscription).toBeDisplayed();
        await expect(this.btnSubscription).toHaveText(status)
        console.log('Subscription Status: '+await this.btnSubscription.getText());
    }  

    async berlangganan () {
        await expect(this.btnGoBack).toBeDisplayed();
        await expect(this.headerSearchInput).toBeDisplayed();
        await expect(this.linkToCart).toBeDisplayed();
        await expect(this.btnSubscription).toBeDisplayed();
        await expect(this.btnFavoritku).toBeDisplayed();
        await expect(this.btnRokok).toBeDisplayed();
        await expect(this.btnMakanan).toBeDisplayed();
        await expect(this.btnMinuman).toBeDisplayed();
        await expect(this.btnPerawatan).toBeDisplayed();
        await expect(this.btnAlatTulis).toBeDisplayed();
        await expect(this.btnPerabotan).toBeDisplayed();
        await expect(this.btnLainLain).toBeDisplayed();

        await this.btnSubscription.click();
        await expect(this.btnPopUpSubscribe).toBeDisplayed();
        await this.btnPopUpSubscribe.click();
        await driver.pause(5000);
    }
}

export default new PesanAntarScreen();