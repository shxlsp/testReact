#!/usr/bin/env node
function dealWithArgv(params){
    let k = 0,
        obj = {};
    params.forEach(item => {
        if( item.indexOf('--') > -1 ){
            let arr = item.split('--')[1].split('=')
            obj[arr[0]] = arr[1];
            return;
        }
        obj[k++] = item;
    });
    return obj
}
(
    function(params){
        // 判断obj上是否含有某key => obj.hasOwnProperty(key);
        // console.log(params.hasOwnProperty('debugger'))
        console.log(params)
    }
)(dealWithArgv(process.argv))