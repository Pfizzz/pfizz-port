import PortfolioList from "../components/projects/PortfolioList";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'Accu-Dash',
      image:
        'https://github.com/Pfizzz/weather2/blob/887bb80d1064efe1ab5cf8bb1c85da87de737bc9/assets/images/ss1.png?raw=true',
      address: 'An application using the One Call weather API made using JavaScript',
      description:
      <a href='https://github.com/Pfizzz/weather2' target='_blank' rel="noreferrer">Github</a>,
      link: <a href='https://pfizzz.github.io/weather2/' target='_blank' rel="noreferrer">Live Project</a>
    },
    {
      id: 'm2',
      title: 'Coding Quiz',
      image:
        'https://github.com/Pfizzz/code-quiz-final/blob/02d24b95d1c76004931a0cb614642f021281fd6e/assets/images/ss1.png?raw=true',
      address: 'A coding quiz built with vanilla JavaScript',
      description:
      <a href='https://github.com/Pfizzz/code-quiz-final' target='_blank' rel="noreferrer">Github</a>,
      link: <a href='https://pfizzz.github.io/code-quiz-final/' target='_blank' rel="noreferrer">Live Project</a>
    },
    {
      id: 'm3',
      title: '&Chill',
      image:
        'https://raw.githubusercontent.com/Pfizzz/project-1/fbb2eea178e5b8f86f18b59d77f4855f38feef74/assets/images/logo.png?raw=true',
      address: 'A Javascript/Materialize CSS project',
      description:
        <a href='https://github.com/Pfizzz/project-1' target='_blank' rel="noreferrer">Github</a>,
        link: <a href='https://pfizzz.github.io/project-1/' target='_blank' rel="noreferrer">Live Project</a>
    }
    
  ];

function PortfolioPage() {
    return <section>
        <h1>Featured Projects</h1>
        <PortfolioList items={DUMMY_DATA} />
    </section>
}

export default PortfolioPage;