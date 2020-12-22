const repoTabSelector =
  "#js-pjax-container > div.mt-4.position-sticky.top-0.d-none.d-md-block.bg-white.width-full.border-bottom.color-border-secondary > div > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div > nav > a.UnderlineNav-item.selected";
const repoHeaderButtonSelector =
  "body > div.position-relative.js-header-wrapper > header > div.Header-item.position-relative.mr-0.d-none.d-md-flex > details > details-menu > a:nth-child(6)";

window.addEventListener("load", () => {
  const repoTab = document.querySelector(repoTabSelector);
  const repoHeaderButton = document.querySelector(repoHeaderButtonSelector);
  repoTab && (repoTab.href += "&q=&type=public&language=");
  repoHeaderButton && (repoHeaderButton.href += "&q=&type=public&language=");
});

document.body.addEventListener("click", () => {
  const repoTab = document.querySelector(repoTabSelector);
  const repoHeaderButton = document.querySelector(repoHeaderButtonSelector);
  repoTab && (repoTab.href += "&q=&type=public&language=");
  repoHeaderButton && (repoHeaderButton.href += "&q=&type=public&language=");
});
