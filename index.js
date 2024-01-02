const Mock = require('mockjs');
const obj = Mock.mock({
    "id|+1": "@id",
    'name|1-20': "@cname",
});

console.log(obj);
