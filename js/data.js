class dataHandle {
    //存储数据
    saveData(key,val){
        localStorage.setItem(key, JSON.stringify(val))
    }
    getData(key){
        console.log(key)
        return JSON.parse(localStorage.getItem(key));
        console.log('12')
    }
}
const datahander = new dataHandle()
export default datahander