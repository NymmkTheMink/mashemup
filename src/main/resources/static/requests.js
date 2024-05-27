function generateSongInputs() {
    var amountElement = document.getElementById('amount-songs');
    var amount = Number(amountElement.value);
    var max = Number(amountElement.max);
    var container = document.getElementById('song-inputs');
    container.innerHTML = '';
    if (amount > max) {
        amount = max;
    }
    var characters = ['Clot Hartman', 'Norma Underwood', 'Isadore Revie', 'Elliot Van der Ven', 'Michelle Holt', 'Lil Sangster', 'Dr Joyce O\'Doherty', 'Lilly Schrijnemakers', 'Burt Bergersen', 'Racquel Harrington', 'Antoinette Blu', 'Tel Van der Aart', 'Ælg Lien', 'Professor Mary Ann Shannen Beake']; // Add the characters here
    for (var i = 0; i < amount; i++) {
        var label1 = document.createElement('label');
        label1.textContent = 'Song ' + (i+1) + ' ';
        var requiredSpan1 = document.createElement('span');
        requiredSpan1.textContent = '*';
        requiredSpan1.className = 'required';
        label1.appendChild(requiredSpan1);

        var input1 = document.createElement('input');
        input1.type = 'text';
        input1.name = 'songInputs[' + i + '].song';
        input1.required = true;

        var labelArtist = document.createElement('label');
        labelArtist.textContent = 'Original artist of song ' + (i+1) + ' ';
        var requiredSpanArtist = document.createElement('span');
        requiredSpanArtist.textContent = '*';
        requiredSpanArtist.className = 'required';
        labelArtist.appendChild(requiredSpanArtist);

        var inputArtist = document.createElement('input');
        inputArtist.type = 'text';
        inputArtist.name = 'songInputs[' + i + '].artist';
        inputArtist.required = true;

        var label2 = document.createElement('label');
        label2.textContent = 'Character for song ' + (i+1) + ' ';
        var requiredSpan2 = document.createElement('span');
        requiredSpan2.textContent = '*';
        requiredSpan2.className = 'required';
        label2.appendChild(requiredSpan2);

        var select = document.createElement('select');
        select.name = 'songInputs[' + i + '].characterName';
        select.required = true;
        characters.forEach(function(characterName) {
            var option = document.createElement('option');
            option.value = characterName;
            option.text = characterName;
            select.appendChild(option);
        });
        container.appendChild(label1);
        container.appendChild(input1);
        container.appendChild(labelArtist);
        container.appendChild(inputArtist);
        container.appendChild(label2);
        container.appendChild(select);
    }
}

document.querySelector('#submit-request').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from being submitted in the traditional way
    var form = document.querySelector('#requests-form');

    // Check if the form is valid
    if (!form.checkValidity()) {
        // If the form is not valid, display the validation message
        form.reportValidity();
    } else {
        alert('Thanks for sending a request!');
        
        // Use Fetch API to submit the form data
        fetch(form.action, {
            method: form.method,
            body: new FormData(form)
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error: ' + response.statusText);
            }
        }).then(data => {
            console.log('Success:', data);
        }).catch((error) => {
            console.error('Error:', error);
        }).finally(() => {
            form.reset(); // Reset the form
        });
    }
});

window.onload = function() {
    generateSongInputs();
};