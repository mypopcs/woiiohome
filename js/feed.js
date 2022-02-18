import dataHandler from "./data.js";
const elById = (IdName) => document.getElementById(IdName);
const inputValue = elById("input")
class feedHandle {
    removeHtmlTagsFromURL(u){
        return u.replace(/(<([^>]+)>)/ig, "");
    }
    saveFeed(){
        if(inputValue.value == ''){
            alert('请输入正确的网址')
            return;
        } else{
            dataHandler.saveFeed(inputValue.value)
        }
        this.removeHtmlTagsFromURL(feedurl);
    }
}
const feedHandler = new feedHandle()
export default feedHandler