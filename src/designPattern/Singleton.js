class singleton {
	constructor (val) {
		this.current = val
    	console.log('singleton: ', this.current)
	}
}

singleton.getInstance = val => {
    if (!this.instance) { // 关键语句
        this.instance = new singleton(val);
    }
    return this.instance;
}

// 通过singleton.getInstance()获取唯一实例
const singleObj = singleton.getInstance('单例');
console.log('current: ', singleObj.current)

const singleObj1 = singleton.getInstance('单例');
console.log('current: ', singleObj1.current)

const singleObj2 = singleton.getInstance('单例1');
console.log('current: ', singleObj2.current)