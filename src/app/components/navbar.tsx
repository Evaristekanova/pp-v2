import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Projects",
      path: "#projects",
    },
    {
      title: "Contact",
      path: "#contact",
    },
  ];

  return (
    <div className="hidden bg-slate-600 h-12 md:flex md:flex-row md:items-center md:gap-4 px-6 top-0 sticky shadow-lg">
      {navLinks.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          className="text-white text-xl font-light hover:text-lightGreen"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
