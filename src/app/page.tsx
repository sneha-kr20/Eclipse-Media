import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PortfolioCard from '../components/PortfolioCard';


const portfolioData = [
  {
    title: 'Corporate Event',
    description: 'Organized a seamless corporate launch event.',
    image: '/images/event1.jpg',
  },
  {
    title: 'Wedding Celebration',
    description: 'Elegant wedding setup with photography & videography.',
    image: '/images/event2.jpg',
  },
  {
    title: 'Birthday Party',
    description: 'Fun and colorful birthday event management.',
    image: '/images/event3.jpg',
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="py-16 px-8 bg-gray-900 text-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.map((item, index) => (
            <PortfolioCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
