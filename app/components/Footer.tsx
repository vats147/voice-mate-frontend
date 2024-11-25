import React from 'react';
import Link from 'next/link';
import footerData from '../../data/footer.json';

const Footer = () => {
  const { description, links, socialLinks, copyright } = footerData;

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-black w-8 h-8 flex items-center justify-center rounded">
                <span className="font-bold text-lg">VM</span>
              </div>
              <span className="text-xl font-bold">VoiceMate AI</span>
            </div>
            <p className="text-gray-400 max-w-sm">{description}</p>
          </div>

          {/* Links */}
          <div className="flex space-x-12">
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul>
                {links.company.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-gray-400 hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <ul>
                {links.legal.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-gray-400 hover:text-white">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex justify-between items-center text-gray-400 text-sm">
          <span>{copyright}</span>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.href}
                className="hover:text-white"
                aria-label={social.title}
              >
                {social.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
