<template>
    <div class="sw-popap">
        <div class="sw-popap__content">
            <div class="sw-popap__close">
                <i class="material-icons" @click="closePopap">close</i>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "sw-popap",
    props: {},
    data() {
        return {
            
        }
    },
    computed: {
        
    },
    methods: {
        closePopap(){
            this.$emit('closePopap')
        }
    },
}
</script>

<style lang="scss">
    .sw-popap{
        transition: all 0.7s;
        opacity: 0;
        visibility: hidden;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 24, 59, 0.171);
        backdrop-filter: blur(5px);
        z-index: 999;
        &__content{
            position: fixed;
            top: 100px;
            width: 500px;
            height: 400px;
            transition: all 0.7s;
            top:calc(60% - 200px);
            left: calc(50% - 250px);
            background-color: rgb(39, 39, 39);
            border-radius: 10px;
            box-shadow: 10px 10px 80px rgba(0, 0, 0, 0.466);
            padding: 30px;
            z-index: 9999;
        }
        &__close{
            position: absolute;
            color: #fff;
            right: 30px;
            top: 30px;
        }
        &__name{
            font-family: 'SF Distant Galaxy';
            font-weight: 100;
            display: block;
            color: rgb(255, 255, 255);
            margin: 0px;
            width: 100%;
            font-size: 60px;
        }
    }
</style>