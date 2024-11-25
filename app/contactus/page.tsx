import Contactus from '../components/Contactus';
import ContactForm from '../components/ContactForm'

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Contactus />
      {/*contactForm*/}
      <ContactForm/>

     
    </main>
  );
};

export default HomePage;
