<script setup lang="ts">
import { useEntityStore, } from '@/stores/entity'
import { useUserStore, } from '@/stores/user'

import type { EntityType, } from '@/types/entity'


const props = defineProps<{
    isLoad: boolean,
    isDisable: boolean,
    currentValue: EntityType,
}>()
const emit = defineEmits<{
    start: [],
    stop: [],
    clear: [],
}>()

const entity = useEntityStore()
const user = useUserStore()

const handleClick = async () => {
    emit('start')
    if (user.isLogin && user.accessToken && user.baseDomain) {
        await entity.createEntity(props.currentValue, user.accessToken, user.baseDomain)
    }
    emit('clear')
    emit('stop')
}
</script>
<template>
    <button
        v-if="isLoad"
        class="button button_active"
        disabled 
    >
        <div
            class="button__loader"
        >

        </div>
    </button>
    <button 
        v-else
        class="button"
        :class="{
            'button_active' : !isDisable
        }"
        :disabled="isDisable"
        @click="handleClick"
    >
        Создать {{ isDisable }}
    </button>
</template>
<style scoped lang="sass">
.button
    font-size: $font-size-s
    border: 1px solid $light-grey
    background-color: $white
    padding: 0.7em
    border-radius: $radius
    font-weight: 500
    cursor: pointer

.button_active
    background-color: $blue
    color: $white

.button__loader
    height: 1.2em
    width: 1.2em
    border-radius: 50%
    border-top: 2px solid currentColor
    border-left: 2px solid currentColor
    border-bottom: 2px solid transparent
    border-right: 2px solid transparent
    animation: spin .6s linear infinite    

@keyframes spin 
    0%
        transform: rotate(0deg)
    100%
        transform: rotate(360deg)
</style>