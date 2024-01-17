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
    <div className="hidden bg-slate-600 h-16 md:flex md:flex-row md:items-center md:gap-6 px-6 top-0 sticky shadow-lg rounded-lg md:pl-16">
      {navLinks.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          className="text-white text-xl font-light hover:text-lightGreen px-4 py-2 border hover:border-lightGreen rounded-lg"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}
