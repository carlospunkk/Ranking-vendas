


const inputfoto = document.getElementById('infoto')
const inputnome = document.getElementById('innome')
const inputvenda = document.getElementById('invendas')
const inputsetor = document.getElementById('setores')



// botao salvar
const Save = document.getElementById('btncadastrar')
// cria o Array e  envia dados para o localstorage
 Save.addEventListener("click", () => {
    let dados = new Array()
  /**
     * Verifica se a propriedade existe
     * Caso exista, converte de String para Object
     */
    if (localStorage.hasOwnProperty("dados")) {
      dados = JSON.parse(localStorage.getItem("dados"))
    }
  
    /* Adiciona um novo valor no array criado */
    dados.push({foto: infoto.value, nome:innome.value, venda:invendas.value, setor:setores.value})
  
  
    /* Salva o item */
    localStorage.setItem("dados", JSON.stringify(dados))
  
  /*if(infoto.value === "" || innome.value === "" || invendas.value === ""){
alert("voce esqueceu de preencher um dos campos!!!")
  }else{
    alert("salvo com suceso")
    localStorage.setItem("dados", JSON.stringify(dados))
  }*/
    /* Exibe o resultado */
    //result.insertAdjacentHTML('beforeend', `${innome.value} , ${invendas.value}`)



    // lista de vendedores cadastrados 
    const lista = document.getElementById('invendedores')

    dados.forEach(function(item){
    const novoElemento = document.createElement('option')
    novoElemento.innerHTML = item.nome
    lista.appendChild(novoElemento) // adiciona o filho dentro do datalist 

  
  
   });
 

  /*function ConsultaDadosVendedor(){
    console.log('item selecionado')
    }
    
    const btverifica = lista
    btverifica.addEventListener('click',ConsultaDadosVendedor)*/

  //localStorage.removeItem('dados')


 

    
  // chamada da função limpar inputs
    limparCampos()
  
    // botão resetar 
    //apagaDado()


  // chamada função excluir dolocalstorage
  //excluir()

  
  
    /**
   * Função responsável por carregar o conteúdo na tela do html
   */
  window.addEventListener("load", _ => {
    if (localStorage.hasOwnProperty("dados")) {
      JSON.parse(localStorage.getItem("dados")).forEach(dados => {
        result.insertAdjacentHTML('beforeend', `<li>${dados}</li>`)
      })    
    }
  })
  })
  

  

  function limparCampos(){
    innome.value = ""
    invendas.value = ""
    infoto.value=""

  }

 /* function apagaDado(){
    localStorage.clear();
  }
  
  // apagar dados resetar 
  const ApagarDados = document.getElementById('apagaDados')
  ApagarDados.addEventListener("click",apagaDado)
  

*/
  
 ////////////////////////////////////////////////////////////////////// parei aqui
function excluir(){
  JSON.parse(localStorage.getItem("dados")).forEach(dados => {
    //dados.splice(nome, 1)
    
    //console.log(dados.nome)
 localStorage.removeItem('dados')
})    


}


// excluir vendedor 
const btnExcluir = document.getElementById('btnexcluir')
btnExcluir.addEventListener('click', excluir)





