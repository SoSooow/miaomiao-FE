<template>
    <div class="city_body">
		<div class="city_list">
		  <scroller ref="city_list">
			<div>
				<div class="city_hot">
					<h2>热门城市</h2>
					<ul class="clearfix">
						<li v-for="item in hotList" :key="item.id" @tap='handleToCity(item.nm,item.id)'>{{item.nm}}</li>
					</ul>
				</div>

				<div class="city_sort" ref="city_sort">
					<div v-for="item in cityList" :key="item.index">
						<h2>{{item.index}}</h2>
						<ul>
							<li v-for="item in item.list" :key="item.id" @tap='handleToCity(item.nm,item.id)'>{{item.nm}}</li>
						</ul>
					</div>	
				</div>
			</div>
			</scroller>
		</div>
		

		<div class="city_index">
			<ul>
				<li v-for="(item,index) in cityList" :key="item.index" @touchstart='handleIndex(index)'>{{item.index}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
  name: 'City',
  data() {
	  return{
		  cityList: [],
		  hotList: [],

	  }
  },
  mounted(){
	  var cityList=window.localStorage.getItem('citylist');
	  var hotList=window.localStorage.getItem('hotlist');
	  if (cityList&&hotList) {
		  this.cityList=cityList;
		  this.hotList=hotList; 
	  }else{
			this.axios.get('/api/cityList').then((res)=>{
			//   console.log(res);
			const msg=res.data.msg;
			if(msg==='ok'){
				var cities=res.data.data.cities;
				var {cityList,hotList}=this.formatCities(cities);
				this.cityList=cityList;
				this.hotList=hotList;
				window.localStorage.setItem('citylist',JSON.stringify(cityList));
				window.localStorage.setItem('citylist',JSON.stringify(hotList));
			}
		});
	  }
	 
  },
  methods:{
	  handleToCity(nm,id){
		  this.$store.commit('city/CITY_INFO',{nm,id});
		  window.localStorage.setItem('nowCity',nm);
		  window.localStorage.setItem('nowId',id);
		  this.$router.push('/movie/nowplaying');
	  },
	  handleIndex(index){
		  var h2=this.$refs.city_sort.getElementsByTagName('h2');
		//   this.$refs.city_sort.parentNode.scrollTop=h2[index].offsetTop;
		  this.$refs.city_list.toScroll(-h2[index].offsetTop);

	  },
	  formatCities(cities){
		 var cityList=[];   //[{index:'A',list:[{id:'1',nm:'阿城'}]}]
		 var hotList=[];
		  for (let index = 0; index < cities.length; index++) {
			 var firstLetter=cities[index].py.substring(0,1).toUpperCase();
			 if (cities[index].isHot==1) {
				 hotList.push({'id':cities[index].id,'nm':cities[index].nm})
			 }
			  if(toCom(firstLetter)){//新添加
			  cityList.push({'index':firstLetter,list:[{'id':cities[index].id,'nm':cities[index].nm}]});
			  }else{//添加已有元素
			  for (let j = 0; j < cityList.length; j++) {
				  if (cityList[j].index===firstLetter) {
					  cityList[j].list.push({'id':cities[index].id,'nm':cities[index].nm});	  
				  }  
			    }
			  }  
		  }
		  function toCom(firstLetter){
			  for (let index = 0; index < cityList.length; index++) {
				  if (cityList[index].index===firstLetter) {
					  return false;
				  }  
			  }
			  return true;
		  }
		  cityList.sort((n1,n2)=>{
			  if(n1.index>n2.index){
				  return 1;
			  }else if(n1.index<n2.index){
				  return -1;
			  }else{
				  return 0;
			  }
		  });
		// console.log(hotList);
		return {cityList,hotList}

	  }
  }
}
</script>

<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}

</style>
