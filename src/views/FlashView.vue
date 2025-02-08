<template>
  <el-button class="fullScreen" type="primary" @click="requestFullscreen"
    >全屏</el-button
  >
  <div class="iframe-container">
    <iframe ref="iframe" src="https://ruffle.rs/demo" frameborder="0"></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const iframe = ref<HTMLIFrameElement | null>(null);

const requestFullscreen = () => {
  if (iframe.value) {
    if (iframe.value.requestFullscreen) {
      iframe.value.requestFullscreen();
    }
  }
};
</script>
<style scoped>
.fullScreen {
  position: fixed;
  top: 100px;
  right: 50px;
  z-index: 1;
}
</style>
