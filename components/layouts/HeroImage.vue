<template>
    <div class="custom-hero-image" ref="containRef"></div>
</template>

<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue'
import useThreeDecal from '../../composbles/useThreeDecal';

const containRef = useTemplateRef('containRef')

onMounted(() => {
    console.log(containRef.value)
    const instance = useThreeDecal()
    instance.mount(containRef.value!)
})

</script>

<style>
.VPHomeHero .image-container .image-bg {
    display: none;
}

.custom-hero-image {
    width: 100%;
    height: 100%;
    /* border: 1px solid; */
}
</style>