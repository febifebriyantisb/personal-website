/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// navbar toggle
$("#nav-toggle").click(function () {
  $(this).toggleClass("is-active");
  $("ul.nav").toggleClass("show");
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Tempatkan JavaScript Anda di sini
//   const form = document.querySelector("form");
//   // function kirimFormulir(event) {
//       form.onsubmit = function (event) {
//     event.preventDefault(); // Mencegah perpindahan halaman standar

//     // Dapatkan data formulir
//     const nama = document.getElementById("nama").value;
//     const email = document.getElementById("email").value;
//     const pesan = document.getElementById("pesan").value;
//     console.log(nama);
//     // Tampilkan notifikasi
//     alert("Terima kasih atas feedback Anda!");

//     fetch("http://localhost:8080/kirim-email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ nama, email, pesan }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Manipulasi tanggapan dari server jika diperlukan
//         console.log(data);
//       })
//       .catch((error) => {
//         // Tangani kesalahan jika terjadi
//         console.error(error);
//       });
//   };
// });

document.addEventListener("DOMContentLoaded", function () {
  // Tempatkan JavaScript Anda di sini
  const form = document.querySelector("form");

  form.onsubmit = function (event) {
    event.preventDefault(); // Mencegah perpindahan halaman standar

    // Dapatkan data formulir
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    // Tampilkan notifikasi
    alert("Terima kasih atas feedback Anda!");

    // Reset formulir

    fetch("http://localhost:8080/kirim-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nama, email, pesan }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Manipulasi tanggapan dari server jika diperlukan
        console.log(data);
      })
      .catch((error) => {
        // Tangani kesalahan jika terjadi
        console.error(error);
      });
  };
});
