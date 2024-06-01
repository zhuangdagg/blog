---
layout: page # doc|home|page
navbar: false
sidebar: false
aside: true # boolean|'left'
title: vue sfc playground
lastUpdated: false # 显示页面上次修改时间
footer: false
pageClass: ''
---


<script>
import { defineAsyncComponent } from 'vue'
import ReplLoading from '/components/playground/ReplLoading.vue'

export default {
    components: {
        ExampleRepl: defineAsyncComponent({
            loader: () => import('./components/playground/playground.vue'),
            loadingComponent: ReplLoading
        })
    }
}
</script>
<ExampleRepl />