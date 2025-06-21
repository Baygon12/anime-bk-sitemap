document.addEventListener("DOMContentLoaded", function () {
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
  document.body.insertBefore(section, document.body.firstChild);
});
