<template>
    <div>{{ content }}</div>

    <form>
        <input />

        
    </form>
    <button @click="addComment">新增评论</button>
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

async function addComment() {
    const data = {
        topic_id: 'course001',
        topic_type: 'course',

        content: '第一条评论',

        from_user_id: 'user001',
        
        sub_comment_ids: [],

        remark: '备注'

    }
    await comment.mutate.add(data)
}
</script>