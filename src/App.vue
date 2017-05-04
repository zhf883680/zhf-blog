<template>
    <div id="app" class="whole">
        <toolbar></toolbar>
        <navbar></navbar>
        <div class="body">
            <router-view></router-view>
        </div>
        <footInfo></footInfo>
    </div>
</template>
<script>
import toolbar from './components/Toolbar.vue'
import navbar from './components/navbar.vue'
import footInfo from './components/footInfo.vue'
export default {
    components: {
        toolbar,
        navbar,
        footInfo
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
}

.whole {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.body {
    flex-grow: 1;
}
</style>
