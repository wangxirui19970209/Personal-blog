<template>
  <div class="left-bg">
    <div class="bg">
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu v-for="(item,index) in menuConfig" :index="item.folderId" :key="index">
            <template slot="title">
              <span>{{item.label}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item  v-for="(children,num) in menuConfig[index].children" :index="`${index}-${num}`" :key="num">
                <a :href="children.url">{{children.label}}</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
    </div>
  </div>
</template>

<script>
  import menuConfig from './../config/menuConfig'
  export default {
    name: "leftMenu",
    mounted() {
      this.$api.index.project().then((res)=>{
      })
      console.log(menuConfig.children)
    },
    data() {
      return {
        menuConfig: menuConfig
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" scoped>
  .left-bg {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 62px;
    height: 100%;
    overflow-y: scroll;
    .bg {
      height: 100%;
      background-color: rgb(84, 92, 100);
    }
  }
</style>