<template>
    <div class="component-palette">
        <div
            v-for="component in components"
            :key="component.type"
            class="component-item"
            draggable="true"
            @dragstart="handleDragStart(component, $event)"
        >
            {{ component.label }}
        </div>
    </div>

</template>

<script setup lang="ts">
    import { defineProps } from 'vue';
    import { components } from '@/components/lowcode/component-meta';

    function handleDragStart(component: ComponentMeta, event: DragEvent){
        event.dataTransfer?.setData('componentType', component.type);
    }
</script>

<style scoped>
.component-palette{
    width: 200px;
    border-right: 1px solid #ccc;
    padding: 10px;
}

.component-item{
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    cursor: move;
}

</style>