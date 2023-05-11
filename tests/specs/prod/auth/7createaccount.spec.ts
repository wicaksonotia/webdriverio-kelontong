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
    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.page();
});

When(/^I click tab Akun Saya$/, async () => {
    await BerandaScreen.clickAkunSaya();
});

Then(/^system should be leading to Akun Saya page$/, async () => {
    await AkunSayaScreen.waitForIsShown(true);
});

Given(/^I am on the Akun Saya page$/, async () => {   
    await AkunSayaScreen.page();
});

When(/^I delete my account$/, async () => {
    await AkunSayaScreen.clickPengaturanPrivasi();
    await AkunSayaScreen.hapusAkun();
});

Then(/^system should be leading to Login page$/, async () => {
    await LoginScreen.waitForIsShown(true);
});

Given(/^I am on the Login page$/, async () => {   
    await LoginScreen.page();
});

When(/^I click link Buat akun di sini$/, async () => {
    await LoginScreen.buatAkun();
});

Then(/^system should be leading to form Daftar$/, async () => {
    await FormDaftarScreen.waitForIsShown(true);
});

Given(/^I am on the form Daftar$/, async () => {   
    await FormDaftarScreen.page();
});

When(/^I complete the data and click button Daftar$/, async () => {
    await FormDaftarScreen.inputData({NamaLengkap: dataTest.createAccount.inpNamaLengkap, NamaPanggilan: dataTest.createAccount.inpNamaPanggilan, NomorPonsel: dataTest.createAccount.inpNomorPonsel, BulanLahir: dataTest.createAccount.bulanLahir, TanggalLahir: dataTest.createAccount.tanggalLahir, TahunLahir: dataTest.createAccount.tahunLahir});
    await FormDaftarScreen.submit();
});

Then(/^I should be able to get a new account$/, async () => {
    await SecurityCodeScreen.waitForIsShown(true);
    await SecurityCodeScreen.inputSecurityCode();
    await SecurityCodeScreen.kirim();
    await SecurityCodeScreen.inputSecurityCode();
    await SecurityCodeScreen.kirim();

    await LandingScreen.mulai();

    await BerandaScreen.waitForIsShown(true);
    await BerandaScreen.clickSetuju();
    await BerandaScreen.clickAkunSaya();
    await AkunSayaScreen.page();
    await AkunSayaScreen.clickBeranda();
    await BerandaScreen.clickAkunSaya();
    await BerandaScreen.clickOK();
});