document.addEventListener('DOMContentLoaded', function() {
    const answers = document.querySelectorAll('.answer');
    const nextButton = document.getElementById('next-chapter');
    let selectedAnswer = null;

    answers.forEach(answer => {
        answer.addEventListener('click', function() {
            answers.forEach(a => a.classList.remove('selected'));
            this.classList.add('selected');
            selectedAnswer = this;
            nextButton.disabled = false;
        });
    });

    nextButton.addEventListener('click', function() {
        if (selectedAnswer) {
            // Hier kommt später die Logik für den Wechsel zum nächsten Kapitel
            console.log('Gewählte Antwort:', selectedAnswer.querySelector('h4').textContent);
            alert('Weiter zum nächsten Kapitel!');
        }
    });
});
