function toggleMobileMenu() {
  const menuList = document.getElementById("mobile-menu-list");
  const arrow = document.getElementById("mobile-arrow");

  if (menuList.classList.contains("hidden")) {
    // Buka menu
    menuList.classList.remove("hidden");
    menuList.classList.add("flex"); // Gunakan flex agar item berjejer rapi
    arrow.classList.add("rotate-90"); // Putar panah ke bawah
  } else {
    // Tutup menu
    menuList.classList.add("hidden");
    menuList.classList.remove("flex");
    arrow.classList.remove("rotate-90"); // Kembalikan posisi panah
  }
}

function toggleProjectMenu() {
  const projectList = document.getElementById("list-projects");
  const arrowProjects = document.getElementById("arrow-projects");

  if (projectList.classList.contains("hidden")) {
    // Buka sub-menu Projects
    projectList.classList.remove("hidden");
    projectList.classList.add("flex");
    arrowProjects.classList.add("rotate-90"); // Putar panah ke bawah
  } else {
    // Tutup sub-menu Projects
    projectList.classList.add("hidden");
    projectList.classList.remove("flex");
    arrowProjects.classList.remove("rotate-90"); // Kembalikan posisi panah
  }
}

function changePage(targetPageId) {
  // --- LOGIKA MENGGANTI KONTEN HALAMAN ---
  const allPages = document.querySelectorAll(".page-content");
  allPages.forEach((page) => {
    page.classList.add("hidden");
    page.classList.remove("block");
  });

  const targetPage = document.getElementById(targetPageId);
  if (targetPage) {
    targetPage.classList.remove("hidden");
    targetPage.classList.add("block");
  }

  // --- LOGIKA HIGHLIGHT SIDEBAR BARU ---

  // 1. Ambil semua elemen sidebar yang memiliki class 'nav-item'
  const allNavItems = document.querySelectorAll(".nav-item");

  // 2. Hapus efek highlight dari semuanya (kembalikan ke transparan)
  allNavItems.forEach((item) => {
    item.classList.remove("bg-slate-900", "text-white");
  });

  // 3. Cari tombol sidebar yang sesuai dengan halaman yang dibuka
  // Karena ID tombolnya kita buat 'nav-' + id halaman, kita bisa mencarinya seperti ini:
  const activeNavItem = document.getElementById("nav-" + targetPageId);

  // 4. Tambahkan efek highlight (Background abu-abu terang ala VS Code dan teks putih)
  if (activeNavItem) {
    activeNavItem.classList.add("bg-slate-900", "text-white");
  }
}
