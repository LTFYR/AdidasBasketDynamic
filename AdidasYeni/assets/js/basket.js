const klik = document.getElementById("hamb1")
const x = document.getElementById("btn1")
// const logo = document.getElementById("logo")
// const heading = document.getElementById("heading")

  klik.addEventListener("click",openNav)
function openNav() {
    console.log("clicked")
    document.getElementById("myNav").style.display = "inline-block";
    // document.getElementById("hamb").style.display = "none"
    // document.getElementById("logo").style.textAlign = "center"
    // document.getElementById("heading").style.background = "white"
  }
  x.addEventListener("click",closeNav)
  function closeNav() {
    document.getElementById("myNav").style.display = "none";
    // document.getElementById("hamb").style.display = "flex"
    // document.getElementById("logo").style.textAlign = "start"
    // document.getElementById("heading").style.background = "rgba(0, 0, 0, 0.618)"
  }