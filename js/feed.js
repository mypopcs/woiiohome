import dataHandler from "./data.js";
const elById = (IdName) => document.getElementById(IdName);
const userFeedURLs = [];
const inputValue = elById("input")

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
    handleGotoFeed(){
        this.addFeedURL(inputValue.value);
        if(userFeedURLs.length == 0) {
            return;
        }
        //设置存储
        dataHandler.saveData('userFeedURLs', userFeedURLs);
    }
}
const feedHandler = new feedHandle()
export default feedHandler