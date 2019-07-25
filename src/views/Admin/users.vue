<template>
    <div>
        <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
        prop="date"
        label="日期">
        </el-table-column>
        <el-table-column
        prop="username"
        label="姓名">
        </el-table-column>
        <el-table-column
        prop="email"
        label="邮箱">
        </el-table-column>
         <el-table-column
        fixed="right"
        label="操作">
        <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    name: 'users',
    data(){
        return{
            tableData:[],
        }
    },
    mounted(){
        this.axios.get('/api2/admin/userList').then((res)=>{
            var status=res.data.status;
            if (status==0) {
                this.tableData=res.data.data.userlist;
            }
        })
    }

}
</script>

<style>
</style>
