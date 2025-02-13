<template>
  <el-button class="showDir" type="primary" @click="drawer = true"
    >目录</el-button
  >
  <el-drawer v-model="drawer" :with-header="false" size="auto">
    <el-button type="primary" @click="drawer = false">关闭目录</el-button>
    <el-input v-model="searchQuery" placeholder="搜索..." />
    <template v-for="i in filteredList" :key="i.file">
      <p>
        <a :href="'#' + getFileName(i.file)" @click="drawer = false">{{
          getFileName(i.file)
        }}</a>
      </p>
    </template>
    <el-button type="primary" @click="scrollToTop">返回顶部</el-button>
  </el-drawer>
  <Waterfall
    :list="filteredList"
    :width="300"
    :gutter="20"
    :hasAroundGutter="false"
  >
    <template #default="{ item }">
      <figure :id="getFileName(item.file)" @click="startGame(item.file)">
        <LazyImg :url="'roms/' + getFileName(item.file) + '.png'" />
        <figcaption>{{ getFileName(item.file) }}</figcaption>
      </figure>
    </template>
  </Waterfall>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";

const drawer = ref(false);
const searchQuery = ref("");

const router = useRouter();

interface FileInfo {
  file: string;
}

const list = ref<FileInfo[]>([]);

fetch("roms/roms.json").then(async (res) => {
  list.value = await res.json();
});

const getFileName = (file: string) => {
  return file.split(".").slice(0, -1).join(".");
};

const startGame = (file: string) => {
  router.push({
    path: "emulator",
    query: {
      url: `/roms/${getFileName(file)}.7z`,
      ext: `${file.split(".").pop()}`,
    },
  });
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  drawer.value = false;
};

const filteredList = computed(() => {
  return list.value.filter((item) =>
    getFileName(item.file)
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())
  );
});
</script>
<style scoped>
.showDir {
  position: fixed;
  top: 100px;
  right: 50px;
  z-index: 1;
}
.el-input {
  margin-top: 20px;
}
figure {
  cursor: pointer;
  margin: 0;
  text-align: center;
}
figcaption {
  margin-top: 15px;
}
a:link,
a:visited {
  color: var(--el-color-primary);
}
a:hover,
a:active {
  color: var(--el-color-danger);
}
</style>
