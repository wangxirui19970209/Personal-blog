<template>
  <div>
      <top-header></top-header>
      <el-container>
        <left-menu></left-menu>
        <div class="main">
          <router-view>Main</router-view>
        </div>
      </el-container>
  </div>
</template>

<script>
  import leftMenu from '../components/leftMenu'
  import topHeader from '../components/topHeader'

  export default {
    components:{
      leftMenu,
      topHeader
    }
  }
</script>

<style scoped>
.main {
  padding-left: 200px;
}
</style>