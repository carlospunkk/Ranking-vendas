
const inputfoto = document.getElementById('infoto')
const inputnome = document.getElementById('innome')
const inputvenda = document.getElementById('invendas')
const inputsetor = document.getElementById('setores')



// botao salvar
const Save = document.getElementById('btncadastrar')






// cria o Array e  envia dados para o localstorage
Save.addEventListener("click", () => {
    let dados= new Array()
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
  
  
    /* Exibe o resultado */
    //result.insertAdjacentHTML('beforeend', `${innome.value} , ${invendas.value}`)
  
  
  // chamada da função limpar inputs
    limparCampos()
  
  
  
  
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
  
  // botão resetar 
 /* function apagaDado(){
    localStorage.clear();
  }*/
  
  // apagar dados resetar 
  /*const ApagarDados = document.getElementById('apagaDados')
  ApagarDados.addEventListener("click",apagaDado)*/
  
  
  function limparCampos(){
    innome.value = ""
    invendas.value = ""
  }
  
  