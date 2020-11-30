async function reqGithubUser(useName) {
  try {
    const resp = await fetch(`https://api.github.com/users/dajuguan`);
    if (resp.ok) {
      const userData = await resp.json();
      console.log(userData);
      return;
    }
    throw new Error("resp is not ok");
  } catch (error) {
    console.error(error);
  }
}

reqGithubUser("dajuguan");
