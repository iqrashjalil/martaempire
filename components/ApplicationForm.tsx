"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { application as c, site } from "@/lib/content";
import { Container, SectionHeader, headerGap } from "./Section";
import desk from "@/public/images/marta-desk.jpg";

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

export default function ApplicationForm({ imageSrc }: { imageSrc: string | null }) {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const fieldRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const q = c.questions[step];
  const last = step === c.questions.length - 1;
  const progress = ((step + 1) / c.questions.length) * 100;

  useEffect(() => {
    if (started && !done) fieldRef.current?.focus();
  }, [step, started, done]);

  const next = useCallback(() => {
    const err = validate(step, values);
    if (err) return setError(err);
    setError(null);
    setStep((s) => Math.min(s + 1, c.questions.length - 1));
  }, [step, values]);

  const back = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const submit = async () => {
    for (let i = 0; i < c.questions.length; i++) {
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
    <section id="apply" className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 gold-rule" />
      <div className="absolute right-[-20%] top-[-10%] -z-0 h-[40rem] w-[40rem] rounded-full glow-gold blur-3xl opacity-60" />
      <Container className="relative">
        <SectionHeader
          eyebrow={c.eyebrow}
          title={
            <>
              Write to <span className="italic text-gold">me.</span>
            </>
          }
          body={c.body}
        />

        <div className={headerGap}>
            <div className="card-luxe relative grid overflow-hidden md:min-h-[28rem] md:grid-cols-[minmax(0,16rem)_1fr] lg:grid-cols-[minmax(0,20rem)_1fr]" data-reveal>
              <div className="relative hidden md:block">
                {imageSrc ? (
                  <Image src={imageSrc} alt="Marta Szkudlarek" fill sizes="(max-width: 1024px) 30vw, 18vw" className="object-cover object-top" />
                ) : (
                  <Image src={desk} alt="Marta Szkudlarek" fill placeholder="blur" sizes="(max-width: 1024px) 30vw, 18vw" className="object-cover object-top" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-px bg-line" />
                <p className="absolute bottom-6 left-6 right-6 font-display text-lg italic leading-tight text-bone">
                  “I am not collecting information. I am connecting patterns.”
                </p>
              </div>
              <div className="relative flex flex-col p-7 sm:p-10 md:p-12">
              {done ? (
                <div className="flex h-full flex-col items-center justify-center text-center" style={{ animation: "wordIn 1s var(--ease-luxe) both" }}>
                  <span className="text-gold">✦</span>
                  <p className="mt-6 font-display text-6xl font-light italic md:text-7xl">
                    <span className="gold-text">{c.success.title}</span>
                  </p>
                  <p className="mx-auto mt-8 max-w-md text-lg leading-[1.85] text-bone-70">{c.success.body}</p>
                  <p className="mt-8 font-display text-2xl italic text-gold">{c.success.sign}</p>
                </div>
              ) : !started ? (
                <div className="flex h-full flex-col justify-between gap-10">
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.3em] text-bone-30">{c.meta}</p>
                    <p className="mt-8 font-display text-3xl font-light leading-snug text-bone md:text-4xl">
                      Seven questions. One woman reading.
                    </p>
                    <p className="mt-6 max-w-lg leading-[1.85] text-bone-70">
                      Your name, your email, and five honest answers about what you are building, where it is going, why now, your revenue, and the transformation you are ready for.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button type="button" onClick={() => setStarted(true)} className="btn btn-gold">
                      Begin Application
                    </button>
                    <span className="text-[0.62rem] uppercase tracking-[0.28em] text-bone-30">Private &amp; confidential</span>
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.3em] text-bone-30">
                    <span>
                      Question <span className="text-gold">{String(step + 1).padStart(2, "0")}</span> / {String(c.questions.length).padStart(2, "0")}
                    </span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="mt-4 flex gap-1.5">
                    {c.questions.map((item, i) => (
                      <span
                        key={item.key}
                        className={`h-px flex-1 transition-colors duration-700 ${i <= step ? "bg-gold" : "bg-line-strong"}`}
                      />
                    ))}
                  </div>

                  <div key={q.key} className="flex-1" style={{ animation: "wordIn 0.8s var(--ease-luxe) both" }}>
                    <label htmlFor={q.key} className="mt-12 block font-display text-3xl font-light leading-tight text-bone md:text-4xl">
                      {q.question}
                    </label>
                    {q.hint && <p className="mt-3 text-[0.92rem] italic text-bone-50">{q.hint}</p>}

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
                    <div className="mt-4 min-h-6 text-sm text-gold-bright" role="alert" aria-live="polite">
                      {error}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-4 sm:flex-row sm:items-center">
                    <button
                      type="button"
                      onClick={back}
                      disabled={step === 0 || busy}
                      className="text-left text-[0.68rem] uppercase tracking-[0.28em] text-bone-50 transition-colors hover:text-bone disabled:opacity-0"
                    >
                      ← Back
                    </button>
                    <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-6">
                      <span className="hidden text-[0.62rem] uppercase tracking-[0.24em] text-bone-30 sm:block">
                        {q.type === "textarea" ? "⌘ + Enter" : "Enter ↵"}
                      </span>
                      {last ? (
                        <button type="button" onClick={submit} disabled={busy} className="btn btn-gold disabled:opacity-60">
                          {busy ? "Sending…" : "Submit Application"}
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
            </div>
        </div>
      </Container>
    </section>
  );
}
