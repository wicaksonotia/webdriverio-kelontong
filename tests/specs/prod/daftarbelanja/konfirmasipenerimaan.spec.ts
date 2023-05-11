import { Given, When, Then } from '@cucumber/cucumber';
import ListOrderScreen from '../../screenobjects/daftarbelanja/daftarbelanjaScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {   
    await BerandaScreen.page();
});

When(/^I click menu Daftar Belanja$/, async () => {
    await BerandaScreen.clickDaftarBelanja();
});

Then(/^I should be able to confirm order$/, async () => {
    await ListOrderScreen.page();
    await ListOrderScreen.openTabDikirim();
    await ListOrderScreen.konfirmasiPenerimaan();
});