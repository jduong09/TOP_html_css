document.addEventListener('DOMContentLoaded', () => {
  /* Drop Down Menu */
  
  const dropDownMenu1Btn = document.querySelector('#drop-down-menu-1 > button');
  const dropDownMenu1List = document.querySelector('#drop-down-menu-1 > ul');

  dropDownMenu1Btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (dropDownMenu1List.classList.contains('hide')) {
      dropDownMenu1List.classList.remove('hide');
    } else {
      dropDownMenu1List.classList.add('hide');
    }
  });

  /* Img Carousel */
  const imgsCarousel = document.querySelectorAll('#list-carousel > li > img');
  const spanNavBtns = document.getElementsByClassName('span-nav-btn');
  const btnPrevious = document.getElementById('btn-previous');
  const btnNext = document.getElementById('btn-next');
  
  let idxCarousel = 0;

  btnPrevious.addEventListener('click', (e) => {
    e.preventDefault();

    imgsCarousel[idxCarousel].classList.add('hide');
    spanNavBtns[idxCarousel].classList.remove('selected');
    idxCarousel = (idxCarousel === 0) ? 4 : (idxCarousel - 1);
    imgsCarousel[idxCarousel].classList.remove('hide');
    spanNavBtns[idxCarousel].classList.add('selected');
  });

  btnNext.addEventListener('click', (e) => {
    e.preventDefault();

    imgsCarousel[idxCarousel].classList.add('hide');
    spanNavBtns[idxCarousel].classList.remove('selected');
    idxCarousel = (idxCarousel === 4) ? 0 : (idxCarousel + 1);
    imgsCarousel[idxCarousel].classList.remove('hide');
    spanNavBtns[idxCarousel].classList.add('selected');
  });

  setInterval(() => {
    imgsCarousel[idxCarousel].classList.add('hide');
    spanNavBtns[idxCarousel].classList.remove('selected');
    idxCarousel = (idxCarousel === 4) ? 0 : (idxCarousel + 1);
    imgsCarousel[idxCarousel].classList.remove('hide');
    spanNavBtns[idxCarousel].classList.add('selected');
  }, 5000);
});