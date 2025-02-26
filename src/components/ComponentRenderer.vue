<template>
    <component 
        v-for="item in store.componentList"
        :is="getComponentType(item.type)"
        :key="item.id"
        v-bind="item.props"
    />
</template>

<script setup lang="ts">
import { useLowcodeStore } from '@/stores/lowcode'
import { defineAsyncComponent } from 'vue'

const store = useLowcodeStore();
const componentMap = {
    TextWidget: defineAsyncComponent(() => import ('@/components/lowcode/TextWidget.vue'))
}

const getComponentType = (type: string) => componentMap[type]

</script>