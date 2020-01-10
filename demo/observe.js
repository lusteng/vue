


// 转换数据可观察，观察者对象
class Observer{
    constructor(_data){
        
        this.transObs(_data)
    }
    transObs(_data){
        let dep = new Dep()
        for(let key in _data){ 
            let val = _data[key]
            let dep = new Dep()
            Object.defineProperty(_data, key, {
                get(val){
                    //访问数据，收集依赖 
                    console.log('fffffff')
                    return val
                },
                set(newVal){
                    if(val === newVal){
                        return 
                    }
                    // 触发界面变更
                }
            })
        }
    }
    _defineProperty(_data, key){
    }
}

// 依赖收集器，通知订阅者变更，邮局的功能
class Dep{
    constructor(){
        this.subs = []
    }
    addSub(watcher){
        this.subs.push(watcher)
    }
}

class Watcher{
    constructor(){
        
    }
}

const observe = (_data) => { 
    // 转化_data成可观察对象
    new Observer(_data)
}

class Vue{
    constructor(options){
        if(options.data && typeof options.data === 'function'){
            let _data = options.data.call(this) 
            this._data = _data
            observe(_data)
        }
    }
}



let vm = new Vue({
    data(){
        return {
            test: "sdfsdfds"
        }
    }
})


vm._data.test = 'fdsfdf'