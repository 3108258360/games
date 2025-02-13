<template>
  <el-menu
    mode="horizontal"
    router
    :default-active="router.currentRoute.value.path"
  >
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/fe">Fire Emblem</el-menu-item>
    <el-menu-item index="/emulator">在线模拟器</el-menu-item>
    <el-menu-item index="/flash">Flash Player</el-menu-item>
    <el-menu-item index="/intro">机种简史</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import router from "@/router";
</script>
