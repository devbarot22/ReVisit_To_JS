const text = document.querySelector("h2");
const btn = document.querySelector("#Btn")

btn.addEventListener("click", function(){
  if (text.textContent === "Stranger"){
    text.textContent = "Friend";
    btn.textContent = "Removed";
    btn.style.backgroundColor = "#f44336"
  }
  else{
    text.textContent = "Stranger";
    btn.textContent = "Add";
    btn.style.color = "cadetblue";
    btn.style.backgroundColor = "#fff"
  }
})
