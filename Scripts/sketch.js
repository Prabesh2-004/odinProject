const display = document.querySelector('.container');
const inputBox = document.querySelector('.input-box');
const addButton = document.querySelector('.addBtn');
const divdiv = '<div class="div-box"></div>';

addButton.addEventListener('click', function () {
    const inputElement = parseInt(inputBox.value);
    if (inputElement > 0 && inputElement <= 100) {
        let multipleDiv = '';
        for (let i = 0; i < inputElement * inputElement; i++) {
            multipleDiv += divdiv;
        }
        display.innerHTML = multipleDiv;

        Object.assign(display.style, {
            display: 'grid',
            gridTemplateColumns: `repeat(${inputElement}, 1fr)`,
            gridTemplateRows: `repeat(${inputElement}, 1fr)`,
        });
        const divBoxes = document.querySelectorAll('.div-box');
        divBoxes.forEach(div => {
            div.addEventListener('mouseover', function () {
                this.style.backgroundColor = 'black';
            });
        });

        inputBox.value = "";
    } else {
        alert("Number must be between 1 to 100");
        inputBox.value = "";
    }
});

