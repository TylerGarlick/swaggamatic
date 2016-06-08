export const paths = (spec) => Object.keys(spec.paths);

export const hasPath = (spec, path) => paths(spec).some(p => p === path); 
