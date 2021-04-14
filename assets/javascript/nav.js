/// This function handles navigation opening and closing.
function navHandler(){
  let navElement = document.getElementById(
    'nav'
  );
  let navElementDisplay = window.getComputedStyle(
    navElement, null
  ).getPropertyValue(
    'display'
  );
  if (
    navElementDisplay == 'none'
  ) {
    document.getElementById('nav').style.display = 'block';
  } else {
    document.getElementById('nav').style.display = 'none';
  }
}
