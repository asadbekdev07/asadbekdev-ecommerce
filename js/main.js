// MODIFIERS
const modifiers = {
  siteHeaderCartModalOpen: "site-header__cart-modal--open",
  imgThumbnailActive: "img-showcase__thumbnail--active",
  lightboxOpen: "lightbox--open"
}
// SHOPPING CART MODAL
const elSiteHeaderCartLink = document.querySelector(".js-site-header-cart-link");
const elSiteHeaderCartModal = document.querySelector(".site-header__cart-modal");

if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen);
  })
}

// IMG SHOWCASE
const elProductPageGallery = document.querySelector(".product-page__gallery");
const elImgShowcaseActiveImg = elProductPageGallery.querySelector(".img-showcase__active-img");
const elsImgShowcaseThumbnailBtn = elProductPageGallery.querySelectorAll(".js-img-showcase-thumbnail-btn");
const elsImgShowcaseThumbnail = elProductPageGallery.querySelectorAll(".js-img-showcase-thumbnail");

// Deactivate thumbnail active
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


// LIGHTBOX
const elLightbox = document.querySelector(".lightbox");
const elLightboxToggler = document.querySelector(".js-lightbox-toggler");
const elLightboxClose = document.querySelector(".js-lightbox-close");

if (elLightboxToggler) {
  elLightboxToggler.addEventListener("click", function () {
    elLightbox.classList.add(modifiers.lightboxOpen);
  });
};

if (elLightboxClose) {
  elLightboxClose.addEventListener("click", function () {
    elLightbox.classList.remove(modifiers.lightboxOpen);
  });
};

// LIGHTBOX-SHOWCASE
const elImgLightboxActiveImg = elLightbox.querySelector(".img-showcase__active-img");
const elsImgLightboxThumbnailBtn = elLightbox.querySelectorAll(".js-img-lightbox-thumbnail-btn");
const elsImgLightboxThumbnail = elLightbox.querySelectorAll(".js-img-showcase-thumbnail");


// Deactivate thumbnail active
function deactivateImgLightboxThumbnailActive () {
  elsImgLightboxThumbnail.forEach(function (elImgLightboxThumbnail) {
    elImgLightboxThumbnail.classList.remove(modifiers.imgThumbnailActive);
  });
};

elsImgLightboxThumbnailBtn.forEach(function (elImgLightboxThumbnailBtn) {
  elImgLightboxThumbnailBtn.addEventListener("click", function () {
    // Remove active class from all buttons
    deactivateImgLightboxThumbnailActive();

    // Add active class to clicked button
    elImgLightboxThumbnailBtn.parentElement.classList.add(modifiers.imgThumbnailActive);

    elImgLightboxActiveImg.src = elImgLightboxThumbnailBtn.dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elImgLightboxThumbnailBtn.dataset.imgShowcaseBig} 1x, ${elImgLightboxThumbnailBtn.dataset.imgShowcaseRetina} 2x`;
  });
});

// Lightbox control
const elLigtboxControlPrev = document.querySelector(".js-lightbox-control-prev");
const elLigtboxControlNext  = document.querySelector(".js-lightbox-control-next");

if (elLigtboxControlNext) {
  elLigtboxControlNext.addEventListener("click", function () {

    // Find active li element
    const elActiveItem = elLightbox.querySelector(".img-showcase__thumbnail--active");

    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    // Make next element active
    if (elActiveItem.nextElementSibling === null) {
      elsImgLightboxThumbnail[0].classList.add(modifiers.imgThumbnailActive);
    } else {
      elActiveItem.nextElementSibling.classList.add(modifiers.imgThumbnailActive);
    };

    // Update active image
    const elActiveThumbnail = elLightbox.querySelector(".img-showcase__thumbnail--active .js-img-lightbox-thumbnail-btn");
    elImgLightboxActiveImg.src = elActiveThumbnail.dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elActiveThumbnail.dataset.imgShowcaseBig} 1x, ${elActiveThumbnail.dataset.imgShowcaseRetina} 2x`;
  })
}

if (elLigtboxControlPrev) {
  elLigtboxControlPrev.addEventListener("click", function () {
    // Find active li element
    const elActiveItem = elLightbox.querySelector(".img-showcase__thumbnail--active");

    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    // Make next element active
    if (elActiveItem.previousElementSibling === null) {
      elsImgLightboxThumbnail[elsImgLightboxThumbnail.length - 1].classList.add(modifiers.imgThumbnailActive);
    } else {
      elActiveItem.previousElementSibling.classList.add(modifiers.imgThumbnailActive);
    };

        // Update active image
        const elActiveThumbnail = elLightbox.querySelector(".img-showcase__thumbnail--active .js-img-lightbox-thumbnail-btn");
        elImgLightboxActiveImg.src = elActiveThumbnail.dataset.imgShowcaseBig;
        elImgLightboxActiveImg.srcset = `${elActiveThumbnail.dataset.imgShowcaseBig} 1x, ${elActiveThumbnail.dataset.imgShowcaseRetina} 2x`;
  })
}