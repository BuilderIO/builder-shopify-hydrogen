export const serverComponentMap = {};
export const serverComponentOptions = {};

export function registerComponent(ref, options) {
  serverComponentMap[options.name] = ref;
  serverComponentOptions[options.name] = options;
}

export function getComponentRef(name) {
  return serverComponentMap[name];
}

export function getComponentOptions(name) {
  return serverComponentOptions[name];
}
