<template>
    <div>{{ content }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useGraphQL } from '../../api/useGraphQL';

const { comment } = useGraphQL()

const content = ref<any>()

onMounted(() => {
    testFetch()
})


async function testFetch() {

    comment.query.list().then((res) => {
        content.value = res.data.getComment
    })
}
</script>