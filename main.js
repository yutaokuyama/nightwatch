

let app = new Vue({
   el:'#app',
    mounted:function(){
       console.log(this.$refs.hello);
    },
    data:{
        message:"HelloWorld!",
        list:['foo','bar','qux'],
        show:true,
    },
    methods:{
        handleClick:function(event){
            this.list.push("hoge");
            this.show = !this.show;
        }
    }
});