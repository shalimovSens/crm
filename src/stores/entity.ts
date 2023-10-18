import { ref, } from 'vue'
import { defineStore, } from 'pinia'

import type { Entity, EntityType, } from '@/types/entity'
import { EntityTitle, } from '@/types/entity_enum'

import instance from '@/request/instance'


export const useEntityStore = defineStore('entity', () => {

    const entities = ref<Entity[]>([])

    const createEntity = async (entityType: EntityType, accessToken: string, baseDomain: string) => {
        return instance({
            method: 'POST',
            url: `${import.meta.env.VITE_API_URL}/entity/${entityType}`,
            data: {
                access_token: accessToken,
                base_domain: baseDomain,
            },
        })
            .then(res => {
                entities.value.push({
                    id: res.data,
                    type: EntityTitle[entityType],
                })
                console.log(res.data)
            })
            .catch(err => console.error(err))
    }

    return { entities, createEntity, }
})
