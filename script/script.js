function cardGetElementById(id) {
  return document.getElementById(id);
}

cardGetElementById("card-parent").addEventListener("click", function (e) {
  const rigthSideCallHistory = cardGetElementById("rigth-side-call-history");
  const allHistory = document.createElement("div");

  // convert date
  const date = new Date().toLocaleTimeString();

  // dynamic title
  const title =
    e.target.parentNode.parentNode.parentNode?.children[1]?.children[1]
      ?.innerText;
  // dynamic phone number
  const phoneNumber =
    e.target.parentNode.parentNode.parentNode?.children[1]?.children[2]
      ?.innerText;

  // copy count innerText to number convert
  if (e.target.className.includes("copy-btn")) {
    let copyCount = Number(cardGetElementById("copy-count").innerText);
    cardGetElementById("copy-count").innerText = copyCount += 1;
    return alert(`copy successfully! ${phoneNumber}`);
  }

  // heart count innerText to number convert
  if (e.target.className.includes("heart-count")) {
    let heartCount = Number(cardGetElementById("heart-count").innerText);
    cardGetElementById("heart-count").innerText = heartCount += 1;
  }
  // call button history
  if (e.target.className.includes("call-btn")) {
    if (Number(cardGetElementById("coin-decrement").innerText) <= 0) {
      return alert("No available coin, minimum 20 coin required!");
    }
    const coin = Number(cardGetElementById("coin-decrement").innerText) - 20;
    cardGetElementById("coin-decrement").innerText = coin;
    alert(`${title} ${phoneNumber}...`);
    allHistory.innerHTML = `
        <div class="bg-[#fafafa] p-3 rounded-lg space-y-1">
        <h4 class="text-gray-600 text-lg">${title}</h4>
        <div class="flex items-center justify-between">
        <p class="text-lg text-gray-500">${phoneNumber}</p>
        <p>${date}</p>
        </div>
    </div>
    `;
    rigthSideCallHistory.appendChild(allHistory);
  }
});

cardGetElementById("clear-btn").addEventListener("click", function () {
  cardGetElementById("rigth-side-call-history").innerHTML = "";
});
