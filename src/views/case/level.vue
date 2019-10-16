<template>
  <section>
    <div class="g-breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>积案结案</el-breadcrumb-item>
        <el-breadcrumb-item>本级积案筛选库</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="g-condition-item">
      <el-form :inline="true">
        <el-form-item label="信访事项编号">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="问题属地">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="汇报状态">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="登记状态">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="登记日期">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="新增重件">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="化解单位">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="信访次数">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="结案方式">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="化解状态">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="四个重点">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="是否涉法涉诉标记(省标准)">
          <el-input placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="是否原积案">
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
          <el-button>引入</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="g-content">
      <el-table border :data="tableData">
        <el-table-column
          type="selection"
          width="54">
        </el-table-column>
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
