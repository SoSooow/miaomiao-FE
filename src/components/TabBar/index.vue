<template>
    <div id="TabBar">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="icon iconfont">&#xe603;</i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema">
                <i class="icon iconfont">&#xe65a;</i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="icon iconfont">&#xe6b1;</i>
                <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#TabBar{ width: 100%;height: 50px;background: white;border-top: 2px solid #ebe8e3;position: fixed;left: 0;bottom: 0;}
#TabBar ul{ display: flex;text-align: center;height: 50px;align-items: center;}
#TabBar ul li{ flex: 1;height: 40px;}
#TabBar ul li.active{ color:#f03d37;}
#TabBar ul li.router-link-active{ color:#f03d37;}
#TabBar ul i{ font-size: 20px;}
#TabBar ul p{ font-size: 12px;line-height: 10px;}
</style>
