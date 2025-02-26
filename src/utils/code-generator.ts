import type { ComponentInstance } from "vue";

const formatProps = (props: Record<string, any>) => {
    return Object.entries(props).map(([key, value]) => {
        if(typeof value === 'string') return `:${key}="'${value}'"`
        return `:${key}="${value}"`
    })
    .join(' ')
}

export const generateVueCode = (components: ComponentInstance<any>[]) => {
    const uniqueComponents = [...new Set(components.map(c => c.type))];
    const imports = uniqueComponents.map(c => `import ${c.type} from '@/components/lowcode/${c.type}.vue`).join('\n')


    const template = `<template>\n${components.map(c => ` <${c.type} ${formatProps(c.props)} /> `).join('\n')}\n</template>`

    return `${imports}\n\n${template}`

}