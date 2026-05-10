import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Старт",
    speed: "100",
    price: "390",
    desc: "Для одного устройства и лёгкого серфинга",
    features: ["Безлимитный трафик", "Скорость до 100 Мбит/с", "Бесплатное подключение", "Поддержка 24/7"],
  },
  {
    name: "Комфорт",
    speed: "300",
    price: "590",
    desc: "Идеально для семьи с несколькими устройствами",
    features: ["Безлимитный трафик", "Скорость до 300 Мбит/с", "Бесплатное подключение", "Поддержка 24/7", "Статический IP в подарок"],
    popular: true,
  },
  {
    name: "Максимум",
    speed: "1000",
    price: "890",
    desc: "Для работы из дома, стриминга и онлайн-игр",
    features: ["Безлимитный трафик", "Скорость до 1 Гбит/с", "Бесплатное подключение", "Поддержка 24/7", "Статический IP включён", "SLA гарантия 99.9%"],
  },
];

const biz = [
  {
    name: "Бизнес Старт",
    speed: "300",
    price: "1 490",
    features: ["Безлимитный трафик", "Скорость до 300 Мбит/с", "Статический IP", "Поддержка 24/7", "SLA 99.5%"],
  },
  {
    name: "Бизнес Про",
    speed: "1000",
    price: "2 990",
    features: ["Безлимитный трафик", "Скорость до 1 Гбит/с", "Статический IP", "Поддержка 24/7", "SLA 99.9%", "Персональный менеджер"],
    popular: true,
  },
];

function PlanCard({ plan }: { plan: typeof plans[0] }) {
  return (
    <div className={`relative flex flex-col gap-4 p-6 rounded-xl border transition-all hover:shadow-md ${plan.popular ? "border-foreground shadow-sm" : "border-border"}`}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-0.5 rounded-full bg-foreground text-background text-xs font-medium">Популярный</span>
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
      <ul className="space-y-2 border-t border-border pt-4">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <Icon name="Check" size={14} className="text-accent flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <Link
        to="/contacts"
        className={`mt-auto text-sm text-center py-2.5 rounded-md transition-colors ${plan.popular ? "bg-foreground text-background hover:bg-foreground/90" : "border border-border hover:bg-secondary"}`}
      >
        Подключить
      </Link>
    </div>
  );
}

export default function Tariffs() {
  return (
    <main className="pt-16">
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Тарифы</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Прозрачные цены, никаких скрытых платежей. Цена фиксируется на весь срок договора.
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-xl font-semibold mb-6">Для дома</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
          {plans.map((p) => <PlanCard key={p.name} plan={p} />)}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-xl font-semibold mb-6">Для бизнеса</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            {biz.map((p) => <PlanCard key={p.name} plan={{ ...p, desc: "" }} />)}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-xl font-semibold mb-6">Часто задаваемые вопросы</h2>
          <div className="space-y-4">
            {[
              { q: "Есть ли скрытые платежи?", a: "Нет. Цена в тарифе — окончательная. Никаких доп. платежей за трафик или аренду оборудования." },
              { q: "Можно ли сменить тариф?", a: "Да, смена тарифа доступна в личном кабинете в любое время. Изменение вступает в силу с первого числа следующего месяца." },
              { q: "Как производится оплата?", a: "Оплата через личный кабинет: банковской картой, переводом или через систему быстрых платежей." },
            ].map((item) => (
              <div key={item.q} className="p-5 rounded-lg border border-border">
                <p className="font-medium text-sm mb-2">{item.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
