"use client";

import { useState } from "react";
import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import { useLanguage } from "./language-provider";

export default function Cta() {
  const { t } = useLanguage();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );

  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              {t("contactTitle")}
            </h2>
            <p
              className="mb-8 text-lg text-indigo-200/65"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              {t("contactDescription")}
            </p>
            <form
              id="my-form"
              action="/form-submit"
              method="POST"
              className="mx-auto grid max-w-2xl gap-4 text-left"
              data-aos="fade-up"
              data-aos-delay={350}
              onSubmit={async (event) => {
                event.preventDefault();
                setSubmitStatus("idle");
                const form = event.currentTarget;
                const formData = new FormData(form);
                if (formData.get("_gotcha")) {
                  setSubmitStatus("error");
                  window.setTimeout(() => setSubmitStatus("idle"), 3000);
                  return;
                }
                try {
                  const response = await fetch(form.action, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" },
                  });

                  if (response.ok) {
                    setSubmitStatus("success");
                    form.reset();
                    setFirstName("");
                    setEmail("");
                    setCompany("");
                    setSubject("");
                    setMessage("");
                    window.setTimeout(() => setSubmitStatus("idle"), 3000);
                  } else {
                    setSubmitStatus("error");
                    window.setTimeout(() => setSubmitStatus("idle"), 4000);
                  }
                } catch (error) {
                  setSubmitStatus("error");
                  window.setTimeout(() => setSubmitStatus("idle"), 4000);
                }
              }}
            >
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-sm text-gray-200">
                    {t("contactFirstName")}
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    className="form-input w-full"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-gray-200">
                    {t("contactEmail")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="form-input w-full"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm text-gray-200">
                    {t("contactCompany")}
                  </label>
                  <input
                    id="company"
                    name="company"
                    className="form-input w-full"
                    type="text"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm text-gray-200">
                    {t("contactSubject")}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    className="form-input w-full"
                    type="text"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    placeholder={t("contactDefaultSubject")}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-gray-200">
                  {t("contactMessage")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea w-full"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-1 sm:justify-start">
                <button
                  type="submit"
                  className="btn group bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                >
                  <span className="relative inline-flex items-center">
                    {t("contactSend")}
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </button>
                {submitStatus === "success" && (
                  <span className="text-sm font-medium text-emerald-300">
                    Message sent
                  </span>
                )}
                {submitStatus === "error" && (
                  <span className="text-sm font-medium text-rose-300">
                    Something went wrong
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
