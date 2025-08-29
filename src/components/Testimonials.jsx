import React from &quot;react&quot;;

const testimonials = [
  {
    id: 1,
    quote:
      &quot;SpyDishTest empowered us to refine our menu based on real diner feedback and boosted our reservations by 30% in one month.&quot;,
    name: &quot;Maria S.&quot;,
    title: &quot;Owner, Bistro Bella&quot;
  },
  {
    id: 2,
    quote:
      &quot;I discovered amazing local dishes thanks to the personalized tips. It feels like dining with a savvy foodie friend!&quot;,
    name: &quot;Anthony R.&quot;,
    title: &quot;Food Enthusiast&quot;
  },
  {
    id: 3,
    quote:
      &quot;The competitor insights are a game-changer. We adjust prices swiftly and maintain our edge.&quot;,
    name: &quot;Liam P.&quot;,
    title: &quot;General Manager, Urban Eatery&quot;
  }
];

const Testimonials = () => {
  return (
    <section
      id=&quot;testimonials&quot;
      className=&quot;py-16 px-4 md:px-12 bg-white&quot;
      aria-labelledby=&quot;testimonials-heading&quot;
    >
      <h2
        id=&quot;testimonials-heading&quot;
        className=&quot;text-3xl md:text-4xl font-semibold text-brandTitle text-center mb-10&quot;
      >
        What People Are Saying
      </h2>

      <div className=&quot;max-w-4xl mx-auto grid md:grid-cols-3 gap-8&quot;>
        {testimonials.map((t) => (
          <blockquote
            key={t.id}
            className=&quot;relative bg-brandBg p-6 rounded-lg shadow&quot;
          >
            <p className=&quot;italic mb-4 leading-relaxed&quot;>&quot;{t.quote}&quot;</p>
            <footer className=&quot;font-semibold&quot;>
              {t.name} &amp;mdash; <span className=&quot;font-normal&quot;>{t.title}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
