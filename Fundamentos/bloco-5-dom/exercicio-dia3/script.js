function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como 
// filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no 
// array pois representam respectivamente Domingo e Segunda-feira.

//Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
  
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  const getDezDaysList = document.querySelector('#days');
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dezDays = dezDaysList[index];
    const dezDaysItem = document.createElement('li');
  
    if (dezDays === 24 || dezDays === 31) {
      dezDaysItem.innerHTML = dezDays;
      dezDaysItem.className = 'day holiday'
      getDezDaysList.appendChild(dezDaysItem);
    } else if (dezDays === 4 || dezDays === 11 || dezDays === 18) {
      dezDaysItem.innerHTML = dezDays;
      dezDaysItem.className = 'day friday'
      getDezDaysList.appendChild(dezDaysItem);
    } else if (dezDays === 25) {
      dezDaysItem.innerHTML = dezDays;
      dezDaysItem.className = 'day holiday friday'
      getDezDaysList.appendChild(dezDaysItem);
    } else {
      dezDaysItem.innerHTML = dezDays;
      dezDaysItem.className = 'day';
      getDezDaysList.appendChild(dezDaysItem);
    }   
  };
};
  
createDaysOfTheMonth();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie 
// dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
  
function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" 
// que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. 
// Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
};

displayHolidays();


// Implemente uma função que receba como parâmetro a string "Sexta-feira" 
// e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .


function createFridayButton (buttonName) {
  let fridayButtonContainer = document.querySelector('.buttons-container');
  let fridayButton = document.createElement('button');

  fridayButton.innerHTML = buttonName;
  fridayButton.id = 'btn-friday'
  fridayButtonContainer.appendChild(fridayButton);
  
}

createFridayButton('Sexta-feira');


// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" 
// que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa.
// Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.

function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [4, 11, 18, 25];
displayFridays(dezFridays);


// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em 
// um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse
// sair do dia, o texto deve retornar ao tamanho original.

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. 
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") 
// e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a 
// classe "my-tasks" . 

function tarefaPersonalizada(tarefa) {
  elementopai = document.querySelector('.my-tasks');
  newelemento = document.createElement('span');
  newelemento.innerHTML = tarefa;
  elementopai.appendChild(newelemento);
}

tarefaPersonalizada('Cozinhar:');


// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
// Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de 
// tag <div> com a classe task . O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

function legenda (string) {
  let divMae = document.querySelector('.my-tasks');
  let newDiv = document.createElement('div');
  newDiv.className = 'task';
  divMae.appendChild(newDiv);
  newDiv.style.backgroundColor = string

}

legenda('red');

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div>
// referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, 
// quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , 
// ou seja, esta tarefa está deixando de ser uma tarefa selecionada.

function clickLegenda() {
  let divLegenda = document.querySelector('.task');
  let selectedTask = document.getElementsByClassName('task selected');

  divLegenda.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

clickLegenda();


// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, 
// atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração 
// inicial rgb(119,119,119).

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();