import factory from "mxgraph";

(window as any)["mxBasePath"] = "/mxgraph";
(window as any)["mxDefaultLanguage"] = "en";
(window as any)["mxImageBasePath"] = "/mxgraph/images";
(window as any)["mxLoadResources"] = false;
(window as any)["mxLoadStylesheets"] = false;

// 当通过commonjs加载时为false, 否则会向页面加载script
(window as any)["mxForceIncludes"] = false;
(window as any)["mxResourceExtension"] = ".txt";

const mx = factory({});

export default mx;