let url = 'http://rapapi.org/mockjsdata/31797/index/hotLists';

let axios = require("axios")

axios.post(url, {
    pageNum: 1,
    pageSize: 10
}).then(res => {
    console.dir(res.data.lists);
});
