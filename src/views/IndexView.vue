<script setup lang="ts">
import DropdownBase from '@/components/DropdownBase.vue'
import ButtonBase from '@/components/ButtonBase.vue'
import ListBase from '@/components/ListBase.vue'

import { ref, } from 'vue'

import { useUserStore, } from '@/stores/user'
import type { EntityType, } from '@/types/entity'


const dropdownModel = ref<EntityType | ''>('')
const isLoad = ref<boolean>(false)

const user = useUserStore()

const startLoad = () => isLoad.value = true
const stopLoad = () => isLoad.value = false
const clearModel = () => dropdownModel.value = ''
</script>
<template>
    <DropdownBase 
        v-model="dropdownModel"
    />
    <ButtonBase 
        :is-disable="!dropdownModel"
        :is-load="isLoad || !user.isLogin"
        :current-value="(dropdownModel as EntityType)"
        @start="startLoad"
        @stop="stopLoad"
        @clear="clearModel"
    />
    <ListBase />
</template>