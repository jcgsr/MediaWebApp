function calc() {
    var nota1 = parseFloat(document.getElementsByName("nota1")[0].value);
    var nota2 = parseFloat(document.getElementsByName("nota2")[0].value);
    var nota3 = parseFloat(document.getElementsByName("nota3")[0].value);
    var nota4 = parseFloat(document.getElementsByName("nota4")[0].value);
    var calcM1 = (nota1 + nota2) / 2
    var calcM2 = (nota3 + nota4) / 2
    var calcMF = (calcM1 + calcM2) / 2
    document.getElementsByName("media1")[0].value = calcM1.toFixed(2);
    document.getElementsByName("media2")[0].value = calcM2.toFixed(2)
    document.getElementsByName("mediafinal")[0].value = calcMF.toFixed(2)

}

function calc1(){
    var nota1 = parseFloat(document.getElementsByName("n1")[0].value);
    var nota2 = parseFloat(document.getElementsByName("n2")[0].value);
    var nota3 = parseFloat(document.getElementsByName("n3")[0].value);
    var nota4 = parseFloat(document.getElementsByName("n4")[0].value);
    var calcmedia_semestre1 = (nota1 + nota2)/2
    var calcmedia_semestre2 = (nota3 + nota4)/2
    var calcmedia_final = (calcmedia_semestre1 + calcmedia_semestre2)/2
    document.getElementsByName("media_semestre1")[0].value = calcmedia_semestre1.toFixed(2);
    document.getElementsByName("media_semestre2")[0].value = calcmedia_semestre2.toFixed(2);
    document.getElementsByName("mediafinalRec")[0].value = calcmedia_final.toFixed(2);

}
function calcR(){
    var nota1 = parseFloat(document.getElementsByName("n1")[0].value);
    var nota2 = parseFloat(document.getElementsByName("n2")[0].value);
    var calcmedia_semestre1 = (nota1 + nota2)/2
    if(calcmedia_semestre1 >= 5.0){
        alert("Repetir 1ª Média Semestral na Recuperação 1ª Semestre.");
    }         
    document.getElementsByName("media_semestre1")[0].value = calcmedia_semestre1.toFixed(2);
   
    
    var rec1 = parseFloat(document.getElementsByName("rec1")[0].value);
    if (rec1 < calcmedia_semestre1){
        alert("Nota da Recuperação menor que a Média: descartar Recuperação e repetir 1ª Média Semestral.");
    }
    var rec_semestre1 = (calcmedia_semestre1 + rec1)/2 
    document.getElementsByName("medRec1")[0].value = rec_semestre1.toFixed(2);
    
    var nota3 = parseFloat(document.getElementsByName("n3")[0].value);
    var nota4 = parseFloat(document.getElementsByName("n4")[0].value);
    var calcmedia_semestre2 = (nota3 + nota4)/2
    if(calcmedia_semestre2 >= 5.0){
        alert("Repetir 2ª Média Semestral na Recuperação 2ª Semestre.");
    }   
    document.getElementsByName("media_semestre2")[0].value = calcmedia_semestre2.toFixed(2)
   
    
    var rec2 = parseFloat(document.getElementsByName("rec2")[0].value);
    if (rec2 < calcmedia_semestre2){
        alert("Nota da Recuperação menor que a Média: descartar Recuperação e repetir 2ª Média Semestral.");
    }
    var rec_semestre2 = (calcmedia_semestre2 + rec2)/2 
    document.getElementsByName("medRec2")[0].value = rec_semestre2.toFixed(2);
    

    if (calcmedia_semestre1 < 5 && calcmedia_semestre2 >=5){
        var medFinalR1 = (rec_semestre1 + calcmedia_semestre2)/2 
        document.getElementsByName("mediafinalRec")[0].value = medFinalR1.toFixed(2)
    } 
    else if (calcmedia_semestre2 < 5 && calcmedia_semestre1 >= 5){
        var medFinalR2 = (calcmedia_semestre1 + rec_semestre2)/2
        document.getElementsByName("mediafinalRec")[0].value = medFinalR2.toFixed(2)
    }
    else if (calcmedia_semestre1 < 5 && calcmedia_semestre2 < 5){
        var medFinalR3 = (rec_semestre1 + rec_semestre2)/2
        document.getElementsByName("mediafinalRec")[0].value = medFinalR3.toFixed(2)
    }
    else if(calcmedia_semestre1 >= 5 && calcmedia_semestre2 < 5){
        var medFinalR4 = (rec_semestre1 + rec_semestre2)/2
        document.getElementsByName("mediafinalRec")[0].value = mediaFinalR4.toFixed(2)
    }
    

}

caixasInput = $("input");
function pressKey(ev){
   if(ev.keyCode == 13){
      caixaAtual = caixasInput.index(this);
      if(caixasInput[caixaAtual+1] != null)
          caixasInput[caixaAtual+1].focus();
     ev.preventDefault();
return false; 
  }
  return true;
}

$("input").keypress(pressKey);

let date = new Date();
let currentDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
});

document.querySelector('#date').innerHTML = currentDate;
