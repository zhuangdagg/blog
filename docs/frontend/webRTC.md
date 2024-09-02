# webRTC


## 访问设备

### [`mdn`. MediaDevices Doc](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices)

### 关停流
```js
navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        // 关闭
        stream.getTracks().forEach(track => track.stop())
    })
```

### 视频分辨率

- QVGA(320*240) / VGA(640*480)

- 高清 720P 1280*720

- 超清 1080P 1920*1080

- 2K 2560*1440

- 4K 4096*2160

- 8K 7680*4320

## 代码示例

[演练场](/playground#webrtc){target="_blank"}
<!-- <script setup>
    import Playground from '/components/playground/playground.vue'
</script>

<Playground /> -->