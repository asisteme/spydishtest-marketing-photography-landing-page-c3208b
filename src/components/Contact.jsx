import React from &quot;react&quot;;

const Contact = () => {
  return (
    <section
      id=&quot;contact&quot;
      className=&quot;py-16 px-4 md:px-12 bg-brandBg&quot;
      aria-labelledby=&quot;contact-heading&quot;
    >
      <div className=&quot;max-w-xl mx-auto text-center&quot;>
        <h2
          id=&quot;contact-heading&quot;
          className=&quot;text-3xl md:text-4xl font-semibold text-brandTitle mb-6&quot;
        >
          Get in Touch
        </h2>
        <p className=&quot;text-lg mb-8&quot;>
          Ready to elevate your dining experience or enhance your restaurant&apos;s
          strategy? Reach out and our team will respond promptly.
        </p>
        <a
          href=&quot;mailto:dasdas@gmail.com?subject=SpyDishTest%20Inquiry&quot;
          className=&quot;inline-block rounded-lg bg-brandTitle px-8 py-3 text-white font-semibold shadow-lg hover:bg-brandFigure transition-colors&quot;
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Contact;
