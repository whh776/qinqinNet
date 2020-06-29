import Mcok from 'mockjs'

Mcok.mock("/system/homestatisiccount",[
    {
        title:'用户总数',
        count:300000
    },
    {
        title:'昨日新增用户总数',
        count:200
    },
    {
        title:'活跃用户总数',
        count:180000
    },
    {
        title:'VIP用户总数',
        count:30000
    },
    {
        title:'昨日投诉举报总数',
        count:300
    },
])