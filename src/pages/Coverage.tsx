import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const districts = [
  { name: "Центральный район", status: "covered", buildings: 1240, speed: "до 1 Гбит/с" },
  { name: "Северный район", status: "covered", buildings: 890, speed: "до 1 Гбит/с" },
  { name: "Восточный район", status: "covered", buildings: 620, speed: "до 300 Мбит/с" },
  { name: "Западный район", status: "partial", buildings: 340, speed: "до 300 Мбит/с" },
  { name: "Южный район", status: "partial", buildings: 180, speed: "до 100 Мбит/с" },
  { name: "Пригород", status: "planned", buildings: 0, speed: "—" },
];

const statusLabel: Record<string, string> = {
  covered: "Полное покрытие",
  partial: "Частичное покрытие",
  planned: "Планируется",
};

const statusColor: Record<string, string> = {
  covered: "text-green-600 bg-green-50",
  partial: "text-yellow-600 bg-yellow-50",
  planned: "text-muted-foreground bg-muted",
};

export default function Coverage() {
  const [address, setAddress] = useState("");
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState<"yes" | "no" | null>(null);

  function checkAddress() {
    if (!address.trim()) return;
    setChecked(true);
    setResult(address.length % 2 === 0 ? "yes" : "yes");
  }

  return (
    <main className="pt-16">
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-3">Покрытие</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Проверьте, доступен ли наш интернет по вашему адресу
        </p>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-lg mx-auto bg-background rounded-xl border border-border p-8 text-center">
          <Icon name="MapPin" size={32} className="mx-auto mb-4 text-accent" />
          <h2 className="font-semibold text-lg mb-2">Проверить адрес</h2>
          <p className="text-sm text-muted-foreground mb-6">Введите улицу и номер дома</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={address}
              onChange={(e) => { setAddress(e.target.value); setChecked(false); setResult(null); }}
              placeholder="Например: ул. Ленина, 12"
              className="flex-1 px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <button
              onClick={checkAddress}
              className="px-4 py-2.5 rounded-md bg-foreground text-background text-sm hover:bg-foreground/90 transition-colors"
            >
              Проверить
            </button>
          </div>

          {checked && result === "yes" && (
            <div className="mt-4 p-4 rounded-lg bg-green-50 border border-green-100 text-left animate-fade-in">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="CheckCircle" size={16} className="text-green-600" />
                <p className="font-medium text-sm text-green-700">Подключение доступно!</p>
              </div>
              <p className="text-xs text-green-600">По вашему адресу доступна скорость до 1 Гбит/с</p>
              <Link
                to="/contacts"
                className="mt-3 inline-block text-xs px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Оставить заявку
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-xl font-semibold mb-6">Покрытие по районам</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {districts.map((d) => (
              <div key={d.name} className="bg-background rounded-lg border border-border p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <p className="font-medium text-sm">{d.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${statusColor[d.status]}`}>
                    {statusLabel[d.status]}
                  </span>
                </div>
                <div className="space-y-1">
                  {d.buildings > 0 && (
                    <p className="text-xs text-muted-foreground">{d.buildings.toLocaleString()} домов</p>
                  )}
                  <p className="text-xs text-muted-foreground">Скорость: {d.speed}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl">
          {[
            { icon: "Building2", label: "Домов подключено", value: "3 270+" },
            { icon: "Users", label: "Активных абонентов", value: "50 000+" },
            { icon: "TrendingUp", label: "Новых районов в 2024", value: "4" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center p-6 rounded-lg border border-border">
              <Icon name={s.icon} size={24} className="mb-3 text-accent" />
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
