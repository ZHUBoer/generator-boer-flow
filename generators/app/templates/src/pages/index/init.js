import "/assets/global/global";
import indexPage from "./index";
import { setupFastClick, setupBorderScale } from '../../utils/mobile-utils';


(function () {
    function init() {
        try {
            // 初始化移动端适配
            if (isMobile()) {
                setupFastClick();
                setupBorderScale();
            }
            indexPage.renderPage();
        } catch (err) {
            throw err;
        }
    }
    init();
})();
