<template>
    <div class='sw-catalog'>
        <p>{{ title }}</p>
        <swCatalogItem/>
    </div>
</template>

<script>
import swCatalogItem from './sw-catalog-item'

export default {
    name: 'sw-catalog',
    components: {
        swCatalogItem,
    },
    props: { 
        // то что получает от родителя
    },
    data() {
        return {
            title: "CATALOG"
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