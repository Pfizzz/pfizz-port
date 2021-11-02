import PortfolioList from "../components/projects/PortfolioList";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'Accu-Dash',
      image:
        'https://github.com/Pfizzz/weather2/blob/887bb80d1064efe1ab5cf8bb1c85da87de737bc9/assets/images/ss1.png?raw=true',
      address: 'An application using the One Call weather API made using JavaScript',
      description:
        'This project rocks',
    },
    {
      id: 'm2',
      title: 'Coding Quiz',
      image:
        'https://github.com/Pfizzz/code-quiz-final/blob/02d24b95d1c76004931a0cb614642f021281fd6e/assets/images/ss1.png?raw=true',
      address: 'A coding quiz built with vanilla JavaScript',
      description:
        'This project is okay',
    },
  ];

function PortfolioPage() {
    return <section>
        <h1>Featured Projects</h1>
        <PortfolioList items={DUMMY_DATA} />
    </section>
}

export default PortfolioPage;