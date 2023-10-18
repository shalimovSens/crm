<script setup lang="ts">
import { RouterView, } from 'vue-router'

import { useUserStore, } from './stores/user'

const user = useUserStore()
user.authorize()
</script>

<template>
    <RouterView />
</template>

<style scoped>
</style>