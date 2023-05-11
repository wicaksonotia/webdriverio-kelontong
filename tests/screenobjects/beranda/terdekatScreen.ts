import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class TerdekatScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }
    
    //define selectors using getter methods
    private get cardTerdekat () { return $('~cardNearby_0'); }
    private get btnMore () { return $('~btnMuatTokoLebihBanyak'); }
    private get btnChatSRC () { return $('~btnChatSRC'); }
    private get btnSudahBerlangganan () { return $('~btnSudahBerlangganan'); }
    private get btnJadiLangganan () { return $('~btnJadiLangganan'); }
    private get btnArahkan () { return $('~btnArahkan'); }
    private get btnPesanAntar () { return $('~btnPesanAntar'); }
    private get cardVoucher () { return $('~cardVoucher_0'); }
    private get btnBack () { return $('~btnHeaderBack'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.cardTerdekat).toBeDisplayed();
        await driver.pause(3000);
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnMore, 10);
        // await Gestures.swipeUpCustom();
        // await Gestures.swipeUpCustom();
        // await Gestures.swipeUpCustom();
        await expect(this.btnMore).toBeDisplayed();
        // await Gestures.swipeUpCustom();
        // await driver.pause(3000);
        // await Gestures.swipeDownCustom();
        // await Gestures.swipeDownCustom();
        // await Gestures.swipeDownCustom();
        // await expect(this.cardTerdekat).toBeDisplayed();
        // await driver.pause(3000);
        // await this.cardTerdekat.click();
        // await expect(this.btnChatSRC).toBeDisplayed();
        // // await expect(this.btnJadiLangganan).toBeDisplayed();
        // // await expect(this.btnSudahBerlangganan).toBeDisplayed();
        // await expect(this.btnArahkan).toBeDisplayed();
        // // await expect(this.btnPesanAntar).toBeDisplayed();
    }

    async openPromosi () {
        await expect(this.cardVoucher).toBeDisplayed();
        await this.cardVoucher.click();
        await driver.pause(5000);
        await this.btnBack.click();
    } 

    async back () {
        await this.btnBack.click();
        await this.btnBack.click();
    }
}

export default new TerdekatScreen();