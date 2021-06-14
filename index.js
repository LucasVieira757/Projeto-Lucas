var parar = 0;
while (parar == 0){

  console.log("")
  console.log("Bem vindo a post mallone store")
  console.log("")
  console.log("produtos:")
  var valor = 80;
  var frete = 15;
  console.log("")
  console.log("roupas")
  console.log("")
  console.log("albuns")
  console.log("")
  console.log("ingressos")
  console.log("")
  var post = prompt("")
  
  if(post == 'roupas'){

    console.log("")
    console.log("perfeito temos os modelos:")
    console.log("")
    console.log("regata")
    console.log("")
    console.log("polo")
    console.log("")
    console.log("casaco")
    console.log("")
    var expr = prompt("")

    switch(expr){

      case 'regata' :

 console.log(expr + " escolhida")
  console.log("o valor é R$" + valor + ",00")
  console.log("")
  for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("")
console.log("valor final é R$" + (valor + frete) + ",00")
    do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu produto esta a caminho")
  break
} while(2 == 2)



      break

      case 'polo' :
console.log(expr + " escolhida")
  console.log("o valor é R$" + valor + ",00")
  console.log("")
  for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("")
console.log("valor final é R$" + (valor + frete) + ",00")
    do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu produto esta a caminho")
  break
} while(2 == 2)

      break

      case 'casaco' :
      console.log(expr + " escolhida")
  console.log("o valor é R$" + valor + ",00")
  console.log("")
  for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("")
console.log("valor final é R$" + (valor + frete) + ",00")
    do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu produto esta a caminho")
  break
} while(2 == 2)
break

    }

  break}

  else if(post == 'albuns'){

    console.log("")
    console.log("perfeito temos os:")
    console.log("")
    console.log("Fall apart")
    console.log("")
    console.log("rockstar")
    console.log("")
    console.log("Better Now")
    console.log("")
    var expr = prompt("")

    switch(expr){

      case 'Better Now' :

 console.log(expr + " escolhida")
  console.log("o valor é R$" + valor + ",00")
  console.log("")
  for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("")
console.log("valor final é R$" + (valor + frete) + ",00")
    do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu produto esta a caminho")
  break
} while(2 == 2)



      break

      case 'rockstar' :
console.log(expr + " escolhida")
  console.log("o valor é R$" + valor + ",00")
  console.log("")
  for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("")
console.log("valor final é R$" + (valor + frete) + ",00")
    do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu produto esta a caminho")
  break
} while(2 == 2)

      break

      case 'Fall apart' :
      console.log(expr + " escolhida")
  console.log("o valor é R$" + valor + ",00")
  console.log("")
  for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("")
console.log("valor final é R$" + (valor + frete) + ",00")
    do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu produto esta a caminho")
  break
} while(2 == 2)
break

    }


  break}

  else if(post == 'ingressos'){

    console.log("")
    console.log("perfeito temos para:")
    console.log("")
    console.log("New York")
    console.log("")
    console.log("São Paulo")
    console.log("")
    console.log("Toquio")
    console.log("")

    var expr = prompt("")

    switch(expr){

      case 'New york' :

 console.log(expr + " escolhida")
  console.log("o valor é R$" + valor + ",00")
  console.log("")
  for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("")
console.log("valor final é R$" + (valor + frete) + ",00")
    do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu produto esta a caminho")
  break
} while(2 == 2)



      break

      case 'Toquio' :
console.log(expr + " escolhida")
  console.log("o valor é R$" + valor + ",00")
  console.log("")
  for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("")
console.log("valor final é R$" + (valor + frete) + ",00")
    do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu produto esta a caminho")
  break
} while(2 == 2)

      break

      case 'São Paulo' :
      console.log(expr + " escolhida")
  console.log("o valor é R$" + valor + ",00")
  console.log("")
  for(var expa = prompt("Qual seu endereço"); expa <= 3; expa++){console.log(expr)}
console.log("")
console.log("valor final é R$" + (valor + frete) + ",00")
    do {
  console.log("obrigado por confia em nossos serviços!")
  console.log("seu produto esta a caminho")
  break
} while(2 == 2)
break

    }


  break}

  else if(post !=  'camisetas' && post != 'albuns' && post != 'ingressos'){
    console.log("tente outra vez")
  }
}