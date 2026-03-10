"use client";

import { useLanguage } from "../components/language-provider";

const ROLE_KEYS = [
  {
    title: "careersRole1Title",
    description: "careersRole1Description",
  },
  {
    title: "careersRole2Title",
    description: "careersRole2Description",
  },
  {
    title: "careersRole3Title",
    description: "careersRole3Description",
  },
] as const;

export default function CareersPage() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            {t("careersTitle")}
          </h1>
          <p className="text-lg text-indigo-200/70">{t("careersDescription")}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ROLE_KEYS.map((role) => (
            <article
              key={role.title}
              className="relative overflow-hidden rounded-2xl border border-gray-800/80 bg-gray-900/55 p-6"
            >
              <h2 className="mb-3 font-nacelle text-xl font-semibold text-gray-100">
                {t(role.title)}
              </h2>
              <p className="mb-6 text-indigo-200/70">{t(role.description)}</p>
              <a
                href="mailto:contact@aionbit.net?subject=Career%20Application"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                {t("careersApply")}
              </a>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-indigo-200/60 md:text-base">
          {t("careersOpenToTalent")}
        </p>
      </div>
    </section>
  );
}
