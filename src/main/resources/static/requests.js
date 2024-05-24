function generateSongInputs() {
    var amountElement = document.getElementById('amount-songs');
    var amount = Number(amountElement.value);
    var max = Number(amountElement.max);
    var container = document.getElementById('song-inputs');
    container.innerHTML = '';
    if (amount > max) {
        amount = max;
    }
    for (var i = 0; i < amount; i++) {
        var label1 = document.createElement('label');
        label1.textContent = 'Song ' + (i+1);
        var input1 = document.createElement('input');
        input1.type = 'text';
        input1.name = 'song' + i;
        input1.required = true;
        var label2 = document.createElement('label');
        label2.textContent = 'Character ' + (i+1);
        var input2 = document.createElement('input');
        input2.type = 'text';
        input2.name = 'character' + i;
        input2.required = true;
        container.appendChild(label1);
        container.appendChild(input1);
        container.appendChild(label2);
        container.appendChild(input2);
    }
}
