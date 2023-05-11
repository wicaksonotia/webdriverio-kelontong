import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class NotificationScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }

    //define selectors using getter methods
    private get cardNotification () { return $('~cardNotif_0'); }
    private get btnBack () { return $('~btnHeaderBack'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.cardNotification).toBeDisplayed();
        await driver.pause(3000);
    }

    async openNotification () {
        await driver.pause(3000);

        // jika ada notifikasi
        await this.cardNotification.click();
        await driver.pause(3000);
        await this.btnBack.click();
        await this.btnBack.click();
    }
}

export default new NotificationScreen();