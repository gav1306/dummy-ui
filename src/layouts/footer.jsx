import { FOOTER_LINKS } from "../data";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 p-3 md:p-14">
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {FOOTER_LINKS.map((list, index) => {
          return (
            <div key={index} className="flex flex-col gap-3 lg:text-center">
              <h5 className="text-base md:text-sm font-bold">{list.title}</h5>
              <ul>
                {list.links.map((link, innerIndex) => {
                  return (
                    <li key={innerIndex}>
                      <a
                        href={link.href}
                        className="hover:text-primary text-base md:text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <span className="text-xs text-primary">
          &#169;2024 Gav, Inc. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
