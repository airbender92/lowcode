import type { Component } from 'vue'

interface ComponentInstance {
    id: string
    type: string
    props: Record<string, any>
}

interface ComponentMeta extends Omit<ComponentInstance, 'id'> {
    label: string // 显示名称
    events?: string[] // 支持的事件
}

interface PropConfig{
    type: 'string' | 'number' | 'boolean' | 'select'
    default?: any
    options?: {label: string; value: any}[] // 下拉选项
}