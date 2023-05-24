import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import AkunSayaScreen from '../../screenobjects/akunsaya/akunsayaScreen';
import ProfileScreen from '../../screenobjects/akunsaya/ubahprofilScreen';
import BantuanScreen from '../../screenobjects/akunsaya/bantuanScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {
    await BerandaScreen.clickNanti();
});

When(/^I click menu Akun Saya$/, async () => {
    await driver.pause(5000);
    await BerandaScreen.clickAkunSaya();
});

Then(/^I should be able to edit profile, make call and send whatsapp message$/, async () => {
    await AkunSayaScreen.clickUbahProfil();
    await ProfileScreen.editProfile();
    await AkunSayaScreen.clickBantuan();
    await BantuanScreen.openKontak();
    await BantuanScreen.callChat();

    // await BerandaScreen.clickAkunSaya();
});