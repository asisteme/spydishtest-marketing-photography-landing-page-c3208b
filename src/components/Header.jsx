import React from &quot;react&quot;;

const Header = () => {
  return (
    <header
      className=&quot;relative isolate flex flex-col items-center justify-center text-center h-[80vh] w-full overflow-hidden&quot;
      aria-labelledby=&quot;hero-heading&quot;
    >
      <img
        src=&quot;https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&amp;amp;cs=tinysrgb&amp;amp;h=650&amp;amp;w=940&quot;
        alt=&quot;Assorted dishes on a rustic table&quot;
        className=&quot;absolute inset-0 w-full h-full object-cover object-center -z-10&quot;
      />
      <div className=&quot;absolute inset-0 bg-black/60 -z-10&quot; aria-hidden=&quot;true&quot;></div>

      <img
        src=&quot;https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png&quot;
        alt=&quot;SpyDishTest logo&quot;
        className=&quot;w-24 h-24 mb-4&quot;
      />

      <h1
        id=&quot;hero-heading&quot;
        className=&quot;text-4xl md:text-6xl font-bold text-white drop-shadow-lg&quot;
      >
        SpyDishTest
      </h1>
      <p className=&quot;mt-4 max-w-xl text-lg md:text-2xl text-white leading-relaxed&quot;>
        An Intelligent WhatsApp Bot Bridging Diners &amp;amp; Restaurants with
        Data-Driven Insights
      </p>
      <a
        href=&quot;https://wa.me/&quot;
        aria-label=&quot;Start chatting on WhatsApp&quot;
        className=&quot;mt-8 inline-block rounded-lg bg-brandTitle px-8 py-3 text-white font-semibold shadow-lg hover:bg-brandFigure transition-colors&quot;
      >
        Start Now
      </a>
    </header>
  );
};

export default Header;
