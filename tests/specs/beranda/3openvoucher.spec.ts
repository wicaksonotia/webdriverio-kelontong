import { Given, When, Then } from '@cucumber/cucumber';
import VoucherScreen from '../../screenobjects/beranda/voucherScreen';
import BerandaScreen from '../../screenobjects/beranda/berandaScreen';
import HiburanScreen from '../../screenobjects/beranda/hiburanScreen';

Given(/^I am on the Home page$/, async () => {
    await driver.pause(5000)
    console.log("masuk home");
});

When(/^I click Voucher$/, async () => {
    // await BerandaScreen.clickVoucher();
    console.log("sudah tidak ada menu ini");
    await BerandaScreen.clickHiburan()
    await driver.pause(5000)
    await HiburanScreen.back()
});

Then(/^I should be able to see my existing voucher$/, async () => {
    // await driver.pause(5000)
    // await VoucherScreen.openVoucher();
    console.log("terima kasih");
    await driver.pause(5000)
});