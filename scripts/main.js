// VARIABLE DACLARATIONS
let faqList = document.querySelectorAll(".faq");





// EVENT LISTENERS
faqList.forEach(faq => {
	faq.addEventListener("click", toggleFaq);
});





// FUNCTION DECLARATIONS
function toggleFaq(e) {
     if(e.target.className == "faq-header" || e.target.className == "") {
          e.target.classList.toggle("active");
     }
}
