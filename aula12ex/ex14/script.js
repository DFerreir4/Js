function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var msg2 = window.document.getElementById('ola')
var footer = window.document.getElementById('p-rodape')
var data = new Date()
//var hora = data.getHours()
var hora = 6
msg.innerHTML = `Agora são ${hora} horas.`



if(hora >= 0 && hora < 12){
    //Bom dia!
    img.src = './foto-manha.png'
    document.body.style.background = '#e2cd9f'
    msg2.innerHTML = 'Bom dia! Caro Usuário.'
    msg2.style.fontWeight = 'bolder'
    msg2.style.fontStyle = 'italic'
    footer.style.color = '#ff9955'
   
    
} else if (hora >= 12 && hora < 18){
    //Boa tarde!
    img.src = './foto-tarde.png'
    document.body.style.background = '#b9846f'
    msg2.innerHTML = 'Boa tarde! Caro Usuário.'
    msg2.style.fontWeight = 'bolder'
    msg2.style.fontStyle = 'italic'
}else{
    //Boa noite!
    img.src = './foto-noite.png'
    document.body.style.background = '#515154'
    msg2.innerHTML = 'Boa noite! Caro Usuário.'
    msg2.style.fontWeight = 'bolder'
    msg2.style.fontStyle = 'italic'
}



}