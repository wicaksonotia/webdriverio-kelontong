import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class VoucherScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }
    
    //define selectors using getter methods
    private get tabVoucherSaya () { return $('~tabVoucherSaya'); }
    private get tabKuponSaya () { return $('~tabKuponSaya'); }
    private get riwayatPenukaran () { return $('~btnRiwayatPenukaran'); }
    private get cardKuponUndianBerkah () { return $('~directCouponHistory'); }
    private get totalKuponUndianBerkah () { return $('~totalCoupon'); }
    private get cardKuponUndian () { return $('~kuponUndian'); }
    private get btnBack() { return $('~btnHeaderBack'); }
    private get cardVoucherFirst () { return $('~cardVoucher_0'); }
    private get cardVoucherLast () { return $('~cardVoucher_0'); }  //butuh update
    private get btnCariToko () { return $('~btnCariToko'); }
    private get btnKembaliKeBeranda () { return $('~btnKembaliKeBeranda'); }
    private get btnKodeVoucher () { return $('~btnLihatKodeVoucher'); }
    private get kodeVoucher () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.tabVoucherSaya).toBeDisplayed();
        await expect(this.tabKuponSaya).toBeDisplayed();
        await expect(this.riwayatPenukaran).toBeDisplayed();
    }

    async openVoucher () {
        await this.tabVoucherSaya.click();
        await expect(this.cardVoucherFirst).toBeDisplayed();
        // await Gestures.swipeUpCustom();
        await Gestures.checkIfDisplayedWithSwipeUp(await this.cardVoucherLast, 10);
        await Gestures.swipeUpCustom();
        // await Gestures.swipeUpCustom();
        await Gestures.checkIfDisplayedWithSwipeDown(await this.cardVoucherFirst, 10);
        await Gestures.swipeDownCustom();
        // await Gestures.swipeDownCustom();
        await this.cardVoucherFirst.click();
        await driver.pause(10000);
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnCariToko, 10);
        await expect(this.btnCariToko).toBeDisplayed();
        await expect(this.btnKodeVoucher).toBeDisplayed();
        // await this.btnCariToko.waitForClickable();
        await this.btnCariToko.click();
        await driver.pause(12000);
        await Gestures.swipetoBack();
        // await expect(this.btnKembaliKeBeranda).toBeDisplayed();
        // await this.btnBack.click();
        await driver.pause(3000);
        await this.btnKodeVoucher.click();
        await expect(this.kodeVoucher).toBeDisplayed();
        // await this.kodeVoucher.waitForClickable();
        await driver.pause(1500);
    }

    async openRiwayatPenukaran () {
        await this.riwayatPenukaran.click();
        await driver.pause(1000);
        await this.btnBack.click();
    }

    async openKupon () {
        await this.tabKuponSaya.click();
        // await expect(this.cardKuponUndianBerkah).toBeDisplayed();
        await expect(this.totalKuponUndianBerkah).toBeDisplayed();
        // await expect(this.cardKuponUndian).toBeDisplayed();
    }
}

export default new VoucherScreen();