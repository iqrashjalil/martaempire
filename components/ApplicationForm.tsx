"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { application as c, site } from "@/lib/content";

type Values = Record<string, string>;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORE = "martaempire.application";

function validate(index: number, values: Values): string | null {
  const q = c.questions[index];
  const v = (values[q.key] ?? "").trim();
  if (v.length < q.min) {
    if (q.key === "full_name") return "Please share your full name.";
    if (q.key === "email") return "Please enter a valid email.";
    if (q.key === "current_revenue") return "A range is enough, for example “low six figures”.";
    return `A few sentences, please (at least ${q.min} characters).`;
  }
  if (v.length > q.max) return `Please keep this under ${q.max} characters.`;
  if (q.type === "email" && !EMAIL.test(v)) return "Please enter a valid email.";
  return null;
}

type Saved = { started: boolean; step: number; values: Values };

function load(): Saved | null {
  try {
    const raw = sessionStorage.getItem(STORE);
    return raw ? (JSON.parse(raw) as Saved) : null;
  } catch {
    return null;
  }
}

/**
 * The seven-question application. One question at a time, Enter to continue,
 * a review of every answer before it is sent. Progress survives a refresh.
 */
export default function ApplicationForm() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [restored, setRestored] = useState(false);
  const fieldRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const sendRef = useRef<HTMLButtonElement | null>(null);

  const total = c.questions.length;
  const reviewing = step === total;
  const q = c.questions[Math.min(step, total - 1)];

  // Restore a half-written application after a refresh or an interruption.
  useEffect(() => {
    const id = window.setTimeout(() => {
      const saved = load();
      if (saved && saved.started) {
        setStarted(true);
        setStep(Math.min(saved.step, total));
        setValues(saved.values ?? {});
      }
      setRestored(true);
    }, 0);
    return () => window.clearTimeout(id);
  }, [total]);

  useEffect(() => {
    if (!restored) return;
    try {
      if (done || !started) sessionStorage.removeItem(STORE);
      else sessionStorage.setItem(STORE, JSON.stringify({ started, step, values } satisfies Saved));
    } catch {
      /* storage unavailable: the form still works for this visit */
    }
  }, [restored, started, step, values, done]);

  useEffect(() => {
    if (!started || done) return;
    if (reviewing) sendRef.current?.focus();
    else fieldRef.current?.focus();
  }, [step, started, done, reviewing]);

  const next = useCallback(() => {
    const err = validate(step, values);
    if (err) return setError(err);
    setError(null);
    setStep((s) => Math.min(s + 1, total));
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
      setError(`Something went wrong and nothing was sent. Please try again, or write to ${site.email}.`);
    } finally {
      setBusy(false);
    }
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (q.type !== "textarea" || e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      next();
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewing) submit();
    else next();
  };

  return (
    <form onSubmit={onSubmit} noValidate className={`flex flex-col border-t border-ink pt-10 ${started ? "min-h-[26rem]" : ""}`}>
      {done ? (
        <div className="step-in flex flex-1 flex-col justify-center" role="status">
          <p className="display-lg em">{c.success.title}</p>
          <p className="body mt-8">{c.success.body}</p>
          <p className="mt-8 font-display text-2xl italic text-burgundy">{c.success.sign}</p>
        </div>
      ) : !started ? (
        <div className="flex flex-1 flex-col justify-between gap-10">
          <div>
            <p className="font-display text-3xl leading-snug text-ink md:text-4xl">{c.intro.title}</p>
            <p className="body mt-6 hidden md:block">{c.intro.body}</p>
          </div>
          <div>
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <button type="button" onClick={() => setStarted(true)} className="btn btn-primary">
                {c.intro.cta}
              </button>
              <span className="label">{c.intro.aside}</span>
            </div>
            <p className="mt-5 text-[0.95rem] text-ink-55">{c.intro.reassurance}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col">
          <span className="label">
            {reviewing ? (
              <>
                <span className="text-burgundy">Review</span> before sending
              </>
            ) : (
              <>
                Question <span className="text-burgundy">{step + 1}</span> of {total}
              </>
            )}
          </span>
          <div className="mt-4 flex gap-1.5" aria-hidden>
            {c.questions.map((item, i) => (
              <span
                key={item.key}
                className={`h-0.5 flex-1 transition-colors duration-700 ${i <= step ? "bg-burgundy" : "bg-rule-strong"}`}
              />
            ))}
          </div>

          {reviewing ? (
            <div className="step-in flex-1">
              <p className="mt-12 font-display text-3xl leading-tight text-ink md:text-4xl">{c.review.title}</p>
              <p className="mt-3 text-[1rem] italic text-ink-55">{c.review.hint}</p>
              <dl className="mt-8 border-t border-rule-strong">
                {c.questions.map((item, i) => (
                  <div key={item.key} className="grid gap-x-8 gap-y-2 border-b border-rule py-4 sm:grid-cols-[1fr_auto]">
                    <div className="min-w-0">
                      <dt className="label">{item.question}</dt>
                      <dd className="mt-1.5 whitespace-pre-line break-words text-[1rem] leading-[1.7] text-ink">
                        {values[item.key]}
                      </dd>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setError(null);
                        setStep(i);
                      }}
                      className="link self-start text-left"
                    >
                      Edit
                    </button>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-[0.95rem] text-ink-55">
                {c.review.legal}{" "}
                <Link href="/terms" className="text-ink-70 underline decoration-burgundy/50 underline-offset-4 transition-colors hover:text-burgundy">
                  Terms
                </Link>
                .
              </p>
              <div className="mt-4 min-h-6" role="alert" aria-live="polite">
                {error && (
                  <span className="flex items-baseline gap-3 text-[0.95rem] text-ink">
                    <span aria-hidden className="relative top-[-1px] block h-1.5 w-1.5 shrink-0 bg-burgundy" />
                    {error}
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div key={q.key} className="step-in flex-1">
              <label htmlFor={q.key} className="mt-12 block font-display text-3xl leading-tight text-ink md:text-4xl">
                {q.question}
              </label>
              {q.hint && <p className="mt-3 text-[1rem] italic text-ink-55">{q.hint}</p>}

              <div className="mt-8">
                {q.type === "textarea" ? (
                  <textarea
                    ref={(el) => {
                      fieldRef.current = el;
                      if (el) {
                        el.style.height = "auto";
                        el.style.height = `${el.scrollHeight}px`;
                      }
                    }}
                    id={q.key}
                    name={q.key}
                    rows={1}
                    className="field"
                    placeholder={q.placeholder ?? "Write freely…"}
                    value={values[q.key] ?? ""}
                    maxLength={q.max}
                    aria-describedby={`${q.key}-error`}
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
                    aria-describedby={`${q.key}-error`}
                    onChange={(e) => setValues((v) => ({ ...v, [q.key]: e.target.value }))}
                    onKeyDown={onKey}
                  />
                )}
              </div>
              <div id={`${q.key}-error`} className="mt-4 min-h-6" role="alert" aria-live="polite">
                {error && (
                  <span className="flex items-baseline gap-3 text-[0.95rem] text-ink">
                    <span aria-hidden className="relative top-[-1px] block h-1.5 w-1.5 shrink-0 bg-burgundy" />
                    {error}
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-5 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={back}
              disabled={step === 0 || busy}
              className="label text-left transition-colors hover:text-burgundy disabled:invisible"
            >
              Back
            </button>
            <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
              {!reviewing && (
                <span className="label hidden sm:block">
                  {q.type === "textarea" ? "Ctrl + Enter to continue" : "Enter to continue"}
                </span>
              )}
              {reviewing ? (
                <button ref={sendRef} type="submit" disabled={busy} className="btn btn-primary">
                  {busy ? "Sending…" : c.review.cta}
                </button>
              ) : (
                <button type="submit" className={`btn ${step === total - 1 ? "btn-primary" : "btn-outline"}`}>
                  {step === total - 1 ? "Review my answers" : "Continue"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
