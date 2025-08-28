function getElementById(id) {
  const element = document.getElementById(id);
  return element;
}

getElementById("card-parent").addEventListener("click", function (e) {
  const callHistory = getElementById("call-history-container");
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
    let copyCount = Number(getElementById("copy-count").innerText);
    getElementById("copy-count").innerText = copyCount += 1;
    return alert(`copy successfully! ${phoneNumber}`);
  }
  // heart count innerText to number convert
  if (e.target.className.includes("heart-count")) {
    let heartCount = Number(getElementById("heart-count").innerText);
    getElementById("heart-count").innerText = heartCount += 1;
  }
});
