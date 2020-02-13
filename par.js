var arr = [];
function pares(){
  for (let count = 1; count <=50; count++) {
    if (count % 2 == 0) {
      arr.push({number: count, pair: "Soy Par!"});
    }
    else {
      arr.push({number: count, pair: "Soy Impar!"});
    }
  }
return arr;
console.log(arr);
}

module.exports.pares = pares;
