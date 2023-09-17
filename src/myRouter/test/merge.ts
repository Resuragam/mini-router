// mergeOptions 选择合并全局配置和默认配置，优先使用全局配置，再使用默认配置
export function mergeOptions<T extends object>(defaults: T, partialOptions: Partial<T>): T {
    const options = {} as T;
    // 通过for...in... 遍历对象的键值
    for (const key in defaults) {
        options[key] = key in partialOptions ? partialOptions[key]! : defaults[key];
    }
    return options;
}
