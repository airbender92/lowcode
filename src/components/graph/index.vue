<template>
    <div ref="graphContainer" class="graph-container"></div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import mx from './loadMxGraph';

// 定义容器的引用
const graphContainer = ref(null);

const graphConfig = {
    allowDanglingEdges: false,
    htmlLabels: true,
    connectable: true, // 允许连接
    multigraph: false, // 禁止多重图
    panning: true, // 允许平移
    cellsLocked: false, // 允许编辑
    // 启用网格线
    gridEnabled: true, // 默认是 true，可以省略
    gridSize: 10, // 设置网格大小（像素）
}

onMounted(() => {
    if(graphContainer.value && typeof mx !== 'undefined'){ 

        mx.mxBasePath = 'mxgraph';

        const graph = new mx.mxGraph(graphContainer.value);

        // 设置网格背景
        graphContainer.value.style.backgroundImage = `url(${mx.mxBasePath}/images/grid.gif)`;
        graphContainer.value.style.backgroundPosition = '0 0';
        graphContainer.value.style.backgroundRepeat = 'repeat';


        Object.entries(graphConfig).forEach(([key, value]) => {
            graph[key] = value;
        });

        const parent = graph.getDefaultParent();
        graph.getModel().beginUpdate();
        try{
            const vertex = graph.insertVertex(parent, null, 'Hello', 20, 20, 80, 30);
        } finally{
            graph.getModel().endUpdate();
        }
    }
})

</script>

<style scoped>
.graph-container {
    width: 100%;
    height: 400px;
    border: 2px solid #000; /* 添加边框 */
}
</style>