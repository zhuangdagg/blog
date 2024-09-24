<template>
    <div class="playground" style="height: 100vh;">
        <component :is="Playground" />
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, defineAsyncComponent } from 'vue'
import { Playground } from '@akjs/playground'
import '@akjs/playground/playground.css'

const repl = reactive<any>({
  is: null,
  store: null,
  editor: null
})

onMounted(async() => {
    // repl.is = defineAsyncComponent(() => {
    //     return new Promise((resolve, reject) => {
    //         import('@akjs/playground').then(res => {
    //             return res.Playground
    //         })
    //         .catch(console.error)
    //     })

    // })
    // repl.is = Playground
})
</script>