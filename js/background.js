import feedHandler from "./feed.js"
class newTab {
    initHandle(){
        const doc = $(document.body)
        doc.on('click', '#gotoFeedButton', () => feedHandler.handleGotoFeed())
    }
    //总入口
    init(){
        this.initHandle()
    }
}
var index = new newTab;
index.init()