<script setup lang="ts">
</script>

<template>
    <div id="app">
        <p>
            <router-link to="/" style="margin-right: 20px;">Go to Home</router-link>
            <router-link to="/about">Go to About</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
