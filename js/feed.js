import dataHandler from "./data.js";
const elById = (IdName) => document.getElementById(IdName);
const userFeedURLs = [];
const inputValue = elById("input")
const API = "https://api.rss2json.com/v1/api.json?rss_url=";
const urlFeed = dataHandler.getData('userFeedURLs');
class feedHandle {
    removeHtmlTagsFromURL(u){
        return u.replace(/(<([^>]+)>)/ig, "");
    }
    addFeedURL(url){
        this.removeHtmlTagsFromURL(url);
        if(url == ""){
            alert("请输入正确的网址")
            return;
        }
        userFeedURLs.push(url);
        inputValue.value = "";
        var listElement = "<li class=\"list-group-item border border-dark bg-white\"><h5>" + url + "</h5></li>"
    }
    //存储feed
    saveFeedHandle(){
        this.addFeedURL(inputValue.value);
        if(userFeedURLs.length == 0) {
            return;
        }
        //设置存储
        dataHandler.saveData('userFeedURLs', userFeedURLs);
    }
    //获取feed
    getFeedHandle(){
        urlFeed.forEach(userUrl => {
            $.ajax({
                type: 'GET',
                url: API + userUrl,
                dataType: 'jsonp',
                success: (data) => {
                    data.items.forEach(item => {
                        var content = elById('content')
                        var newItem = ""
                        newItem += "<div class=\"container\" id=\"item\"><a href=\"" + item.link + "\"><h1>" + item.title + "</h1></a>" + "<h4> from " + data.feed.title + "</h4>"
                        if (item.author != "")
                            newItem += "<h4> By " + item.author + "</h4>";
                        newItem += "<h4>Published Date: " + item.pubDate + "</h4>";
                        newItem += item.description + "<hr></div>";
                        content.insertAdjacentHTML('beforeend', newItem);
                    })
                    // console.log(data)
                }
            })
        });
    }
}
const feedHandler = new feedHandle()
export default feedHandler