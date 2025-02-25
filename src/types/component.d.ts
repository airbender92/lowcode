interface ComponentMeta {
    type: string // 组件唯一标识
    label: string // 显示名称
    props: Record<string, PropConfig> // 属性配置
    events: string[] // 支持的事件
}

interface PropConfig{
    type: 'string' | 'number' | 'boolean' | 'select'
    default?: any
    options?: {label: string; value: any}[] // 下拉选项
}