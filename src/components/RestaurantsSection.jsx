import React from &quot;react&quot;;

const RestaurantsSection = () => {
  return (
    <section
      id=&quot;restaurants&quot;
      className=&quot;py-16 px-4 md:px-12 bg-brandBg&quot;
      aria-labelledby=&quot;restaurants-heading&quot;
    >
      <div className=&quot;max-w-5xl mx-auto&quot;>
        <h2
          id=&quot;restaurants-heading&quot;
          className=&quot;text-3xl md:text-4xl font-semibold text-brandTitle text-center mb-10&quot;
        >
          For Restaurants
        </h2>

        <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
          <div className=&quot;bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow&quot;>
            <h3 className=&quot;font-bold text-xl mb-2&quot;>Competitor Pricing Intelligence</h3>
            <p>Compare menu prices in real time and stay competitive.</p>
          </div>
          <div className=&quot;bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow&quot;>
            <h3 className=&quot;font-bold text-xl mb-2&quot;>Dish Ranking &amp;amp; Sentiment</h3>
            <p>Understand how dishes rank and what diners think.</p>
          </div>
          <div className=&quot;bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow&quot;>
            <h3 className=&quot;font-bold text-xl mb-2&quot;>Interest Heatmaps</h3>
            <p>Visualize demand peaks by time, dish, and location.</p>
          </div>
          <div className=&quot;bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow&quot;>
            <h3 className=&quot;font-bold text-xl mb-2&quot;>AI Notifications &amp;amp; Campaigns</h3>
            <p>Send personalized offers and optimize ad spend effortlessly.</p>
          </div>
          <div className=&quot;bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow&quot;>
            <h3 className=&quot;font-bold text-xl mb-2&quot;>Smart Pricing Adjustments</h3>
            <p>Adapt prices dynamically based on demand and feedback.</p>
          </div>
          <div className=&quot;bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow&quot;>
            <h3 className=&quot;font-bold text-xl mb-2&quot;>Weekly Executive Reports</h3>
            <p>Receive concise updates on competitors, sentiment, and trends.</p>
          </div>
        </div>

        <div className=&quot;text-center mt-12&quot;>
          <a
            href=&quot;#contact&quot;
            className=&quot;inline-block rounded-lg bg-brandTitle px-8 py-3 text-white font-semibold shadow-lg hover:bg-brandFigure transition-colors&quot;
          >
            Subscribe to Pro Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
