"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type TimeLeft = {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function calcTimeLeft(deadline: Date): TimeLeft {
  const totalMs = Math.max(0, deadline.getTime() - Date.now());

  const totalMinutes = Math.floor(totalMs / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes - days * 24 * 60) / 60);
  const minutes = totalMinutes - days * 24 * 60 - hours * 60;

  return { totalMs, days, hours, minutes };
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* 49x58 number box */}
      <div className="w-[49px] h-[58px] flex items-center justify-center tabular-nums leading-none text-display-md text-pink-300">
        {value}
      </div>

      <div className="text-accent-sm uppercase text-pink-300">
        {label}
      </div>
    </div>
  );
}

export default function ApplyCountdown() {
  // Change this to your real deadline (local time)
  const deadline = useMemo(() => new Date("2026-02-01T23:59:00"), []);

  const [left, setLeft] = useState<TimeLeft>(() => calcTimeLeft(deadline));

  useEffect(() => {
    const id = window.setInterval(() => {
      setLeft(calcTimeLeft(deadline));
    }, 1000);
    return () => window.clearInterval(id);
  }, [deadline]);

  const isClosed = left.totalMs === 0;

  return (
    <section className="w-full bg-purple-600">
      <div className="mx-auto bg-purple-600 w-full flex flex-col items-center gap-4 px-4 py-8">
        <div className="text-accent-sm uppercase text-pink-300">
          Submit your application
        </div>

        <p className="text-center text-body-lg text-neutral-100">
          {isClosed ? (
            <>
              Applications are now <strong>closed </strong> for Hack the Galaxy 2026.
            </>
          ) : (
            <>
              <span className="block md:inline">
                Applications are open, <strong>apply now!</strong>
              </span>
              <span className="block md:inline">
                {" "}Applications close in:
              </span>
            </>
          )}
        </p>

        <div className="flex justify-center items-start gap-4">
          <TimeBlock value={pad2(left.days)} label="DAYS" />
          <TimeBlock value={pad2(left.hours)} label="HRS" />
          <TimeBlock value={pad2(left.minutes)} label="MINS" />
        </div>

        <Link
          href="#apply"
          aria-disabled={isClosed}
          className={`inline-flex items-center justify-center rounded-md border px-4 py-2 text-accent-md transition-colors ${
            isClosed
              ? "border-purple-300 text-purple-300 cursor-not-allowed pointer-events-none"
              : "border-pink-100 text-pink-100 hover:bg-purple-700 hover:border-purple-700"
          }`}
        >
          APPLY NOW
        </Link>
      </div>
    </section>
  );
}
