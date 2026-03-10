"use client";

import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
import { useLanguage } from "./language-provider";

type Capability = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function Features() {
  const { t } = useLanguage();

  const capabilities: Capability[] = [
    {
      key: "frontend",
      title: t("skill1Title"),
      description: t("skill1Description"),
      icon: (
        <svg
          className="mb-3 h-6 w-6 text-indigo-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.5 10L6 12L8.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15.5 10L18 12L15.5 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9.5 20H14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {879
      key: "fullstack",
      title: t("skill2Title"),
      description: t("skill2Description"),
      icon: (
        <svg
          className="mb-3 h-6 w-6 text-indigo-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="4" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="4" y="10.5" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 13H8.01M12 13H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M10 20H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      key: "bugfix",
      title: t("skill3Title"),
      description: t("skill3Description"),
      icon: (
        <svg
          className="mb-3 h-6 w-6 text-indigo-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 7.5V6A2.5 2.5 0 0 1 12 3.5A2.5 2.5 0 0 1 14.5 6V7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="7.5" y="7.5" width="9" height="10" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4.5 10.5H7M17 10.5H19.5M4.5 14.5H7M17 14.5H19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10.2 12.7L11.5 14L13.9 11.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      key: "automation",
      title: t("skill4Title"),
      description: t("skill4Description"),
      icon: (
        <svg
          className="mb-3 h-6 w-6 text-indigo-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10 4.2V2.5M10 17.5V15.8M15.8 10H17.5M2.5 10H4.2M14.1 5.9L15.3 4.7M4.7 15.3L5.9 14.1M14.1 14.1L15.3 15.3M4.7 4.7L5.9 5.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="14.5" y="14.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M16.2 18L17.6 19.3L19.9 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      key: "mobile",
      title: t("skill5Title"),
      description: t("skill5Description"),
      icon: (
        <svg
          className="mb-3 h-6 w-6 text-indigo-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="7" y="2.5" width="10" height="19" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M10.2 5.2H13.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="18.2" r="1" fill="currentColor" />
          <path d="M3 8.5L5.2 10.7L3 12.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 8.5L18.8 10.7L21 12.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      key: "performance",
      title: t("skill6Title"),
      description: t("skill6Description"),
      icon: (
        <svg
          className="mb-3 h-6 w-6 text-indigo-300"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 18.5A8 8 0 1 1 20 18.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 12L16.5 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
          <path d="M4.5 20.5H19.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-6 text-center md:pb-10">
            <h3 className="mb-3 font-nacelle text-2xl font-semibold text-gray-100 md:text-3xl">
              {t("executionFlowTitle")}
            </h3>
            <p className="text-lg text-indigo-200/70">{t("executionFlowDescription")}</p>
          </div>

          <div className="flex justify-center pb-6 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Service capabilities"
            />
          </div>

          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article key={capability.key}>
                {capability.icon}
                <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                  {capability.title}
                </h3>
                <p className="text-indigo-200/65">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
