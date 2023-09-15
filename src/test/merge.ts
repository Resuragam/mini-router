// mergeOptions 通过for...in... 遍历对象的键值
export function mergeOptions<T extends object>(defaults: T, partialOptions: Partial<T>): T {
    const options = {} as T;
    for (const key in defaults) {
        options[key] = key in partialOptions ? partialOptions[key]! : defaults[key];
    }
    return options;
}
