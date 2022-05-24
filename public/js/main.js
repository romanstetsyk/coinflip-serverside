document.querySelector('#clickToFlip').addEventListener('click', flip)

async function flip() {
    document.querySelector('.coin').classList.remove('animate-coin'); // have to be before fetch to work

    const res = await fetch(`/flip`);
    const data = await res.json();
    console.log(data);

    if (data.flipResult === 0) {
        document.querySelector('.tails').style.backgroundImage = "url('../images/tails.jpeg')";
        document.querySelector('.heads').style.backgroundImage = "url('../images/heads.jpeg')";
    } else {
        document.querySelector('.tails').style.backgroundImage = "url('../images/heads.jpeg')";
        document.querySelector('.heads').style.backgroundImage = "url('../images/tails.jpeg')";
    }
    document.querySelector('.coin').classList.add('animate-coin');
}