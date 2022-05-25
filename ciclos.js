

for (let i = 1; i <15; i++){
    if(i==7) {
        continue
        
    }
    if(i==13) {
        continue
        
        
    }
    if(i==14) {
        break
       
       
    }
    alert(i)
}

let ingresarN = prompt("ingresar el numero que no aparecio")

ingresarN = parseInt(ingresarN)

    if(ingresarN !=7) {
        alert("le pifiaste pa"+ ingresarN)
        ingresarN = prompt("ingresar otro num")

        if(ingresarN!=7) {
            alert("otra vez pa"+ ingresarN)
            ingresarN = prompt("Pista: cr")
        }

        if(ingresarN!=7) {
            alert("ultima chancee"+ ingresarN)
            ingresarN = prompt("Pista: 6+1")
        }else {
            alert(ingresarN)
        }



    
          
        
    }

  