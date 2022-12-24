const tabButtons = document.querySelectorAll('.membership__duration-button');
const tabContents = document.querySelectorAll('.membership__tab-content');

const onOpenTabs = () => {
  if (tabButtons) {
    tabButtons.forEach((button) => {
      button.addEventListener('click', (e)=> {
        const btnTarget = e.currentTarget;
        const duration = btnTarget.dataset.duration;
        tabContents.forEach((elem) => {
          elem.classList.remove('is-active');
        });

        tabButtons.forEach((elem) => {
          elem.classList.remove('is-active');
        });
        btnTarget.classList.add('is-active');

        document.querySelector(`#${duration}`).classList.add('is-active');
      });
    });
  }
};

export {onOpenTabs};
