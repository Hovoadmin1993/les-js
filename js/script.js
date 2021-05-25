
// // page 73

// // Ex. N-11


// let n = +prompt("num n ", "");
// let sum = 2;
// let a = 1;
// let b = 2;
// let c = 2;

// for (let i = 1; i <= n; i++) {
//    let y = (c / i) * (a += 2) * (b += 2) ;
//    c = y;
//    sum += y;
// }

// console.log(`sum ${sum}`);


// ________________________________________________________________


 //   page 83
//  -----------


//  // Ex. N-28


// let n = +prompt("num n ", "");
// let p = +prompt("num p ", "");
// let a = +prompt("num a ", "");
// let y = 0;
// let x = 0;
// let sum = 0;



// for (let m = 1; m <= n; m++) {
//     x = m * 2;
//     for (let k = 0; k <= p; k++) {
//         y = Math.pow(a, (m + k));
//     }
//     sum = x * y;
//     console.log(`sum ${sum}`);
// }



// __________________________________________________



// ex 29

// const n = prompt("n", "");

// f1:for(let i = 2 ; i<= n ; i++){
//     for(let j = 2 ; j<= i / 2 ; j++){
//       if( i % j === 0){
//           continue f1;  
//         //   label f1
//       }
//     }
//     console.log(i);
// }