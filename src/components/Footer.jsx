import React from &quot;react&quot;;

const Footer = () => {
  return (
    <footer className=&quot;bg-brandFigure text-white py-8 px-4 md:px-12&quot;>
      <div className=&quot;max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4&quot;>
        <div>
          <p className=&quot;font-semibold&quot;>© {new Date().getFullYear()} SpyDishTest</p>
          <p className=&quot;text-sm&quot;>All rights reserved.</p>
        </div>

        <ul className=&quot;flex gap-6&quot; aria-label=&quot;Social Media Links&quot;>
          <li>
            <a
              href=&quot;https://facebook.com&quot;
              target=&quot;_blank&quot;
              rel=&quot;noreferrer&quot;
              aria-label=&quot;Facebook&quot;
              className=&quot;hover:text-brandBg transition-colors&quot;
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href=&quot;https://twitter.com&quot;
              target=&quot;_blank&quot;
              rel=&quot;noreferrer&quot;
              aria-label=&quot;Twitter&quot;
              className=&quot;hover:text-brandBg transition-colors&quot;
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href=&quot;https://instagram.com&quot;
              target=&quot;_blank&quot;
              rel=&quot;noreferrer&quot;
              aria-label=&quot;Instagram&quot;
              className=&quot;hover:text-brandBg transition-colors&quot;
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
