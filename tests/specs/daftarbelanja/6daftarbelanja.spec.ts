import { Given, When, Then } from '@cucumber/cucumber';
import ListOrderScreen from '../../screenobjects/daftarbelanja/daftarbelanjaScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {
    await driver.pause(5000);
});

When(/^I click menu Daftar Belanja$/, async () => {
    await BerandaScreen.clickDaftarBelanja();
});

Then(/^I should be able to check order history$/, async () => {
    await driver.pause(5000);
    await ListOrderScreen.listOrder();
});