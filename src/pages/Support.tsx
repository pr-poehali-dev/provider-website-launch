import { useState } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Интернет пропал или работает медленно — что делать?",
    a: "Перезагрузите роутер: выключите на 30 секунд, включите снова. Если не помогло — позвоните на горячую линию или напишите в чат.",
  },
  {
    q: "Как оплатить интернет?",
    a: "Оплата доступна в личном кабинете на сайте: банковской картой, через СБП или переводом. Автоплатёж можно настроить там же.",
  },
  {
    q: "Как сменить тариф?",
    a: "Зайдите в личный кабинет → раздел «Тариф» → выберите нужный и нажмите «Сменить». Изменение вступает в силу с 1-го числа следующего месяца.",
  },
  {
    q: "Можно ли получить статический IP?",
    a: "Да. Статический IP доступен на тарифах «Комфорт» и выше — подключается бесплатно. На тарифе «Старт» — за 99 ₽/месяц.",
  },
  {
    q: "Что делать, если забыл пароль от личного кабинета?",
    a: "На странице входа нажмите «Забыл пароль», введите номер телефона — придёт SMS с кодом для восстановления.",
  },
  {
    q: "Как подключить Wi-Fi роутер?",
    a: "Наш специалист установит и настроит роутер при подключении. Если нужна повторная настройка — вызов мастера через поддержку.",
  },
];

export default function Support() {
  const [open, setOpen] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", text: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="pt-16">
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Поддержка</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Мы на связи 24/7. Выберите удобный способ обратиться к нам.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16 grid md:grid-cols-3 gap-4">
        {[
          { icon: "Phone", label: "Горячая линия", value: "8 800 000-00-00", sub: "Бесплатно, круглосуточно" },
          { icon: "MessageCircle", label: "Онлайн-чат", value: "Чат на сайте", sub: "Ответ в течение 2 минут" },
          { icon: "Mail", label: "Email", value: "support@netline.ru", sub: "Ответ в течение 2 часов" },
        ].map((c) => (
          <div key={c.label} className="flex flex-col items-center text-center p-6 rounded-xl border border-border hover:border-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center mb-3">
              <Icon name={c.icon} size={20} />
            </div>
            <p className="text-xs text-muted-foreground mb-1">{c.label}</p>
            <p className="font-semibold text-sm">{c.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
          </div>
        ))}
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-xl font-semibold mb-6">Частые вопросы</h2>
          <div className="max-w-2xl space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-background rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-medium text-sm">{faq.q}</span>
                  <Icon
                    name={open === i ? "ChevronUp" : "ChevronDown"}
                    size={16}
                    className="flex-shrink-0 text-muted-foreground"
                  />
                </button>
                {open === i && (
                  <div className="px-5 pb-4 animate-fade-in">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-lg">
          <h2 className="text-xl font-semibold mb-2">Написать в поддержку</h2>
          <p className="text-sm text-muted-foreground mb-6">Опишите проблему, и мы свяжемся с вами</p>
          {sent ? (
            <div className="p-6 rounded-xl border border-border text-center animate-fade-in">
              <Icon name="CheckCircle" size={32} className="mx-auto mb-3 text-green-500" />
              <p className="font-medium">Заявка отправлена!</p>
              <p className="text-sm text-muted-foreground mt-1">Мы ответим вам в течение 2 часов.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Ваше имя</label>
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
                  <label className="text-xs text-muted-foreground mb-1.5 block">Телефон</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+7 (900) 000-00-00"
                    className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Описание проблемы</label>
                <textarea
                  required
                  rows={4}
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  placeholder="Опишите вашу проблему подробнее..."
                  className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Отправить
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
