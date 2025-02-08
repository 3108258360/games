<template>
  <el-button class="showDir" type="primary" @click="drawer = true"
    >目录</el-button
  >
  <el-drawer v-model="drawer" :with-header="false" size="auto">
    <el-button type="primary" @click="drawer = false">关闭目录</el-button>
    <template v-for="productData in datas">
      <p>
        <a :href="'#' + productData.name" @click="drawer = false">{{
          productData.name
        }}</a>
      </p>
    </template>
    <el-button type="primary" @click="scrollToTop">返回顶部</el-button>
  </el-drawer>
  <template v-for="(productData, productName) in datas" :key="productName">
    <h1 :id="productData.name">{{ productData.name }}</h1>
    <figure>
      <el-image
        @switch="handleSwitch(productName, $event)"
        :preview-src-list="productData.images"
        :src="productData.currentImage"
        :alt="productData.currentName"
        :initial-index="productData.currentIndex"
        loading="lazy"
      />
      <figcaption :key="productData.currentName">
        {{ productData.currentName }}
      </figcaption>
    </figure>
    <blockquote
      v-for="item in productData.descriptions"
      v-html="item"
      :key="item"
      :cite="productData.link"
    ></blockquote>
  </template>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface ProductData {
  name: string;
  currentName: string;
  currentImage: string;
  currentIndex: number;
  link: string;
  images: string[];
  imageNames: string[];
  descriptions: string[];
}

interface Datas {
  [key: string]: ProductData;
}

const datas = ref<Datas>({});

fetch("/intro/intro.json").then(async (res) => {
  const intro = await res.json();
  datas.value = intro;
});
const drawer = ref(false);
const handleSwitch = (productName: string | number, index: number) => {
  const productData = datas.value[productName];
  productData.currentImage = productData.images[index];
  productData.currentName = productData.imageNames[index];
  productData.currentIndex = index;
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  drawer.value = false;
};
</script>
<style scoped>
h1 {
  line-height: 1.7;
  text-indent: 20px;
}
.el-button {
  margin-top: 10px;
}
.el-image {
  max-width: 300px;
}
.showDir {
  position: fixed;
  top: 100px;
  right: 50px;
  z-index: 1;
}
a:link,
a:visited {
  color: var(--el-color-primary);
}
a:hover,
a:active {
  color: var(--el-color-danger);
}
blockquote {
  color: var(--el-text-color-primary);
  line-height: 1.7;
}
figure {
  float: right;
  margin: 16px 0;
  text-align: center;
}

@media screen and (max-width: 450px) {
  h1 {
    text-indent: 0;
  }
  blockquote {
    margin: 16px;
  }
  figure {
    margin: 0 0 10px 0;
    width: 100%;
    text-align: center;
  }
}
</style>
