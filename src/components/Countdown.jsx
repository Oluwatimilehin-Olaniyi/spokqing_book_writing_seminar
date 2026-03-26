import { useEffect, useState, useMemo } from "react";

/**
 * Set February 28th at a specific time (24h format)
 */
function getFeb28At(hour = 18, minute = 0) {
  const now = new Date();
  let year = now.getFullYear();

  let date = new Date(year, 1, 28); // Month is 0-based → 1 = February
  date.setHours(hour, minute, 0, 0);

  // Auto move to next year if Feb 28 has passed
  if (date <= now) {
    year += 1;
    date = new Date(year, 1, 28);
    date.setHours(hour, minute, 0, 0);
  }

  return date;
}

/**
 * Calculate countdown values
 */
function getTimeLeft(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false,
  };
}

/**
 * Countdown component
 */
export default function Countdown({
  // title = "Limited Enrollment",
  // subtitle = "Join the live session before seats fill up.",
  title = "Date to be announced Soon!!!",
  subtitle = "Register now to get notified when the date is announced.",
  hour = 18, // configurable hour
  minute = 0, // configurable minute
}) {
  // 1️⃣ Define target date (Feb 28)
  const targetDate = useMemo(() => getFeb28At(hour, minute), [hour, minute]);

  // 2️⃣ Format for display
  const formattedDate = useMemo(
    () =>
      targetDate.toLocaleString(undefined, {
        dateStyle: "full",
        timeStyle: "short",
      }),
    [targetDate]
  );

  // 3️⃣ Countdown state
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mb-12 bg-primary rounded-xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
      {/* Left */}
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-4xl">timer</span>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-white/80 text-sm">
            {timeLeft.expired ? "Enrollment Closed" : subtitle}
          </p>
          {!timeLeft.expired && (
            <p className="text-white/70 text-xs mt-1">
              {formattedDate} (your local time)
            </p>
          )}
        </div>
      </div>

      {/* Timer */}
      <div className="flex gap-4">
        {[
          // { value: timeLeft.days, label: "Days" },
          // { value: timeLeft.hours, label: "Hours" },
          // { value: timeLeft.minutes, label: "Mins" },
          // { value: timeLeft.seconds, label: "Secs" },
          { value: 0, label: "Days" },
          { value: 0, label: "Hours" },
          { value: 0, label: "Mins" },
          { value: 0, label: "Secs" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center bg-white/10 rounded-lg p-3 min-w-[70px]"
          >
            <span className="text-2xl font-black">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
