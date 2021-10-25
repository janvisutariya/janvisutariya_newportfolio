//Name: Janvi Sutariya
//Student Id: 301171524
"use strict";
(function () {
  function confirmDelete() {
    $("a.delete").on("click", function (event) {
      if (!confirm("Are you sure?")) {
        event.preventDefault();
        location.href = "/contacts";
      }
    });
  }
  function Start() {
    console.log("App Started");
    confirmDelete();
  }
  window.addEventListener("load", Start);
})();
