// MODIFIERS
const modifiers = {
  imgThumbnailActive: "img-showcase__thumbnail--active"
}
// SHOPPING CART MODAL
const elSiteHeaderCartLink = document.querySelector(".js-site-header-cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal");

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    elSiteHeaderCartModal.classList.toggle("site-header__cart-modal--open");
  })
}

// IMG SHOWCASE
const elImgShowcaseActiveImg = document.querySelector(".img-showcase__active-img");
const elsImgShowcaseThumbnailBtn = document.querySelectorAll(".js-img-showcase-thumbnail-btn");
const elsImgShowcaseThumbnail = document.querySelectorAll(".js-img-showcase-thumbnail");

// DEACTIVATE-THUMBNAIL-ACTIVE
function deactivateImgShowcaseThumbnailActive () {
  elsImgShowcaseThumbnail.forEach(function (elImgShowcaseThumbnail) {
    elImgShowcaseThumbnail.classList.remove(modifiers.imgThumbnailActive);
  });
};

elsImgShowcaseThumbnailBtn.forEach(function (elImgShowcaseThumbnailBtn) {
  elImgShowcaseThumbnailBtn.addEventListener("click", function () {
    // Remove active class from all buttons
    deactivateImgShowcaseThumbnailActive();

    // Add active class to clicked button
    elImgShowcaseThumbnailBtn.parentElement.classList.add(modifiers.imgThumbnailActive);

    elImgShowcaseActiveImg.src = elImgShowcaseThumbnailBtn.dataset.imgShowcaseBig;
    elImgShowcaseActiveImg.srcset = `${elImgShowcaseThumbnailBtn.dataset.imgShowcaseBig} 1x, ${elImgShowcaseThumbnailBtn.dataset.imgShowcaseRetina} 2x`;
  });
});