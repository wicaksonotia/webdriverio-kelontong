import { Given, When, Then } from '@cucumber/cucumber';
import KepingScreen from '../../screenobjects/beranda/kepingScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.page();
});

When(/^I click Keping$/, async () => {
    await BerandaScreen.clickKeping();
});

Then(/^system should be leading to Keping Screen$/, async () => {
    await KepingScreen.page();
});

When(/^I click tab Keping Masuk$/, async () => {
    await KepingScreen.openTabKepingMasuk();
});

//belanja langsung = kasir - transfer kupon
//pesan antar = confirm order; pesanan diterima
Then(/^I should be able to check keping masuk from pesan antar or belanja lansung$/, async () => {
    await KepingScreen.kepingMasukCheck();
    await KepingScreen.showJumlahKeping();

    // await BerandaScreen.clickKeping();
});