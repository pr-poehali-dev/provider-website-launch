import { useState } from "react";
import Icon from "@/components/ui/icon";
import SpeedTest from "@/components/SpeedTest";

type Tab = "overview" | "tariff" | "payments" | "settings";

const mockUser = {
  name: "Иван Петров",
  login: "ivan.petrov",
  address: "ул. Ленина, 12, кв. 34",
  tariff: "Комфорт",
  speed: "300 Мбит/с",
  balance: 1240,
  nextPayment: "01.02.2025",
  monthlyFee: 590,
  status: "active",
};

const payments = [
  { date: "01.01.2025", amount: 590, description: "Тариф «Комфорт»", status: "ok" },
  { date: "01.12.2024", amount: 590, description: "Тариф «Комфорт»", status: "ok" },
  { date: "01.11.2024", amount: 590, description: "Тариф «Комфорт»", status: "ok" },
  { date: "01.10.2024", amount: 390, description: "Тариф «Старт»", status: "ok" },
];

export default function Cabinet() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ login: "", password: "" });
  const [tab, setTab] = useState<Tab>("overview");

  if (!loggedIn) {
    return (
      <main className="pt-16 min-h-screen flex items-center justify-center bg-secondary/20">
        <div className="w-full max-w-sm p-8 bg-background rounded-xl border border-border shadow-sm animate-fade-in">
          <div className="flex items-center gap-2 font-bold text-base mb-6">
            <span className="w-5 h-5 rounded-sm bg-foreground flex items-center justify-center">
              <span className="text-background text-xs font-black">N</span>
            </span>
            Личный кабинет
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); setLoggedIn(true); }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Логин или телефон</label>
              <input
                required
                type="text"
                value={loginForm.login}
                onChange={(e) => setLoginForm({ ...loginForm, login: e.target.value })}
                placeholder="ivan.petrov"
                className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Пароль</label>
              <input
                required
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-md bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Войти
            </button>
          </form>
          <p className="text-xs text-center text-muted-foreground mt-4">
            <a href="#" className="hover:text-foreground transition-colors underline underline-offset-2">Забыли пароль?</a>
          </p>
        </div>
      </main>
    );
  }

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "overview", label: "Обзор", icon: "LayoutDashboard" },
    { id: "tariff", label: "Тариф", icon: "Zap" },
    { id: "payments", label: "Платежи", icon: "CreditCard" },
    { id: "settings", label: "Настройки", icon: "Settings" },
  ];

  return (
    <main className="pt-16 min-h-screen bg-secondary/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Личный кабинет</h1>
            <p className="text-sm text-muted-foreground mt-0.5">Добро пожаловать, {mockUser.name}</p>
          </div>
          <button
            onClick={() => setLoggedIn(false)}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Icon name="LogOut" size={14} />
            Выйти
          </button>
        </div>

        <div className="flex gap-1 mb-6 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-colors whitespace-nowrap ${
                tab === t.id ? "bg-foreground text-background" : "hover:bg-secondary text-muted-foreground"
              }`}
            >
              <Icon name={t.icon} size={14} />
              {t.label}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div className="grid md:grid-cols-3 gap-4 animate-fade-in">
            <div className="md:col-span-2 space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-background rounded-lg border border-border p-5">
                  <p className="text-xs text-muted-foreground mb-1">Баланс</p>
                  <p className="text-2xl font-bold">{mockUser.balance} ₽</p>
                  <p className="text-xs text-muted-foreground mt-1">Следующий платёж: {mockUser.nextPayment}</p>
                </div>
                <div className="bg-background rounded-lg border border-border p-5">
                  <p className="text-xs text-muted-foreground mb-1">Тариф</p>
                  <p className="text-lg font-bold">{mockUser.tariff}</p>
                  <p className="text-xs text-muted-foreground mt-1">{mockUser.speed}</p>
                </div>
                <div className="bg-background rounded-lg border border-border p-5">
                  <p className="text-xs text-muted-foreground mb-1">Статус</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
                    <p className="font-semibold text-sm text-green-600">Активен</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{mockUser.address}</p>
                </div>
              </div>

              <div className="bg-background rounded-lg border border-border p-5">
                <p className="text-sm font-medium mb-4">Последние платежи</p>
                <div className="space-y-3">
                  {payments.slice(0, 3).map((p, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <div>
                        <p className="font-medium">{p.description}</p>
                        <p className="text-xs text-muted-foreground">{p.date}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{p.amount} ₽</span>
                        <Icon name="CheckCircle" size={14} className="text-green-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg border border-border p-6 flex flex-col items-center">
              <p className="text-sm font-medium mb-4">Тест скорости</p>
              <SpeedTest />
            </div>
          </div>
        )}

        {tab === "tariff" && (
          <div className="animate-fade-in space-y-4 max-w-2xl">
            <div className="bg-background rounded-lg border border-foreground p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Текущий тариф</div>
                  <p className="text-xl font-bold">{mockUser.tariff}</p>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-foreground text-background font-medium">Активен</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Скорость</p>
                  <p className="font-semibold">{mockUser.speed}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Стоимость</p>
                  <p className="font-semibold">{mockUser.monthlyFee} ₽/мес</p>
                </div>
              </div>
            </div>

            <p className="text-sm font-medium">Доступные тарифы</p>
            {[
              { name: "Старт", speed: "100", price: 390 },
              { name: "Максимум", speed: "1000", price: 890 },
            ].map((plan) => (
              <div key={plan.name} className="bg-background rounded-lg border border-border p-5 flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm">{plan.name}</p>
                  <p className="text-xs text-muted-foreground">До {plan.speed} Мбит/с · {plan.price} ₽/мес</p>
                </div>
                <button className="text-xs px-3 py-1.5 rounded-md border border-border hover:bg-secondary transition-colors">
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        )}

        {tab === "payments" && (
          <div className="animate-fade-in max-w-2xl">
            <div className="bg-background rounded-lg border border-border mb-4 p-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Текущий баланс</p>
                <p className="text-2xl font-bold">{mockUser.balance} ₽</p>
              </div>
              <button className="px-4 py-2 rounded-md bg-foreground text-background text-sm hover:bg-foreground/90 transition-colors">
                Пополнить
              </button>
            </div>

            <div className="bg-background rounded-lg border border-border">
              <div className="px-5 py-3 border-b border-border">
                <p className="text-sm font-medium">История платежей</p>
              </div>
              <div className="divide-y divide-border">
                {payments.map((p, i) => (
                  <div key={i} className="px-5 py-4 flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium">{p.description}</p>
                      <p className="text-xs text-muted-foreground">{p.date}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">−{p.amount} ₽</span>
                      <Icon name="CheckCircle" size={15} className="text-green-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "settings" && (
          <div className="animate-fade-in max-w-lg space-y-4">
            <div className="bg-background rounded-lg border border-border p-6 space-y-4">
              <p className="font-medium text-sm">Личные данные</p>
              {[
                { label: "Имя", value: mockUser.name },
                { label: "Логин", value: mockUser.login },
                { label: "Адрес", value: mockUser.address },
              ].map((f) => (
                <div key={f.label}>
                  <label className="text-xs text-muted-foreground mb-1.5 block">{f.label}</label>
                  <input
                    type="text"
                    defaultValue={f.value}
                    className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              ))}
              <button className="px-4 py-2 rounded-md bg-foreground text-background text-sm hover:bg-foreground/90 transition-colors">
                Сохранить
              </button>
            </div>

            <div className="bg-background rounded-lg border border-border p-6 space-y-4">
              <p className="font-medium text-sm">Смена пароля</p>
              {["Текущий пароль", "Новый пароль", "Повторите пароль"].map((label) => (
                <div key={label}>
                  <label className="text-xs text-muted-foreground mb-1.5 block">{label}</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2.5 text-sm rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              ))}
              <button className="px-4 py-2 rounded-md border border-border text-sm hover:bg-secondary transition-colors">
                Изменить пароль
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
