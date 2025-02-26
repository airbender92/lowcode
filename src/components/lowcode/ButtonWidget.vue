<template>
    <button
        :class="['btn', `btn-${type}`]"
        @click="$emit('click')"
    >
    {{ text}}
    </button>
</template>

<script setup lang="ts">
defineProps<{
    text: string,
    type: 'primary' | 'secondary'
}>();

defineEmits(['click']);

</script>

<style scoped>
.btn{
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-primary{
    background-color: #409eff;
    color: #fff;
}

.btn-secondary{
    background-color: #fff;
    color: #409eff;
    border: 1px solid #409eff;
}