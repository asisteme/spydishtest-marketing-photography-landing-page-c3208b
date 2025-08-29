import React from &quot;react&quot;;

const DinersSection = () => {
  return (
    <section
      id=&quot;diners&quot;
      className=&quot;py-16 px-4 md:px-12 bg-white&quot;
      aria-labelledby=&quot;diners-heading&quot;
    >
      <div className=&quot;max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10&quot;>
        <div className=&quot;flex-1&quot;>
          <h2
            id=&quot;diners-heading&quot;
            className=&quot;text-3xl md:text-4xl font-semibold text-brandTitle mb-4&quot;
          >
            For Diners
          </h2>
          <ul className=&quot;space-y-3 text-lg leading-relaxed&quot;>
            <li>Explore restaurants based on preferences &amp;amp; location.</li>
            <li>Discover featured dishes and trending menus nearby.</li>
            <li>Access reviews, rankings, and popularity insights for each dish.</li>
          </ul>
        </div>

        <div className=&quot;flex-1&quot;>
          <img
            src=&quot;https://images.pexels.com/photos/6248701/pexels-photo-6248701.jpeg?auto=compress&amp;amp;cs=tinysrgb&amp;amp;h=650&amp;amp;w=940&quot;
            alt=&quot;Mockup of WhatsApp chat showcasing SpyDishTest recommendations&quot;
            className=&quot;rounded-xl shadow-lg w-full&quot;
          />
        </div>
      </div>
    </section>
  );
};

export default DinersSection;
