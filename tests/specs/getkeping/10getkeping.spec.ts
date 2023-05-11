import { Given, When, Then } from '@cucumber/cucumber';
import BerandaScreen from '../../screenobjects/beranda-kasir/berandaScreen';
import KasirScreen from '../../screenobjects/beranda-kasir/kasirScreen';
import KonfirmasiPenjualanScreen from '../../screenobjects/beranda-kasir/konfirmasipenjualanScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click menu Kasir and make an order$/, async () => {
    await BerandaScreen.clickKasir();
    await BerandaScreen.lewati();
    await KasirScreen.page();
    await driver.pause(3000);
    await KasirScreen.clickProduct4();
    // await KasirScreen.clickProduct6();
    await KasirScreen.konfirmasiPenjualan();
});

Then(/^I should be able to check total coupons I can transfer$/, async () => {
    await KonfirmasiPenjualanScreen.page();
    await KonfirmasiPenjualanScreen.checkCoupon({nomorPonsel: '82182845985'});
    await KonfirmasiPenjualanScreen.produk1();
    await KonfirmasiPenjualanScreen.totalCoupon();
    await KonfirmasiPenjualanScreen.createOrder();
    await BerandaScreen.clickOK();
    await BerandaScreen.page();

    // await BerandaScreen.lewati();
});