/*  O foco inicial é trabalhar com números, matemática, manipulação de texto, datas e armazenamento de informações.
    Às vezes, o JS faz suposições sobre o tipo de dados, o que pode gerar resultados inesperados.
    Para isso é possível ativar o modo estrito que reduz erros silenciosos, melhora o desempenho, fornece mais avisos e menos recursos não seguros.
*/

'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == 'light-theme'){
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});