// setTimeout(()=>{
//     console.log("helo")
// },2000);


// /*function getData(dataid){
//     setTimeout(()=>{
//         console.log("datais",dataid)
//     },4000);
// }*/


// function getData(dataid,geNextData){
//    setTimeout(()=>{
//     console.log(dataid);
//     geNextData();
//    },2000);
// }
// getData(1,()=>{
//     console.log("getting data 2");
//     getData(2,()=>{
//         console.log("getting data 3");
//         getData(3)
//     });
// });



//Promis 


function asynType1() {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data1");
            resolve("sucess");
        },4000);
        
    });
}
 let p1=asynType1();
 p1.then((res)=>{
    console.log(res);
 })