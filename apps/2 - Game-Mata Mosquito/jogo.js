//1) LARGURA(X) ALTURA(Y):

var altura = 0
var largura = 0

var vidas = 3
var tempo = 50

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel.replace('?', '')

if(nivel === 'normal'){
	//1500
	criaMoscaTempo = 1500
} else if(nivel === 'dificil'){
	//1000
	criaMoscaTempo = 1000
} else if(nivel === 'mdificil'){
	//750
	criaMoscaTempo = 250
}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log('Dimensões: X: ' + largura + ' Y: ' + altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1
	if (tempo <= 0){
		clearInterval(criaMosca)
		clearInterval(cronometro)
		alert('VITÓRIA! GENOCÍDIO DE MOSCAS CONCLUÍDO!')
		window.location.href = 'vitoria.html'
} else {
	document.getElementById('cronometro').innerHTML = tempo
	//insere texto entre a tag html
}
}, 1000)




//2) POSIÇÕES RANDÔMICAS:
function moscaRandomica (){
	//remover a mosca anterior (caso exista)
	if(document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		if(vidas >= 1) {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
			vidas--
		} else {		
			// alert('Você perdeu!')
			window.location.href = 'fim-de-jogo.html'
		}
		
	
		}

	// //criar o elemento html
	var mosca = document.createElement('img') //cria o elemento e encapsula dentro de uma variável
	console.log('criou mosca: ' + mosca)
	mosca.src = 'imagens/mosca.png' //altera o atributo src="" da tag <img>
	// console.log('linkou mosca: ' + mosca)
	mosca.width = '50'
	// console.log('redimensionou mosca: ' + mosca)
	mosca.id = 'mosca'
	// console.log('classificou mosca: ' + mosca)
	mosca.onclick = function() {
		this.remove()
	}
	document.body.appendChild(mosca)
	// console.log('inseriu mosca')

	//como a variável 'mosca' é o elemento <img> no DOM, JS permite a alteração de seus aributos após a adição de um ponto
	
	var posicaoX = Math.floor(Math.random() * largura) -90 //redução de espaço impede que a mosca estoure o frame
	var posicaoY = Math.floor(Math.random() * altura) -90

	//CONTROLE: impede que os valores XY sejam negativos
	posicaoX = posicaoX < 0 ? 0 : posicaoX 
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log('Random X: ' + posicaoX + ' Random Y: ' + posicaoY)

	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	console.log('posicionou mosca: ')

	mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
}

//3) TAMANHOS RANDÔMICOS:
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	// console.log(classe)

	switch(classe) {
		case 0:
			return 'mosca-1'

		case 1:
			return 'mosca-2'

		case 2:
			return 'mosca-3'
	}
	console.log(classe)
}

//4) ESPELHAMENTO
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)
	switch(classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
	console.log(classe)
}

