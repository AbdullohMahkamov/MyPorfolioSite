const sliderData = [
  {
    id: 1,
    image: "https://img.freepik.com/free-icon/html-5_318-674234.jpg?w=2000",
    title: "HTML5",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
    title: "CSS3 ",
  },

  {
    id: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
    title: "JavaScript ES6",
  },
  {
    id: 4,
    image:
      "data:image/png;base64,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",
    title: "jQuery",
  },
  {
    id: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png",
    title: "Bootstrap",
  },
  {
    id: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    title: "React.js",
  },
  {
    id: 7,
    image:
      "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    title: "React-Redux",
  },
  {
    id: 8,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    title: "Tailwind CSS ",
  },
  {
    id: 9,
    image: "https://mui.com/static/logo.png",
    title: "Material UI",
  },

  {
    id: 10,
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    title: "Next.js",
  },
  {
    id: 11,
    title: "API",
    image:
      "https://thumbs.dreamstime.com/b/api-gear-icon-linear-template-software-logo-black-simple-illustration-contour-isolated-vector-image-white-background-172561370.jpg",
  },
  {
    id: 12,
    title: "Node.js",
    image: "https://softprodigy.com/wp-content/uploads/2019/06/nodejs-logo.png",
  },
  {
    id: 13,
    title: "SCSS",
    image:
      "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
  },
  {
    id: 14,
    title: "WordPress",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/2048px-WordPress_blue_logo.svg.png",
  },
  {
    id: 15,
    title: "OpenCart",
    image:
      "data:image/png;base64,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",
  },
  {
    id: 16,
    title: "Figma",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    id: 17,
    title: "VSCode",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    id: 18,
    title: "Codepen",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111501.png",
  },
  {
    id: 19,
    title: "GitHub",
    image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
  },
  {
    id: 20,
    title: "Vue.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png",
  },
];

export default sliderData;
