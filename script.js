const featuresLink = document.querySelector('.navbar__feature');
const companyLink = document.querySelector('.navbar__company');
const cardsFeature = document.querySelector('.cards--features');
const cardsCompany = document.querySelector('.cards--company');
const featureArrow = document.querySelector('.feature-arrow');
const companyArrow = document.querySelector('.company-arrow');

const animatedFeatureHide = function () {
  cardsFeature.classList.add('cards--features-hide');
  cardsFeature.addEventListener(
    'animationend',
    () => {
      cardsFeature.classList.remove('cards--features-hide');
    },
    { once: true }
  );
};

const animatedCompanyHide = function () {
  cardsCompany.classList.add('cards--company-hide');
  cardsCompany.addEventListener(
    'animationend',
    () => {
      cardsCompany.classList.remove('cards--company-hide');
    },
    { once: true }
  );
};

document.addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  if (e.target === featuresLink) {
    if (!cardsFeature.classList.contains('cards--features-show')) {
      cardsFeature.classList.add('cards--features-show');
      featureArrow.src = 'assets/images/icon-arrow-up.svg';
    } else {
      animatedFeatureHide();
      cardsFeature.classList.remove('cards--features-show');
      featureArrow.src = 'assets/images/icon-arrow-down.svg';
    }
  } else if (e.target === companyLink) {
    if (!cardsCompany.classList.contains('cards--company-show')) {
      cardsCompany.classList.add('cards--company-show');
      companyArrow.src = 'assets/images/icon-arrow-up.svg';
    } else {
      animatedCompanyHide();
      cardsCompany.classList.remove('cards--company-show');
      companyArrow.src = 'assets/images/icon-arrow-down.svg';
    }
  } else {
    if (cardsFeature.classList.contains('cards--features-show')) {
      animatedFeatureHide();
      cardsFeature.classList.remove('cards--features-show');
      featureArrow.src = 'assets/images/icon-arrow-down.svg';
    }

    if (cardsCompany.classList.contains('cards--company-show')) {
      animatedCompanyHide();
      cardsCompany.classList.remove('cards--company-show');
      companyArrow.src = 'assets/images/icon-arrow-down.svg';
    }
  }
});

const sidebarFeatures = document.querySelector('.link-item-features');
const sidebarFeaturesArrow = document.querySelector('.sidebar-features-arrow');
const dropdwonFeatures = document.querySelector('.dropdown-features');
const sidebarCompany = document.querySelector('.link-item-company');
const sidebarCompanyArrow = document.querySelector('.sidebar-company-arrow');
const dropdownCompany = document.querySelector('.dropdown-company');

const animatedDropdownFeaturesClose = function () {
  dropdwonFeatures.classList.add('dropdown-features-hide');
  dropdwonFeatures.addEventListener(
    'animationend',
    () => {
      dropdwonFeatures.classList.remove('dropdown-features-hide');
    },
    { once: true }
  );
};

sidebarFeatures.addEventListener('click', e => {
  if (
    e.target === sidebarFeatures.firstChild.nextSibling ||
    e.target === sidebarFeatures
  ) {
    if (!dropdwonFeatures.classList.contains('dropdown-features-show')) {
      dropdwonFeatures.classList.add('dropdown-features-show');
      sidebarFeaturesArrow.src = 'assets/images/icon-arrow-up.svg';
    } else {
      animatedDropdownFeaturesClose();
      dropdwonFeatures.classList.remove('dropdown-features-show');
      sidebarFeaturesArrow.src = 'assets/images/icon-arrow-down.svg';
    }
  }
});

const animatedDropdownCompanyClose = function () {
  dropdownCompany.classList.add('dropdown-company-hide');
  dropdownCompany.addEventListener(
    'animationend',
    () => {
      dropdownCompany.classList.remove('dropdown-company-hide');
    },
    { once: true }
  );
};

sidebarCompany.addEventListener('click', e => {
  if (
    e.target === sidebarCompany.firstChild.nextSibling ||
    e.target === sidebarCompany
  ) {
    if (!dropdownCompany.classList.contains('dropdown-company-show')) {
      dropdownCompany.classList.add('dropdown-company-show');
      sidebarCompanyArrow.src = 'assets/images/icon-arrow-up.svg';
    } else {
      animatedDropdownCompanyClose();
      dropdownCompany.classList.remove('dropdown-company-show');
      sidebarCompanyArrow.src = 'assets/images/icon-arrow-down.svg';
    }
  }
});

const openSidebarIcon = document.querySelector('.open-sidebar-icon');
const closeSidebarIcon = document.querySelector('.close-sidebar-icon');
const backdropOverlay = document.querySelector('.backdrop-overlay');
const sidebarContainer = document.querySelector('.sidebar-container');

openSidebarIcon.addEventListener('click', e => {
  if (!backdropOverlay.classList.contains('.backdrop-overlay-open')) {
    backdropOverlay.classList.add('backdrop-overlay-open');
    sidebarContainer.classList.add('sidebar-container-show');
    document.querySelector('body').style.overflow = 'hidden';
  }
});

closeSidebarIcon.addEventListener('click', e => {
  backdropOverlay.classList.add('backdrop-overlay-close');
  backdropOverlay.addEventListener(
    'animationend',
    () => {
      backdropOverlay.classList.remove('backdrop-overlay-close');
    },
    { once: true }
  );

  sidebarContainer.classList.add('sidebar-container-close');
  sidebarContainer.addEventListener(
    'animationend',
    () => {
      sidebarContainer.classList.remove('sidebar-container-close');
    },
    { once: true }
  );

  backdropOverlay.classList.remove('backdrop-overlay-open');
  sidebarContainer.classList.remove('sidebar-container-show');
  document.querySelector('body').style.overflow = 'unset';
});
