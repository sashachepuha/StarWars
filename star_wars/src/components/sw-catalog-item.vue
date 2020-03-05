<template>
    <div class='sw-catalog-item'>
        <swPopap :class="{ active: isPopapVisible }" @closePopap="closePopap">
            <h3 class="sw-popap__name">{{ people_data.name }}</h3>
            <span class="sw-popap__species">{{ species }}</span>
        </swPopap> 
        <h3 class="sw-catalog-item__name">{{ people_data.name }}</h3>
        <button class="sw-catalog-item__button" @click="showPopap">MORE</button>
        <span class="sw-catalog-item__species">{{ species }}</span>
    </div>
</template>

<script>
import swPopap from './sw-popap'

export default {
    name: 'sw-catalog-item',
    components: {
        swPopap
    },
    props: { 
        people_data:{
            default(){
                return {}
            }
        }
    },
    data() {
        return {
            isPopapVisible: false,
            species: "SPECIES"
        }
    },
    computed: {
        // вычисляемые свойства
    },
    methods: {
        showPopap(){
            this.isPopapVisible = true
        },
        closePopap(){
            this.isPopapVisible = false
        }
    },
    mounted() {
        // хук - отрабатывает после загрузки компонента
    },
}
</script>

<style lang="scss">
    .active {
        transition: all 0.7s;
        opacity: 1;
        visibility: visible;
        .sw-popap__content{
            transition: all 1s;
            top:calc(50% - 200px);
        }
    }
    .sw-catalog-item {
        position: relative;
        width: 250px;
        height: 150px;
        background-color: #F1F3F6;
        border-radius: 0px 20px 40px 20px;
        border: 1px solid rgba(255, 255, 255, 0.555);
        box-shadow: 10px 10px 30px #3754AA10, -10px -10px 30px #ffffff;
        padding: 30px;
        &:hover{
            background-color: rgb(39, 39, 39);
            .sw-catalog-item__name, .sw-catalog-item__species {
                color: #fff;
            }
        }
        &__name {
            font-family: 'SF Distant Galaxy';
            font-weight: 100;
            display: block;
            color: rgb(0, 0, 0);
            margin: 0px;
            width: 140px;
            font-size: 43px;
            line-height: 32px;
        }
        &__button {
            transition: all 0.6s;
            position: absolute;
            right: 30px;
            bottom: 30px;
            font-family: "Bicubik";
            width: 100px;
            height: 30px;
            border-radius: 15px;
            outline: none;
            border: none;
            background-color: #fff;
            &:hover{
                color: #F1F3F6;
                transition: all 0.6s;
                box-shadow: 10px 10px 30px #3754AA10;
                background-color: rgb(58, 58, 58);
            }
        }
        &__species {
            display: inline-block;
            font-family: "Bicubik";
            font-size: 19px;
            line-height: 18px;
            margin-top: 10px;
        }
    }
</style>