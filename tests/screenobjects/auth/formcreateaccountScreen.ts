import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class FormDaftarScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup');
    }
    
    //define selectors using getter methods
    private get otp1 () { return $('~inpKodeOtp_1'); }
    private get otp2 () { return $('~inpKodeOtp_2'); }
    private get otp3 () { return $('~inpKodeOtp_3'); }
    private get otp4 () { return $('~inpKodeOtp_4'); }
    private get otp5 () { return $('~inpKodeOtp_5'); }
    private get otp6 () { return $('~inpKodeOtp_6'); }
    private get btnKirim () { return $('~btnKirim'); }
    private get inpNamaLengkap () { return $('~inpNamaLengkap'); }
    private get inputNamaPanggilan () { return $('~inputNamaPanggilan'); }
    private get rdL () { return $('~rdJenisKelaminInput0'); }
    private get rdJenisKelaminLabel0 () { return $('~rdJenisKelaminLabel0'); }
    private get rdP () { return $('~rdJenisKelaminInput1'); }
    private get rdJenisKelaminLabel1 () { return $('~rdJenisKelaminLabel1'); }
    private get bttLahir () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup'); }
    private get bulanLahir () { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[1]/android.widget.EditText'); }
    private get tanggalLahir () { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[2]/android.widget.EditText'); }
    private get tahunLahir () { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.DatePicker/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.NumberPicker[3]/android.widget.EditText'); }
    private get btnOK () { return $('//*[@resource-id="android:id/button1"]'); }
    private get inpIdNumber () { return $('~inpIdNumber'); }
    private get selectProvinsiDomisili () { return $('~selectProvinsiDomisili'); }
    private get selectedProvinsiDomisili () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[10]'); }
    private get selectKabupatenDomisili () { return $('~selectKabupatenDomisili'); }
    private get selectedKabupatenDomisili () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[15]'); }
    private get selectKecamatanDomisili () { return $('~selectKecamatanDomisili'); }
    private get selectedKecamatanDomisili () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[3]'); }
    private get inpNomorPonsel () { return $('~inpNomorPonsel'); }
    private get inpEmail () { return $('~inpEmail'); }
    private get inpReferralCode () { return $('~inpReferralCode'); }
    private get employeeID () { return $('~employeeID'); }
    private get rdMerokok () { return $('~rdIsSmokingInput0'); }
    private get rdTidakMerokok () { return $('~rdIsSmokingInput1'); }
    private get cbTerm () { return $('~cbTermUndefined'); }
    private get btnDaftar () { return $('~btnDaftar'); }
    
    //a method to encapsule automation code to interact with the page
    async page () {
        await this.inpNamaLengkap.waitForDisplayed();;
        await this.inpNomorPonsel.waitForDisplayed();
        await this.cbTerm.waitForDisplayed();
        await this.btnDaftar.waitForDisplayed();
    }
    
    async inputData ({ NamaLengkap, NomorPonsel}: { NamaLengkap:string; NomorPonsel:string;}) {
        await this.inpNamaLengkap.setValue(NamaLengkap);
        await this.inpNomorPonsel.setValue(NomorPonsel);
    }

    async submit () {
        await this.cbTerm.click();
        await this.btnDaftar.click();
    }

    async otp ({ otp1, otp2, otp3, otp4, otp5, otp6 } : { otp1:string; otp2:string; otp3:string; otp4:string; otp5:string; otp6:string;}) {
        await this.otp1.setValue(otp1);
        await this.otp2.setValue(otp2);
        await this.otp3.setValue(otp3);
        await this.otp4.setValue(otp4);
        await this.otp5.setValue(otp5);
        await this.otp6.setValue(otp6);
        await this.btnKirim.click();
    }
}

export default new FormDaftarScreen();