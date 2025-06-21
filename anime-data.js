<!DOCTYPE html>
<html lang="th">

  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Anime XD - รายการอนิเมะพร้อมค้นหา</title>
  <link rel="icon" href="https://img2.pic.in.th/pic/039b1c3dd878efaf74.png" type="image/png" />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
    body {
      margin: 0;
      font-family: 'Kanit', sans-serif;
      background: #141414;
      color: #fff;
    }
    header {
      background-color: #ff3d00;
      padding: 15px 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      position: relative;
    }
    .logo {
      font-size: 1.8rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
    }
    nav {
      display: flex;
      gap: 10px;
      flex-wrap: nowrap;
    }
    nav a {
      padding: 6px 12px;
      background-color: transparent;
      color: white;
      border-radius: 0;
      text-decoration: none;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      transition: color 0.3s;
    }
    nav a:hover {
      color: #ffccbc;
      text-decoration: none;
    }
    .menu-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }
    .menu-toggle span {
      width: 25px;
      height: 3px;
      background: white;
      margin: 4px 0;
      border-radius: 2px;
    }
    @media(max-width: 600px) {
      nav {
        display: none;
        flex-direction: column;
        background-color: #ff3d00;
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        z-index: 100;
        border-top: 1px solid #fff3;
      }
      nav.active {
        display: flex;
      }
      nav a {
        padding: 12px;
        border-radius: 0;
        text-align: center;
        font-size: 1.1rem;
      }
      .menu-toggle {
        display: flex;
      }
    }
    main {
      max-width: 1200px;
      margin: 20px auto 40px;
      padding: 0 15px;
    }
    h1 {
      text-align: center;
      color: #ffa07a;
      margin-bottom: 20px;
    }
    .search-container {
      max-width: 400px;
      margin: 0 auto 30px;
    }
    input[type="search"] {
      width: 100%;
      padding: 10px 15px;
      border-radius: 25px;
      border: none;
      font-size: 1rem;
      outline: none;
    }
    .anime-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    @media(min-width: 768px) {
      .anime-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .anime-card {
      background-color: #1f1f1f;
      border-radius: 8px;
      overflow: hidden;
      color: #fff;
      transition: transform 0.2s;
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .anime-card:hover {
      transform: scale(1.05);
    }
    .anime-card img {
      width: 100%;
      display: block;
      flex-shrink: 0;
    }
    .anime-info {
      padding: 10px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .anime-title {
      font-weight: 700;
      margin: 0 0 5px;
      font-size: 1rem;

      display: -webkit-box;
      -webkit-line-clamp: 2; /* ตัดข้อความที่ 2 บรรทัด */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
    }
    .anime-ep {
      font-size: 0.9rem;
      color: #ffa07a;
    }
    .pagination {
      text-align: center;
      margin-top: 30px;
    }
    .pagination button {
      background-color: #ff3d00;
      color: white;
      border: none;
      padding: 10px 16px;
      margin: 0 5px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .pagination button:disabled {
      background-color: #888;
      cursor: default;
    }
    .pagination button:hover:not(:disabled) {
      background-color: #ff7043;
    }
    .no-results {
      text-align: center;
      color: #f66;
      font-weight: bold;
      margin-top: 40px;
    }
    .anime-card a {
      color: inherit;
      text-decoration: none !important;
      display: block;
      height: 100%;
    }
    .anime-card a:hover {
      text-decoration: none !important;
      color: #ffa07a;
    }
    footer {
      text-align: center;
      padding: 20px;
      background-color: #1f1f1f;
      color: #ccc;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

<header>
  <a href="index.html" class="logo">Anime XD</a>

  <div class="menu-toggle" id="menuToggle" aria-label="Toggle menu" role="button" tabindex="0">
    <span></span><span></span><span></span>
  </div>
  <nav id="navMenu" role="navigation">
    
    <a href="contact.html">ติดต่อ</a>
  </nav>
</header>
  <main>
  <h1>รายการอนิเมะ</h1>

  <div class="search-container">
    <input type="search" id="searchInput" placeholder="ค้นหาอนิเมะ..." aria-label="ค้นหาอนิเมะ" />
  </div>

  <div class="anime-grid" id="animeGrid"></div>

  <div class="no-results" id="noResults" style="display:none;">ไม่พบรายการอนิเมะที่ค้นหา</div>

  <div class="pagination">
    <button id="prevBtn" disabled>ก่อนหน้า</button>
    <button id="nextBtn" disabled>ถัดไป</button>
  </div>
</main>

<footer>
  © 2025 Anime XD — ดูอนิเมะออนไลน์ พากย์ไทย ซับไทย ครบทุกแนว
</footer>

<!-- โหลดข้อมูลจาก anime-data.js -->
<script src="anime-data.js"></script>

<script>
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  menuToggle.addEventListener('click', () => navMenu.classList.toggle('active'));
  menuToggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navMenu.classList.toggle('active');
    }
  });

  const animeGrid = document.getElementById('animeGrid');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const searchInput = document.getElementById('searchInput');
  const noResults = document.getElementById('noResults');

  const itemsPerPage = 20;
  let currentPage = 1;
  let filteredList = animeList;

  // ฟังก์ชัน debounce ช่วยหน่วงเวลาไม่ให้ค้นหาทันทีที่พิมพ์
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  function renderPage(page) {
    animeGrid.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = filteredList.slice(start, end);

    if (pageItems.length === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }

    pageItems.forEach(anime => {
      const card = document.createElement('div');
      card.className = 'anime-card';
      card.innerHTML = `
        <a href="${anime.link}" target="_blank" rel="noopener noreferrer">
          <img src="${anime.img}" alt="${anime.title}" loading="lazy" />
          <div class="anime-info">
            <div class="anime-title">${anime.title}</div>
            <div class="anime-ep">${anime.type}</div>
          </div>
        </a>
      `;
      animeGrid.appendChild(card);
    });

    prevBtn.disabled = (page === 1);
    nextBtn.disabled = (page === Math.ceil(filteredList.length / itemsPerPage));
  }

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentPage < Math.ceil(filteredList.length / itemsPerPage)) {
      currentPage++;
      renderPage(currentPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // ใช้ debounce กับ event input
  const handleSearch = debounce(() => {
    const query = searchInput.value.trim().toLowerCase();
    currentPage = 1;
    if (query === '') {
      filteredList = animeList;
    } else {
      filteredList = animeList.filter(anime => anime.title.toLowerCase().includes(query));
    }
    renderPage(currentPage);
  }, 300); // หน่วงเวลา 300ms

  searchInput.addEventListener('input', handleSearch);

  renderPage(currentPage);
</script>

</body>
</html>
