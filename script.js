document.addEventListener('DOMContentLoaded', function() {
    const answers = document.querySelectorAll('.answer');
    const nextButton = document.getElementById('next-chapter');

    answers.forEach(answer => {
        answer.addEventListener('click', function() {
            answers.forEach(a => a.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    nextButton.addEventListener('click', function() {
        alert('Weiter zum nächsten Kapitel!');
        // Hier würde später die Logik für den Wechsel zum nächsten Kapitel implementiert
    });
});
