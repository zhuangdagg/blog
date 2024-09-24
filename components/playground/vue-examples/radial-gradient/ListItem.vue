<template>
    <div class="list-item" :style="getPosVal">
        <div class="list-context">{{ data }}</div>
    </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';

const props = defineProps<{
    data: string
    pos?: {
        x: number,
        y: number
    }
}>()

const getPosVal = computed(() => {
    return {
        '--x':  `${props.pos?.x || 1000}px`,
        '--y': `${props.pos?.y || 0}px`
    }
})

</script>

<style>
.list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 20px;
    padding: 4px;
}

.list-context {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, .8);
    border-radius: .5em;
}

.list-item::before {
    transition: background 1s;
    z-index: -1;
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: .5em;
    background: radial-gradient(circle at var(--x) var(--y), rgb(99 102 241) 0, transparent 100%);
    will-change: background;
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
}
</style>