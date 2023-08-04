var a = 2, b = 1 , c = 0 ;
if (a > b && b > c ){
console.log( c , b , a );
}else if (b > c && c > a ) {
console.log(a , c , b);
}else if( c > a && a > b) {
    console.log(b, a, c);
}
