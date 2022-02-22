window.onload = function() {
    let select = document.getElementsByTagName('select')[0];
    select.addEventListener('change', function() {
        let selected = select.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;
    })
    
    let inputFontSize = document.querySelector('input[name="font-size"]');
    inputFontSize.addEventListener('change', function() {
    let elementoP = document.querySelector('p');
    elementoP.style.fontSize = `${inputFontSize.value}px`;
})
}