import type { ComponentInstance } from "vue";

export const generateVueCode = (components: ComponentInstance[]) => {
    const imports = components.map(c => `import ${c.type} from '@/components/lowcode/${c.type}.vue`).join('\n')


    const template = `<template>\n${components.map(c => ` <${c.type} ${formatProps(c.props)} /> `).join('\n')}\n</template>`

    return `${imports}\n\n${template}`

}