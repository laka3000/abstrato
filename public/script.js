window.onload = () => {
  const cta = document.querySelector('#cta');
  const term = document.querySelector('#term');
  const fallback = 'Estagiário de analista de sistemas para internet';

  cta.addEventListener('click', () => {
    let result;

    axios.get('/new_term')
    .then(({ data }) => {
      result = data;
    })
    .catch(() => {
      result = fallback;
    })
    .then(() => {
      term.innerText = result;
      term.style.display = 'initial';
    })
  });

  term.addEventListener('click', () => {
    window.open(`http://google.com/search?q=${term.innerText}`);
  });
};
