document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("alienhunters JS imported successfully!");
  },
  false
);

//scroll to top

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}