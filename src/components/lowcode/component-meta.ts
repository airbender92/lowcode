import type { ComponentMeta} from '@/types/component'

export const components: ComponentMeta[] = [
    {
        type: 'TextWidget',
        label: '文本组件',
        props: {
            text: { type: 'string', default: '默认文本'},
            size: { type: 'number', default: 14},
            color: {type: 'string', default: '#333'}
        }
    },
    {
        type: 'ButtonWidget',
        label: '按钮组件',
        props: {
            text: {type: 'string', default: '按钮'},
            type: {
                type: 'select',
                default: 'primary',
                options: [
                    {label: '主要', value: 'primary'},
                    {label: '次要', value: 'secondary'},
                ]
            }
        }
    }
]