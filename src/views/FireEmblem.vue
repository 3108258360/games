<template>
  <Waterfall :list="list" :width="300" :gutter="20" :hasAroundGutter="false">
    <template #default="{ item }">
      <figure>
        <LazyImg :url="'roms/' + getFileName(item.file) + '.png'" />
        <figcaption>{{ getFileName(item.file) }}</figcaption>
        <div class="buttons">
          <el-button type="primary" @click="downLoad(item.file)"
            >下载</el-button
          >
          <el-button type="primary" @click="startGame(item.file)"
            >开始</el-button
          >
        </div>
      </figure>
    </template>
  </Waterfall>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";
const router = useRouter();

const list = ref([]);
fetch("roms/roms.json").then(async (res) => {
  list.value = await res.json();
});
const getFileName = (file: string) => {
  return file.split(".").slice(0, -1).join(".");
};

const startGame = (file: string) => {
  router.push({
    path: "emulator",
    query: { url: `/roms/${file}` },
  });
};
const downLoad = (file: string) => {
  window.open(`/roms/${file}`);
};
</script>

<style scoped>
figure {
  margin: 0;
  text-align: center;
}
figcaption {
  margin-top: 10px;
}
.buttons {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: -25px;
}
button {
  cursor: pointer;
}
</style>
