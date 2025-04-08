document.addEventListener("DOMContentLoaded", function () {
    // Cari header untuk menyisipkan hamburger button
    const header = document.querySelector(".fix-top");

    // Buat hamburger button
    const hamburgerBtn = document.createElement("button");
    hamburgerBtn.innerText = "☰";
    hamburgerBtn.style.fontSize = "24px";
    hamburgerBtn.style.background = "white";
    hamburgerBtn.style.border = "none";
    hamburgerBtn.style.cursor = "pointer";
    // hamburgerBtn.style.position = "fixed";
    hamburgerBtn.style.top = "20px";
    hamburgerBtn.style.right = "20px";
    hamburgerBtn.style.zIndex = "1000";

    // Tambahkan ke dalam header
    header.appendChild(hamburgerBtn);

    // Buat elemen <section> untuk menu
    const navMenu = document.createElement("section");
    navMenu.classList.add("nav-menu");

    // Atur gaya awal
    navMenu.style.display = "none";
    navMenu.style.position = "fixed";
    navMenu.style.top = "50%";
    navMenu.style.left = "50%";
    navMenu.style.transform = "translate(-50%, -50%)";
    navMenu.style.background = "white";
    navMenu.style.width = "100%";
    navMenu.style.height = "100%";
    navMenu.style.padding = "20px";
    navMenu.style.borderRadius = "10px";


    // Isi menu
    navMenu.innerHTML = `
    <div class="nav-menu-inner">
        <button id="closeNavMenu" style="position: fixed; top: 60px; right: 80px; font-size: 20px; background: none; border: none; cursor: pointer;">✕</button>
        <a href="https://www.apple.com/id/" style="text-decoration: none; color: black;">Home</a>
        <a href="https://www.apple.com/id/buy/" style="text-decoration: none; color: black;">Produk</a>
        <a href="https://support.apple.com/id-id?cid=gn-ols-home-hp-tab" style="text-decoration: none; color: black;">Dukungan</a>
    </div>
`;
    // Tambahkan ke dalam body
    document.body.appendChild(navMenu);

    const style = document.createElement("style");
    style.textContent = `
@keyframes slideDown {
    from {
        opacity: 0;
        transform: translate(-50%, -60%);
    }
    to {
        opacity: 1;
        transform: translate(-50%, -50%);
    }
}
.nav-menu-animate {
    animation: slideDown 0.5s ease forwards;
}
`;
    document.head.appendChild(style);

    const backG = document.querySelector("body");

    // Toggle menu saat tombol hamburger diklik
    hamburgerBtn.addEventListener("click", () => {
        navMenu.style.display = navMenu.style.display === "none" ? "block" : "none";
        backG.style.background = "white";
        navMenu.classList.remove("nav-menu-animate");
        void navMenu.offsetWidth; // force reflow
        navMenu.classList.add("nav-menu-animate");
    });

    document.addEventListener("click", function (e) {
        if (e.target.id === "closeNavMenu") {
            navMenu.style.display = "none";
            backG.style.background = "linear-gradient(to bottom, #000000, #ffffff)";
        }
    });

    // Dropdown toggle
    // const dropdownBtn = navMenu.querySelector("#dropdownBtn");
    // const dropdownMenu = navMenu.querySelector("#dropdownMenu");
    // dropdownBtn.addEventListener("click", (e) => {
    //     e.preventDefault();
    //     dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
    // });

    // Modal Promo
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.background = "white";
    modal.style.padding = "20px";
    modal.style.borderRadius = "10px";
    modal.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
    modal.style.display = "none";
    modal.innerHTML = `
        <h3>Promo Spesial!</h3>
        <p>Dapatkan diskon hingga 20% untuk pembelian MekBuk sekarang!</p>
        <button id="closeModal" style="background: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">Tutup</button>
    `;
    document.body.appendChild(modal);

    setTimeout(() => {
        modal.style.display = "block";
    }, 3000);

    document.getElementById("closeModal").addEventListener("click", () => {
        modal.style.display = "none";
    });
});
