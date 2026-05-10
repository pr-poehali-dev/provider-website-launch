import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="pt-16">
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Контакты</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Оставьте заявку на подключение или свяжитесь с нами удобным способом
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <div>
            <h2 className="text-xl font-semibold mb-6">Оставить заявку</h2>
            {sent ? (
              <div className="p-8 rounded-xl border border-border text-center animate-fade-in">
                <Icon name="CheckCircle" size={40} className="mx-auto mb-4 text-green-500" />
                <p className="font-semibold text-lg">Заявка принята!</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Наш специалист свяжется с вами в течение 30 минут и согласует время подключения.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", phone: "", address: "", comment: "" }); }}
                  className="mt-6 text-sm text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Ваше имя *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Телефон *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (900) 000-00-00"
                    className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Адрес подключения *</label>
                  <input
                    required
                    type="text"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    placeholder="ул. Ленина, 12, кв. 34"
                    className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Комментарий</label>
                  <textarea
                    rows={3}
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                    placeholder="Удобное время для звонка или другие пожелания"
                    className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
                >
                  Отправить заявку
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-6">Наши контакты</h2>
              <div className="space-y-4">
                {[
                  { icon: "Phone", label: "Горячая линия", value: "8 800 000-00-00", sub: "Бесплатно, круглосуточно" },
                  { icon: "Mail", label: "Email", value: "info@netline.ru", sub: "Ответим в течение 2 часов" },
                  { icon: "MapPin", label: "Офис", value: "ул. Центральная, 1, офис 301", sub: "Пн–Пт 9:00–18:00" },
                  { icon: "Clock", label: "Режим работы", value: "Пн–Вс 9:00–21:00", sub: "Техподдержка 24/7" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-md bg-foreground/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={c.icon} size={15} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{c.label}</p>
                      <p className="font-medium text-sm">{c.value}</p>
                      <p className="text-xs text-muted-foreground">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm font-medium mb-3">Мы в соцсетях</p>
              <div className="flex gap-3">
                {["Vk", "Send", "Youtube"].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    className="w-9 h-9 rounded-md border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Icon name={icon} size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
