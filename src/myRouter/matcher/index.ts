import { RouteRecordName } from "../type";

export function createRouterMatcher() {
    const matchers = [];
    const matcherMap = new Map();

    function getRecordMatcher(name: RouteRecordName) {
        return matcherMap.get(name);
    }

    return {
        getRecordMatcher,
    };
}
