import AppScreen from '../AppScreen';
import Gestures from '../../helpers/Gestures';

//sub screen containing specific selectors and methods for a specific screen
class HiburanScreen extends AppScreen {
    constructor () {
        super('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout');
    }
    
    //define selectors using getter methods
    private get cardTantangan () { return $('~cardTantangan'); }
    private get cardMainBareng () { return $('~cardMainBareng'); }
    private get btnBack () { return $('~btnHeaderBack'); }

    //a method to encapsule automation code to interact with the page
    async page () {
        await this.cardTantangan.waitForDisplayed();
        await this.cardMainBareng.waitForDisplayed();
    }

    async clickTantangan () {
        await this.cardTantangan.click();
    }  

    async clickMainBareng () {
        await this.cardMainBareng.click();
    }

    async back () {
        await this.btnBack.click();
    }
}

export default new HiburanScreen();