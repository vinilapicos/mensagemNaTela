const mensagemInput = document.getElementById("mensagemInput");

mensagemInput.addEventListener("keydown",function(event){
    if(event.key == "Enter")
        pegarMensagem();
})

function pegarMensagem(){
    document.getElementById("mensagemOutput").innerHTML = mensagemInput.value;
    mensagemInput.value = "";
}