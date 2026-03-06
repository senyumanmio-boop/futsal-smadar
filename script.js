// Data Temporary (Biar data nggak hilang saat pindah menu)
let scores = { home: 0, away: 0 };
let teamStats = [
    { name: "Kim", goals: 10, assist: 5 },
    { name: "Andi", goals: 7, assist: 8 },
    { name: "Budi", goals: 5, assist: 2 }
];
let kasBalance = 500000;

function showFeature(feature) {
    const display = document.getElementById('main-display');
    
    switch(feature) {
        case 'formasi':
            display.innerHTML = `
                <h2>📋 Formation Creator (#1)</h2>
                <div class="pitch">
                    <div class="player pivot">Pivot</div>
                    <div class="player flank-l">Flank L</div>
                    <div class="player flank-r">Flank R</div>
                    <div class="player anchor">Anchor</div>
                    <div class="player gk">GK</div>
                </div>
                <p>Seret posisi untuk mengatur taktik tim Smadar FC.</p>`;
            break;

        case 'skor':
            display.innerHTML = `
                <div class="score-container">
                    <h2>⏱️ Score Board (#2)</h2>
                    <div class="board">
                        <div class="team"><h3>HOME</h3><div id="home-score" class="score-num">${scores.home}</div>
                        <button onclick="changeScore('home', 1)">+ GOL</button></div>
                        <div class="vs">VS</div>
                        <div class="team"><h3>AWAY</h3><div id="away-score" class="score-num">${scores.away}</div>
                        <button onclick="changeScore('away', 1)">+ GOL</button></div>
                    </div>
                    <button class="reset-btn" onclick="resetScore()">Reset Match</button>
                </div>`;
            break;

        case 'statistik':
            let rows = teamStats.map(p => `<tr><td>${p.name}</td><td>${p.goals}</td><td>${p.assist}</td></tr>`).join('');
            display.innerHTML = `
                <h2>📊 Player Stats (#4)</h2>
                <table class="stat-table">
                    <thead><tr><th>Pemain</th><th>Gol</th><th>Assist</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>`;
            break;

        case 'bagan':
            display.innerHTML = `
                <h2>🏆 Tournament Bracket (#5)</h2>
                <div class="bracket">
                    <div class="match">Smadar FC vs SMA 1</div>
                    <div class="match">SMA 2 vs SMK 4</div>
                    <div class="final">FINAL</div>
                </div>`;
            break;

        case 'jersey':
            display.innerHTML = `
                <h2>👕 Jersey Mockup (#6)</h2>
                <div id="jersey-preview" class="jersey-box">JERSEY TIM</div>
                <input type="color" id="colorPicker" onchange="changeJerseyColor(this.value)">
                <p>Pilih warna identitas tim kamu.</p>`;
            break;

        case 'kas':
            display.innerHTML = `
                <h2>💰 Team Finance (#9)</h2>
                <div class="cash-box">Saldo Kas: Rp ${kasBalance.toLocaleString()}</div>
                <button onclick="updateKas(-50000)">Bayar Sewa Lapangan (50rb)</button>
                <button onclick="updateKas(20000)">Iuran Pemain (+20rb)</button>`;
            break;
    }
}

// Fungsi Pendukung
function changeScore(team, val) {
    scores[team] += val;
    document.getElementById(`${team}-score`).innerText = scores[team];
}
function resetScore() {
    scores = { home: 0, away: 0 };
    showFeature('skor');
}
function changeJerseyColor(color) {
    document.getElementById('jersey-preview').style.backgroundColor = color;
}
function updateKas(amount) {
    kasBalance += amount;
    showFeature('kas');
}
