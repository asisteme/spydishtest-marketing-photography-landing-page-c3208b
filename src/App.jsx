import React from &quot;react&quot;;
import Header from &quot;./components/Header.jsx&quot;;
import DinersSection from &quot;./components/DinersSection.jsx&quot;;
import RestaurantsSection from &quot;./components/RestaurantsSection.jsx&quot;;
import Testimonials from &quot;./components/Testimonials.jsx&quot;;
import Contact from &quot;./components/Contact.jsx&quot;;
import Footer from &quot;./components/Footer.jsx&quot;;

const App = () => {
  return (
    <div className=&quot;text-gray-800&quot;>
      <Header />
      <main>
        <DinersSection />
        <RestaurantsSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
