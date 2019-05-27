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

<!-- the style can be in an other file like here, or directely in the .vue file -->
<style src="./{{camelCase name}}.less"></style>
