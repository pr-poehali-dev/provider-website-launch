import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", to: "/" },
  { label: "Тарифы", to: "/tariffs" },
  { label: "Покрытие", to: "/coverage" },
  { label: "О компании", to: "/about" },
  { label: "Поддержка", to: "/support" },
  { label: "Контакты", to: "/contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="w-6 h-6 rounded-sm bg-foreground flex items-center justify-center">
            <span className="text-background text-xs font-black">A</span>
          </span>
          Ardivsimf
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm line-accent transition-colors ${
                location.pathname === link.to
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/cabinet"
            className="text-sm px-4 py-2 rounded-md border border-border hover:bg-secondary transition-colors"
          >
            Личный кабинет
          </Link>
          <Link
            to="/contacts"
            className="text-sm px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
          >
            Подключиться
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "X" : "Menu"} size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${
                  location.pathname === link.to
                    ? "bg-secondary font-medium"
                    : "hover:bg-secondary text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-2 flex flex-col gap-2">
              <Link
                to="/cabinet"
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm border border-border text-center hover:bg-secondary transition-colors"
              >
                Личный кабинет
              </Link>
              <Link
                to="/contacts"
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm bg-foreground text-background text-center hover:bg-foreground/90 transition-colors"
              >
                Подключиться
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}