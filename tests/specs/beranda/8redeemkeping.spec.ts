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
    await KepingScreen.showJumlahKeping();
});

When(/^I click card Voucher Belanja and click button Tukar$/, async () => {
    await KepingScreen.tukarVoucherBelanja();
});

Then(/^I should be able to redeem keping$/, async () => {
    // await KepingScreen.historyCheck();
    await KepingScreen.showJumlahKeping();
});