"use client";

import Image, { StaticImageData } from "next/image";
import BottegaImg from "@/public/images/projects/bottega_della_scarpa.png";
import Hero4JobImg from "@/public/images/projects/hero4job.png";
import { useLanguage } from "./language-provider";

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
};

export default function Testimonials() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "Bottega della Scarpa",
      description: t("projectBottegaDescription"),
      image: BottegaImg,
      href: "https://bottegadellascarpaimola.vercel.app/",
    },
    {
      title: "Hero4Job",
      description: t("projectHero4JobDescription"),
      image: Hero4JobImg,
      href: "https://hero4job.vercel.app/",
    },
  ];

  return (
    <section id="proof" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
        <div className="mx-auto max-w-3xl pb-12 text-center md:pb-14">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            {t("projectsTitle")}
          </h2>
          <p className="text-lg text-indigo-200/65">
            {t("projectsDescription")}
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group block h-full cursor-pointer"
            >
              <article className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-linear-to-br from-gray-900/70 via-gray-800/40 to-gray-900/70 p-4 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(155deg,rgba(30,58,138,0.28)_0%,rgba(79,70,229,0.2)_46%,rgba(217,70,239,0.14)_100%)] transition-opacity duration-300 group-hover:opacity-85"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="mb-2 min-h-[3rem] line-clamp-2 font-nacelle text-xl font-semibold text-gray-100">
                    {project.title}
                  </h3>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
