const input = document.querySelectorAll("input");
console.log(input);



input.forEach(function(item){

    item.addEventListener('click', function(){
        if(item.checked == true) {
            console.log("Użytkownik zaznaczył odpowiedź.")
        } else {
            console.log("Użytkownik nie zaznaczył odpowiedzi.")
        }
    })

console.log(item)

});












