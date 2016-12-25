var flickerCopy = function flickerCopy() {
  const successCopy = document.querySelector('.success__copy');

  successCopy.classList.remove('success__copy--confirmed');
  setTimeout(function() {
    successCopy.classList.add('success__copy--confirmed');
  }, 2800);
};

var saveDocs = function saveDocs() {
  const success = document.querySelector('.success');
  const doc = document.querySelector('.doc');
  const textContent = doc.innerHTML;
  const xhr = new XMLHttpRequest();
  const path = 'save.php';

  xhr.open('POST', path, true);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      success.classList.remove('is-hidden');
      flickerCopy();
    } else {
      success.classList.add('is-hidden');
    }
  }

  xhr.send('data=' + textContent);
};

setInterval(function() {
  saveDocs();
}, 3000);
