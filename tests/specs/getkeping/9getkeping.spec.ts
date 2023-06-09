import { Given, When, Then } from '@cucumber/cucumber';
import StoreListScreen from '../../screenobjects/beranda/pesanantar/storelistScreen';
import StoreScreen from '../../screenobjects/beranda/pesanantar/storeScreen';
import DetailProdukScreen from '../../screenobjects/beranda/pesanantar/detailprodukScreen';
import CartScreen from '../../screenobjects/beranda/pesanantar/cartScreen';
import DetailBelanjaScreen from '../../screenobjects/beranda/pesanantar/detailbelanjaScreen';
import DetailPembelianScreen from '../../screenobjects/beranda/pesanantar/detailpembelianScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {
    await BerandaScreen.page();
});

When(/^I click menu Pesan Antar$/, async () => {
    await BerandaScreen.clickPesanAntar();
    // await BerandaScreen.clickLanjut();
});

Then(/^I should be able to make an order$/, async () => {
    // await StoreListScreen.chooseLoc();
    await StoreListScreen.page();
    await StoreListScreen.clickStore();
    await StoreScreen.page();
    await StoreScreen.clickRokok();
    await DetailProdukScreen.page();
    await DetailProdukScreen.makeOrderRokok();
    await DetailProdukScreen.back();
    await DetailProdukScreen.back();
    await StoreScreen.page();
    await StoreScreen.clickMakanan();
    await DetailProdukScreen.page();
    await DetailProdukScreen.makeOrderMakanan();
    await CartScreen.page();
    await CartScreen.makeOrder();
    await CartScreen.accRokok();
    await DetailBelanjaScreen.page();
    // await DetailBelanjaScreen.makeOrder();
    await DetailBelanjaScreen.checkoutOrder();
});

When(/^I click Lihat Detail Pembelian$/, async () => {
    await driver.pause(20000); //proses order di Kasir
    await DetailBelanjaScreen.checkOrderDetail();
    // await DetailPembelianScreen.page();
    // await DetailPembelianScreen.confirmOrder();
});

Then(/^I should be able confirm that the order was accepted$/, async () => {
    await DetailPembelianScreen.page();
    await DetailPembelianScreen.confirmOrder();
    await DetailPembelianScreen.back();
    await DetailBelanjaScreen.transactionSuccess();

    // await BerandaScreen.clickPesanAntar();
});
