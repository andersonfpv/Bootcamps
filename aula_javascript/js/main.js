function clicou(){
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado!</b>";
	//alert("Obrigado por clicar");
}

function redirecionar(){
	window.open("http://www.usefaz.com.br");
	//window.location.href ="http://www.usefaz.com.br";
}

function trocar(elemento){
	elemento.innerHTML = "testado!";
	//alert("trocar texto");
}

function voltar(elemento){
	elemento.innerHTML = "<b>Passe o mouse!</b>";
}

function load(){
	alert("Página carregada");
}

function funcaoChande(elemento){
	console.log(elemento.value);
}
//function soma(n1, n2){
//	return n1 + n2;
//}


/*
function setReplase(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
	var validar;
	if (idade >= 18){
		validar = true;
	}else{
		validar = false;
	}
	return validar;
}

var idade = prompt("Qual a sua idade:");
console.log(validaIdade(idade));
*/
//alert(soma(5, 10));
//alert(setReplase("Vai Corithians", "Brasil"));
/*
var d = new Date();
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for(count=0; count<= 5; count++){
	alert(count);
}
*/
/*
var count = 5;
while (count < 5){
	console.log(count);
	alert(count);
	count++;
}
*/
/*
var idade = prompt("Qual sua idade:");

if (idade >= 18){
	alert("maior de idade");
}else {
	alert("menor de idade");
}
*/
/*
var nome = "Anderson Felipe";
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista[1]);
//var idade = 31;
//var idade2 = 10;
//var frase = "Corithians é o melhor time do mundo!"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Corinthians", "Brasil"));
//console.log(frase.toLowerCase());
//console.log(frase.toUpperCase());