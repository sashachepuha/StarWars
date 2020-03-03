<template>
    <div class='sw-catalog-item'>
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
    name: 'sw-catalog-item',
    components: {
        // дети
    },
    props: { 
        // то что получает от родителя
    },
    data() {
        return {
            title: "CATALOG ITEM"
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