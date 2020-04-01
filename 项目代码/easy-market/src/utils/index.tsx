import Cookie from 'js-cookie'

const key = 'x-nideshop-token';
export let setToken = (val:string)=>{
    Cookie.set(key, val)
}

export let getToken = ()=>{
    return Cookie.get(key)
}

export let removeToken = ()=>{
    Cookie.remove(key);
}

//事件优化 防抖
export let debounce = (func:Function,delay=150)=>{
    let timer:number = 0;
    return (...args:any[])=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func(...args);
        },delay) as unknown as number;
    }
}
//事件三要素：事件源  事件类型  事件处理函数
//事件模型：事件捕获 事件冒泡  事件委托
//节流
export let throttle = (func:Function,delay=150)=>{
    let timer:number = +new Date();
    return (...args:any[])=>{
        let now:number = +new Date();
        if(now - timer >delay){
        func(...args)
        timer = now;
        }
    }
    
}