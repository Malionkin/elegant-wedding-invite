import React, { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-09-12T16:00:00");

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = WEDDING_DATE.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col">
          <span className="text-4xl md:text-6xl font-serif text-primary mb-2">
            {item.value.toString().padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
