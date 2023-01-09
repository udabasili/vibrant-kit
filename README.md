<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<div align="center">
  <a href="https://github.com/udabasili/vibrant-kit">
    <img src="https://user-images.githubusercontent.com/33573587/211262969-aa5c069f-2325-4b07-a6a4-a9aafc9f41de.png" alt="Vibrant Kit" width="80" height="80">
  </a>

<h3 align="center">Vibrant Kit</h3>

  <p align="center">
    Vibrant Kit is a simple component library UI kit that gives you the building blocks you need to build your React applications.
    <br />
    <a href="https://github.com/udabasili/vibrant-kit"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/udabasili/vibrant-kit">View Demo</a>
    ·
    <a href="https://github.com/udabasili/vibrant-kit/issues">Report Bug</a>
    ·
    <a href="https://github.com/udabasili/vibrant-kit/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About the Project

This is a simple UI Kit that gives you general components you can use for your Javascript Project with the main focus on  React

<p align="right">(<a href="#readme-top">back to top</a>)</p>

This project was built using:

- [Rollup](https://rollupjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- CSS
- [Storybook](https://storybook.js.org/) to help you create and show off your components
- Tested with [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library)

### Built With

- [![React][React.js]][React-url]
- [![CSS][Css.dev]][Css-url]
- [![Rollup][Rollup.com]][Rollup-url]
- [![Storybook][Storybook.com]][Storybook-url]
- [![Typescript][Typescript.com]][Typescript-url]
- [![JavaScript][JavaScript.com]][JavaScript-url]
- [![Testing Library][TestingLibrary.com]][TestingLibrary-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Installation

   ```sh
   npm install --save vibrant-kit
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

### Stylesheet

First, you'll need to import the `index.css` CSS file distributed by the package. This should be done at the root of your project (in `index.js` or `App.tsx` of your React app) and will look like this:

```tsx
import 'vibrant-kit/build/index.css';

...
```

### Components

Visit the [StoryBook website](https://63bc1ac2d4f79f8d5c1862cc-llwwhoeyho.chromatic.com) to see the list of components the project has
Usage of components for the library is achieved by:

```js
import { Button, SlideShow } from 'vibrant-kit';

const slideShowData = [
 {
  title: 'Slide 1',
  description: 'Description Slide 1',
  imageUrl: 'https://cdn.pixabay.com/photo/2016/12/27/22/31/converse-1935028_1280.jpg',
 },
 {
  title: 'Slide 2',
  description: 'Description Slide 2',
  imageUrl: 'https://cdn.pixabay.com/photo/2014/07/31/23/42/legs-407196_1280.jpg',
 },
 {
  title: 'Slide 3',
  description: 'Description Slide 3',
  imageUrl: 'https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918_1280.jpg',
 },
];

<SlideShow slideShowData={slideShowData} />
<Button size="lg" variant="primary" type="button">
  This is me
</Button>
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/udabasili/vibrant-kit/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Udendu Abasili - udbasili@yahoo.com

Project Link: [https://github.com/udabasili/vibrant-kit](https://github.com/udabasili/vibrant-kit)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/udabasili/vibrant-kit.svg?style=for-the-badge
[contributors-url]: https://github.com/udabasili/vibrant-kit/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/udabasili/vibrant-kit.svg?style=for-the-badge
[forks-url]: https://github.com/udabasili/vibrant-kit/network/members
[stars-shield]: https://img.shields.io/github/stars/udabasili/vibrant-kit.svg?style=for-the-badge
[stars-url]: https://github.com/udabasili/vibrant-kit/stargazers
[issues-shield]: https://img.shields.io/github/issues/udabasili/vibrant-kit.svg?style=for-the-badge
[issues-url]: https://github.com/udabasili/vibrant-kit/issues
[license-shield]: https://img.shields.io/github/license/udabasili/vibrant-kit.svg?style=for-the-badge
[license-url]: https://github.com/udabasili/vibrant-kit/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Css.dev]: https://img.shields.io/badge/css3-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white
[Css-url]: https://web.dev/learn/css/
[Storybook.com]: https://img.shields.io/badge/storybook-%23FF4785.svg?&style=for-the-badge&logo=storybook&logoColor=white
[Storybook-url]: https://storybook.js.org/
[Rollup.com]: https://img.shields.io/badge/rollup.js-%23EC4A3F.svg?&style=for-the-badge&logo=rollup.js&logoColor=white
[Rollup-url]: https://rollupjs.org/
[JavaScript.com]: https://img.shields.io/badge/javascript-%23F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Typescript.com]: https://img.shields.io/badge/typescript-%233178C6.svg?&style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[TestingLibrary.com]: https://img.shields.io/badge/testing%20library-%23E33332.svg?&style=for-the-badge&logo=testing%20library&logoColor=white
[TestingLibrary-url]: https://testing-library.com/
