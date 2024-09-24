<template>
    <div class="playground" style="height: 100vh;">
        <component :is="Playground" :defaultFiles="repl.files"/>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onBeforeMount } from 'vue'
import { Playground } from '@akjs/playground'
import '@akjs/playground/playground.css'
import { data } from './js.data'

const repl = reactive<any>({
  is: null,
  store: null,
  files: null
})

onMounted(async() => {
    onHashChange()
})

function onHashChange(cb = updateExample) {
  window.addEventListener("hashchange", cb);
  cb();
  onBeforeMount(() => {
    window.removeEventListener("hashchange", cb);
  });
}



function updateExample() {
    let hash = location.hash.slice(1)

    if(!data.hasOwnProperty(hash)) {
        hash = Object.keys(data)?.[0]
        location.hash = '#' + hash
    }
    const obj = data[hash]
    repl.files = []
    for (let filename of Object.keys(obj)) {
        if(['index.html', 'main.js', 'style.css'].includes(filename)) {
            repl.files.push({ filename, value: obj[filename]})
        }
    }   
}
</script>