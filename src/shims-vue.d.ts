declare module '*.vue' {

    import { DefineComponent } from 'vue'
  
    const component: DefineComponent<{}, {}, any>
  
    export default component
  
  }


// shim.d.ts
declare module 'mxgraph' {
  // 定义工厂函数的类型
  interface MxFactory {
      (config?: {
          mxBasePath?: string;
          mxImageBasePath?: string;
          mxLoadResources?: boolean;
          mxLoadStylesheets?: boolean;
          mxForceIncludes?: boolean;
          mxResourceExtension?: string;
      }): typeof import('mxgraph/types/index');
  }

  const factory: MxFactory;
  export = factory;
}