<template>
    <div ref="contain" class="contain"></div>
</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue';
import * as three from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const contain = ref<HTMLElement>()

const scene = new three.Scene();
const renderer = new three.WebGLRenderer({ antialias: true })

const camera = new three.PerspectiveCamera(70, 1, 0.1, 100)
camera.position.z = 5

const cubeMesh = new three.Mesh(
    new three.BoxGeometry(1, 1, 1),
    new three.MeshBasicMaterial({ color: 0xcccccc })
)
scene.add(cubeMesh)

onMounted(() => {
    if(contain.value) {
        const { clientWidth: w, clientHeight: h} = contain.value

        camera.aspect = contain.value.clientWidth / contain.value.clientHeight
        camera.lookAt( scene.position );
        camera.updateProjectionMatrix()
        renderer.setSize(contain.value.clientWidth, contain.value.clientHeight)

        contain.value.appendChild(renderer.domElement)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.addEventListener('change', () => {
            renderer.render(scene, camera)
        })
        renderer.render(scene, camera)
    }
})
</script>

<style>
.contain {
    height: 600px;
}
</style>