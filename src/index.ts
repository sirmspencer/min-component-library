// Named ES module exports. tsc emits these as `export const`, which
// shadow-cljs rewrites into Object.defineProperties(exports, {...}) getters.
export const label = "v1";

export const describe = () => `label is ${label}`;
