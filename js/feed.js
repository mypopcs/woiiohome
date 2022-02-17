import dataHandler from "./data.js";
const elById = (IdName) => document.getElementById(IdName);
const inputValue = elById("input")
const API = "https://api.rss2json.com/v1/api.json?rss_url=";
const urlFeed = dataHandler.getData('userFeedURLs');
class feedHandle {
    removeHtmlTagsFromURL(u){
        return u.replace(/(<([^>]+)>)/ig, "");
    }
    saveFeed(){
        if(inputValue.value == ''){
            alert('请输入正确的网址')
            return;
        } else{
            this.saveFeedHandle(inputValue.value)
        }
    }
    //存储feed
    //先调用存储为数组，判断是否有内容，如果没有内容就直接存储，
    saveFeedHandle(feedurl){
        //如果有内容就需将新内容保存到数组后再存储
        if(urlFeed != null){
            //已有内容就把内容添加进原来的组
            urlFeed.unshift(feedurl);
            //将更新后的组保存
            dataHandler.saveData('userFeedURLs',urlFeed)
        } else {
            //如果不存在就直接新建数组
            const feedList = [];
            feedList.push(feedurl)
            dataHandler.saveData('userFeedURLs',feedList)
        }
        this.removeHtmlTagsFromURL(feedurl);
    }
    //获取feed
    getFeedHandle(){
        if (urlFeed != null){
            urlFeed.forEach(userUrl => {
                $.ajax({
                    type: 'GET',
                    url: API + userUrl,
                    dataType: 'jsonp',
                    success: (data) => {
                        data.items.forEach(item => {
                            var content = elById('content')
                            var newItem = ""
                            newItem += "<div class=\"container\" id=\"item\"><a href=\"" + item.link + "\"><h1>" + item.title + "</h1></a>" + "<h4>来自：" + data.feed.title + "</h4>"
                            if (item.author != "")
                                newItem += "<h4> 作者： " + item.author + "</h4>";
                            newItem += "<h4>发布日期：" + item.pubDate + "</h4>";
                            newItem += item.description + "<hr></div>";
                            content.insertAdjacentHTML('beforeend', newItem);
                        })
                        console.log(data)
                    }
                })
            });
        } else{
            return;
        }
    }
}
const feedHandler = new feedHandle()
export default feedHandler