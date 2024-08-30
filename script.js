document.addEventListener('DOMContentLoaded', function() {
    const answers = document.querySelectorAll('.answer');
    const nextButton = document.getElementById('next-chapter');
    let selectedAnswers = new Set();

    // Funktion zur Überprüfung des aktuellen Kapitels
    function getCurrentChapter() {
        return document.querySelector('.chapter').id;
    }

    answers.forEach(answer => {
        answer.addEventListener('click', function() {
            const currentChapter = getCurrentChapter();

            if (currentChapter === 'chapter1') {
                // Für Kapitel 1: Nur eine Antwort möglich
                answers.forEach(a => a.classList.remove('selected'));
                selectedAnswers.clear();
            }

            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                selectedAnswers.delete(this);
            } else {
                this.classList.add('selected');
                selectedAnswers.add(this);
            }

            // Aktiviere den "Weiter"-Button für Kapitel 2-5 immer, für Kapitel 1 nur bei Auswahl
            nextButton.disabled = (currentChapter === 'chapter1' && selectedAnswers.size === 0);
        });
    });

    // Aktiviere den "Weiter"-Button initial für Kapitel 2-5
    if (getCurrentChapter() !== 'chapter1') {
        nextButton.disabled = false;
    }

    nextButton.addEventListener('click', function() {
        console.log('Gewählte Antworten:', Array.from(selectedAnswers).map(a => a.querySelector('h4').textContent));

        // Navigation zur nächsten Seite
        const currentChapter = getCurrentChapter();
        let nextPage;

        switch(currentChapter) {
            case 'chapter1':
                nextPage = 'chapter2.html';
                break;
            case 'chapter2':
                nextPage = 'chapter3.html';
                break;
            case 'chapter3':
                nextPage = 'chapter4.html';
                break;
            case 'chapter4':
                nextPage = 'chapter5.html';
                break;
            case 'chapter5':
                alert('Sie haben alle Kapitel abgeschlossen!');
                return;
            default:
                alert('Unbekanntes Kapitel');
                return;
        }

        window.location.href = nextPage;
    });
});
