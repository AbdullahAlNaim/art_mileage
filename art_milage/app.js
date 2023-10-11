cell = document.querySelector('.cell');
block = document.querySelector('#progress-block');
ul = document.querySelector('ul');
li = document.querySelector('li');


for (let x = 0; x <= 365; x++) {
    const another = document.createElement('div');
    another.className = "cell";
    block.append(another)
}



