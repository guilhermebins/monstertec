const elementFaq = document.querySelectorAll(".faq-tag");

elementFaq.forEach(function (faq) {
  faq.addEventListener("click", function () {
    faq.classList.toggle("active");
  });
});
