const amazonUrlRegex = /https:\/\/www\.amazon\.co\.jp.*tag=.*-22.*/;
const shorteningAmazonUrlRegex = /https:\/\/amzn\.to\/.*$/;

function showAffiliateUrlMessage(element) {
  const messageDiv = document.createElement("div");
  messageDiv.style.padding = "3px";
  messageDiv.textContent = "↓注意！Amazonアフィリエイトリンクです！↓";
  messageDiv.style.color = "red";
  messageDiv.style.fontWeight = "bold";
  element.before(messageDiv);
}

function showAffiliateShorteningUrlMessage(element) {
  const messageDiv = document.createElement("div");
  messageDiv.style.padding = "3px";
  messageDiv.textContent =
    "↓注意！Amazonアフィリエイトリンクかもです！↓\n遷移先urlに`tag={文字列}-22`が含まれている場合、アフィリンクです。";
  messageDiv.style.color = "red";
  messageDiv.style.fontWeight = "bold";

  element.before(messageDiv);
}

function checkElement(element) {
  if (amazonUrlRegex.test(element.href)) {
    showAffiliateUrlMessage(element);
  } else if (shorteningAmazonUrlRegex.test(element.href)) {
    showAffiliateShorteningUrlMessage(element);
  }
}

document.querySelectorAll("a").forEach(checkElement);
