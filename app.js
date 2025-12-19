// Initial match data from user input
const initialMatches = [
    { player1: "David", score1: 2, player2: "Edwin", score2: 1, date: "2025-01-01" },
    { player1: "Alberto", score1: 1, player2: "David", score2: 2, date: "2025-01-02" },
    { player1: "Junior", score1: 1, player2: "Temo", score2: 2, date: "2025-01-03" },
    { player1: "Ángel", score1: 3, player2: "David", score2: 0, date: "2025-01-04" },
    { player1: "Jefferson", score1: 3, player2: "Tsezar", score2: 0, date: "2025-01-05" },
    { player1: "Roberto", score1: 3, player2: "Temo", score2: 0, date: "2025-01-06" },
    { player1: "Junior", score1: 2, player2: "Tsezar", score2: 1, date: "2025-01-07" },
    { player1: "Jefferson", score1: 2, player2: "Ángel", score2: 1, date: "2025-01-08" },
    { player1: "Roberto", score1: 3, player2: "Alberto", score2: 0, date: "2025-01-09" },
    { player1: "Ángel", score1: 2, player2: "Junior", score2: 1, date: "2025-01-10" },
    { player1: "Alberto", score1: 0, player2: "Jefferson", score2: 3, date: "2025-01-11" },
    { player1: "Alberto", score1: 1, player2: "Ángel", score2: 2, date: "2025-01-12" },
    { player1: "Pepe", score1: 1, player2: "Ángel", score2: 2, date: "2025-01-13" },
    { player1: "Braulio", score1: 3, player2: "Abraham", score2: 0, date: "2025-01-14" },
    { player1: "Braulio", score1: 3, player2: "Ángel", score2: 0 },
    { player1: "Pepe", score1: 2, player2: "Juan", score2: 1 },
    { player1: "Edwin", score1: 0, player2: "Temo", score2: 3 },
    { player1: "Ángel", score1: 1, player2: "Temo", score2: 2 },
    { player1: "Habrán", score1: 2, player2: "Juan", score2: 1 },
    { player1: "David", score1: 1, player2: "Sergio", score2: 2 },
    { player1: "Ángel", score1: 0, player2: "Sergio", score2: 3 },
    { player1: "Pepe", score1: 3, player2: "Temo", score2: 0 },
    { player1: "Temo", score1: 2, player2: "David", score2: 1 },
    { player1: "Braulio", score1: 3, player2: "Tsezar", score2: 0 },
    { player1: "Braulio", score1: 2, player2: "Temo", score2: 1 },
    { player1: "Juan", score1: 0, player2: "Carlos", score2: 3 },
    { player1: "Carlos", score1: 2, player2: "Pepe", score2: 1 },
    { player1: "David", score1: 2, player2: "Juan", score2: 1 },
    { player1: "Pepe", score1: 3, player2: "Tsezar", score2: 0 },
    { player1: "Sergio", score1: 2, player2: "Temu", score2: 1 },
    { player1: "Carlos", score1: 2, player2: "David", score2: 1 },
    { player1: "Sergio", score1: 2, player2: "Roberto", score2: 1 },
    { player1: "Braulio", score1: 1, player2: "Pepe", score2: 2 },
    { player1: "Carlos", score1: 3, player2: "Temo", score2: 0 },
    { player1: "Braulio", score1: 2, player2: "David", score2: 1 },
    { player1: "Roberto", score1: 2, player2: "Carlos", score2: 1 },
    { player1: "Carlos", score1: 3, player2: "Tsezar", score2: 0 },
    { player1: "Pepe", score1: 0, player2: "Roberto", score2: 3 },
    { player1: "Braulio", score1: 1, player2: "Sergio", score2: 2 },
    { player1: "Roberto", score1: 2, player2: "David", score2: 1 },
    { player1: "Juan", score1: 2, player2: "Edwin", score2: 1 },
    { player1: "Edwin", score1: 3, player2: "Tsezar", score2: 0 },
    { player1: "Edwin", score1: 2, player2: "Sergio", score2: 1 },
    { player1: "Braulio", score1: 2, player2: "Juan", score2: 1 },
    { player1: "Aury", score1: 3, player2: "Sergio", score2: 0 },
    { player1: "Aury", score1: 2, player2: "David", score2: 1 },
    { player1: "Aury", score1: 3, player2: "Edwin", score2: 0 },
    { player1: "Aury", score1: 3, player2: "Temo", score2: 0 },
    { player1: "Sergio", score1: 2, player2: "Tsezar", score2: 1 },
    { player1: "Aury", score1: 3, player2: "Tsezar", score2: 0 },
    { player1: "Juan", score1: 3, player2: "Temo", score2: 0 },
    { player1: "Habrán", score1: 2, player2: "Roberto", score2: 1 },
    { player1: "Juan", score1: 3, player2: "Roberto", score2: 0 },
    { player1: "Habrán", score1: 3, player2: "Edwin", score2: 0 },
    { player1: "Edwin", score1: 2, player2: "Roberto", score2: 1 },
    { player1: "Braulio", score1: 2, player2: "Edwin", score2: 1 },
    { player1: "David", score1: 0, player2: "Abraham", score2: 3 },
    { player1: "Braulio", score1: 2, player2: "Alberto", score2: 1 },
    { player1: "Juan", score1: 2, player2: "Alberto", score2: 1 },
    { player1: "Aury", score1: 2, player2: "Alberto", score2: 1 },
    { player1: "AURY", score1: 3, player2: "JUAN", score2: 0 },
    { player1: "Edwin", score1: 1, player2: "Alberto", score2: 2 },
    { player1: "Braulio", score1: 2, player2: "Carlos", score2: 1 },
    { player1: "Roberto", score1: 2, player2: "Braulio", score2: 1 },
    { player1: "Carlos", score1: 3, player2: "Habram", score2: 0 },
    { player1: "Junior", score1: 2, player2: "Braulio", score2: 1 },
    { player1: "Ángel", score1: 2, player2: "Roberto", score2: 1 },
    { player1: "Carlos", score1: 3, player2: "Junior", score2: 0 },
    { player1: "Ángel", score1: 2, player2: "Habram", score2: 1 },
    { player1: "Temo", score1: 1, player2: "Alberto", score2: 2 },
    { player1: "Aury", score1: 3, player2: "Habram", score2: 0 },
    { player1: "Carlos", score1: 2, player2: "Jefferson", score2: 1 },
    { player1: "Aury", score1: 2, player2: "Roberto", score2: 1 },
    { player1: "Junior", score1: 0, player2: "Sergio", score2: 3 },
    { player1: "Alberto", score1: 2, player2: "Junior", score2: 1 },
    { player1: "Aury", score1: 2, player2: "Ángel", score2: 1 },
    { player1: "Alberto", score1: 0, player2: "Sergio", score2: 3 },
    { player1: "Ángel", score1: 0, player2: "Juan", score2: 3 },
    { player1: "Pepe", score1: 3, player2: "Edwin", score2: 0 },
    { player1: "Pepe", score1: 1, player2: "Habrán", score2: 2 },
    { player1: "Aury", score1: 3, player2: "Carlos", score2: 0 },
    { player1: "Braulio", score1: 1, player2: "Aury", score2: 2 },
    { player1: "Juan", score1: 2, player2: "Sergio", score2: 1 },
    { player1: "Aury", score1: 2, player2: "Pepe", score2: 1 },
    { player1: "Tsazar", score1: 0, player2: "David", score2: 3 },
    { player1: "Sergio", score1: 0, player2: "Carlos", score2: 3 },
    { player1: "Habrán", score1: 1, player2: "Sergio", score2: 2 },
    { player1: "Juan", score1: 3, player2: "Tsezar", score2: 0 },
    { player1: "Habran", score1: 2, player2: "Tsezar", score2: 1 },
    { player1: "Junior", score1: 2, player2: "Pepe", score2: 1 },
    { player1: "Junior", score1: 2, player2: "Edwin", score2: 1 },
    { player1: "Temo", score1: 3, player2: "Tsezar", score2: 0 },
    { player1: "Sergio", score1: 2, player2: "Jefferson", score2: 1 },
    { player1: "Jefferson", score1: 3, player2: "Temo", score2: 0 },
    { player1: "Sergio", score1: 3, player2: "Pepe", score2: 0 },
    { player1: "Jefferson", score1: 2, player2: "Edwin", score2: 1 },
    { player1: "Junior", score1: 2, player2: "Jefferson", score2: 1 },
    { player1: "Jefferson", score1: 2, player2: "Pepe", score2: 1 },
    { player1: "Edwin", score1: 1, player2: "Ángel", score2: 2 },
    { player1: "Braulio", score1: 3, player2: "Jefferson", score2: 0 },
    { player1: "David", score1: 2, player2: "Jefferson", score2: 1 },
    { player1: "Jefferson", score1: 2, player2: "Juan", score2: 1 },
    { player1: "Ángel", score1: 3, player2: "Tsezar", score2: 0 },
    { player1: "Pepe", score1: 1, player2: "Alberto", score2: 2 },
    { player1: "Alberto", score1: 3, player2: "Tsezar", score2: 0 },
    { player1: "Carlos", score1: 2, player2: "Alberto", score2: 1 },
    { player1: "Carlos", score1: 3, player2: "Ángel", score2: 0 },
    { player1: "Carlos", score1: 2, player2: "Edwin", score2: 1 }

];

// Data structures
let matches = [];
let players = new Map();

// Initialize app
function initializeApp() {
    loadMatches();
    calculateStandings();
    renderStandings();
    renderMatches();
    renderStats();
    setupEventListeners();
}

// Load matches from initialMatches (source of truth)
function loadMatches() {
    matches = [...initialMatches];
}

// Save matches to localStorage
function saveMatches() {
    localStorage.setItem('ligaMatches', JSON.stringify(matches));
}

// Normalize player names (capitalize first letter, handle special cases)
function normalizeName(name) {
    if (!name) return '';
    name = name.trim();

    // Handle special cases
    const specialNames = {
        'habram': 'Abraham',
        'habran': 'Abraham',
        'habrán': 'Abraham',
        'temu': 'Temo',
        'tsazar': 'Tsezar',
        'Tsezar': 'Tsezar',
        'cesar': 'Tsezar'
    };

    const lowerName = name.toLowerCase();
    if (specialNames[lowerName]) {
        return specialNames[lowerName];
    }

    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// Calculate standings from matches
function calculateStandings() {
    players.clear();

    matches.forEach(match => {
        const p1 = normalizeName(match.player1);
        const p2 = normalizeName(match.player2);

        // Initialize players if they don't exist
        if (!players.has(p1)) {
            players.set(p1, createPlayerStats(p1));
        }
        if (!players.has(p2)) {
            players.set(p2, createPlayerStats(p2));
        }

        const player1Stats = players.get(p1);
        const player2Stats = players.get(p2);

        // Update stats
        player1Stats.played++;
        player2Stats.played++;

        player1Stats.goalsFor += match.score1;
        player1Stats.goalsAgainst += match.score2;

        player2Stats.goalsFor += match.score2;
        player2Stats.goalsAgainst += match.score1;

        // Determine winner (for statistics only)
        if (match.score1 > match.score2) {
            player1Stats.won++;
            player2Stats.lost++;
        } else if (match.score1 < match.score2) {
            player2Stats.won++;
            player1Stats.lost++;
        } else {
            player1Stats.drawn++;
            player2Stats.drawn++;
        }

        // Points are simply the sum of goals scored
        player1Stats.points = player1Stats.goalsFor;
        player2Stats.points = player2Stats.goalsFor;

        // Update goal difference
        player1Stats.goalDifference = player1Stats.goalsFor - player1Stats.goalsAgainst;
        player2Stats.goalDifference = player2Stats.goalsFor - player2Stats.goalsAgainst;
    });
}

// Create initial player stats object
function createPlayerStats(name) {
    return {
        player: name,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
    };
}

// Get sorted standings
function getSortedStandings() {
    return Array.from(players.values()).sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
        if (b.goalsFor !== a.goalsFor) return b.goalsFor - a.goalsFor;
        return a.player.localeCompare(b.player);
    });
}

// Render standings table
function renderStandings() {
    const tbody = document.getElementById('standings-body');
    const standings = getSortedStandings();

    tbody.innerHTML = standings.map((player, index) => `
        <tr>
            <td>
                <span class="rank-badge ${getRankClass(index + 1)}">
                    ${index + 1}
                </span>
            </td>
            <td><span class="player-name">${player.player}</span></td>
            <td>${player.played}</td>
            <td>
                <span class="stat-highlight stat-positive">
                    ${player.points}
                </span>
            </td>
        </tr>
    `).join('');

    updateStatsSummary(standings);
}

// Get rank badge class
function getRankClass(rank) {
    if (rank === 1) return 'gold';
    if (rank === 2) return 'silver';
    if (rank === 3) return 'bronze';
    return 'default';
}

// Get stat class for styling
function getStatClass(value) {
    if (value > 0) return 'stat-positive';
    if (value < 0) return 'stat-negative';
    return 'stat-neutral';
}

// Update stats summary
function updateStatsSummary(standings) {
    const summary = document.getElementById('stats-summary');
    if (standings.length > 0) {
        const leader = standings[0];
        summary.innerHTML = `
            <div style="color: var(--text-muted); font-size: 0.9rem;">
                🏆 Líder: <strong style="color: var(--primary-light);">${leader.player}</strong> 
                con <strong>${leader.points} pts</strong>
            </div>
        `;
    }
}

// Render matches list
function renderMatches() {
    const matchesList = document.getElementById('matches-list');
    const sortedMatches = [...matches].sort((a, b) => new Date(b.date) - new Date(a.date));

    matchesList.innerHTML = sortedMatches.map(match => `
        <div class="match-item">
            <div class="match-players">
                <span class="match-player">${normalizeName(match.player1)}</span>
                <div class="match-score">
                    <span class="score-home">${match.score1}</span>
                    <span class="score-separator">-</span>
                    <span class="score-away">${match.score2}</span>
                </div>
                <span class="match-player">${normalizeName(match.player2)}</span>
            </div>
        </div>
    `).join('');
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Render statistics
function renderStats() {
    const standings = getSortedStandings();
    if (standings.length === 0) return;

    // General stats
    const totalMatches = matches.length;
    const totalPlayers = players.size;
    const totalGoals = matches.reduce((sum, m) => sum + m.score1 + m.score2, 0);
    const avgGoalsPerMatch = (totalGoals / totalMatches).toFixed(2);

    const generalStats = document.getElementById('general-stats');
    generalStats.innerHTML = `
        <div class="stat-card">
            <div class="stat-value">${totalMatches}</div>
            <div class="stat-label">Partidos Jugados</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${totalPlayers}</div>
            <div class="stat-label">Jugadores</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${totalGoals}</div>
            <div class="stat-label">Partidas Totales</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${avgGoalsPerMatch}</div>
            <div class="stat-label">Promedio por Match</div>
        </div>
    `;

    // Records
    const topScorer = standings.reduce((max, p) => p.goalsFor > max.goalsFor ? p : max);
    const mostWins = standings.reduce((max, p) => p.won > max.won ? p : max);
    const bestDefense = standings.reduce((min, p) => p.goalsAgainst < min.goalsAgainst ? p : min);
    const mostPlayed = standings.reduce((max, p) => p.played > max.played ? p : max);

    const recordsContainer = document.getElementById('records-container');
    recordsContainer.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">${topScorer.goalsFor}</div>
                <div class="stat-label">🎱 Mejor Jugador</div>
                <div style="color: var(--text-primary); margin-top: 0.5rem; font-weight: 600;">
                    ${topScorer.player}
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${mostWins.won}</div>
                <div class="stat-label">🏆 Más Victorias</div>
                <div style="color: var(--text-primary); margin-top: 0.5rem; font-weight: 600;">
                    ${mostWins.player}
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${bestDefense.goalsAgainst}</div>
                <div class="stat-label">🛡️ Menor Partidas Recibidas</div>
                <div style="color: var(--text-primary); margin-top: 0.5rem; font-weight: 600;">
                    ${bestDefense.player}
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${mostPlayed.played}</div>
                <div class="stat-label">📊 Más Partidos</div>
                <div style="color: var(--text-primary); margin-top: 0.5rem; font-weight: 600;">
                    ${mostPlayed.player}
                </div>
            </div>
        </div>
    `;
}

// Populate player select dropdowns
function populatePlayerSelects() {
    const playerNames = Array.from(players.keys()).sort();
    const select1 = document.getElementById('player1');
    const select2 = document.getElementById('player2');

    const options = playerNames.map(name =>
        `<option value="${name}">${name}</option>`
    ).join('');

    select1.innerHTML = '<option value="">Seleccionar jugador...</option>' + options;
    select2.innerHTML = '<option value="">Seleccionar jugador...</option>' + options;
}

// Set default date to today
function setDefaultDate() {
    const dateInput = document.getElementById('match-date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
}

// Setup event listeners
function setupEventListeners() {
    // Tab navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Search matches
    document.getElementById('search-matches').addEventListener('input', handleMatchSearch);

    // Sortable columns
    document.querySelectorAll('th.sortable').forEach(th => {
        th.addEventListener('click', () => handleSort(th.dataset.sort));
    });

    // Copy matches button
    document.getElementById('copy-matches-btn').addEventListener('click', copyVisibleMatches);
}

// Switch tab
function switchTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.querySelector(`[data-tab="${tabName}"]`).setAttribute('aria-selected', 'true');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

// Handle match form submission
function handleMatchSubmit(e) {
    e.preventDefault();

    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const score1 = parseInt(document.getElementById('score1').value);
    const score2 = parseInt(document.getElementById('score2').value);
    const date = document.getElementById('match-date').value;

    // Validation
    if (!player1 || !player2) {
        alert('Por favor selecciona ambos jugadores');
        return;
    }

    if (player1 === player2) {
        alert('Los jugadores deben ser diferentes');
        return;
    }

    if (isNaN(score1) || isNaN(score2) || score1 < 0 || score2 < 0) {
        alert('Las partidas deben ser números válidos');
        return;
    }

    // Add match
    matches.push({
        player1: normalizeName(player1),
        player2: normalizeName(player2),
        score1,
        score2,
        date
    });

    saveMatches();
    calculateStandings();
    renderStandings();
    renderMatches();
    renderStats();

    // Reset form
    e.target.reset();
    setDefaultDate();

    // Show success message
    showNotification('✅ Partido registrado exitosamente');

    // Switch to matches tab
    switchTab('matches');
}

// Handle match search
function handleMatchSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const matchItems = document.querySelectorAll('.match-item');

    matchItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Copy visible matches to clipboard
function copyVisibleMatches() {
    const matchItems = document.querySelectorAll('.match-item');
    const visibleMatches = [];

    matchItems.forEach(item => {
        if (item.style.display !== 'none') {
            // Extract player names and scores from the match item
            const players = item.querySelectorAll('.match-player');
            const scores = item.querySelectorAll('.match-score span');

            if (players.length >= 2 && scores.length >= 2) {
                const player1 = players[0].textContent.trim();
                const player2 = players[1].textContent.trim();
                const score1 = scores[0].textContent.trim();
                const score2 = scores[2].textContent.trim(); // Skip the separator (-)

                const matchText = `${player1} ${score1} - ${score2} ${player2}`;
                visibleMatches.push(matchText);
            }
        }
    });

    if (visibleMatches.length === 0) {
        showNotification('⚠️ No hay partidos visibles para copiar');
        return;
    }

    const textToCopy = visibleMatches.join('\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification(`✅ ${visibleMatches.length} partido(s) copiado(s) al portapapeles`);
    }).catch(err => {
        console.error('Error al copiar:', err);
        showNotification('❌ Error al copiar al portapapeles');
    });
}

// Handle table sorting
let currentSort = { column: 'points', ascending: false };

function handleSort(column) {
    if (currentSort.column === column) {
        currentSort.ascending = !currentSort.ascending;
    } else {
        currentSort.column = column;
        currentSort.ascending = false;
    }

    const standings = Array.from(players.values()).sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];

        if (column === 'player') {
            return currentSort.ascending ?
                aVal.localeCompare(bVal) :
                bVal.localeCompare(aVal);
        }

        return currentSort.ascending ? aVal - bVal : bVal - aVal;
    });

    const tbody = document.getElementById('standings-body');
    tbody.innerHTML = standings.map((player, index) => `
        <tr>
            <td>
                <span class="rank-badge ${getRankClass(index + 1)}">
                    ${index + 1}
                </span>
            </td>
            <td><span class="player-name">${player.player}</span></td>
            <td>${player.played}</td>
            <td>
                <span class="stat-highlight stat-positive">
                    ${player.points}
                </span>
            </td>
        </tr>
    `).join('');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
