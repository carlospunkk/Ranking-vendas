
/*import {numeros, nome} from './cadastro.js'

console.log(numeros)
console.log(nome)

*/


/*const rankingData = [
    { name: 'Bruno' , vendas: 30000, photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg',informacoes:''},
    { name: 'Flavia' , vendas: 1000, photo:'/img/fundoimg.svg' ,informacoes:''},
    { name: 'Julia' , vendas: 5000, photo: '/img/fundoimg.svg',informacoes:''},
    { name: 'Eliane' , vendas: 4000, photo: '/img/fundoimg.svg',informacoes:''},
    { name: 'Alciclene' , vendas: 4000, photo: '/img/fundoimg.svg',informacoes:''},
    { name: 'Fabiana' , vendas: 0, photo: '/img/fundoimg.svg',informacoes:''},
    { name: 'Jacira' , vendas: 3000, photo: '/img/fundoimg.svg',informacoes:''},
    { name: 'Carlos  ' , vendas: 10, photo: '/img/carlos.jpeg',informacoes:''}
    
 
    // Adicione mais dados de ranking aqui
];*/

// enviar dados e criar o modelo de ranking





/*
localStorage.setItem('rankingData', JSON.stringify(rankingData));
const resgate = localStorage.getItem('rankingData')
localStorage.removeItem('rankingData')
localStorage.removeItem('livro')*/




const rankingList = document.getElementById('ranking-list');

rankingData.sort((a, b) => b.vendas - a.vendas);

rankingData.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'ranking-item';
   
    

    const photo = document.createElement('img');
    photo.src = item.photo;
    photo.alt = `${item.name} Photo`;

    const name = document.createElement('span');
    name.textContent = `${index + 1}. ${item.name}`;
    name.style.color='white'

    const sales = document.createElement('span');
    sales.textContent = `${item.vendas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} `;
    sales.style.color='white'

 //span status 
    const info = document.createElement('span');
    const valoratual = item.vendas
 
  //calculo valor diferenca
const objetivoMinimo = 5000;
const objetivoMaximo = 25000;

/*
entrada.addEventListener('submit',(e)=> {
  e.preventDefault()
})*/
/*
function alimentadados(){
  const entradadados = document.getElementById('entrada')
console.log(entradadados.value)
}
const botao = document.getElementById('botao-enviar')
botao.addEventListener('click',alimentadados)*/

if(valoratual >= objetivoMinimo || valoratual >= objetivoMaximo){
  const resultado =   objetivoMinimo - valoratual
  info.style.color= 'green'
  sales.style.color='green'
  name.style.color='green'


  info.textContent= (`objetivo atingido ${item.vendas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
  
}

else if(valoratual === 0 ){
  info.style.color='red'
  sales.style.color='red'
  name.style.color='red'
  resultado =   objetivoMinimo- valoratual  
  info.textContent= ("Falta R$ " + resultado + " para o objetivo")
}

else {
  info.style.color= 'white'
  resultado =   objetivoMinimo- valoratual  
  info.textContent= (`Falta R$ ${resultado} para o objetivo minimo`)
  
}

 /*
// calculo porcentagem status   5000 mil 
  const porcentagem = (valoratual/5000*100);
  rankingData.informacoes = porcentagem
  info.textContent=`status ${porcentagem}% ` 

  if (porcentagem >=100){
    info.textContent=`você está dentro ` 
  }
  else if (porcentagem === 0 ){
    info.style.color='red'
    sales.style.color='red'

  } else if(porcentagem >0 && porcentagem <=50){
    info.style.color='orange'
    sales.style.color='orange'
  }

  else if(porcentagem >50 && porcentagem <100){
    info.style.color='yellow'
    sales.style.color='yellow'
  }
  else{
    info.textContent=`status ${porcentagem}% ` 
  }


// condicional ranking
if (valoratual >= 5000 && valoratual <= 10000){
  const comissao = (valoratual*0.02)
  const totalGanho = valoratual+comissao
  info.textContent= `$ você está ganhando até agora $ ${comissao.toFixed(1)} $`
}
else if (valoratual >= 10000 && valoratual <= 15000){
  const comissao = (valoratual*0.025)
  const totalGanho = valoratual+comissao 
  info.textContent= `$ você está ganhando até agora $ ${comissao.toFixed(1)} $`
}
else{
  console.log("não recebeu")
}

*/


//adicionando os items filhos da lista
rankingList.appendChild(listItem);

    listItem.appendChild(photo);
    listItem.appendChild(name);
    listItem.appendChild(sales);
    listItem.appendChild(info);


  
    
    

   
 });



 
