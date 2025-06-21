document.addEventListener("DOMContentLoaded", function () {
  // สร้างแท็ก <style> สำหรับ CSS รวมใหม่
  const style = document.createElement("style");
  style.textContent = `
    .banner-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      background-color: #222;
      padding: 10px;
      margin-bottom: 20px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px;
    }

    .w-50 {
      width: 49%;
      box-sizing: border-box;
    }

    .w-100 {
      width: 100%;
      box-sizing: border-box;
    }

    .v-middle {
      vertical-align: middle;
    }

    @media (max-width: 768px) {
      .banner-wrapper {
        padding: 0;
      }
      .container {
        padding: 0 5px;
      }
      .w-50 {
        width: 49.5%;
        margin: 0;
      }
      .w-50 + .w-50 {
        margin-left: 1%;
      }
    }
  `;
  document.head.appendChild(style); // แทรก <style> เข้า <head>

  // สร้าง Section ของแบนเนอร์
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

  // แทรก section ไว้เหนือ <h1> ใน <main>
  const h1 = document.querySelector("main h1");
  if (h1) {
    h1.parentNode.insertBefore(section, h1);
  }
});
