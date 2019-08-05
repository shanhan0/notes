export const toggle = {
    data () {
        isShow: false
    },
    methods: {
        toggleShow () {
            this.isShow = !this.isShow
            return 111
        }
    }
}