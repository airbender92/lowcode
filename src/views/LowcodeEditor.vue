<template>
    <div class="editor">
        <!-- 组件面板 -->
         <ComponentPalette />

         <!-- 画布区域 -->
          <div class="canvas-area"
            @dragover.prevent
            @drop="handleDrop"
          >
            <ComponentRender />
          </div>

          <!-- 属性面板 -->
           <PropertyPanel />
    </div>
</template>

<script setup>

// 处理拖拽放下事件
function handleDrop(event) {

}

</script>

<style scoped>
.editor{
  display: flex;
}

.canvas-area{
  flex: 1;
  border: 1px solid #ccc;
  min-height: 500px;
}

</style>