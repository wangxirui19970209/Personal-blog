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
              <div v-for="(children,num) in menuConfig[index].children" :key="num">
                <router-link :to="children.url">
                  <el-menu-item :index="`${index}-${num}`">
                    {{children.label}}
                  </el-menu-item>
                </router-link>
              </div>
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
    data() {
      return {
        menuConfig: menuConfig
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
      .el-menu-vertical-demo {
        border: 0;
      }
    }
  }
</style>