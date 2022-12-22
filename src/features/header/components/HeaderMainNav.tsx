import Link from "next/link";
import { primaryLinks } from "../headerLinks";

const HeaderMainNav = () => {
  return (
    <nav className="hidden md:flex space-x-10">
      {primaryLinks.map((link, index) => (
        <div
          key={`${link.name}-${index}`}
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          <Link href={link.href}>{link.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default HeaderMainNav;
