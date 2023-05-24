import { Given, When, Then } from '@cucumber/cucumber';
import FirstScreen from '../../screenobjects/auth/firstScreen';
import LoginScreen from '../../screenobjects/auth/loginScreen';
import SecurityCodeScreen from '../../screenobjects/auth/securitycodeScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import ProfileScreen from '../../screenobjects/akunsaya/ubahprofilScreen';
import AkunSayaScreen from '../../screenobjects/akunsaya/akunsayaScreen';

Given(/^I am on the Login page$/, async () => {
    await FirstScreen.allowPermissions();
    await FirstScreen.masuk();
});

When(/^I login with smoker and employee account$/, async () => {
    await LoginScreen.loginKelontong({ nohp: '082182845985' });
    await LoginScreen.lanjut();
    await SecurityCodeScreen.inputSecurityCode();
    await SecurityCodeScreen.kirim();
});

Then(/^system should be able to show pop-up notification and banner 'Merokok dan Employee'$/, async () => {
    await BerandaScreen.refresh();
    await BerandaScreen.waitBanner();
    await BerandaScreen.clickBanner();
    await BerandaScreen.clickAkunSaya();
    await driver.pause(5000)
    await AkunSayaScreen.clickUbahProfil();
    await driver.pause(5000)
});