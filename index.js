const divs = document.querySelectorAll('div');

function logTag(e) {
  console.log(this.classList.value);
  // e.stopPropagetion(); //It stop Bubbling (eg -: O/P => three, Two, One) like this
  // console.log(this);
}

// divs.forEach(div => div.addEventListener('click', logTag));


divs.forEach(div => div.addEventListener('click', logTag, {
  // If you add Once then ti click only once, then you need to reload page to click again
  once: true
}));
