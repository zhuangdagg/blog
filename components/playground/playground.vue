<template>
  <div class="playground" style="height: 100vh;">
    <component v-if="repl.is" :is="repl.is" :editor="repl.editor" :store="repl.store" :showCompileOutput="true" :clearConsole="true"  />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, reactive, defineAsyncComponent, ref } from "vue";
import ReplLoading from './ReplLoading.vue'

import { data } from './vue.data'

const repl = reactive<any>({
  is: null,
  store: null,
  editor: null
})

const builtinImportMap = ref<any>({})

onMounted(async () => {
  const { Repl, useStore, useVueImportMap  } = await import('@vue/repl')
  const { importMap } = useVueImportMap()
  builtinImportMap.value = importMap.value
  repl.editor = defineAsyncComponent({
    loader: () => import('@vue/repl/codemirror-editor'),
    loadingComponent: ReplLoading
  })
  // repl.editor = defineAsyncComponent(() => import('@vue/repl/monaco-editor'))
  repl.is = Repl
  repl.store = useStore({
    builtinImportMap
  })

  onHashChange();
})


// watchEffect(updateExample, {
//   onTrigger(e) {
//     console.log(e);
//   },
// });

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
    if(hash.indexOf('webgl') !== -1) {
      builtinImportMap.value.imports!['three'] = "https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.js"
      builtinImportMap.value.imports!['three/addons/'] = "https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/"
    }
    repl.store.setFiles(
        data[hash]
    , 'App.vue')    
}
</script>
