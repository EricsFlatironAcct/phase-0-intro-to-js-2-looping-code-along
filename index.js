// Code your solutions in this file
function countDown(n){
    while (n>=0) console.log(n--);
}
function writeCards(names, type){
    const message = [];
    for(let i =0; i<names.length;i++){
        message.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return message;
}