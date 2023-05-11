import { Given, When, Then } from '@cucumber/cucumber';
import allureReporter from '@wdio/allure-reporter';
import HiburanScreen from '../../screenobjects/beranda/hiburanScreen';
import PeluangScreen from '../../screenobjects/beranda/peluangScreen';
import TerdekatScreen from '../../screenobjects/beranda/terdekatScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {   
    await BerandaScreen.page();
});

When(/^I click menu Hiburan$/, async () => {
    await BerandaScreen.clickHiburan();
});

Then(/^I should be able to see my hiburan$/, async () => {
    await HiburanScreen.page();
    await HiburanScreen.back();
});

When(/^I click menu Peluang$/, async () => {
    await BerandaScreen.clickPeluang();
});

Then(/^I should be able to see my peluang$/, async () => {
    // await PeluangScreen.allowPermissions();
    await PeluangScreen.page();
    await PeluangScreen.openTerbaru();
    await PeluangScreen.openBerlalu();
    await PeluangScreen.close();
});

When(/^I click menu Terdekat$/, async () => {
    await BerandaScreen.clickTerdekat();
});

Then(/^I should be able to see my nearest store$/, async () => {
    await TerdekatScreen.page();
});