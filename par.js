function pares(){
  for (let count = 1; count <=50; count++) {
    if (count % 2 == 0) {
      return ("<h1> " + count + " Soy Par!</h1>");
    }
    else {
      return ("<h1> " + count + " Soy Impar!</h1>");
    }
  }
}

module.exports.pares = pares;
