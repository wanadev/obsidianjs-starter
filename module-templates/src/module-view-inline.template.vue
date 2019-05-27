<template>
    <div id="{{camelCase name}}-container">
        <{{camelCase name}}></{{camelCase name}}>
    </div>
</template>

<script>
import self from "../index";
// import OtherView from './other-view.vue';

export default {
    name: 'main-menu',
    components: {
        // "other-view": OtherView,
    },
    methods: {}
}
</script>

<style lang="less">
    #{{camelCase name}}-container{

    }
</style>
