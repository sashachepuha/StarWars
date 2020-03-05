<template>
    <div class='sw-catalog'>
        <swCatalogItem/>
        <swCatalogItem/>
        <swCatalogItem/>
        <swCatalogItem/>
        <swCatalogItem/>
        <swCatalogItem/>
        <swCatalogItem/>
        <swCatalogItem/>
        <swCatalogItem/>
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
    .sw-catalog{
        display: grid;
        grid-template-columns: max-content max-content max-content;
        grid-column-gap: 50px;
        grid-row-gap: 50px;
        grid-auto-rows: max-content max-content max-content max-content;
        justify-content: center;
    }
</style>