<template>
    <button @click="dialogShow = !dialogShow">修改配置</button>
    <Teleport to="body">
        <div v-if="dialogShow" class="dialog">
            <header>
                <div class="title">修改配置</div>
                <button @click="dialogShow = false">关闭</button>
            </header>
            <form>
                <form-item>
                    <label for="">麦克风：</label>
                    <select>
                        <option value="1">mac one</option>
                        <option value="2">mac two</option>
                    </select>
                </form-item>
            </form>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = withDefaults(defineProps<{
    title?: string,
}>(), {
    title: '修改配置',
}) 

const dialogShow = ref(false)

const configModify = () => {

}
</script>

<style>
.dialog {
    position: absolute;
    width: 80%;
    height: 400px;
    margin: auto;
    top: 0; bottom: 0;
    left: 0; right: 0;

    background: rgb(255, 255, 255);
    box-shadow: 0 0 4px rgba(0, 0, 0, .25);

    & header {
        display: flex;
        padding: 4px 10px;
        border-bottom: 1px solid rgba(0, 0, 0, .25);
        & .title {
            flex: 1;
            color:
        } 
    }
}
</style>