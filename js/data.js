class dataHandle {
    //存储数据
    saveData(key,val){
        localStorage.setItem(key, val)
    }
    getData(key){
        localStorage.getItem(key)
    }
}
const datahander = new dataHandle()
export default datahander