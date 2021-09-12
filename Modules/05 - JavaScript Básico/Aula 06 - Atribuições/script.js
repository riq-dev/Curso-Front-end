// =     x = y    x = y
// +=    x += y   x = y
// -=    x -= y   x = y
// *=    x *= y   x = y
// /=    x /= y   x = y
// %=    x %= y   x = y

// a += 5 é a mesma coisa que: a = a + 5.
// a++; é igual: a +=1 que também é igual a: a + 1
// a %= 28; é igual a: a = a % 28;

var a = 30;
//a = a + 5;
a += 5;

console.log(a);