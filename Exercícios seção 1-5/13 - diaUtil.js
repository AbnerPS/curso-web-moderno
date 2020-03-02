function diaUtil (dia){
    switch(dia){
        case 1:
        case 7:
            console.log("Final de semana")
        break
        
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("Dia Util")
        break

        default:
            console.log("Dia invalido!!!")
        break
    }
}

diaUtil(4)