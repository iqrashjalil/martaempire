"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { application as c, site } from "@/lib/content";

type Values = Record<string, string>;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(index: number, values: Values): string | null {
  const q = c.questions[index];
  const v = (values[q.key] ?? "").trim();
  if (v.length < q.min) {
    if (q.key === "full_name") return "Please share your full name.";
    if (q.key === "email") return "Please enter a valid email.";
    if (q.key === "current_revenue") return "A range is enough.";
    return "A few sentences, please.";
  }
  if (v.length > q.max) return `Please keep this under ${q.max} characters.`;
  if (q.type === "email" && !EMAIL.test(v)) return "Please enter a valid email.";
  return null;
}

/** The seven-question application. One question at a time, Enter to continue. */
export default function ApplicationForm() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const fieldRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const q = c.questions[step];
  const last = step === c.questions.length - 1;
  const total = c.questions.length;

  useEffect(() => {
    if (started && !done) fieldRef.current?.focus();
  }, [step, started, done]);

  const next = useCallback(() => {
    const err = validate(step, values);
    if (err) return setError(err);
    setError(null);
    setStep((s) => Math.min(s + 1, total - 1));
  }, [step, values, total]);

  const back = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = async () => {
    for (let i = 0; i < total; i++) {
      const err = validate(i, values);
      if (err) {
        setStep(i);
        setError(err);
        return;
      }
    }
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(String(res.status));
      setDone(true);
    } catch {
      setError(`Something went wrong. Please try again, or write to ${site.email}.`);
    } finally {
      setBusy(false);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (q.type !== "textarea" || e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      if (last) submit();
      else next();
    }
  };

  return (
    <div className="flex min-h-[26rem] flex-col border-t border-gold/25 pt-10">
      {done ? (
        <div className="step-in flex flex-1 flex-col justify-center">
          <p className="display-lg italic text-bone">{c.success.title}</p>
          <p className="prose-body mt-8">{c.success.body}</p>
          <p className="mt-8 font-display text-2xl font-light italic text-gold">{c.success.sign}</p>
        </div>
      ) : !started ? (
        <div className="flex flex-1 flex-col justify-between gap-12">
          <div>
            <p className="font-display text-3xl font-light leading-snug text-bone md:text-4xl">
              Seven questions. One woman reading.
            </p>
            <p className="prose-body mt-6">
              Your name, your email, and five honest answers about what you are building, where it is going, why
              now, your revenue, and the transformation you are ready for.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <button type="button" onClick={() => setStarted(true)} className="btn btn-gold">
              Begin the application
            </button>
            <span className="caption">Private &amp; confidential</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col">
          <span className="caption">
            Question <span className="text-gold">{step + 1}</span> of {total}
          </span>
          <div className="mt-4 flex gap-1.5" aria-hidden>
            {c.questions.map((item, i) => (
              <span
                key={item.key}
                className={`h-px flex-1 transition-colors duration-700 ${i <= step ? "bg-gold" : "bg-line-strong"}`}
              />
            ))}
          </div>

          <div key={q.key} className="step-in flex-1">
            <label
              htmlFor={q.key}
              className="mt-12 block font-display text-3xl font-light leading-tight text-bone md:text-4xl"
            >
              {q.question}
            </label>
            {q.hint && <p className="mt-3 text-[1rem] italic text-bone-50">{q.hint}</p>}

            <div className="mt-8">
              {q.type === "textarea" ? (
                <textarea
                  ref={(el) => {
                    fieldRef.current = el;
                  }}
                  id={q.key}
                  name={q.key}
                  rows={1}
                  className="field"
                  placeholder={q.placeholder ?? "Write freely…"}
                  value={values[q.key] ?? ""}
                  maxLength={q.max}
                  onChange={(e) => {
                    setValues((v) => ({ ...v, [q.key]: e.target.value }));
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  onKeyDown={onKey}
                />
              ) : (
                <input
                  ref={(el) => {
                    fieldRef.current = el;
                  }}
                  id={q.key}
                  name={q.key}
                  type={q.type === "email" ? "email" : "text"}
                  autoComplete={q.type === "email" ? "email" : "name"}
                  className="field"
                  placeholder={q.placeholder}
                  value={values[q.key] ?? ""}
                  maxLength={q.max}
                  onChange={(e) => setValues((v) => ({ ...v, [q.key]: e.target.value }))}
                  onKeyDown={onKey}
                />
              )}
            </div>
            <div className="mt-4 min-h-6 text-[0.9rem] text-gold-bright" role="alert" aria-live="polite">
              {error}
            </div>
          </div>

          <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={back}
              disabled={step === 0 || busy}
              className="caption text-left transition-colors hover:text-bone disabled:opacity-0"
            >
              Back
            </button>
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
              <span className="caption hidden sm:block">
                {q.type === "textarea" ? "Ctrl + Enter to continue" : "Enter to continue"}
              </span>
              {last ? (
                <button type="button" onClick={submit} disabled={busy} className="btn btn-gold">
                  {busy ? "Sending…" : "Submit application"}
                </button>
              ) : (
                <button type="button" onClick={next} className="btn btn-ghost">
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
