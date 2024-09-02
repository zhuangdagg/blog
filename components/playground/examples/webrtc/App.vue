<!-- webRtc -->
<template>
    <div class="webrtc">
        <button @click="getDeviceInfos">获取设备信息：</button>
        <ul>
            <li v-for="item in deviceInfos">{{ item }}</li>
        </ul>

        <hr />

        <button @click="getUserMedia">{{ isOpen ? '关闭摄像头' : '打开摄像头' }}</button>
        <video class="rtc-contain" ref="videoRef" autoplay></video>

        <hr />

        <button :disabled="!isOpen" @click="screenShot">截图</button>
        <canvas style="display: none;" ref="canvasRef" />
        <img v-show="screenUrl" :src="screenUrl" class="rtc-contain" />
        <hr />
        <button @click="screenShare">共享屏幕</button>
        <video class="rtc-contain" ref="screenShareRef" autoplay />
    </div>
    <ConfigModify />
</template>

<script setup lang="ts">
import { ref, unref, onMounted } from 'vue'

import ConfigModify from './ConfigModify.vue'

let cameraStream : MediaStream = undefined as any
let screenStream : MediaStream = undefined as any

const deviceInfos = ref<any[]>([])

const videoRef = ref<HTMLVideoElement>()
const screenShareRef = ref<HTMLVideoElement>()
const canvasRef = ref<HTMLCanvasElement>()

const isOpen = ref(false)

const constraints = ref<MediaStreamConstraints>({
    video: {
        width: { min: 640, ideal: 1280, max: 1920 },
        height: { min: 480, ideal: 720, max: 1080 }
    },
    audio: false
})

const displayMediaConstraints = ref<DisplayMediaStreamOptions>({
    video: {
        width: { ideal: 1280, max: 1920 },
        height: { ideal: 720,  max: 1080 }
    }
})

const screenUrl = ref('')

// onMounted
onMounted(() => {
    // getDeviceInfos();
})

const getDeviceInfos = () => {
    window.navigator.mediaDevices.enumerateDevices().then((res) => {
        console.log(res)
        deviceInfos.value = res
        
    }, console.error)
}


const getUserMedia = () => {
    if(isOpen.value) {
        // 关闭 流
        cameraStream.getTracks().forEach(track => track.stop());
        isOpen.value = false
        return 
    }
    window.navigator.mediaDevices.getUserMedia(constraints.value).then((stream) => {
        console.log(videoRef.value);
        cameraStream = stream
        videoRef.value!.srcObject = cameraStream
        isOpen.value = true
    }, console.warn)
}


// 录屏截图
const screenShot = () => {
    const canvas = unref(canvasRef)!

    canvas.width = videoRef.value!.videoWidth
    canvas.height = videoRef.value!.videoHeight

    const context = canvas.getContext('2d')!
    context.drawImage(videoRef.value!, 0, 0, canvas.width, canvas.height)
    console.log('截图成功！')
    screenUrl.value = canvas.toDataURL('image/png')
}

// 共享屏幕
const screenShare = () => {
    window.navigator.mediaDevices.getDisplayMedia(displayMediaConstraints.value).then((stream) => {
        screenStream = stream
        screenShareRef.value!.srcObject = screenStream
    }, console.error)
}

</script>

<style>
.rtc-contain {
    width: 300px;
    height: 200px;
    border: 1px solid;
    /* 滤镜 */
    /* filter: blur(3px); */
}

.webrtc {
    padding: 4px;

    & button {
        margin-right: 8px;
    }
}
</style>