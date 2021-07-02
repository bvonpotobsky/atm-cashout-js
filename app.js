class Notes {
  constructor(value, quantity) {
    this.image = new Image();
    this.value = value;
    this.quantity = quantity;
    this.image.src = imagenes[value];
  }
}

// Algorithm
let division = 0;
let amountOfNotes = 0;
function deliverCash() {
    let money = parseInt(document.querySelector('.money').value);

    for(let note of atm){
      if(money > 0){
          division = Math.floor(money / note.value);
          if(division > note.quantity){
              amountOfNotes = note.quantity;
            } else {
                amountOfNotes = division;
            }

            delivered.push(new Notes(note.value, amountOfNotes));
            money -= (note.value * amountOfNotes);
        }
    }
    
    if(money > 0){
      result.innerHTML = `Im a poor ATM, I do not have enough notes to you!`;
    } else {
        for(let deliver of delivered){
            if(deliver.quantity > 0) {
              result.innerHTML += `<p class='paragraph'>${deliver.quantity} x</p><img class='notes' src='${deliver.image.src}'>`;
      }
    }
  }
}
// Load images
let imagenes = {};
imagenes['100'] = './img/hundred.png'
imagenes['50'] = './img/fifty.png'
imagenes['20'] = './img/twenty.jpeg'
imagenes['10'] = './img/ten.png'
imagenes['5'] = './img/five.png'
imagenes['1'] = './img/one.jpeg'

// Load ATM with Notes
let atm = [];
let delivered = [];
atm.push(new Notes(100, Math.ceil((Math.random() * 50))));
atm.push(new Notes(50, Math.ceil((Math.random() * 50))));
atm.push(new Notes(20, Math.ceil((Math.random() * 50))));
atm.push(new Notes(10, Math.ceil((Math.random() * 50))));
atm.push(new Notes(5, Math.ceil((Math.random() * 50))));
atm.push(new Notes(1, Math.ceil((Math.random() * 50))));

// Calculate how much left is on the ATM
let amount = document.querySelector('.actual-amount');
let calculateTotal = [];
let sum = 0;
for (m in atm) {
  calculateTotal.push(atm[m].value * atm[m].quantity);
  sum += calculateTotal[m];
}
amount.innerHTML = `This ATM has $${sum} left.`;

let result = document.querySelector('.result');
let button = document.querySelector('.cash-out');
button.addEventListener('click', deliverCash);