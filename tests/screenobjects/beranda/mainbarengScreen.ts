import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class MainBarengScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View');
    }
    
    //define selectors using getter methods
    private get btnOK() { return $('~OK'); }
    private get title() { return $('//*[@resource-id="title"]'); }
    private get hero() { return $('//*[@resource-id="hero"]'); }
    private get misi() { return $('//*[@resource-id="misi"]'); }
    private get games() { return $('//*[@resource-id="games"]'); }
    private get banners() { return $('//*[@resource-id="banners"]'); }
    private get gameKantongKelontong () { return $('~gameKantongKelontong'); }
    private get tabNasional() { return $('~loadLeaderboardNasional'); }
    private get tabLokal() { return $('~loadLeaderboardLokal'); }
    private get detailsMainBareng() { return $('~showHistory'); }
    private get btnMore() { return $('//*[@resource-id="loadmore"]'); }
    private get buttonBack () { return $('~buttonBack'); }

    //a method to encapsule automation code to interact with the page
    async dailyCheckin () {
        await (await this.btnOK).waitForDisplayed();
        await this.btnOK.click();
    }

    async page () {
        await this.title.waitForDisplayed();
        await this.hero.waitForDisplayed();
        await this.misi.waitForDisplayed();
        await this.games.waitForDisplayed();
        await this.banners.waitForDisplayed();
    }

    async playGame () {
        await this.gameKantongKelontong.waitForDisplayed();
        await this.gameKantongKelontong.click();
        await driver.pause(15000);
    }

    async openLeaderboard () {
        await this.detailsMainBareng.waitForDisplayed({ timeout: 90000 });
        await driver.pause(10000);

        // await Gestures.checkIfDisplayedWithSwipeUp(await this.btnMore, 10);
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        await Gestures.swipeUpCustom();
        // await this.btnMore.waitForDisplayed();
        await driver.pause(3000);
        await Gestures.checkIfDisplayedWithSwipeDown(await this.tabLokal, 10);
        // await Gestures.swipeDownCustom();
        // await Gestures.swipeDownCustom();
        // await Gestures.swipeDownCustom();
        await this.tabLokal.click();
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnMore, 10);
        await driver.pause(3000);
    }

    async back (){
        await this.buttonBack.click();
    }
}

export default new MainBarengScreen();