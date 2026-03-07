"use client";

import Link from "next/link";
import Logo from "./logo";
import {
  languageOptions,
  useLanguage,
  type Language,
} from "../language-provider";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const activeLanguage =
    languageOptions.find((option) => option.code === language) ?? languageOptions[0];

  const renderLanguageControl = (selectId: string) => (
    <>
      <label className="sr-only" htmlFor={selectId}>
        Language
      </label>
      <div className="relative inline-flex h-7 min-w-[104px] items-center justify-center gap-1 rounded-full border border-gray-700 bg-gray-800/70 px-2 focus-within:border-indigo-500">
        <span className="pointer-events-none text-[10px] font-semibold tracking-wide text-white">
          {activeLanguage.label}
        </span>
        <select
          id={selectId}
          value={language}
          onChange={(event) => setLanguage(event.target.value as Language)}
          className="absolute inset-0 h-full w-full cursor-pointer rounded-full border-0 bg-transparent text-transparent outline-hidden"
        >
          {languageOptions.map((option) => (
            <option
              key={option.code}
              value={option.code}
              style={{ color: "#111827", backgroundColor: "#ffffff" }}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-gray-700/70 bg-gray-900 p-3">
          <div className="relative z-10 grid grid-cols-12 gap-x-2 gap-y-2 md:hidden">
            <div className="col-span-2 flex items-start">
              <Logo />
            </div>

            <div className="col-span-10 grid grid-rows-2 gap-y-2">
              <ul className="grid grid-cols-4 items-center gap-1 text-center text-[11px]">
                <li>
                  <Link
                    href="/#home"
                    className="block whitespace-nowrap text-white/95 transition-colors hover:text-white"
                  >
                    {t("navHome")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="block whitespace-nowrap text-white/95 transition-colors hover:text-white"
                  >
                    {t("navServices")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#proof"
                    className="block whitespace-nowrap text-white/95 transition-colors hover:text-white"
                  >
                    {t("navPortfolio")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="block whitespace-nowrap text-white/95 transition-colors hover:text-white"
                  >
                    {t("navContact")}
                  </Link>
                </li>
              </ul>

              <div className="flex items-center justify-end gap-3">
                {renderLanguageControl("language-select-mobile")}
                <a
                  href="#contact"
                  className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
                >
                  <span className="relative z-10">{t("navContactNow")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 hidden h-16 items-center justify-between gap-3 md:flex md:px-3 md:py-0">
            <div className="flex items-center md:flex-1">
              <Logo />
            </div>

            <ul className="flex items-center gap-6 text-sm md:flex-1 md:justify-center md:text-base">
              <li>
                <Link
                  href="/#home"
                  className="block whitespace-nowrap text-white/95 transition-colors hover:text-white"
                >
                  {t("navHome")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="block whitespace-nowrap text-white/95 transition-colors hover:text-white"
                >
                  {t("navServices")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#proof"
                  className="block whitespace-nowrap text-white/95 transition-colors hover:text-white"
                >
                  {t("navPortfolio")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="block whitespace-nowrap text-white/95 transition-colors hover:text-white"
                >
                  {t("navContact")}
                </Link>
              </li>
            </ul>

            <div className="flex items-center justify-end gap-3 md:flex-1 md:gap-4">
              {renderLanguageControl("language-select-desktop")}
              <a
                href="#contact"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
                <span className="relative z-10">{t("navContactNow")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
