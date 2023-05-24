import { Given, When, Then } from '@cucumber/cucumber';
import FisrtScreen from '../../screenobjects/auth/firstScreen';
import FormDaftarScreen from '../../screenobjects/auth/formcreateaccountScreen';
import SecurityCodeScreen from '../../screenobjects/auth/securitycodeScreen';
import LandingScreen from '../../screenobjects/auth/landingScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import AkunSayaScreen from '../../screenobjects/akunsaya/akunsayaScreen';
import ProfileScreen from '../../screenobjects/akunsaya/ubahprofilScreen';
import LoginScreen from '../../screenobjects/auth/loginScreen';
const dataTest = require('../../datatest/ayokelontong.data');

Given(/^I am on the Home page$/, async () => {
    await driver.pause(10000);
});

When(/^I click tab Akun Saya$/, async () => {
    await BerandaScreen.clickAkunSaya();
});

Then(/^system should be leading to Akun Saya page$/, async () => {
    // await AkunSayaScreen.waitForIsShown(true);
});

Given(/^I am on the Akun Saya page$/, async () => {
    await AkunSayaScreen.page();
});

When(/^I delete my account$/, async () => {
    await AkunSayaScreen.clickPengaturanPrivasi();
    await AkunSayaScreen.hapusAkun({ otp1: '1', otp2: '2', otp3: '3', otp4: '4', otp5: '5', otp6: '6' });
});

Then(/^system should be leading to Login page$/, async () => {
    // await LoginScreen.waitForIsShown(true);
});

Given(/^I am on the Login page$/, async () => {
    await LoginScreen.page();
});

When(/^I click link Buat akun di sini$/, async () => {
    await LoginScreen.buatAkun();
});

Then(/^system should be leading to form Daftar$/, async () => {
    // await FormDaftarScreen.waitForIsShown(true);
});

Given(/^I am on the form Daftar$/, async () => {
    await FormDaftarScreen.page();
});

When(/^I complete the data and click button Daftar$/, async () => {
    await FormDaftarScreen.inputData({ NamaLengkap: dataTest.createAccount.inpNamaLengkap, NomorPonsel: dataTest.createAccount.inpNomorPonsel });
    await FormDaftarScreen.submit();
    await FormDaftarScreen.otp({ otp1: '1', otp2: '2', otp3: '3', otp4: '4', otp5: '5', otp6: '6' });
});

Then(/^I should be able to get a new account$/, async () => {
    await SecurityCodeScreen.inputSecurityCode();
    await SecurityCodeScreen.kirim();
    await SecurityCodeScreen.inputSecurityCode();
    await SecurityCodeScreen.kirim();
    await driver.pause(5000)
    await LandingScreen.mulai();

    // await BerandaScreen.waitForIsShown(true);
    // await BerandaScreen.beforeshowAccountNameca();
    await driver.pause(5000)
    await BerandaScreen.clickSetuju();
    // await BerandaScreen.showAccountName({ shopname: 'Sisda' });
    // await BerandaScreen.clickOK();
    // await BerandaScreen.clickSetuju();
    // await BerandaScreen.clickAkunSaya();
    // await AkunSayaScreen.page();
    // await AkunSayaScreen.clickUbahProfil();
    // await ProfileScreen.inputData({TahunLahir: dataTest.createAccount.tahunLahir, BulanLahir: dataTest.createAccount.bulanLahir, TanggalLahir: dataTest.createAccount.tahunLahir});
    // await AkunSayaScreen.page();
    // await AkunSayaScreen.clickBeranda();
    // await BerandaScreen.clickAkunSaya();
    // await BerandaScreen.clickOK();
});