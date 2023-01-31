print("Result: 253674078499881")
def hash(x):
  seed=41;
  diccionario="abefimoprstuv"
  for i in range(len(x)):
    seed=(seed*19+diccionario.find(x[i]))
  
  return seed

def decode_hash(x):
  out_seed=x
  diccionario="abefimoprstuv"
  res=""
  for i in range(10):
        res=diccionario[(out_seed%19)]+res
        out_seed=int((int(out_seed)-int(out_seed%19))/19)
  return res
word=str(decode_hash(253674078499881))
print("Decode: "+ str(word))
print("Uncode: "+ str(hash(word)))