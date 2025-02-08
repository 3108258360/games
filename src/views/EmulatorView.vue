<template>
  <div class="iframe-container">
    <iframe :src frameborder="0"></iframe>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const src = ref("emulator.html");
const route = useRoute();
if (route.query.url != undefined) {
  src.value =
    "emulator.html?url=" + route.query.url + "&ext=" + route.query.ext;
}
</script>
