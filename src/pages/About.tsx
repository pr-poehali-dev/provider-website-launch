import Icon from "@/components/ui/icon";

const team = [
  { name: "Александр Петров", role: "Генеральный директор", years: "12 лет в отрасли" },
  { name: "Мария Соколова", role: "Технический директор", years: "10 лет в отрасли" },
  { name: "Дмитрий Волков", role: "Директор по развитию", years: "8 лет в отрасли" },
];

const milestones = [
  { year: "2012", text: "Основание компании, первые 100 абонентов" },
  { year: "2015", text: "Запуск скоростей до 100 Мбит/с в центральном районе" },
  { year: "2018", text: "Выход в 5 новых районов, 10 000 абонентов" },
  { year: "2021", text: "Запуск гигабитного интернета, получение награды \"Лучший провайдер года\"" },
  { year: "2024", text: "50 000+ абонентов, расширение на пригороды" },
];

export default function About() {
  return (
    <main className="pt-16">
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight mb-4">О компании</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ardivsimf — региональный интернет-провайдер с 2012 года. Мы строим современную инфраструктуру
            и обеспечиваем надёжный доступ в интернет для жителей и бизнеса.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-4 gap-8">
          {[
            { value: "12+", label: "Лет на рынке" },
            { value: "50 000+", label: "Абонентов" },
            { value: "3 270+", label: "Подключённых домов" },
            { value: "99.9%", label: "Гарантированный аптайм" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы верим, что быстрый и доступный интернет — это необходимость, а не роскошь.
              Каждый день мы работаем над тем, чтобы связь была стабильной, цены — честными,
              а поддержка — живой.
            </p>
            <div className="space-y-3">
              {[
                { icon: "Target", text: "Прозрачные условия без мелкого шрифта" },
                { icon: "Leaf", text: "Экологичное строительство инфраструктуры" },
                { icon: "Heart", text: "Поддержка местных сообществ и социальных проектов" },
              ].map((v) => (
                <div key={v.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-foreground/5 flex items-center justify-center flex-shrink-0">
                    <Icon name={v.icon} size={15} />
                  </div>
                  <p className="text-sm">{v.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">История</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-6">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-4 pl-2">
                    <div className="relative flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center z-10 relative">
                        <span className="text-xs font-bold">{m.year.slice(2)}</span>
                      </div>
                    </div>
                    <div className="pt-1 pb-2">
                      <p className="text-xs text-muted-foreground mb-0.5">{m.year}</p>
                      <p className="text-sm">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold mb-8">Команда</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl">
            {team.map((member) => (
              <div key={member.name} className="bg-background rounded-lg border border-border p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Icon name="User" size={24} className="text-muted-foreground" />
                </div>
                <p className="font-semibold text-sm">{member.name}</p>
                <p className="text-xs text-accent mt-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-1">{member.years}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}