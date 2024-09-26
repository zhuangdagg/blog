<template>
    <div>评论</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useFetchUtils from '/api/useFetchUtils'
import { useQuery } from '../../api/useFetchUtils';


onMounted(() => {
    testFetch()
})


async function testFetch() {
    const { test } = useFetchUtils()
    test()

    useQuery().then(console.log, console.error)
}
</script>