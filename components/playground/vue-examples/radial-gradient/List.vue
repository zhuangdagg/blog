<template>
    <div class="list" ref="listRef">
        <ListItem ref="listitemRef" v-for="(item, index) in data" :pos="posList[index]" :data="`item ${index}`" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ListItem from './ListItem.vue';

const data = ref((new Array(9)).fill(0))

const listRef = ref<Document|null>(null)
const listitemRef = ref<Element[]>()

const listitemRect = ref<{
    x: number, y: number, left: number, top: number
}[]>([])

const posList = ref<{
    x: number,
    y: number
}[]>([])

// 节流
const useThrottle = (func: Function, wait: number = 100, options = { leading: true }) => {
    let timer: any = null
    let canRun: boolean = options.leading
    const timeout = () => {
        timer = setTimeout(() => {
            timer = null
            canRun = true
        }, wait)
    }
    return (...args: any) => {
        if(timer) return
        timeout()
        if (canRun) {
            canRun = false
            return func(args)
        }
    }
}

const enterHandler = (evt: MouseEvent) => {
    listRef.value?.addEventListener('mousemove', moveHandler)
}
const leaveHandler = (evt: MouseEvent) => {
    listRef.value?.removeEventListener('mousemove', moveHandler)
    posList.value = posList.value.map(() => ({
        x: 1000, y: 0
    }))
}

const moveHandler = useThrottle((evt: MouseEvent) => {
    const {pageX, pageY} = evt[0]

    posList.value = listitemRect.value.map((item) => {
        return {
            x: (pageX - item.x),
            y: (pageY - item.y)
        }
    })
    
}, 0)

const listen = () => {
    const dom = listRef.value!
    if(!dom) return
    dom.addEventListener('mouseenter', enterHandler)
    dom.addEventListener('mouseleave', leaveHandler)

    return function stop() {
        dom.removeEventListener('mouseenter', enterHandler)
        dom.addEventListener('mouseleave', leaveHandler)
    }
}

onMounted(() => {
    listitemRect.value = listitemRef.value!.map((comp: any, i) => {
        const dom = comp.$el as Element
        const { x, y, left, top } = dom.getBoundingClientRect();
        return { x, y, left, top }
    })
    const stop = listen()
    onBeforeUnmount(() => {
        stop?.()
    })
})

</script>

<style>
.list {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, auto);
    grid-gap: 2em;
    padding: 2em;
    height: 600px;
    border: 1px solid;
    border-radius: 6px;
}

</style>