<template>
  <div id="main">
    <Header />
      <div id="content">
        <div class="movie_menu">
          <router-link tag="div" to="/movie/city" class="city_name">
            <span>{{$store.state.city.nm}}</span><i class="icon iconfont">&#xe65b;</i>
          </router-link>
          <div class="hot_switch">
            <router-link tag="div" to="/movie/nowplaying" class="hot_item">正在热映</router-link>
            <router-link  tag="div" to="/movie/comingsoon" class="hot_item">即将上映</router-link>
          </div>
          <router-link  tag="div" to="/movie/search" class="search_entry">
            <i class="icon iconfont">&#xe649;</i>
          </router-link>
        </div>
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    <TabBar />
  </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
export default{
  name: "Movie",
   components: {
     Header,
     TabBar,
   }
}
</script>

<style scoped>
#content .movie_menu{ width:100%;height: 45px;border-bottom: 1px solid #e6e6e6;display: flex;justify-content: space-between;}
.movie_menu .city_name{margin-left: 20px;height: 100%;line-height: 45px;box-sizing: border-box;}
.movie_menu .city_name.active{color:#ef4238;border-bottom: 2px solid #ef4238;}
.movie_menu .city_name.router-link-active{color:#ef4238;border-bottom: 2px solid #ef4238;}
.movie_menu .hot_switch{display: flex;height: 100%;line-height: 45px;}
.movie_menu .hot_item{font-size: 15px;color: #666;width: 80px;text-align: center;margin: 0 12px;font-weight: 700;}
.movie_menu .hot_item.active{color:#ef4238;border-bottom: 2px solid #ef4238;}
.movie_menu .hot_item.router-link-active{color:#ef4238;border-bottom: 2px solid #ef4238;}
.movie_menu .search_entry{margin-right: 20px;height: 100%;line-height: 45px;box-sizing: border-box}
.movie_menu .search_entry.router-link-active{border-bottom: 2px solid #ef4238;}
.movie_menu .search_entry.router-link-active i{color:#ef4238;}
.movie_menu .search_entry i{font-size: 24px;color:#666;}
</style>