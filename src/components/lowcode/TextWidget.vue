<template>
    <div :style="{ color: color, fontSize: size + 'px'}">
        {{ text }}
    </div>
</template>

<script setup lang="ts">
defineProps<{
    color: string
    size: number
    text: string
}>()
</script>