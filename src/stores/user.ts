import { computed, ref, } from 'vue'
import { defineStore, } from 'pinia'

import axios from 'axios'
import instance from '@/request/instance'

export const useUserStore = defineStore('user', () => {

    const accessToken = ref<string | null>(null)
    const baseDomain = ref<string | null>(null)

    const authorize = async () => {
        await instance({
            method: 'GET',
            url: '/auth',
        })
            .then(res => {
                const token = res.data.access_token
                const domain = res.data.base_domain
                if (token) {
                    accessToken.value = token
                }
                if (domain) {
                    baseDomain.value = domain
                }
            })
            .catch(err => console.error(err))
    }

    const isLogin = computed<boolean>(() => !!accessToken.value && !!baseDomain.value)

    return { authorize, isLogin, accessToken, baseDomain, }
})