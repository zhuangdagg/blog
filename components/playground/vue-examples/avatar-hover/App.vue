<template>
    <div class="contain">
        <div class="avatar">
            <img src="/blog/assets/images/snake.png" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tip = ref('hello')
</script>
<style>
.contain {
    width: 100%;
    text-align: center;
}
.avatar {
    position: relative;
    width: 500px;
    height: 700px;
    border-radius: 0 0 250px 250px;
    left: 0;
    transition: 0.5s;
    overflow: hidden;

    &::before {
        display: block;
        position: absolute;
        transition: 0.5s;
        content: '';
        width: 500px;
        height: 500px;
        bottom: 0; left: 0; right: 0;
        border-radius: 50%;
        background-color: aquamarine;
    }

    img {
        position: absolute;
        transition: 0.5s;
        z-index: 2;
        width: 500px;
        left: 0;
        bottom: 0;
    }
}

.avatar:hover {
    left: 20px;
    width: 460px;
    &::before {
        width: 460px;
        height: 460px;
    }

    & img {
        left: -50px;
        bottom: -40px;
        width: 600px;
    }
}

</style>