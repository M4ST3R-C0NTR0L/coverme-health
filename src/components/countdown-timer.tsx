"use client";

import { useEffect, useState, memo } from "react";

function CountdownTimerInner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-xl border border-[#f5f0eb] flex items-center justify-center">
            <span className="font-['Syne'] font-bold text-2xl sm:text-3xl text-[#1c1917]">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs sm:text-sm text-[#78716c] mt-2 font-medium">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export const CountdownTimer = memo(CountdownTimerInner);
