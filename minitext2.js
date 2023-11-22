// //bai1: IN RA SO CHAN
// let a = [1, 2, 3, 4, 5];
// for (let i = 0; i < a.length; i++) {
//     if (a[i] % 2 == 0) {
//         alert(a[i]);
//     }
// }
//bai2:
// let arr = [1,2,3,'a','a','b']
// let a1 = prompt('moi bn nhap');
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == a1){
//         count++
//     }
// }
// document.write('Có' + count + 'phần tử' + a1 + 'trong mảng')
// // bai3:
// let a = [1, 2, 3, 4, 5]
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     sum += a[i];
// }
// alert(sum);
// // //bai4:
let so = 0;
for (i = 2; i < 500; i++) {
    let dieukien = true;
    for (let j = 2; j <= i/2; j++) {
        if (i % j === 0) {
            dieukien = false;
            break;
        }
    }
    if (dieukien) {
        so += i;
    }
}
document.write("Tổng của các số nguyên tố nhỏ hơn 500 bằng : " + so)