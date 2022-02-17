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
}
const datahander = new dataHandle()
export default datahander