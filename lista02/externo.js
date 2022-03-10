//EX1
function aia(){
	window.open('https://www.google.com', 'width=400, height=400')
}

//EX2
function geraAleatoria50(){
	var teste = Math.floor(Math.random() * 51)
	document.write(teste)
}

//EX3
function imdbClick(){
	window.open('https://www.imdb.com', 'width=400, height=400')
}

//EX4
function alteraJanela(){
	var titulo = document.getElementById('titulo')
	titulo.remove()
	
	var novoTitulo = document.createElement("title")
	var nomeNovoTitulo = document.createTextNode('AIA 2009-2010')
	novoTitulo.appendChild(nomeNovoTitulo)
	console.log(novoTitulo)
	document.head.appendChild(novoTitulo)
}

//EX5
function restoDe25(){
	var resto = parseInt(25 % 3)
	alert('Resto da divisão de 25/3: ' + resto)
}

//EX6
function comFoco(){
	alert('primeira caixa ativada')
}

function semFoco(){
	alert('perdeu o foco')
}

//EX7
function registraValor(){
	var registraValor = document.getElementById('registraValor').value
	registraValor = parseInt(registraValor)
	console.log(registraValor)

}

function acao(){
	var acao = document.getElementById('registraValor').value
	console.log(acao)

	if(acao < 0 || acao > 99){
		alert('valor inválido')
		document.getElementById('registraValor').value = ''
		registraValor()
	}

	if(acao >=0 && acao < 10){
		alert('insuficiente')
	} else if(acao >= 10 && acao <= 14){
		alert('bom')
	} else if(acao > 14){
		alert('muito bom')
	}
}

//EX8
function tresAIA(){
	var tresAIA = document.getElementById('selecionaAIA').value

	if(tresAIA < 1 || tresAIA > 3){
		document.getElementById('selecionaAIA').value = ''
		alert('Valor inválido.')
	}

	if(tresAIA == 1){
		alert('AIA 1')
		document.getElementById('selecionaAIA').value = ''
	} else if(tresAIA == 2){
		alert('AIA 2')
		document.getElementById('selecionaAIA').value = ''
	} else if(tresAIA == 3){
		alert('AIA 3')
		document.getElementById('selecionaAIA').value = ''
	}
}