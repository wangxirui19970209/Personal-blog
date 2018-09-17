<template>
  <div>
      <top-header></top-header>
      <el-container>
        <left-menu></left-menu>
        <el-main>Main</el-main>
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

</style>