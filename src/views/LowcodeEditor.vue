<template>
    <div class="editor">
        <!-- 组件面板 -->
         <ComponentPalette />

         <!-- 画布区域 -->
          <div class="canvas-area"
            @dragover.prevent
            @drop="handleDrop"
          >
            <ComponentRenderer />
          </div>

          <!-- 属性面板 -->
           <PropertyPanel />
    </div>
</template>

<script setup lang="ts">
import ComponentPalette from '@/components/ComponentPalette.vue';
import ComponentRenderer from '@/components/ComponentRenderer.vue';
import PropertyPanel from '@/components/lowcode/PropertyPanel.vue';
import { useLowcodeStore } from '@/stores/lowcode';
import { components} from '@/components/lowcode/component-meta';

const store = useLowcodeStore();

// 处理拖拽放下事件
function handleDrop(event: DragEvent) {
  const componentType = event.dataTransfer?.getData('componentType');
  const componentMeta = components.find(c => c.type === componentType);
  if(componentMeta){
    store.addComponent(componentMeta);
    store.recordSnapshot();
  }
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