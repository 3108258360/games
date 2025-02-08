<template>
  <h1>简介</h1>
  <blockquote>
    <p>本站整合了Emulatorjs和Ruffle，可在线运行40多种模拟器和Flash Player。</p>
  </blockquote>
  <h1>提示</h1>
  <blockquote>
    <p>即时存档：可保存到浏览器中，存档不会随模拟器关闭而销毁。</p>
    <p>临时存档：提供9个临时插槽，方便SL，在关闭模拟器时销毁。</p>
  </blockquote>
  <h1>添加游戏</h1>
  <blockquote>
    <p>打开在线模拟器，测试ROM能否正常运行。在游戏主界面左键截图。</p>
    <p>
      上传ROM和截图到
      <a href="https://github.com/3108258360/games/tree/main/public/roms">
        仓库 </a
      >。编辑仓库下的roms.json，仿照格式添加ROM全名。
    </p>
  </blockquote>
</template>
<script lang="ts" setup></script>
<style scoped>
a:link,
a:visited {
  color: var(--el-color-primary);
}
a:hover,
a:active {
  color: var(--el-color-danger);
}
</style>
