function changeText() {
    let texto1 = document.getElementsByTagName('p')[1];
    texto1.innerHTML = "Amanda será uma grande desenvolvedora daqui a dois anos."
}
changeText();

function changeColorFora() {
    let corDeFora = document.getElementsByClassName('main-content');
    corDeFora[0].style.backgroundColor = 'rgb(76,164,109';
}
changeColorFora();

function changeColorDentro() {
    let cordDeDentro = document.getElementsByClassName('center-content');
    cordDeDentro[0].style.backgroundColor = 'white';
}
changeColorDentro();

function changeH1() {
    let textoH1 = document.getElementsByTagName('h1');
    textoH1[0].innerText = "Amanda Desenvolvedora"
}
changeH1();

function tudoMaiusculo() {
    let maiusculo = document.getElementsByTagName('p')[0];
    maiusculo.innerHTML = maiusculo.innerHTML.toUpperCase();

}
tudoMaiusculo();

function exibirParagrafo() {
    let paragrafo = document.getElementsByTagName('p');
    for (index = 0; index < paragrafo.length; index += 1) {
        console.log(paragrafo[index].innerHTML);
    }
}
exibirParagrafo();
