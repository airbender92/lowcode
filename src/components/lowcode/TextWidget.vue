<template>
    <div :style="{ color: props.color, fontSize: props.size + 'px'}">
        {{ props.text }}
    </div>
</template>

<script setup lang="ts">
defineProps<{
    color: string
    size: number
    text: string
}>()
</script>