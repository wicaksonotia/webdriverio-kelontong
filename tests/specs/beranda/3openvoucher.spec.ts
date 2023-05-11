import { Given, When, Then } from '@cucumber/cucumber';
import VoucherScreen from '../../screenobjects/beranda/voucherScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';

Given(/^I am on the Home page$/, async () => {    
    await BerandaScreen.page();
});

When(/^I click Voucher$/, async () => {
    await BerandaScreen.clickVoucher();
});

Then(/^I should be able to see my existing voucher$/, async () => {
    await VoucherScreen.page();
    await VoucherScreen.openVoucher();
    // await VoucherScreen.openRiwayatPenukaran();
    // await VoucherScreen.openKupon();

    // await BerandaScreen.clickVoucher();
});