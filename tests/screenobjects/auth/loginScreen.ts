import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class LoginScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }
    
    //define selectors using getter methods
    private get inpNomorPonsel () { return $('~inpNomorPonsel'); }
    private get btnLanjut () { return $('~btnLanjut'); }
    private get txtBuatAkunDisini () { return $('~txtBuatAkunDisini'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.inpNomorPonsel).toBeDisplayed();
        await expect(this.btnLanjut).toBeDisplayed();
        await expect(this.txtBuatAkunDisini).toBeDisplayed();
    }

    async loginKelontong ({ nohp } : { nohp:string; }) {
        await expect(this.inpNomorPonsel).toBeDisplayed();
        await this.inpNomorPonsel.setValue(nohp);
        await driver.hideKeyboard();
    }

    async lanjut () {
        await this.btnLanjut.click();
    }   
    
    async buatAkun () {
        await this.txtBuatAkunDisini.click();
    }   
}

export default new LoginScreen();