const state={
    nm:window.localStorage.getItem('name')||'',
    isAdmin:window.localStorage.getItem('isAdmin')||false,
};

const actiones={

};

const mutations={
    USER_NAME(state,payload){
        state.nm=payload.nm;
        state.isAdmin=payload.isAdmin;
    }

};

export default{
    namespaced :true, 
    state,
    actiones,
    mutations,
}