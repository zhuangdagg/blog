<template>
  <div class="playground" style="height: 100vh;">
    <Repl :editor="editor" :store="store" :clearConsole="true"  />
  </div>
</template>

<script setup lang="ts">
import { watchEffect, onBeforeMount } from "vue";
import { Repl, useStore } from "@vue/repl";
import Mirror from "@vue/repl/codemirror-editor";
// import Monaco from '@vue/repl/monaco-editor'

import { data } from './examples.data'

console.log({ data })
const editor = Mirror; // Mirror

const store = useStore();

watchEffect(updateExample, {
  onTrigger(e) {
    console.log(e);
  },
});

function onHashChange(cb = updateExample) {
  window.addEventListener("hashchange", cb);
  onBeforeMount(() => {
    window.removeEventListener("hashchange", cb);
  });
}

onHashChange();

function updateExample() {
    let hash = location.hash.slice(1)

    if(!data.hasOwnProperty(hash)) {
        hash = Object.keys(data)?.[0]
        location.hash = '#' + hash
    }
    store.setFiles(
        data[hash]
    , 'App.vue')    
}
</script>
