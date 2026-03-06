function showFeature(feature) {
    const display = document.getElementById('main-display');
    
    switch(feature) {
        case 'formasi':
            display.innerHTML = `<h2>📋 Formation Creator</h2><p>Drag pemain ke posisi Anchor, Flank, atau Pivot.</p>`;
            break;
        case 'skor':
            display.innerHTML = `<h2>⏱️ Score Counter</h2><div class="score-board">0 : 0</div>`;
            break;
        case 'statistik':
            display.innerHTML = `<h2>📊 Player Stats</h2><p>Daftar top skor tim Smadar FC.</p>`;
            break;
        case 'bagan':
            display.innerHTML = `<h2>🏆 Tournament Bracket</h2><p>Kelola bagan pertandingan di sini.</p>`;
            break;
        case 'jersey':
            display.innerHTML = `<h2>👕 Jersey Mockup</h2><p>Pilih warna dasar dan warna lengan tim.</p>`;
            break;
        case 'kas':
            display.innerHTML = `<h2>💰 Team Finance</h2><p>Total Kas: Rp 0</p>`;
            break;
    }
}
