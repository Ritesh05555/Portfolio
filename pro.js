// function huba(){
// document.getElementById("serv");
// console.log("hiii")
// }

//  =>DOM 


// function huba (){
//     // document.getElementById("one").innerHTML="kuch tho badal gaya ha"

//     document.getElementById("one").style.height="400px";
//     document.getElementById("one").style.backgroundColor="pink";
//     document.getElementById("one").style.marginLeft="400px";
//     document.getElementById("one").style.transform="rotateZ(28000deg)";


// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select all list items in the nav-hi menu
    const navItems = document.querySelectorAll(".nav-hi li");
  
    // Loop through each item and add a click event listener
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Log the clicked item's text content to the console
        console.log("You clicked:", item.textContent);
  
        // Perform different actions based on the text content
        if (item.textContent.toLowerCase() === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (item.textContent.toLowerCase() === "services") {
          document.getElementById("serv").scrollIntoView({ behavior: "smooth" });
        } else if (item.textContent.toLowerCase() === "contact") {
          alert("Contact section coming soon!");
        } else if (item.textContent.toLowerCase() === "client") {
          alert("Clients section coming soon!");
        }
      });
    });
  });
  


