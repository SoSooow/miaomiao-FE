const state={
    nm: window.localStorage.getItem('nowCity')||'广州',
    id: window.localStorage.getItem('nowId')|| 20,
};

const actiones={

};

const mutations={
    CITY_INFO(state,payload){
        state.nm=payload.nm;
        state.id=payload.id;
    }

};

export default{
    namespaced :true, 
    state,
    actiones,
    mutations,
}