<template>
    <div>
        <el-container id="app">
            <el-header id="header">
                工作流系统
            </el-header>
            <el-container>
                <el-aside style="width: 200px;height:100%;">
                    <el-menu background-color="rgb(255, 255, 255)" style="height:100%;" router>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>功能列表</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/index/add">选项1</el-menu-item>
                                <el-menu-item index="/index/list">选项2</el-menu-item>
                            </el-menu-item-group>

                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>
    #app {
        background-color: aquamarine;
        height: 100%;
        width: 100%;
        position: absolute
    }

    #header {
        background-color: rgb(153, 154, 157);
        border-radius: 1px;
        box-shadow: inset 1px 2px 1px 21px rgb(153, 154, 157);
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
</style>