export const menus = [
  {
    title: '个人中心',
    icon: 'el-icon-user',
    children: [
      {
        text: '我的关注',
        path: '/my/care'
      },
      {
        text: '我的业务组',
        path: '/my/business'
      },
      {
        text: '常用功能设置',
        path: '/my/setting'
      },
      {
        text: '知识库收藏夹',
        path: '/my/collect'
      },
      {
        text: '常用网址管理',
        path: '/my/website'
      }
    ]
  },
  {
    title: '事项预处理',
    icon: 'el-icon-folder-opened',
    children: [
      {
        text: '来电预处理',
        path: '/pending/call'
      },
      {
        text: '领导信箱预处理',
        path: '/pending/mailbox'
      },
      {
        text: '网上事项预处理',
        path: '/pending/website'
      },
      {
        text: '来信预处理',
        path: '/pending/letter'
      }
    ]
  },
  {
    title: '我的待办',
    icon: 'el-icon-document-delete',
    children: [
      {
        text: '个人待办',
        path: '/my/todo'
      },
      {
        text: '待签收',
        path: '/my/signfor'
      }
    ]
  },
  {
    title: '信访事项办理',
    icon: 'el-icon-document-remove',
    children: [
      {
        text: '全部信访事项',
        path: '/matter/all'
      },
      {
        text: '上级转送信访事项',
        path: '/matter/letter'
      },
      {
        text: '上级转送来信事项',
        path: '/matter/incoming'
      },
      {
        text: '上级转送来访事项',
        path: '/matter/visit'
      },
      {
        text: '上级转送网上事项',
        path: '/matter/website'
      }
    ]
  },
  {
    title: '我的已办',
    icon: 'el-icon-document-checked',
    children: [
      {
        text: '未办结信访事件',
        path: '/my/unknotletter'
      },
      {
        text: '已办结信访事件',
        path: '/my/knotletter'
      },
      {
        text: '送审审批记录',
        path: '/my/approval'
      }
    ]
  },
  {
    title: '我的登记',
    icon: 'el-icon-document',
    children: [
      {
        text: '信访事项登记',
        path: '/register/letter'
      },
      {
        text: '来电登记',
        path: '/register/call'
      },
      {
        text: '来信登记',
        path: '/register/incoming'
      },
      {
        text: '来访登记',
        path: '/register/visit'
      },
      {
        text: '领导信箱登记',
        path: '/register/leader'
      },
      {
        text: '网上信访登记',
        path: '/register/website'
      }
    ]
  },
  {
    title: '快速查询',
    icon: 'el-icon-search',
    path: '/search'
  },
  {
    title: '事项查看表',
    icon: 'el-icon-s-order',
    path: '/order'
  },
  {
    title: '回访核实',
    icon: 'el-icon-coordinate',
    children: [
      {
        text: '回访库',
        path: '/library/visit'
      },
      {
        text: '核实库',
        path: '/library/verify'
      },
      {
        text: '省级越级访',
        path: '/library/province'
      },
      {
        text: '国家越级访',
        path: '/library/country'
      }
    ]
  },
  {
    title: '复查复核',
    icon: 'el-icon-place',
    children: [
      {
        text: '复查',
        path: '/complex/inquire'
      },
      {
        text: '复核',
        path: '/complex/verify'
      },
      {
        text: '老系统终结备案数据',
        path: '/complex/olddata'
      },
      {
        text: '待终结备案数据',
        path: '/complex/undata'
      },
      {
        text: '已终结备案入库',
        path: '/complex/warehousing'
      }
    ]
  },
  {
    title: '督查督办',
    icon: 'el-icon-view',
    children: [
      {
        text: '上级交办信访事件',
        path: '/supervise/assigned'
      },
      {
        text: '上级督办信访事件',
        path: '/supervise/handle'
      },
      {
        text: '立项督办库',
        path: '/supervise/approval'
      },
      {
        text: '听证终结库',
        path: '/supervise/hearing'
      },
      {
        text: '督查专家库',
        path: '/supervise/expert'
      }
    ]
  },
  {
    title: '数据修改审批',
    icon: 'el-icon-edit',
    path: '/datahandling'
  },
  {
    title: '积案结案',
    icon: 'el-icon-s-platform',
    children: [
      {
        text: '本级积案筛选库',
        path: '/case/level'
      },
      {
        text: '上级积案筛选库',
        path: '/case/sup'
      },
      {
        text: '下级积案筛选库',
        path: '/case/sub'
      },
      {
        text: '国家积案汇报情况',
        path: '/case/country'
      }
    ]
  },
  {
    title: '紧急信息',
    icon: 'el-icon-bell',
    children: [
      {
        text: '紧急信息报转',
        path: '/pressing/report'
      },
      {
        text: '紧急信息待处理',
        path: '/pressing/unmessage'
      },
      {
        text: '紧急信息已处理',
        path: '/pressing/message'
      },
      {
        text: '网格上报信访事件库',
        path: '/pressing/grid'
      }
    ]
  },
  {
    title: '重点人员',
    icon: 'el-icon-s-custom',
    path: '/personnel'
  },
  {
    title: '诚信管理',
    icon: 'el-icon-tickets',
    path: '/sincerity'
  },
  {
    title: '知识库管理',
    icon: 'el-icon-document-copy',
    path: '/knowledge'
  }
]
