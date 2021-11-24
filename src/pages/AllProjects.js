import PortfolioList from "../components/projects/PortfolioList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Accu-Dash",
    image:
      "https://github.com/Pfizzz/weather2/blob/887bb80d1064efe1ab5cf8bb1c85da87de737bc9/assets/images/ss1.png?raw=true",
    address:
      "An application using the One Call weather API made using JavaScript",
    description: (
      <a
        href="https://github.com/Pfizzz/weather2"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
    link: (
      <a
        href="https://pfizzz.github.io/weather2/"
        target="_blank"
        rel="noreferrer"
      >
        Live Project
      </a>
    ),
  },
  {
    id: "m2",
    title: "Coding Quiz",
    image:
      "https://github.com/Pfizzz/code-quiz-final/blob/02d24b95d1c76004931a0cb614642f021281fd6e/assets/images/ss1.png?raw=true",
    address: "A coding quiz built with vanilla JavaScript",
    description: (
      <a
        href="https://github.com/Pfizzz/code-quiz-final"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
    link: (
      <a
        href="https://pfizzz.github.io/code-quiz-final/"
        target="_blank"
        rel="noreferrer"
      >
        Live Project
      </a>
    ),
  },
  {
    id: "m3",
    title: "&Chill",
    image:
      "https://raw.githubusercontent.com/Pfizzz/project-1/fbb2eea178e5b8f86f18b59d77f4855f38feef74/assets/images/logo.png?raw=true",
    address: "A Javascript/Materialize CSS project",
    description: (
      <a
        href="https://github.com/Pfizzz/project-1"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
    link: (
      <a
        href="https://pfizzz.github.io/project-1/"
        target="_blank"
        rel="noreferrer"
      >
        Live Project
      </a>
    ),
  },
  {
    id: "m4",
    title: "E-Commerce Back End",
    image:
      "https://raw.githubusercontent.com/Pfizzz/e-commerce/8154fe19ce3ae41ce6f232853930394348d322e0/images/ss1.png",
    address: "A node.js application that uses Sequelize for Object-Relational Mapping. Rather than SQL, this app was written in JavaScript.",
    description: (
      <a
        href="https://github.com/Pfizzz/e-commerce"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
    link: (
      <a
        href="https://www.youtube.com/watch?v=IMnLNtmtzaY"
        target="_blank"
        rel="noreferrer"
      >
        Demo Video
      </a>
    ),
  },
  {
    id: "m5",
    title: "First Portfolio",
    image:
      "https://raw.githubusercontent.com/Pfizzz/Pfizzz.github.io/c050b4c77a62aef40b02ae6fa985296d7bc506eb/assets/images/readme-ss.png",
    address: "A responsive portofolio page built with flexbox",
    description: (
      <a
        href="https://github.com/Pfizzz/Pfizzz.github.io"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
    link: (
      <a
        href="https://pfizzz.github.io/"
        target="_blank"
        rel="noreferrer"
      >
        Live Project
      </a>
    ),
  },
  {
    id: "m6",
    title: "Social-Network Back End",
    image:
      "https://raw.githubusercontent.com/Pfizzz/social-network/870b6362b9cee4a17d477dc1b2817422435fd985/images/ss1.png",
    address: "A social network app back-end built with MongoDB",
    description: (
      <a
        href="https://github.com/Pfizzz/social-network"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
    link: (
      <a
        href="https://www.youtube.com/watch?v=AD9H2H08f_s"
        target="_blank"
        rel="noreferrer"
      >
        Live Project
      </a>
    ),
  },
  {
    id: "m7",
    title: "OnlyBans",
    image:
      "https://camo.githubusercontent.com/e432cdca14d13a0b22d52c4ec645abd25c9b657c515cca1f395ce81efe39fbeb/68747470733a2f2f6f6e6c792d62616e732e6865726f6b756170702e636f6d2f7374617469632f6d656469612f6f6e6c7962616e732e37646436303835632e706e67",
    address: "A message board for the 'forgotten'",
    description: (
      <a
        href="https://only-bans.herokuapp.com"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    ),
    link: (
      <a
        href="https://only-bans.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        Live Project
      </a>
    ),
  },
];

function PortfolioPage() {
  return (
    <section>
      <h1>Featured Projects</h1>
      <PortfolioList items={DUMMY_DATA} />
    </section>
  );
}

export default PortfolioPage;
