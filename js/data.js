const API = "https://api.rss2json.com/v1/api.json?rss_url=";
const elById = (IdName) => document.getElementById(IdName);
class dataHandle {
    //存储数据
    saveData(key,val){
        //转为对象
        localStorage.setItem(key, JSON.stringify(val))
    }
    getData(key){
        return JSON.parse(localStorage.getItem(key));
    }
    clearData(){
        localStorage.clear()
    }
    //存储feed
    //先调用存储为数组，判断是否有内容，如果没有内容就直接存储，
    saveFeed(feedurl){
        const urlFeed = this.getData('userFeedURLs');
        //如果有内容就需将新内容保存到数组后再存储
        if(urlFeed != null){
            //已有内容就把内容添加进原来的组
            urlFeed.unshift(feedurl);
            //将更新后的组保存
            this.saveData('userFeedURLs',urlFeed)
        } else {
            //如果不存在就直接新建数组
            const feedList = [];
            feedList.push(feedurl)
            this.saveData('userFeedURLs',feedList)
        }
    }
    //获取feed
    getFeed(){
        const urlFeed = this.getData('userFeedURLs');
        if (urlFeed != null){
            urlFeed.forEach(userUrl => {
                $.ajax({
                    type: 'GET',
                    url: API + userUrl,
                    dataType: 'jsonp',
                    success: (data) => {
                        var content = elById('content')
                        var rssName = "<p>来自：" + data.feed.title + "</p>"
                        //在指定的地方插入html内容和文本内容,benforeend在当前元素节点的里面，插在它的最后一个子元素之后
                        content.insertAdjacentHTML('beforeend',rssName);
                        data.items.forEach(item => {
                            var newItem = ""
                            newItem += "<div class=\"container\" id=\"item\"><a href=\"" + item.link + "\"><h3>" + item.title + "</h3></a>"
                            if (item.author != "")
                                newItem += "<span> 作者： " + item.author + "</span>";
                            newItem += "<span>发布日期：" + item.pubDate + "</span>";
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
const datahander = new dataHandle()
export default datahander