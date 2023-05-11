import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class AkunSayaScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }
    
    //define selectors using getter methods
    private get btnIconProfile () { return $('~btnIconProfile'); }

    private get btnPengaturanUbahProfil () { return $('~btnPengaturanUbahProfil'); }
    private get btnPengaturanTokoLangganan () { return $('~btnPengaturanTokoLangganan'); }
    private get btnPengaturanLokasiTersimpan () { return $('~btnPengaturanLokasiTersimpan'); }
    private get btnPengaturanBantuan () { return $('~btnPengaturanBantuan'); }
    private get btnPengaturanPengaturanPrivasi () { return $('~btnPengaturanPengaturanPrivasi'); }
      private get btnPengaturanHapusAkunSaya () { return $('~btnPengaturanHapusAkunSaya'); }
      private get btnYA () { return $('//*[@resource-id="android:id/button1"]'); }
      private get otp1 () { return $('~inpKodeOtp_1'); }
      private get otp2 () { return $('~inpKodeOtp_2'); }
      private get otp3 () { return $('~inpKodeOtp_3'); }
      private get otp4 () { return $('~inpKodeOtp_4'); }
      private get otp5 () { return $('~inpKodeOtp_5'); }
      private get otp6 () { return $('~inpKodeOtp_6'); }
      private get btnKirim () { return $('~btnKirim'); }
    private get btnPengaturanKeluar () { return $('~btnPengaturanKeluar'); }

    private get bottomBarBeranda () { return $('~bottomBarBeranda'); }
    private get bottomBarDaftarBelanja () { return $('~bottomBarDaftarBelanja'); }
    private get bottomBarPesan () { return $('~bottomBarPesan'); }
    private get bottomBarAkunSaya () { return $('~bottomBarAkunSaya'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.btnIconProfile).toBeDisplayed();
        await expect(this.btnPengaturanUbahProfil).toBeDisplayed();
        await expect(this.btnPengaturanTokoLangganan).toBeDisplayed();
        await expect(this.btnPengaturanLokasiTersimpan).toBeDisplayed();
        await expect(this.btnPengaturanBantuan).toBeDisplayed();
        await expect(this.btnPengaturanPengaturanPrivasi).toBeDisplayed();
        await expect(this.btnPengaturanKeluar).toBeDisplayed();
        await expect(this.bottomBarBeranda).toBeDisplayed();
        await expect(this.bottomBarDaftarBelanja).toBeDisplayed();
        await expect(this.bottomBarPesan).toBeDisplayed();
        await expect(this.bottomBarAkunSaya).toBeDisplayed();
    }

    async clickUbahProfil () {
        await this.btnPengaturanUbahProfil.click();
    }

    async clickTokoLangganan () {
        await this.btnPengaturanTokoLangganan.click();
    }

    async clickLokasiTersimpan () {
        await this.btnPengaturanLokasiTersimpan.click();
    }

    async clickBantuan () {
        await this.btnPengaturanBantuan.click();
    }

    async clickPengaturanPrivasi () {
        await this.btnPengaturanPengaturanPrivasi.click();
    }

    async hapusAkun ({ otp1, otp2, otp3, otp4, otp5, otp6 } : { otp1:string; otp2:string; otp3:string; otp4:string; otp5:string; otp6:string;}) {
        await this.btnPengaturanHapusAkunSaya.click();
        await this.btnYA.click();
        await this.otp1.setValue(otp1);
        await this.otp2.setValue(otp2);
        await this.otp3.setValue(otp3);
        await this.otp4.setValue(otp4);
        await this.otp5.setValue(otp5);
        await this.otp6.setValue(otp6);
        await this.btnKirim.click();
    }

    async clickKeluar () {
        await this.btnPengaturanKeluar.click();
    }

    async clickBeranda () {
        await this.bottomBarBeranda.click()
    }
}

export default new AkunSayaScreen();