<template>
    <div>
        <keep-alive>
            <router-view></router-view>
            <!-- 也可以写成<router-view/>  这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
        </keep-alive>
        <Player v-show="songList.length > 0 && !showDetail"></Player>
    </div>
</template>

<script>
    import Player from './components/playerBar'
    import { mapGetters } from 'vuex'

    export default {
      data () {
        return {
        }
      },
      components: {
        player
      },
      computed: {
        ...mapGetters([
          'songList',
          'showDetail'
        ])
      }
    };
</script>

<!--<style>-->
  <!--#app {-->
    <!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
    <!-- -webkit-font-smoothing: antialiased;-->
    <!-- -moz-osx-font-smoothing: grayscale;-->
    <!--text-align: center;-->
    <!--color: #2c3e50;-->
    <!--margin-top: 60px;-->
  <!--}-->
<!--</style>-->
