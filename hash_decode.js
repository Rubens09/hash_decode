console.log("Result: 253674078499881");
function hash(x){
  seed=41;
  diccionario="abefimoprstuv";
  for(i=0;i<x.length;i++){
    seed=(seed*19+diccionario.indexOf(x[i]));
  }
  return seed;
}
//------------------------
function decode_hash(x){
  out_seed=x;
  diccionario="abefimoprstuv";
  let res="";
  for(i=0;i<10;i++){
        res=diccionario[out_seed%19]+res;
        out_seed=((out_seed)-(out_seed%19))/19;
  }
  return res;
}
let word=decode_hash("253674078499881");
console.log("Decode: "+word);
console.log("Uncode: "+hash("perseverar"));