class Dep{ //添加多个订阅者
    constructor(){
        this.depArr=[]
        this.init()
    }
    init(){
        this.addDep()
    }
    addDep(watch){ //添加订阅者
        this.depArr.push(watch);
    }
    RunDep(){//触发相应的函数
     this.depArr.forEach((val) => {
         val.update()
        })
    }
}
Dep.target=null
let dep = new Dep()

class Observer{
    // observer实现，主要是给每个vue的属性用Object.defineProperty()劫持
    constructor(data){
        this.data=data;
        this.init()
    }
    init(){
        Object.keys(this.data).forEach(key=>{
            console.log(key)
            this.defineReactive(this.data,key,this.data[key])
        })
    }
    defineReactive(obj,key,value){
        new Observer(obj[key])
        Object.defineProperty(obj, key, {
            // 添加劫持之后的属性获取方法
            get() {
                if (Dep.target) {
                    dep.addDep(Dep.target)
                }
                return value
            },
          //设置属性时，调用
            set(newValue) {
                if (value === newValue) {
                    return;
                }
                value = newValue;//把新设置的值赋给value
                dep.RunDep();
                new Observer(value);
            }
        })
    }  
}
class Watcher{ //通知订阅者，改变了数据
    constructor(data, key, cbk){
         Dep.target = this;
         this.data=data;
         this.key=key;
         this.cbk=cbk;
    }
    init(){
        this.update()
    }
    update(){ 
        this.value = utils.getValue(this.key,this.data);
        console.log(this.value)
        Dep.target = null;
        return this.value;
    }
    get(){
        let newVal = this.init()
        this.cbk(newVal)
    }

}

class Mvm{
    constructor ({el,data}){
        this.data = data;//获取所有的data数据
        this.$el = document.getElementById(el) //获取大box
        this.init();
    }
    init(){
        let compile = this.createFragment()
        this.saveAttribute(compile)
        this.$el.appendChild(compile) //将文档碎片追加到box中
    }
    createFragment(){//创建文档碎片
        let FragmentNode = document.createDocumentFragment(); //文档碎片
        // console.dir(FragmentNode)
        let firstChild
        while(firstChild=this.$el.firstChild){
           FragmentNode.appendChild(firstChild) //将节点放入fragement中
        }
        return FragmentNode

    }
    saveAttribute(node){ //把节点的属性加上
       if(node.nodeType === 1){  //元素节点(input)
           let attribute = node.attributes;//获取节点上的属性
           [...attribute].forEach((v)=>{
               if(v.nodeName.indexOf('v-model')>-1){
                   node.addEventListener('input',(target)=>{
                    //    console.log(this.data)
                        let content=target.target.value;
                        //给data赋值
                        utils.changeValue(this.data,v.nodeValue,content)
                   })
                   //node是这个元素节点
                   //nodeValue是节点的值
                   //this.data是所有数据
                  utils.setInpValue(node,v.nodeValue,this.data,'value')
               }
           })
       }
       else if(node.nodeType === 3){ //文本(带{{}}的文本)
            if(node.textContent.indexOf('{{')>-1){
                let content=node.textContent.split('{{')[1].split('}}')[0]
                utils.setInpValue(node,content,this.data,'textContent')

                new Watcher(this.data,content, (newVal) => {
                    console.log(newVal)
                    node.textContent = newVal
                })
            }
            
       }
       //此元素节点上有子节点,递归子节点的属性
       if(node.childNodes && node.childNodes.length>0){
           node.childNodes.forEach((val)=>{
               this.saveAttribute(val)
           })
       }
    }
}
let utils={
    setInpValue(node,key,data,content){ //设置input框里的值
       node[content]=this.getValue(key,data)//设置元素的textConten或者value值
    //    console.dir(node)
    //    console.log(key)
    //    console.log(data)
    //    console.log(content)
    //    new Watcher(data, key, (value)=>{
    //     node[content]=value
    //    });
       //data是数据
       //node是元素节点
       //key是元素属性名
       //value是要改变的
       //创建新的watcher，会触发函数向对应属性的dep数组中添加订阅者，
    },
    getValue(key,data){//获取data中数据的值，并返回
          if(key.indexOf('.')>-1){
               key.split('.').forEach((v)=>{
                   data = data[v]
               })
               return data
          }
          else{
              return data[key]
          }
    },
    changeValue(data,key,newVal){//改变data中的数据
        if (key.indexOf('.') > -1) {
            let arr = key.split('.');
            for(let i = 0; i < arr.length - 1; i++) {
                data = data[arr[i]]
            }
            data[arr[arr.length - 1]] = newVal
        } else {
            data[key] = newVal
        }
    }
}