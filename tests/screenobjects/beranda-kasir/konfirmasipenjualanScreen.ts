import Gestures from '../../helpers/Gestures';
import AppScreen from '../AppScreen';

//sub screen containing specific selectors and methods for a specific screen
class KonfirmasiPenjualanScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');
    }

    //define selectors using getter methods
    private get namaProduk0 () { return $('~namaProduk0'); }
    private get fieldCounterKasirProduct0 () { return $('~fieldCounterKasirProduct0'); }
    private get harga0 () { return $('~harga0'); }
    private get hapusProduk0 () { return $('~hapusProduk0'); }
    private get addQuantityProduct0 () { return $('~btnCounterIncreaseKasirProduct0'); }
    private get namaProduk1 () { return $('~namaProduk1'); }
    private get fieldCounterKasirProduct1 () { return $('~fieldCounterKasirProduct1'); }
    private get harga1 () { return $('~harga1'); }
    private get hapusProduk1 () { return $('~hapusProduk1'); }
    private get addQuantityProduct1 () { return $('~btnCounterIncreaseKasirProduct1'); }

    private get tanggalKonfirmPenjualan () { return $('~tanggalKonfirmPenjualan'); }
    private get totalProdukKonfirmPenjualan () { return $('~totalProdukKonfirmPenjualan'); }
    private get hargaKonfirmPenjualan () { return $('~hargaKonfirmPenjualan'); }

    private get potonganKonfirmPenjualan () { return $('~potonganKonfirmPenjualan'); }
    private get allowPermission () { return $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]'); }
    private get voucherTabBarBtn2 () { return $('~voucherTabBarBtn2'); }
    private get inputVoucherCode () { return $('~inputVoucherCode'); }
    private get inputKirimVoucher () { return $('~inputKirimVoucher'); }
    private get btnOK () { return $('//*[@resource-id="android:id/button1"]'); }

    private get nomorPonsel () { return $('~nomorPonsel'); }
    private get openCouponFieldsModal () { return $('~openCouponFieldsModal'); }
    private get submitNomorPonsel () { return $('~SubmitNomorPonsel'); }
    private get transferKupon () { return $('~transferKupon'); }
    private get kuponDiTransfer () { return $('~kuponDiTransfer'); }
    private get kuponDiTransferNama () { return $('~kuponDiTransferNama'); }
    private get kuponDiTransferPhone () { return $('~kuponDiTransferPhone'); }

    private get totalHargaKonfirmPenjualan () { return $('~totalHargaKonfirmPenjualan'); }
    private get printNota () { return $('~printToggle'); }
    private get lanjutkanTransaksi () { return $('~lanjutkanTransaksi'); }


    //a method to encapsule automation code to interact with the page
    async page () {
        await expect(this.potonganKonfirmPenjualan).toBeDisplayed();
    }

    async checkCoupon ({ nomorPonsel } : { nomorPonsel:string; }) {
        // await this.addQuantityProduct0.click();
        await this.nomorPonsel.click();
        await this.openCouponFieldsModal.click();
        await expect(this.nomorPonsel).toBeDisplayed();
        await this.nomorPonsel.setValue(nomorPonsel);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.submitNomorPonsel.click();
        await this.transferKupon.click();
    }

    async totalCoupon () {
        console.log('Kupon yang ditransfer: '+await this.kuponDiTransfer.getText());
        console.log('Kepada: '+await this.kuponDiTransferNama.getText()+' '+await this.kuponDiTransferPhone.getText());
    }

    async totalPotongan () {
        console.log('Potongan / Voucher (Produk Non Rokok): Rp, 10.000');
    }

    async inputDiscountFail ({ discount } : { discount:string; }) {
        await this.potonganKonfirmPenjualan.click();
        // await this.allowPermission.click();
        await this.voucherTabBarBtn2.click();
        await expect(this.inputVoucherCode).toBeDisplayed();
        await this.inputVoucherCode.setValue(discount);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.inputKirimVoucher.click();
        await this.btnOK.click();
    }

    async inputDiscountSuccess ({ discount } : { discount:string; }) {
        await this.inputVoucherCode.setValue(discount);
        if (await driver.isKeyboardShown()) {
            await driver.hideKeyboard();
        }
        await this.inputKirimVoucher.click();
    }

    async produk () {
        console.log('List Produk:');
        console.log(await this.namaProduk0.getText()+' '+await this.fieldCounterKasirProduct0.getText()+' x '+await this.harga0.getText());
        console.log(await this.namaProduk1.getText()+' '+await this.fieldCounterKasirProduct1.getText()+' x '+await this.harga1.getText());
        console.log(' ');
        console.log('Tanggal: '+await this.tanggalKonfirmPenjualan.getText());
        console.log('Total Produk/Barang: '+await this.totalProdukKonfirmPenjualan.getText());
        console.log('Harga: '+await this.hargaKonfirmPenjualan.getText());
    }

    async produk1 () {
        console.log('List Produk:');
        console.log(await this.namaProduk0.getText()+' '+await this.fieldCounterKasirProduct0.getText()+' x '+await this.harga0.getText());
        // console.log(await this.namaProduk1.getText()+' '+await this.fieldCounterKasirProduct1.getText()+' x '+await this.harga1.getText());
        console.log(' ');
        console.log('Tanggal: '+await this.tanggalKonfirmPenjualan.getText());
        console.log('Total Produk/Barang: '+await this.totalProdukKonfirmPenjualan.getText());
        console.log('Harga: '+await this.hargaKonfirmPenjualan.getText());
    }

    async createOrder () {
        await Gestures.checkIfDisplayedWithSwipeUp(await this.printNota, 10);
        console.log('Total Harga: '+await this.totalHargaKonfirmPenjualan.getText());
        await this.lanjutkanTransaksi.click();
    }
}

export default new KonfirmasiPenjualanScreen();