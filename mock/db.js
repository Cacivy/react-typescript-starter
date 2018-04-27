"use strict";
exports.__esModule = true;
var faker = require("faker");
faker.locale = 'zh_CN';
// index.js
module.exports = function () {
    var datamodels = [
        {
            id: 0,
            modelname: '用户数据'
        },
        {
            id: 1,
            modelname: '订单数据',
            children: []
        },
        {
            id: 2,
            modelname: '物流数据'
        },
        {
            id: 3,
            modelname: '金融数据'
        }
    ];
    var reports = [
        {
            id: 0,
            reportname: '用户数据',
            children: []
        },
        {
            id: 1,
            reportname: '订单数据',
            children: []
        },
        {
            id: 2,
            reportname: '物流数据',
            children: []
        },
        {
            id: 3,
            reportname: '金融数据',
            children: []
        }
    ];
    // Create 100users
    for (var i = 5; i < 9; i++) {
        datamodels[1].children.push({
            id: i,
            modelname: faker.name.findName(),
            modelsource: faker.database.type(),
            createTime: faker.date.past(),
            updateTime: faker.date.recent(),
            createUser: faker.name.findName(),
            updateUser: faker.name.findName(),
            parentId: 1
        });
        reports[1].children.push({
            id: i,
            reportname: faker.name.findName(),
            reportsource: faker.database.type(),
            createTime: faker.date.past(),
            updateTime: faker.date.recent(),
            createUser: faker.name.findName(),
            updateUser: faker.name.findName(),
            status: (i % 3)+1,
            parentId: 1
        })
    }
    var data = {
        datamodels,
        reports
    };
    return data;
};
