nextButton.addEventListener('click', function() {
    if (selectedAnswer) {
        // Hier speichern wir die Antwort (später für das Persönlichkeitsprofil)
        console.log('Gewählte Antwort:', selectedAnswer.querySelector('h4').textContent);
        
        // Navigation zur nächsten Seite
        if (window.location.pathname.includes('index.html')) {
            window.location.href = 'chapter2.html';
        } else {
            alert('Ende der Demo. Hier würde es zum nächsten Kapitel gehen.');
        }
    }
});
