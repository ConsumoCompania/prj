
var cores = ['vermelho', 'amarelo', 'azul', 'marrom', 'verde', 'cinza']
document.getElementById('enviar').disabled = false
var lm = -1
var h = []
// definindo a cor a ser escolhida
var cor = (Math.random()*5).toFixed(0)
var m = document.getElementById("display")

var texto = document.getElementById('cor')

texto.textContent = cores[cor] + ':'

console.log(cor)
function ver(x){
    while (cores[x] == cores[cor]){
        if(cores[x] == cores[cor]){
            mudar()
            
        }
    }

}
//lista onde entraram os jogadores com as propriedades vitorias, nome e derrotas
var jogadores = []
function add(i){
    var jogador = jogadores[i]
    jogador.derrotas += 1
    exibir(jogadores)
    verificar()
}

function adicionarvitoria(x){
  var jogador = jogadores[x]
  //acessando a proriedade e alterando
  jogador.vitorias += 1
  
  //atualizando a tabela
  exibir(jogadores)
}
function garantir(){
    for(var jh = 0; jh <=2; jh++){
        mudar()
        document.getElementById('vermelho').value = ''
        exibir(jogadores)
    }
    for(var hj = 0; hj<=h.length; hj++){
        while(cores[cor] == h[hj] ){
            mudar()
            verificar()
        }
    }
}

//cria a tebela
function exibir(j) {
    var element = ""
    for (var i = 0; i < j.length; i++) {
          element += "<tr><td>"+ j[i].nome + "</td>"
          element += "<td>"+ j[i].vitorias +"</td>"
         
          element += "<td>"+ j[i].derrotas + "</td>"
          element += "<td>"+ (j[i].vitorias/(j[i].derrotas + j[i].vitorias)*100).toFixed(2).toString() + "%"+"</td>"
          element += "</tr>"
          var tela = document.getElementById("tabelaJogadores");
        for(var yu = 0; yu <= 2; yu++){
            tela.innerHTML = element
    
        }
        
    }
    
    
    
}
exibir(jogadores)
//envia o nome e propriedades do jogador novo para o array no inicio do código
function Enviaa() {
    
}
function Enviar(){
    var p = document.getElementById("aviso")
    var nome = document.getElementById("nome").value
    
    if ( nome != ""){
      
      
      var nj = {nome:nome, vitorias:0, empates:0, derrotas:0, pontos:0};
      jogadores.push(nj)
      exibir(jogadores)
      p.innerHTML = ""
      lm++
      document.getElementById('mud').disabled = false
      document.getElementById('env').disabled = false
      document.getElementById('enviar').disabled = true
    }else{
  
      p.innerHTML = "Escreva um nome"
    }
    exibir(jogadores)
}
function errado() {
    m.textContent = "Errou"
    add(lm)
    verificar()
    exibir(jogadores)

    garantir()
}
function certo(){
    m.textContent = 'acertou'
    adicionarvitoria(lm)
    exibir(jogadores)
    h.push(cores[cor])
    h = h
    mudar()
    ver()
    garantir()
}
//muda a cor da lixeira
function mudar(){
    cor = (Math.random()*5).toFixed(0)
    texto.textContent = cores[cor] + ":"
    m.textContent = ""
    var input = document.getElementById('vermelho')
    input.value = ""
    h = h
    for(var hj = 0; hj<=h.length; hj++){
        while(cores[cor] == h[hj]){
            cor = (Math.random()*5).toFixed(0)
            texto.textContent = cores[cor] + ":"
            verificar()
        }
    }
    
}
function verificar(){
    var x;
    if (cores[cor] == 'azul'){
        if(input == "papel" | input == "papelão" | input == 'papel ou papelão' |input == "papel" & m.textContent == 'Errou'| input == "papelão" & m.textContent == 'Errou'| input == 'papel ou papelão' & m.textContent == 'Errou'){
           certo()
           x = 2
           
        }
    }else if (cores[cor] == 'vermelho'){
        if(input == "plástico" |input == "plástico" & m.textContent == 'Errou'){
            certo()
            x = 0
        }
    }else if (cores[cor] == 'verde'){
        if(input == "vidro"|input == "vidro" & m.textContent == 'Errou'){
            certo()
            x = 4
        }
    }else if (cores[cor] == 'amarelo'){
        if(input == "ferro" | input == "metal"|input == "ferro" & m.textContent == 'Errou'| input == "metal" & m.textContent == 'Errou'){
            certo()
            x = 1
            
        }
    }else if (cores[cor] == 'marrom'){
        if(input == "orgânico" | input == "lixo orgânico"|input == "orgânico" & m.textContent == 'Errou'|input == "lixo orgânico" & m.textContent == 'Errou'){
            certo()
            x = 3
        }
    }else if (cores[cor] == 'cinza'){
        if(input == "não reciclável"|input == "não reciclável" & m.textContent == 'Errou'){
            certo()
            x =5
        }
    }
}
//envia a resposta, se estiver correta adiciona 1 ponto a tabela de vitorias e o mesmo para derrotas
function enviar(){
    var input = document.getElementById('vermelho').value.toLowerCase().trim()
    var x;
    var jogador = jogadores[lm]
    if(jogador.vitorias == 6){
        finalizar()
    }else{        
        if (cores[cor] == 'azul'){
            if(input == "papel" | input == "papelão" | input == 'papel ou papelão' |input == "papel" & m.textContent == 'Errou'| input == "papelão" & m.textContent == 'Errou'| input == 'papel ou papelão' & m.textContent == 'Errou'){
            certo()
            x = 2
            
            }else{
                errado()
            }
        }else if (cores[cor] == 'vermelho'){
            if(input == "plástico" |input == "plástico" & m.textContent == 'Errou'){
                certo()
                x =0
                
            }else{
                errado()
            }
        }else if (cores[cor] == 'verde'){
            if(input == "vidro"|input == "vidro" & m.textContent == 'Errou'){
                certo()
                x = 4
                
            }else{
                errado()
            }
        }else if (cores[cor] == 'amarelo'){
            if(input == "ferro" | input == "metal"|input == "ferro" & m.textContent == 'Errou'| input == "metal" & m.textContent == 'Errou'){
                certo()
                x = 1
            }else{
            errado()
            }
        }else if (cores[cor] == 'marrom'){
            if(input == "orgânico" | input == "lixo orgânico"|input == "orgânico" & m.textContent == 'Errou'|input == "lixo orgânico" & m.textContent == 'Errou'){
                certo()
                x = 3
            }else{
                errado()
            }
        }else if (cores[cor] == 'cinza'){
            if(input == "não reciclável"|input == "não reciclável" & m.textContent == 'Errou'){
                certo()
                x = 5
            }else{
            errado()
            }
        }
    }
    input = document.getElementById('vermelho')
    input.value = " "
}
//finaliza a rodada do jogador permitindo a entrada de outro
function finalizar(){
      document.getElementById('mud').disabled = true
      document.getElementById('env').disabled = true
      document.getElementById('enviar').disabled = false
      verificar()
}
/*Azul: Papel e Papelão</span>Vermelho: Plástico</span>Verde: vidroAmarelo: metal</span><span style="margin-left: 10px;">Marrom: organico</span>Cinza: não reciclavel*/
// criando um objeto que armazena propriedades diferentes

