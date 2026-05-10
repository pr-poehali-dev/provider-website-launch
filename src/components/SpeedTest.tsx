import { useState } from "react";
import Icon from "@/components/ui/icon";

type Phase = "idle" | "download" | "upload" | "done";

export default function SpeedTest() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [download, setDownload] = useState<number | null>(null);
  const [upload, setUpload] = useState<number | null>(null);
  const [ping, setPing] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);

  function runTest() {
    setPhase("download");
    setDownload(null);
    setUpload(null);
    setPing(null);
    setProgress(0);

    let p = 0;
    const pingVal = Math.floor(Math.random() * 15) + 3;
    setPing(pingVal);

    const timer = setInterval(() => {
      p += Math.random() * 12 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(timer);
        const dl = Math.floor(Math.random() * 400) + 100;
        setDownload(dl);
        setProgress(0);
        setPhase("upload");

        let p2 = 0;
        const timer2 = setInterval(() => {
          p2 += Math.random() * 10 + 5;
          if (p2 >= 100) {
            p2 = 100;
            clearInterval(timer2);
            const ul = Math.floor(Math.random() * 150) + 50;
            setUpload(ul);
            setProgress(100);
            setPhase("done");
          } else {
            setProgress(Math.min(p2, 100));
          }
        }, 120);
      } else {
        setProgress(Math.min(p, 100));
      }
    }, 100);
  }

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeOffset = circumference - (progress / 100) * circumference;

  const phaseLabel = phase === "download" ? "Загрузка..." : phase === "upload" ? "Отдача..." : "";

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="absolute inset-0 -rotate-90" width="192" height="192" viewBox="0 0 192 192">
          <circle cx="96" cy="96" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
          {phase !== "idle" && (
            <circle
              cx="96"
              cy="96"
              r={radius}
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          )}
        </svg>
        <div className="text-center z-10">
          {phase === "idle" && (
            <button
              onClick={runTest}
              className="flex flex-col items-center gap-1 group"
            >
              <Icon name="Zap" size={28} className="text-accent group-hover:scale-110 transition-transform" />
              <span className="text-xs text-muted-foreground">Начать тест</span>
            </button>
          )}
          {(phase === "download" || phase === "upload") && (
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{Math.round(progress)}</span>
              <span className="text-xs text-muted-foreground">%</span>
              <span className="text-xs text-muted-foreground mt-1">{phaseLabel}</span>
            </div>
          )}
          {phase === "done" && (
            <div className="flex flex-col items-center">
              <Icon name="CheckCircle" size={28} className="text-accent" />
              <span className="text-xs text-muted-foreground mt-1">Готово</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 w-full max-w-xs">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Icon name="ArrowDown" size={12} className="text-accent" />
            <span className="text-xs text-muted-foreground">Скачивание</span>
          </div>
          <p className="text-lg font-bold">{download ?? "—"}</p>
          <p className="text-xs text-muted-foreground">Мбит/с</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Icon name="Activity" size={12} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Пинг</span>
          </div>
          <p className="text-lg font-bold">{ping ?? "—"}</p>
          <p className="text-xs text-muted-foreground">мс</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Icon name="ArrowUp" size={12} className="text-accent" />
            <span className="text-xs text-muted-foreground">Отдача</span>
          </div>
          <p className="text-lg font-bold">{upload ?? "—"}</p>
          <p className="text-xs text-muted-foreground">Мбит/с</p>
        </div>
      </div>

      {phase === "done" && (
        <button
          onClick={runTest}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
        >
          Повторить тест
        </button>
      )}
    </div>
  );
}
