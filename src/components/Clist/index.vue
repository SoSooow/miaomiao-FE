<template>
    <div class="cinema_body">
		<loading v-if="loading" />
		<scroller  :handleToScroll='handleToScroll' :handleToTouchEnd='handleToTouchEnd'>
				<ul>
					<li class="pullDown">{{pullDownMsg}}</li>
					<li v-for="item in cinemas" :key="item.id">
						<div>
							<span>{{item.nm}}</span>
							<span class="q"><span class="price">{{item.sellPrice}}</span> 元起</span>
						</div>
						<div class="address">
							<span>{{item.addr}}</span>
							<span>{{item.distance}}</span>
						</div>
						<div class="card">
                			<div v-for="(num,key) in tagName(item.tag)" :key="num">{{key|formatCard}}</div>            			
       					</div>
					</li>
				</ul>
		</scroller>
	</div>
</template>

<script>
export default {
  name: 'Clist',
  data(){
	  return{
		cinemas:[],
		pullDownMsg: '',
		loading: true,
		prevCityId: -1,
	  }
  },
  activated(){
	  var CityId=this.$store.state.city.id;
	  if(CityId===this.prevCityId){return;}
	  this.axios.get('/api/cinemaList?cityId='+CityId).then((res)=>{
		  var msg=res.data.msg;
		  if (msg==='ok') {
			  this.cinemas=res.data.data.cinemas;
			  this.loading=false;
			  this.prevCityId=CityId;
		  }
	  })
  },
   methods:{
	   tagName:function (tag) {
		//    console.log(tag);
		  let obj={};
		  let id=0;
		 for (var key in tag) {
			if (tag[key]===1) {
				obj[key]=id;
				id++;
			}
			 
		 }
		//   console.log(obj);
		  return obj;
	  },
      handleToScroll(pos){
          if (pos.y>30) {
               this.pullDownMsg='正在更新中';
          }
         
      },
      handleToTouchEnd(pos){
            if(pos.y>30){
                          this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
                        var msg=res.data.msg;
                          if(msg==='ok'){
                          this.pullDownMsg='更新成功';
                          setTimeout(() => {
                               this.movieList=res.data.data.movieList;
                               this.pullDownMsg='';
                          }, 1000);
                          }
                    });
            }
      }
  },
  filters:{
	  formatCard(key){
		  var card=[{key:'allowRefund',value:'改签'},{key:'sell',value:'折扣'},{key:'snack',value:'小吃'},{key:'endorse',value:'退'}];
		  for (let index = 0; index < card.length; index++) {
			  if (card[index].key===key) {
				  return card[index].value;
			  }
		  }

	  }
  },
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}
.cinema_body .pullDown{margin: 0;padding: 0;border: none;}
</style>
