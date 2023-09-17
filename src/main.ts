import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';
import { mergeOptions } from './myRouter/test/merge';

createApp(App).use(router).mount('#app');

// mergeOptions test
const defaults = { strict: false, end: true, sensitive: false };

const partialOptions = { end: false, sensitive: false, isMerged: true };

const start = performance.now();
console.log(mergeOptions(defaults, partialOptions)); // {strict: false, end: false, sensitive: false}
const end = performance.now();
console.log('mergeOptions run is', end - start);
