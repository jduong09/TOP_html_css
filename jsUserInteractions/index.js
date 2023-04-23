document.addEventListener('DOMContentLoaded', () => {
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
});