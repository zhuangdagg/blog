<template>
    <div>评论</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useFetchUtils from '/api/useFetchUtils'


onMounted(() => {
    testFetch()
})


async function testFetch() {
    const { test } = useFetchUtils()
    test()
}
</script>