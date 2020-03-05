<template>
    <div class='sw-catalog'>
        <swCatalogItem v-for="people in PEOPLES.results" :key="people.name" :people_data="people"/>
    </div>
</template>

<script>
import swCatalogItem from './sw-catalog-item'
import {mapActions, mapGetters} from 'vuex'

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

        }
    },
    computed: {
        ...mapGetters([
            'PEOPLES'
        ])
    },
    methods: {
        ...mapActions([
            'GET_PEOPLES'
        ])
    },
    mounted() {
        this.GET_PEOPLES()
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