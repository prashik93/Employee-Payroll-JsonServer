// UC 4

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function() {
    output.textContent = salary.value;
});

// UC 7
const text = document.querySelector('#name');
const textError = document.querySelector('.name-error');
text.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value)) textError.textContent = "";
    else textError.textContent = "Name is Incorrect"
});