<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
    name: 'betterscroll',
    props: {
        handleToScroll:{
            type: Function,
            default : function () {},
        },
        handleToTouchEnd:{
            type: Function,
            default : function () {},
        },

    },
    mounted(){
       var scroll=new Bscroll(this.$refs.wrapper,{
           tap :true,
           probeType: 1,
       });
       this.scroll=scroll;
       scroll.on('scroll',(pos)=>{              
                this.handleToScroll(pos);
                });
        scroll.on('touchEnd',(pos)=>{
                this.handleToTouchEnd(pos);
        })
    },
    methods:{
        toScroll(y){
            this.scroll.scrollTo(0,y);
        },

    },

}
</script>

<style scoped>
.wrapper{height: 100%;}
</style>
