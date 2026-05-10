import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

type Message = {
  id: number;
  from: "user" | "support";
  text: string;
  time: string;
};

const autoReplies = [
  "Спасибо за обращение! Наш специалист ответит в течение нескольких минут.",
  "Уточните, пожалуйста, ваш адрес подключения для проверки зоны покрытия.",
  "Мы зафиксировали ваш запрос. Ожидайте ответа оператора.",
  "Если проблема срочная — позвоните нам: 8 800 000-00-00 (бесплатно).",
];

function getTime() {
  return new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
}

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "support",
      text: "Здравствуйте! Чем могу помочь?",
      time: getTime(),
    },
  ]);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const counter = useRef(2);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function sendMessage() {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: counter.current++,
      from: "user",
      text: input.trim(),
      time: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      const reply = autoReplies[Math.floor(Math.random() * autoReplies.length)];
      setMessages((prev) => [
        ...prev,
        { id: counter.current++, from: "support", text: reply, time: getTime() },
      ]);
    }, 1500);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:scale-105 transition-transform ${open ? "hidden" : "flex"}`}
        aria-label="Открыть чат"
      >
        <Icon name="MessageCircle" size={22} />
      </button>

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-[480px] bg-background border border-border rounded-xl shadow-2xl flex flex-col animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
              <span className="text-sm font-medium">Онлайн-чат</span>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 rounded hover:bg-secondary transition-colors">
              <Icon name="X" size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col chat-bubble-enter ${msg.from === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-xs text-muted-foreground mt-1">{msg.time}</span>
              </div>
            ))}
            {typing && (
              <div className="flex items-start">
                <div className="bg-secondary px-3 py-2 rounded-lg flex items-center gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-muted-foreground"
                      style={{ animation: `pulse-dot 1.2s ease-in-out ${i * 0.2}s infinite` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t border-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ваш вопрос..."
              className="flex-1 text-sm px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim()}
              className="p-2 rounded-md bg-foreground text-background disabled:opacity-40 hover:bg-foreground/90 transition-colors"
            >
              <Icon name="Send" size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
