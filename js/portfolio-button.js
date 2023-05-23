const ulEl = document.querySelector('.portfolio__filter');
let selectedBtn = null;

const onMenuBtnClick = (e) => {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const currentBtnActive = document.querySelector('.filter__btn--active')
    //  старий синтаксис
    // if (currentBtnActive) {
    //     currentBtnActive.classList.remove('.filter__btn--active');
    // }

    //  новий синтаксис
    currentBtnActive?.remove('.filter__btn--active');

    const nextActiveBtn = e.target;
    nextActiveBtn.classList.add('.filter__btn--active');

    selectedBtn = nextActiveBtn.dataset.value;
    console.log(selectedBtn);
}

ulEl.addEventListener('click', onMenuBtnClick)
