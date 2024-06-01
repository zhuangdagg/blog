<!-- webRtc -->
<template>
    <div>webRtc {{ tip }}</div>
    <Comp></Comp>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Comp from './Comp.vue'

const tip = ref('hello')
</script>