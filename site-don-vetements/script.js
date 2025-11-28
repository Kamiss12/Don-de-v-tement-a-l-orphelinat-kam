document.addEventListener('DOMContentLoaded', function() {
    const donorsList = document.getElementById('donors-list');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const recentDonationsList = document.getElementById('recent-donations-list');

    // Liste simulée des donateurs avec noms africains/maliens
    const donors = ['Amina Traoré', 'Kofi Mensah', 'Fatou Diallo', 'Mamadou Keita', 'Zara Koné'];
    const topDonors = ['Amina Traoré', 'Kofi Mensah'];

    // Afficher la liste des donateurs
    donors.forEach(donor => {
        const li = document.createElement('li');
        li.textContent = donor;
        if (topDonors.includes(donor)) {
            li.classList.add('top-donor');
        }
        donorsList.appendChild(li);
    });

    // Configuration de la barre de progression
    const target = 100000;
    const current = 12450;
    const percentage = (current / target) * 100;

    // Animer la barre de progression
    setTimeout(() => {
        progressFill.style.width = percentage + '%';
    }, 500);

    // Mettre à jour le texte de progression
    progressText.textContent = current.toLocaleString() + ' / ' + target.toLocaleString() + ' dons reçus';

    // Liste simulée des dons récents
    const recentDonations = [
        'Aminata a offert 12 vêtements il y a 2h',
        'Moussa a donné 8 vêtements il y a 4h',
        'Fatima a contribué 15 vêtements il y a 6h',
        'Ibrahim a offert 5 vêtements il y a 8h',
        'Zara a donné 10 vêtements il y a 12h'
    ];

    // Afficher les dons récents
    recentDonations.forEach(donation => {
        const li = document.createElement('li');
        li.textContent = donation;
        recentDonationsList.appendChild(li);
    });
});
