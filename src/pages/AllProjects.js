import PortfolioList from "../components/projects/PortfolioList";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first project',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Projectstreet 5, 12345 Meetup City',
      description:
        'This project rocks',
    },
    {
      id: 'm2',
      title: 'This is a second projext',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Projectstreet 5, 12345 Meetup City',
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