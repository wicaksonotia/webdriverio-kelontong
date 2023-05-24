import { Given, When, Then } from '@cucumber/cucumber';
import VoucherScreen from '../../screenobjects/beranda/voucherScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {
    await driver.pause(5000)
});

When(/^I click Voucher$/, async () => {
    await BerandaScreen.clickVoucher();
});

Then(/^I should be able to see my existing voucher$/, async () => {
    await driver.pause(5000)
    await VoucherScreen.openVoucher();
});