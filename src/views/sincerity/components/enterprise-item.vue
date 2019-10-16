<template>
  <section>
    <div class="g-condition-item">
      <el-form :inline="true">
        <el-form-item label="企业名称">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="企业信用编号">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="投诉次数">
          <el-input placeholder=""></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-condition-btn">
      <el-form :inline="true">
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button type="info">清空</el-button>
          <el-button type="success">打开</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-content">
      <el-table border :data="tableData">
        <el-table-column
          prop="date"
          label="信访事项编号">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="问题属地">
        </el-table-column>
      </el-table>
    </div>
    <div class="g-pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="20"
        :total="248">
      </el-pagination>
    </div>
  </section>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>
