import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-base mb-4">
              <span className="w-5 h-5 rounded-sm bg-foreground flex items-center justify-center">
                <span className="text-background text-xs font-black">A</span>
              </span>
              Ardivsimf
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Быстрый и надёжный интернет для дома и бизнеса
            </p>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Услуги</p>
            <ul className="space-y-2">
              {[
                { label: "Тарифы", to: "/tariffs" },
                { label: "Покрытие", to: "/coverage" },
                { label: "Подключение", to: "/contacts" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Компания</p>
            <ul className="space-y-2">
              {[
                { label: "О компании", to: "/about" },
                { label: "Поддержка", to: "/support" },
                { label: "Контакты", to: "/contacts" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-3">Контакты</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>8 800 000-00-00</li>
              <li>info@ardivsimf.ru</li>
              <li>Пн–Вс 9:00–21:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2024 Ardivsimf. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}