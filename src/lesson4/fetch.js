fetch(`https://api.github.com/users/dajuguan`)
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error);
