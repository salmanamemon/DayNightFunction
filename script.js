document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const BUTTON = document.getElementById("toggle_button_graphic");

  // INITIAL CHECK
  if( body.classList.contains('white-background') ){
    document.body.setAttribute("data-dark-mode", false);
    BUTTON.setAttribute("aria-pressed", false);
  } else {
    document.body.setAttribute("data-dark-mode", true);
    BUTTON.setAttribute("aria-pressed", true);
  }

  // TOGGLE BUTTON
  BUTTON.addEventListener('click', function () {
      // Use AJAX to send a request to session.php to toggle background
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              const response = JSON.parse(xhr.responseText);
              
              if (response.background === 'dark') {
                  body.classList.remove('white-background');
                  body.classList.add('dark-background');
                  document.body.setAttribute("data-dark-mode", true);
                  BUTTON.setAttribute("aria-pressed", true);
              } else {
                  body.classList.remove('dark-background');
                  body.classList.add('white-background');
                  document.body.setAttribute("data-dark-mode", false);
                  BUTTON.setAttribute("aria-pressed", false);
              }
          }
      };
  
      xhr.open('POST', 'session.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('toggle=true');
  });
  
});
