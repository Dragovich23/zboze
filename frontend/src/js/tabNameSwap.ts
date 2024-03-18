const titleOptions = ['Nie zapomnij o Nas!', 'Największa baza danych', 'produktów rolniczych'];
  
  let originalTitle = document.title;
  let intervalId;

  function changeTitle() {
    let currentIndex = 0;
    intervalId = setInterval(() => {
      document.title = titleOptions[currentIndex];
      currentIndex = (currentIndex + 1) % titleOptions.length;
    }, 2000);
  }

  window.addEventListener('focus', () => {
    clearInterval(intervalId);
    document.title = originalTitle;
  });

  window.addEventListener('blur', () => {
    changeTitle();
  });