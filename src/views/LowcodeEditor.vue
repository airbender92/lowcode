<template>
  <div class="editor">
    <!-- 操作按钮 -->
    <div class="action-buttons">
      <button @click="undo">撤销</button>
      <button @click="redo">重做</button>
      <button @click="saveToServer">保存</button>
      <button @click="exportCode">导出</button>
    </div>
    <!-- 组件面板 -->
    <div class="sidebar">
      <ComponentPalette />
    </div>

    <!-- 画布区域 -->
    <div class="canvas-area" @dragover.prevent @drop="handleDrop">
      <ComponentRenderer />
    </div>

    <!-- 属性面板 -->
    <div class="sidebar">
      <PropertyPanel />
    </div>

    
  </div>
</template>

<script setup lang="ts">
import ComponentPalette from '@/components/ComponentPalette.vue';
import ComponentRenderer from '@/components/ComponentRenderer.vue';
import PropertyPanel from '@/components/lowcode/PropertyPanel.vue';
import { useLowcodeStore } from '@/stores/lowcode';
import { components } from '@/components/lowcode/component-meta';

const store = useLowcodeStore();

// 处理拖拽放下事件
function handleDrop(event: DragEvent) {
  const componentType = event.dataTransfer?.getData('componentType');
  const componentMeta = components.find(c => c.type === componentType);
  if (componentMeta) {
    store.addComponent(componentMeta);
    store.recordSnapshot();
  }
}

const undo = () => {
  if (store.currentStep > 0) {
    store.currentStep--;
    store.componentList = store.history[store.currentStep];
  }
}

const redo = () => {
  if (store.currentStep < store.history.length - 1) {
    store.currentStep++;
    store.componentList = store.history[store.currentStep];
  }
}

const saveToServer = async () => {
  // 保存到服务器
  try {
    await store.saveToServer();
  } catch (error) {
    console.error(error);
  }
}

const exportCode = async () => {
  // 导出代码
  try {
    await store.exportCode();
  } catch (error) {
    console.error(error);
  }
}
</script>

<style scoped>
.editor {
  display: flex;
  height: 100vh;
}

.sidebar {
  margin-top: 30px;
  width: 200px;
  border-right: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
}

.canvas-area {
  flex: 1;
  border: 1px solid #ccc;
  margin: 10px;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.action-buttons {
  position: absolute;
  top: 80px;
  left: 130px;
  display: flex;
  gap: 10px;
}
</style>