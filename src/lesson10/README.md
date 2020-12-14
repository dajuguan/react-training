# React Server-Side Rendering Example

本例是供您在客户端和服务器端与React＆Redux进行服务端渲染的Demo。
Before jumping into it, make sure to [read SSR tutorial on Freecodecamp (Outdated)](https://www.freecodecamp.org/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e/).

Demo最终的样子是酱紫的:

![Clash of Clans app card](https://cdn-images-1.medium.com/max/1000/1*wk04sWGQkw36_XLFvPACrA.png)


## Development

- Clone the repo:

```bash
$ git clone https://github.com/dajuguan/react-training/tree/lesson10
```

- Go to the project directory and install dependencies:

```bash
$ cd ssr && yarn install
```

Launch the server:

```bash
$ yarn start
```

Now, the application is running at [http://localhost:3000](http://localhost:3000).
The homepage is Sever Rendered and ['/client'](http://localhost:3000/client) is client side rendered.

### 注意
本教程旨在帮助您了解React应用程序的服务器端渲染背后的概念。
> 不要在生产中使用此功能。

对于使用成熟解决方案的情况，我建议使用Next.js.
🥳