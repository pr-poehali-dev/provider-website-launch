import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import SpeedTest from "@/components/SpeedTest";

const features = [
  { icon: "Zap", title: "До 1 Гбит/с", desc: "Скорость на уровне топовых мировых сетей" },
  { icon: "Shield", title: "Надёжность 99.9%", desc: "Гарантированный аптайм по договору" },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Ответим в чате или по телефону в любое время" },
  { icon: "Wifi", title: "Без ограничений", desc: "Безлимитный трафик на всех тарифах" },
];

const plans = [
  { name: "Старт", speed: "100", price: "390", desc: "Для одного устройства и лёгкого серфинга" },
  { name: "Комфорт", speed: "300", price: "590", desc: "Идеально для семьи с несколькими устройствами", popular: true },
  { name: "Максимум", speed: "1000", price: "890", desc: "Для работы из дома и онлайн-игр" },
];

export default function Home() {
  return (
    <main className="pt-16">
      <section className="container mx-auto px-4 py-24 md:py-36 flex flex-col items-center text-center gap-6 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
          Принимаем заявки на подключение
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
          Интернет, который<br />
          <span className="text-accent">не тормозит</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
          Высокоскоростное подключение для дома и бизнеса. Без скрытых платежей, без ограничений, с поддержкой 24/7.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link
            to="/tariffs"
            className="px-6 py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
          >
            Выбрать тариф
          </Link>
          <Link
            to="/coverage"
            className="px-6 py-3 rounded-md border border-border hover:bg-secondary transition-colors"
          >
            Проверить покрытие
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border w-full max-w-lg">
          {[
            { value: "50 000+", label: "Абонентов" },
            { value: "1 Гбит/с", label: "Макс. скорость" },
            { value: "99.9%", label: "Аптайм" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-3 p-5 bg-background rounded-lg border border-border hover:border-accent/30 transition-colors">
              <div className="w-9 h-9 rounded-md bg-foreground/5 flex items-center justify-center">
                <Icon name={f.icon} size={18} />
              </div>
              <p className="font-semibold text-sm">{f.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Популярные тарифы</h2>
          <p className="text-muted-foreground mt-2">Выберите подходящий план подключения</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col gap-4 p-6 rounded-xl border transition-all hover:shadow-md ${
                plan.popular
                  ? "border-foreground shadow-sm"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-0.5 rounded-full bg-foreground text-background text-xs font-medium">
                    Популярный
                  </span>
                </div>
              )}
              <div>
                <p className="font-semibold">{plan.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{plan.desc}</p>
              </div>
              <div className="flex items-end gap-1">
                <span className="text-4xl font-bold">{plan.speed}</span>
                <span className="text-muted-foreground text-sm mb-1">Мбит/с</span>
              </div>
              <div className="flex items-center gap-1 text-xl font-semibold">
                {plan.price} ₽
                <span className="text-sm font-normal text-muted-foreground">/мес</span>
              </div>
              <Link
                to="/contacts"
                className={`mt-auto text-sm text-center py-2.5 rounded-md transition-colors ${
                  plan.popular
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                Подключить
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/tariffs" className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors">
            Все тарифы →
          </Link>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold tracking-tight mb-3">Проверьте свою скорость</h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Узнайте реальную скорость вашего интернета прямо сейчас. Нажмите кнопку и дождитесь результата.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-background rounded-xl border border-border p-8 w-full max-w-sm">
              <SpeedTest />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-3">Готовы подключиться?</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Оставьте заявку — мастер приедет в удобное время и бесплатно проведёт подключение.
        </p>
        <Link
          to="/contacts"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors"
        >
          Оставить заявку
          <Icon name="ArrowRight" size={16} />
        </Link>
      </section>
    </main>
  );
}