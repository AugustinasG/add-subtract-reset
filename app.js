console.log("veikia");

const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

let result = 0;

add.addEventListener("click", function (addTo) {
  count.innerHTML++;
  result++;
  setColor();
});

subtract.addEventListener("click", function (subtractTo) {
  count.innerHTML--;
  result--;
  setColor();
});

reset.addEventListener("click", function (resetTo) {
  count.innerHTML = 0;
  result = 0;
  setColor();
});

function setColor() {
  if (result < 0) {
    count.style.color = "red";
  } else if (result === 0) {
    count.style.color = "blue";
  } else {
    count.style.color = "green";
  }
}

// document.addEventListener("keydown", (e) => {
//     if (e.key === "ArrowUp") count.textContent++;
//     if (e.key === "ArrowDown") count.textContent--;
//   });
