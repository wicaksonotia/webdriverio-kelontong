import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class KasirScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout');
    }
    
    //define selectors using getter methods 
    private get inputhistory () { return $('~inputhistory'); }
    private get inputbarcode () { return $('~inputbarcode-scan'); }
    private get inputadd () { return $('~inputadd'); }
    private get allowPermission () { return $('//*[@resource-id="com.android.permissioncontroller:id/grant_dialog"]'); }
    private get cari () { return $('~cari'); }
    private get tabMakanan () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup'); }
    private get prAvolution20 () { return $('~pilihProduk2'); }
    private get prAvolutionMenthol20 () { return $('~pilihProduk3'); }
    private get prBotolSpray () { return $('~pilihProduk4'); }
    private get prBuku () { return $('~pilihProduk5'); }
    private get prCitra () { return $('~pilihProduk6'); }
    private get belanjaPenjualan () { return $('~belanjaPenjualan'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.inputhistory).toBeDisplayed();
        await expect(this.inputbarcode).toBeDisplayed();
        await expect(this.inputadd).toBeDisplayed();
        await expect(this.prAvolutionMenthol20).toBeDisplayed();
        await expect(this.prBotolSpray).toBeDisplayed();
        await expect(this.prBuku).toBeDisplayed();
    }

    async createNewProdct () {
        await this.inputadd.click();
        await this.allowPermission.click();
    }

    async clickProduct1 () {
        await this.prAvolutionMenthol20.click();
    } 

    async clickProduct2 () {
        await this.prBotolSpray.click();
    }

    async clickProduct3 () {
        await this.prBuku.click();
    } 

    async clickProduct4 () {
        await this.prCitra.click();
    } 

    async clickProduct5 () {
        await this.prAvolution20.click();
    }

    async konfirmasiPenjualan () {
        await expect(this.belanjaPenjualan).toBeDisplayed();
        await this.belanjaPenjualan.click();
    }

    async searchNewProduct ({ product } : { product:string; }) {
        await expect(this.cari).toBeDisplayed();
        await this.cari.setValue(product);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await driver.pause(5000);
    }
}

export default new KasirScreen();