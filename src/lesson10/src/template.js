export default function template(title, initialState = {}, content = "") {
    let scripts = '';
    if (content) {
        scripts = `<script>
        window.__STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="assets/client.js"></script>
        `
    } else {
        scripts = `<script src="assets/bundle.js"> </script>`
    }
    let page = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>${title}</title>
    <link rel="stylesheet" href="assets/style.css">
  </head>
  <body>
  <div class="content">
    <div id="app" class="wrap-inner">
        ${content}
    </div>
  </div>
    ${scripts}
  </body>
</html>
    `
    return page
}