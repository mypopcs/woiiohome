import feedHandler from "./feed.js"
class newTab {
    initHandle(){
        const doc = $(document.body)
        doc.on('click', '#gotoFeedButton', () => feedHandler.saveFeedHandle())
    }
    //总入口
    init(){
        feedHandler.getFeedHandle()
        this.initHandle()
    }
}
var index = new newTab;
index.init()