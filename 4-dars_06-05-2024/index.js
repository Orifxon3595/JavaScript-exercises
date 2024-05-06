// Homework

// 4.1
// let browser = 'Safari'
// switch (browser) {
//     case 'Edge':
//         console.log("You've got the Edge!");
//         break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         console.log("Okay we support these browsers too");
//         break;
//     default:
//         console.log("We hope that this page look ok!");
// }
// in the console: Okay we support these browsers too

// 4.2
// let a = ?;

// if(a == 0){
//     console.log(0);
// }
// if (a == 1) {
//     console.log(1);
// }
// if(a == 2 || a == 3){
//     console.log('2,3');
// }
// in the console: a = 0 // 0; a = 1 // 1; a = 2 or 3 too // '2,3' but not all ifs are dependent on each other

let p = 10;

for(i = 2; i <= p; i++){
    if(i%2 == 1){
        console.log(i, "tub son");
    }
    else {
        console.log("error");
    }
}