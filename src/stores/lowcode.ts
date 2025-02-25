import { generateVueCode } from '@/utils/code-generator'
import { defineStore} from 'pinia'
import type { ComponentInstance } from 'vue'

export const useLowcodeStore = defineStore('lowcode', {
    state: () => ({
        componentList: [] as ComponentInstance[], // 画布上的组件实例
        selectedComponentId: '', // 当前选择的组件
        history: [] as ComponentInstance[][],
        currentStep: -1
    }),
    actions: {
        addComponent(component: ComponentMeta) {
            this.componentList.push({
                id: nanoid(),
                type: component.type,
                props: getDefaultProps(component.props)
            })
        },

        exportCode(){
            const code = generateVueCode(this.componentList)
            const blob = new Blob([code], {type: 'text/plain'})
            saveAs(blob, 'generated-component.vue')
        },

        recordSnapshot(){
            this.history = this.history.slice(0, this.currentStep + 1)
            this.history.push(cloneDeep(this.componentList))
            this.currentStep++
        },

        async saveToServer(){
            await axios.post('/api/save-template', {
                components: this.componentList
            })
        }
    }
})