const input = document.querySelectorAll("input");

input.forEach(function(item){

    item.addEventListener('click', function(){
        if(item.checked == true) {
            console.log("Użytkownik zaznaczył odpowiedź.")
        } else {
            console.log("Użytkownik nie zaznaczył odpowiedzi.")
        }

    })

});

function change() {
    if (document.getElementById('firstChbx').checked == true ||
        document.getElementById('secondChbx').checked == true ||
        document.getElementById('thirdChbx').checked == true)
        document.getElementById('firstChbx').checked = false,
            document.getElementById('secondChbx').checked = false,
            document.getElementById('thirdChbx').checked = false;
    
    return
};

const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    if (
        document.getElementById('firstChbx').checked == false &&
        document.getElementById('secondChbx').checked == false &&
        document.getElementById('thirdChbx').checked == false &&
        document.getElementById('fourthChbx').checked == false
    ) {
        alert('Proszę zaznaczyć odpowiedź!')
    } else {
        alert('Dziękuję za wypełnienie ankiety :)')
    }
});