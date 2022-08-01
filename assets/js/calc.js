
function inserir(num){
       document.getElementById('resultado'). value += num; 
       return num 
};


function operacoes(){
       let num1 = document.getElementById('resultado').value;
       let num2 = eval(num1);
       document.getElementById('resultado').value = num2;
       return num2; 
};

function limparTela(){
       document.getElementById('resultado').value = ''; 
}; 