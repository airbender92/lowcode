<template>
    <div class="property-panel">
        <template v-if="selectedComponent">
            <div v-for="(config, key) in componentMeta?.props" :key="key">
                <label>{{ key }}</label>
                <input
                    v-model="selectedComponent.props[key]"
                    :type="getInputType(config.type)"
                    @change="handlePropChange(key)"
                >
            </div>
        </template>
    </div>

</template>

<script setup lang="ts">
    import { storeToRefs} from 'pinia';
    import { useLowcodeStore} from '@/store/lowcode';
    import {components} from '@/components/lowcode/component-meta';

    const store = useLowcodeStore();
    const { selectedComponentId, componentList } = storeToRefs(store);
    const selectedComponent = computed(() => 
        componentList.value.find((component) => component.id === selectedComponentId.value)
    );

    const componentMeta = computed(() => {
        return components.find((component) => component.type === selectedComponent.value?.type);
    });

    function getInputType(propType: string){
        return propType === 'number' ? 'number' : 'text';
    }

    function handlePorpChange(key: string){
        store.updateProp({
            id: selectedComponentId.value,
            key,
            value: selectedComponent.value?.props[key]
        })
    }

</script>