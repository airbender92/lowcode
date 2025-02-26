import { generateVueCode } from '@/utils/code-generator'
import { defineStore} from 'pinia'
import type { ComponentInstance } from 'vue'
import { nanoid} from 'nanoid'
import { cloneDeep } from 'lodash-es'
import type { PropConfig, ComponentMeta } from '@/types/component'
import axios from 'axios'
import { saveAs } from 'file-saver'

const getDefaultProps = (propsConfig: Record<string, PropConfig>) => {
    return Object.entries(propsConfig).reduce((acc, [key, config]) => {
        acc[key] = config.default;
        return acc;
    }, {} as Record<string, any>)
}

export const useLowcodeStore = defineStore('lowcode', {
    state: () => ({
        componentList: [] as ComponentInstance<any>[], // 画布上的组件实例
        selectedComponentId: '', // 当前选择的组件
        history: [] as ComponentInstance<any>[][],
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

        updateProps({ id, key, value}: {id: string; key: string; value: any}) {
            const component = this.componentList.find(item => item.id === id);
            if(component){
                component.props[key] = value
            }
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