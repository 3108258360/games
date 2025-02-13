<template>
  <h1>简介</h1>
  <blockquote>
    <p>本站整合了Emulatorjs和Ruffle，可在线运行40多种模拟器和Flash Player。</p>
  </blockquote>
  <h1>提示</h1>
  <blockquote>
    <p>所有ROM已压缩为7z格式，减少首次加载时间。</p>
    <p>移动端屏幕小，请点击右上角图标打开菜单，选择全屏即可。</p>
    <p>右键菜单新增更改手柄位置，可以按照你的使用习惯定义布局。</p>
    <p>即时存档：可保存到浏览器中，存档不会随模拟器关闭而销毁。</p>
    <p>临时存档：提供9个临时插槽，方便SL，在关闭模拟器时销毁。</p>
  </blockquote>
  <h1>添加游戏</h1>
  <blockquote>
    <p>加入QQ群：578469285，获取编辑权限。</p>
    <p>打开在线模拟器，测试ROM能否正常运行。在游戏主界面左键截图。</p>
    <p>
      压缩ROM文件，格式选7z，上传ROM和截图到
      <a
        href="https://github.com/3108258360/games/tree/main/public/roms"
        target="_blank"
      >
        仓库 </a
      >。
    </p>
    <p>编辑仓库下的roms.json，填未压缩的ROM全名。</p>
  </blockquote>
</template>
<script lang="ts" setup></script>
<style scoped>
h1 {
  line-height: 1.7;
  text-indent: 20px;
}
blockquote {
  color: var(--el-text-color-primary);
  line-height: 1.7;
}
a:link,
a:visited {
  color: var(--el-color-primary);
}
a:hover,
a:active {
  color: var(--el-color-danger);
}
@media screen and (max-width: 450px) {
  h1 {
    text-indent: 0;
  }
  blockquote {
    margin: 16px;
  }
}
</style>
