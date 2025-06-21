/* document.addEventListener("DOMContentLoaded", function () {
  const style = document.createElement("style");
  style.textContent = `
    /* คอมพิวเตอร์ / จอใหญ่ */
    .container {
      max-width: 100%;
      margin: 0 auto;
      padding: 0;
    }

    .banner-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      background-color: #222;
      padding: 0;
      margin-bottom: 20px;
      width: 100%;
      box-sizing: border-box;
    }

    .w-50 {
      width: 49.9%;
      box-sizing: border-box;
      margin: 0;
    }

    .w-100 {
      width: 100%;
      box-sizing: border-box;
    }

    .v-middle {
      vertical-align: middle;
    }

    .banner-wrapper img {
      display: block;
      width: 100%;
      height: auto;
    }

    /* มือถือ ปรับ 2 คอลัมน์เต็ม ไม่มีช่องขอบ */
    @media (max-width: 768px) {
      .banner-wrapper {
        padding: 0;
        margin-bottom: 10px;
      }
      .container {
        padding: 0;
        max-width: 100%;
      }
      .w-50 {
        width: 49.9%;
        margin: 0;
      }
      .w-50 + .w-50 {
        margin-left: 0.2%; /* ช่องว่างเล็กน้อยระหว่าง 2 คอลัมน์ */
      }
    }
  `;
  document.head.appendChild(style);

  const section = document.createElement("section");
  section.innerHTML = `
    <div class="container">
      <div class="banner-wrapper" id="banner">
        <div class="w-50">
          <a href="https://www.facebook.com/ANIMEBK99/" target="_blank" rel="nofollow">
            <img src="https://img5.pic.in.th/file/secure-sv1/anime-xd666-1.png" class="w-100 v-middle lazy" alt="ติดต่อเรา">
          </a>
        </div>
        <div class="w-50">
          <a href="https://www.facebook.com/ANIMEBK99/" target="_blank" rel="nofollow">
            <img src="https://img5.pic.in.th/file/secure-sv1/anime-xd666-1.png" class="w-100 v-middle lazy" alt="ติดต่อเรา">
          </a>
        </div>
      </div>
    </div>
  `;

  const h1 = document.querySelector("main h1");
  if (h1) {
    h1.parentNode.insertBefore(section, h1);
  }
});
*/
