function calculateResult() {
    const number = document.getElementById('number').value;
    fetch('/calculate-square', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ number: number })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').value = data.square;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
