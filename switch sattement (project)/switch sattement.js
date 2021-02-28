var date = new Date();

var today = date.getDay();

switch (today){
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is monday');
        break;
    case 2:
        console.log('Today is thuday');
        break;
    case 3:
        console.log('Today is wedday');
        break;
    case 4:
        console.log('Today is thusday');
        break;
    case 5:
        console.log('Today is friday');
        break;
    case 6:
        console.log('Today is Satday');
        break;  
    default:
        console.log("that is not vaid number");              
}
