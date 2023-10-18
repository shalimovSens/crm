<script setup lang="ts">
import { useEntityStore, } from '@/stores/entity'


const entity = useEntityStore()
</script>
<template>
    <div class="list">
        <ul class="list__inner">
            <li 
                class="list__element"
                v-for="element in entity.entities"
                :key="element.id"
            >
                <div class="list__title">
                    {{ element.type }}
                </div>
                <div class="list__id">
                    {{ '#' + element.id }}
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="sass">
.list
    max-width: 250px
    width: max-content
    overflow-x: hidden
    width: 100%
.list__inner
    display: flex
    flex-direction: column
    align-items: stretch
    gap: 12px
.list__element
    display: flex
    justify-content: space-between
    align-items: center
    padding-bottom: 2px
    border-bottom: 1px solid $grey
.list__title

.list__id
</style>