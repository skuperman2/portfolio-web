// PROJECT

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
    panel.classList.remove('active')
    })
}

// END PROJECT


// HOME

function changeWord(wordNumber) {
    const wordElement = document.getElementById(`word${wordNumber}`);
    wordElement.innerHTML = `Nueva Palabra ${wordNumber}`;
}

function resetWord(wordNumber) {
    const wordElement = document.getElementById(`word${wordNumber}`);
    wordElement.innerHTML = `Palabra ${wordNumber}`;
}

function goToPage(page) {
    window.location.href = page;
}