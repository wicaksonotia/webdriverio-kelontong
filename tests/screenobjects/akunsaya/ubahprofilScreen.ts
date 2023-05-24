import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';


//sub screen containing specific selectors and methods for a specific screen
class ProfileScreen extends AppScreen {
    constructor() {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout[2]/android.webkit.WebView');
    }

    //define selectors using getter methods
    private get btnImageUpload() { return $('~btnImageUpload'); }
    private get inpNamaLengkap() { return $('~inpNamaLengkap'); }
    private get nickname() { return $('~nickname'); }
    private get rdJenisKelaminInput0() { return $('~rdJenisKelaminInput0'); }
    private get rdJenisKelaminLabel0() { return $('~rdJenisKelaminLabel0'); }
    private get rdJenisKelaminInput1() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]'); }
    private get rdJenisKelaminLabel1() { return $('~rdJenisKelaminLabel1'); }
    private get bttLahir() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup[1]'); }
    private get bulanLahir() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[1]/android.widget.EditText'); }
    private get tanggalLahir() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[2]/android.widget.EditText'); }
    private get tahunLahir() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[3]/android.widget.EditText'); }
    private get btnOK() { return $('//*[@resource-id="android:id/button1"]'); }
    private get inpIdNumber() { return $('~inpIdNumber'); }
    private get selectProvinsiDomisili() { return $('~selectProvinsiDomisili'); }
    private get selectKabupatenDomisili() { return $('~selectKabupatenDomisili'); }
    private get inpNomorPonsel() { return $('~inpNomorPonsel'); }
    private get inpEmail() { return $('~inpEmail'); }
    private get inpAlamatTempatTinggal() { return $('~inpAlamatTempatTinggal'); }
    private get inpReferralCode() { return $('~inpReferralCode'); }
    private get emplid() { return $('~emplid'); }
    private get rdIsSmokingInput0() { return $('~rdIsSmokingInput0'); }
    private get rdIsSmokingInput1() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[11]'); }
    private get btnSIMPAN() { return $('~btnSIMPAN'); }
    private get btnBack() { return $('~btnHeaderBack'); }

    //a method to encapsule automation code to interact with the page
    async page() {
        await expect(this.btnImageUpload).toBeDisplayed();
        await expect(this.inpNamaLengkap).toBeDisplayed();
        await expect(this.nickname).toBeDisplayed();
        // await expect(this.rdJenisKelaminInput0).toBeDisplayed();
        // await expect(this.rdJenisKelaminLabel0).toBeDisplayed();
        // await expect(this.rdJenisKelaminInput1).toBeDisplayed();
        // await expect(this.rdJenisKelaminLabel1).toBeDisplayed();
        await expect(this.inpIdNumber).toBeDisplayed();
        // await expect(this.selectProvinsiDomisili).toBeDisplayed();
        // await expect(this.selectKabupatenDomisili).toBeDisplayed();
        await expect(this.inpNomorPonsel).toBeDisplayed();
        await Gestures.checkIfDisplayedWithSwipeUp(await this.btnSIMPAN, 3);
        // await expect(this.inpEmail).toBeDisplayed();
        // await expect(this.inpAlamatTempatTinggal).toBeDisplayed();
        // await expect(this.inpReferralCode).toBeDisplayed();
        // await expect(this.emplid).toBeDisplayed();
        // await expect(this.rdIsSmokingInput0).toBeDisplayed();
        // await expect(this.rdIsSmokingInput1).toBeDisplayed();
        await expect(this.btnSIMPAN).toBeDisplayed();
        await driver.pause(3000);
    }

    async inputData({ TahunLahir, BulanLahir, TanggalLahir }: { TahunLahir: string; BulanLahir: string; TanggalLahir: string; }) {
        await expect(this.rdJenisKelaminInput1).toBeDisplayed();
        await this.rdJenisKelaminInput1.click();
        await this.bttLahir.click();
        await this.bulanLahir.click();
        await this.bulanLahir.setValue(BulanLahir);
        await this.tahunLahir.click();
        await this.tahunLahir.setValue(TahunLahir);
        await this.tanggalLahir.click();
        await this.tanggalLahir.setValue(TanggalLahir);
        await this.btnOK.click();
        await expect(this.rdIsSmokingInput1).toBeDisplayed();
        await this.rdIsSmokingInput1.click();
        await Gestures.swipeUpCustom();
        await this.btnSIMPAN.click();
    }

    async editProfile() {
        await this.rdIsSmokingInput1.click();
        await Gestures.swipeUpCustom();
        await this.btnSIMPAN.click();
    }
}

export default new ProfileScreen();