<script setup lang="ts">
import { ref, computed, } from 'vue'

import type { EntityType, } from '@/types/entity'
import { EntityTitle, } from '@/types/entity_enum'

const props = defineProps<{
    modelValue: EntityType | '',
}>()
const emit = defineEmits<{
    'update:modelValue':  [ value: EntityType  | '', ],
}>()

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        emit('update:modelValue', value)
    },
})

const isOpen = ref(false)

</script>
<template>
    <div class="dropdown">
        <button 
            class="dropdown__trigger"
            @click="() => isOpen = !isOpen"
        >
            {{ EntityTitle[value as EntityType] || 'Не выбрано'}}
            <svg 
                class="dropdown__chevron"
                :class="{
                    'dropdown__chevron_active' : isOpen
                }"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
            >
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>
            </svg>
        </button>
        <ul
            class="dropdown__list"
            v-show="isOpen"
        >
            <li
                class="dropdown__element"
            >
                <label class="dropdown__title">
                    Не выбрано
                    <input 
                        type="radio" 
                        class="dropdown__input"
                        value=""
                        v-model="value"
                        @click="() => isOpen = false"
                    >
                </label>
            </li>
            <li
                class="dropdown__element"
            >
                <label class="dropdown__title">
                    Сделка
                    <input 
                        type="radio" 
                        class="dropdown__input"
                        value="lead"
                        v-model="value"
                        @click="() => isOpen = false"
                    >
                </label>
            </li>
            <li
                class="dropdown__element"
            >
                <label class="dropdown__title">
                    Контакт
                    <input 
                        type="radio" 
                        class="dropdown__input"
                        value="contact"
                        v-model="value"
                        @click="() => isOpen = false"
                    >
                </label>
            </li>
            <li
                class="dropdown__element"
            >
                <label class="dropdown__title">
                    Компания
                    <input 
                        type="radio" 
                        class="dropdown__input"
                        value="company"
                        v-model="value"
                        @click="() => isOpen = false"
                    >
                </label>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="sass">
.dropdown
    min-width: 300px
    display: inline-flex
    flex-direction: column
    position: relative
    font-size: $font-size-s

.dropdown__trigger
    border-radius: $radius
    border: 1px solid $grey
    text-align: left
    padding: 0.4em
    display: flex
    align-items: center
    justify-content: space-between
    background-color: $white
    cursor: pointer

.dropdown__title
    padding: 0.4em
    display: block  
    position: relative

.dropdown__input
    position: absolute
    inset: 0
    opacity: 0

.dropdown__chevron
    height: 1em
    transition: transform .3s
.dropdown__chevron_active
    transform: rotate(180deg)

.dropdown__list
    position: absolute
    width: 100%
    top: calc( 100% + 15px )
    border: 1px solid $grey
    display: flex
    align-items: stretch
    flex-direction: column
    background-color: $white

.dropdown__element
    &:hover
        background-color: $light-grey
</style>