
var aaa = function() {
    var taskA = new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('taskA');
            resolve();
        }, 16);
    });
    var taskB = new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('taskB');
            reject();
        }, 1);
    });
    return new Promise((ac, rj) => {
        var before = new Date();
        Promise.race([taskA, taskB]).then(function () {
            var after = new Date();
            var result = after.getTime() - before.getTime();
            console.log(result);
            ac(result);
        }).catch(function () {
            console.log('error');
            rj('error');
        });
    });
}

aaa().then(v=>{
    console.log("aaaaaaaaaaaa 1", v);
}).catch(err=>{
    console.log("aaaaaaaaaaaa 2", err);
});