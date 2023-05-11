import { Given, When, Then } from '@cucumber/cucumber';
import FirstScreen from '../../screenobjects/auth/firstScreen';
import LoginScreen from '../../screenobjects/auth/loginScreen';
import SecurityCodeScreen from '../../screenobjects/auth/securitycodeScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import AkunSayaScreen from '../../screenobjects/akunsaya/akunsayaScreen';
import ProfileScreen from '../../screenobjects/akunsaya/ubahprofilScreen';

Given(/^I am on the Login page$/, async () => {    
    await FirstScreen.waitForIsShown(true);
    await FirstScreen.allowPermissions();
    await FirstScreen.masuk();
});

When(/^I login with non-smoker and non-employee account$/, async () => {
    await LoginScreen.waitForIsShown(true);
    await LoginScreen.loginKelontong({nohp: '8158022522'});
    await LoginScreen.lanjut();
    await SecurityCodeScreen.inputSecurityCode();
    await SecurityCodeScreen.kirim();
});

Then(/^system should be leading to Beranda page without or with banner except 'Merokok dan Employee'$/, async () => {
    await BerandaScreen.beforeshowAccountName();
    await BerandaScreen.showAccountName({shopname: 'Jimmy'});
    await BerandaScreen.page();
    // await BerandaScreen.waitBanner();
    await BerandaScreen.refresh();
    await BerandaScreen.clickAkunSaya();
    await AkunSayaScreen.page();
    await AkunSayaScreen.clickUbahProfil();
    await ProfileScreen.page();

    // await BerandaScreen.page();
});