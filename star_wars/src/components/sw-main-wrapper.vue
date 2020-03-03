<template>
    <div class='sw-main-wrapper'>
        <p>{{ title }}</p>
        <swCatalog/>
    </div>
</template>

<script>
import swCatalog from './sw-catalog'

export default {
    name: 'sw-main-wrapper',
    components: {
        swCatalog,
    },
    props: { 
        // то что получает от родителя
    },
    data() {
        return {
            title: "MAIN WRAPPER"
        }
    },
    computed: {
        // вычисляемые свойства
    },
    methods: {
        // отлавливаем действия пользователя
    },
    mounted() {
        // хук - отрабатывает после загрузки компонента
    },
}
</script>

<style lang="scss">
    
</style>