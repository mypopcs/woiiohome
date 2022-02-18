import feedHandler from "./feed.js"
import datahander from "./data.js"
class newTab {
    initHandle(){
        const doc = $(document.body)
        doc.on('click', '#gotoFeedButton', () => feedHandler.saveFeed())
    }
    //总入口
    init(){
        datahander.getFeed()
        this.initHandle()
    }
}
var index = new newTab;
index.init()