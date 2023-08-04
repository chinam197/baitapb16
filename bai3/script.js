var a = 5, b = 10 , c = 1;

if (a > b && a > c) {
var max = a;
console.log(' số lớn nhất là a = ' + max);
} else if(b > c && b>a ) {
    max = b;
    console.log('số lớn nhất là b = ' + max);
}else {
    max = c;
    console.log('số lớn nhất là c = ' + max);
}