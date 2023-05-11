import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class TantanganScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View');
    }
    
    //define selectors using getter methods
    private get allowPermission () { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.Button[1]'); }
    private get txtBantuan() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.widget.Button'); }
    private get tabTerbaru () { return $('~Terbaru'); }
    private get tabBerlalu () { return $('~Berlalu'); }
    private get btnNext() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button[2]'); }
    private get btnClose() { return $('~btnHeaderBack'); }

    //a method to encapsule automation code to interact with the page
    async allowPermissions () {
        await this.allowPermission.click();
        await driver.pause(1500);
        await this.allowPermission.click();
        await driver.pause(1500);
        await this.allowPermission.click();
    }

    async page () {
        await this.txtBantuan.waitForDisplayed();
        await this.tabTerbaru.waitForDisplayed();
        await this.tabBerlalu.waitForDisplayed();
    }

    async openTerbaru () {
        await driver.pause(7000)
    }

    async openBerlalu () {
        await this.tabBerlalu.click();
        await driver.pause(7000)
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnNext, 10);
        await this.btnNext.waitForDisplayed();
    }

    async close () {
        await this.btnClose.click();
    }
}

export default new TantanganScreen();