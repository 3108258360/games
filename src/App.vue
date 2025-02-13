<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header><HeaderComponent /></el-header>
      <el-main> <RouterView /> </el-main>
    </el-container>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
.iframe-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
iframe {
  flex: 1;
  aspect-ratio: 3/2;
  max-width: calc(150dvh - 180px);
}
strong {
  color: var(--el-color-primary);
  color: #409eff;
}
@media screen and (max-width: 450px) {
  iframe {
    flex: 1;
    aspect-ratio: 3/2;
  }
  .el-main {
    padding: 0;
  }
}
</style>
