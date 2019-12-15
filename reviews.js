let reviewsItems = document.querySelectorAll('.reviews__item');
let reviewIcon = document.querySelectorAll('.reviews__icon');

for (let i = 0 ; i < reviews.length; i++) {
  reviewIcon[i].addEventListener('click', () => {
    let reviewIconActive = document.querySelector('.reviews__icon--active')
    reviewIconActive.classList.remove('reviews__icon--active');
    reviewIcon[i].classList.add('reviews__icon--active');
    let reviewsItemsActive = document.querySelector('.reviews__item--active');
    reviewsItemsActive.classList.remove('reviews__item--active');
    reviewsItems[i].classList.add('reviews__item--active');
  })
}
