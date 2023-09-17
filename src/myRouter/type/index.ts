import { Component } from 'vue';

export interface RouteRecord {
    path: string;
    redirect: string | undefined;
    name: RouteRecordName;
    component: Component;
}

export interface RouteRecordMatcher {
    record: RouteRecord;
    alias: RouteRecordMatcher[];
    parent: RouteRecordMatcher;
    children: RouteRecordMatcher;
}

export type RouteRecordName = string | symbol
