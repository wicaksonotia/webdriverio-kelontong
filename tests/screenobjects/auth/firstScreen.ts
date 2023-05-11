import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class FirstScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout');
    }
    
    //define selectors using getter methods
    private get btnDaftarAkun () { return $('~btnDaftarAkun'); }
    private get txtMasukDisini () { return $('~txtMasukDisini'); }
    private get allowPermission () { return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'); }

    //a method to encapsule automation code to interact with the page
    async allowPermissions () {
        await this.allowPermission.click();
    }

    async masuk () {
        await expect(this.txtMasukDisini).toBeDisplayed();
        await this.txtMasukDisini.click();
    }

    async createNewAccount () {
        await expect(this.btnDaftarAkun).toBeDisplayed();
        await this.btnDaftarAkun.click();
    }
}

export default new FirstScreen();