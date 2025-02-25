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