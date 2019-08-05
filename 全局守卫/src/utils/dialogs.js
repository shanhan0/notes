
// import Vue from 'vue';
// import alert from '../components/alert';
// const AlertConstructor = Vue.extend(alert);
// console.log(AlertConstructor)
// const div = document.createElement('div');
// AlertConstructor.show = (options) => {
//  document.body.appendChild(div);
//  options.type = 'inform';
//  const propsData = Object.assign({}, options);
//  const alertInstance = new AlertConstructor({
//   propsData,
//  }).$mount(div);
//  alertInstance.show();
// };
// AlertConstructor.confirm = (options) => {
//  document.body.appendChild(div);
//  options.type = 'confirm';
//  const propsData = Object.assign({}, options);
//  const alertInstance = new AlertConstructor({
//   propsData,
//  }).$mount(div);
//  alertInstance.show();
// };
// export default AlertConstructor;
export default {
    install (Vue) {
        Vue.prototype.$showDialog = showDialog
        function showDialog (obj) {
            let ShowDia = Vue.extend({
                template: `
                <div class='alert' v-if='isShow'>
                <div class="wrap">
                    <div class="header">${obj.title}</div>
                    <div class="body">
                        <slot>
                            <p>${obj.content}</p>
                        </slot>
                    </div>
                    <div class="footer">
                        <div>
                            <button  class="sure" @click="sure">${obj.type[0].type}</button>
                            <button  class="cancel" @click="cancel">${obj.type[1].type}</button>
                        </div>
                    </div>
                </div>
                </div>` ,
                data () {
                    return {
                        isShow: true
                    }
                },
                props:{
                    title: {
                        type: String,
                        default: '提示'
                    },
                    message: {
                        type: String
                    },
                    type: {
                         type: String,
                    },
                    sureBtn: {
                        type: Function,
                    },
                    cancelBtn: {
                        type: Function,
                    },
                    context: {
                        type: Object,
                    }
                },
                methods: {
                    cancel () {
                        obj.type[0].cancelFun('取消啊')
                        this.close()
                    },
                    sure () {
                        obj.type[1].sureFun('确认啊')
                        this.close()
                    },
                    show () {
                         this.isShow = true
                    },
                    close () {
                         this.isShow = false                
                    }
                }
            })
            let showEl = new ShowDia().$mount()
            document.body.appendChild(showEl.$el)
        }
    }
}