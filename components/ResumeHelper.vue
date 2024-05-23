<template>
    <div class="resume-helper">
        <img title="打印" src="../assets/icons/print.png" @click="handlePrint" />
        <!-- <span>{{ title }}</span> -->
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('打印')


const handlePrint = () => {
    const ans = window.confirm('是否确认打印简历？')

    if(ans) {
        window.print();
    }
}
</script>

<style lang="scss">
.resume-helper {
    z-index: 2;
    position: absolute;
    right: 10px;
    opacity: 0.1;
    transition: opacity 0.5s;

    img {
        width: 32px; height: 32px;
        cursor: pointer !important;
    }
}

.main {
    &:hover {
        .resume-content {
            opacity: 1;
        }
        
    }
}

// 打印样式
@media print {
    .resume-content {
        .VPLocalNav {
            display: none;
        }
    }
    
}
</style>