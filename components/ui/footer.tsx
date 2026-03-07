"use client";

import { useLanguage } from "../language-provider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-gray-800/60 bg-[linear-gradient(to_left,rgba(17,24,39,0)_0%,rgba(17,24,39,0.12)_60%,#111827_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="flex flex-col gap-4 text-sm md:flex-row md:items-start md:justify-between md:text-base">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              {t("footerContactLabel")}
            </p>
            <div className="space-y-1">
              <a
                className="block text-white/90 transition hover:text-white"
                href="mailto:office@aionbit.net"
              >
                office@aionbit.net
              </a>
              <a
                className="block text-white/90 transition hover:text-white"
                href="tel:+40757214095"
              >
                +40 757 214 095
              </a>
              <a
                className="block text-white/90 transition hover:text-white"
                href="#contact"
              >
                {t("footerLocation")}
              </a>
            </div>
          </div>

          <div className="space-y-2 md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              {t("footerLegalLabel")}
            </p>
            <div className="space-y-1">
              <p className="text-xs text-white/70 md:text-sm">{t("footerRights")}</p>
              <p className="text-xs text-white/60">{t("footerCookieNote")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
