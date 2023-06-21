function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if(fSex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //bb
                img.setAttribute('src','./img/bb-m.png')
            }else if(idade >= 10 && idade < 18){
                //criança
                img.setAttribute('src','./img/menino.png')
            }else if(idade >= 18 && idade < 50){
                //adulto
                img.setAttribute('src','./img/adulto.png')
            }else{
                //idoso
                img.setAttribute('src','./img/velho.png')
            }
        
        }else if(fSex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //bb
                img.setAttribute('src','./img/bb-f.png')
            }else if(idade >= 10 && idade < 18){
                //criança
                img.setAttribute('src','./img/menina.png')
            }else if(idade >= 18 && idade < 50){
                //adulto
                img.setAttribute('src','./img/adulta.png')
            }else{
                //idoso
                img.setAttribute('src','./img/velha.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} idade ${idade} anos.`
        res.appendChild(img)
    }




}