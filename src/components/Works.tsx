"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import Modal from "./Modal";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

function ProjectModalContent({ project }: { project: Project }) {
  return (
    <div className="text-center">
      <h2
        className="font-serif text-[clamp(1.8rem,4vw,3rem)] font-semibold italic mb-3 leading-tight"
        style={{ color: "#0d1b42" }}
      >
        {project.title}
      </h2>
      <span
        className="inline-block font-sans text-[0.85rem] font-medium px-5 py-2 rounded-full mb-10"
        style={{ backgroundColor: "#0d1b42", color: "#ffffff" }}
      >
        {project.role}
      </span>

      <p
        className="font-sans text-[1rem] max-w-[680px] mx-auto leading-loose mb-10"
        style={{ color: "#4a5568" }}
      >
        {project.description}
      </p>

      <div
        className={`grid gap-6 mb-10 text-left ${
          project.certificate ? "grid-cols-1 md:grid-cols-[1.5fr_1fr]" : "grid-cols-1"
        }`}
      >
        <div className="rounded-[14px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <Image
            src={project.imageFull}
            alt={`${project.title} screenshot`}
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {project.certificate && (
          <div
            className="p-6 rounded-[14px]"
            style={{ backgroundColor: "#f8f8f8", border: "1px dashed #d0d0d0" }}
          >
            <h4
              className="font-sans text-[0.9rem] font-medium mb-4"
              style={{ color: "#4a5568" }}
            >
              Contribution Certificate
            </h4>
            <Image
              src={project.certificate}
              alt={`Certificate for ${project.title}`}
              width={400}
              height={300}
              className="w-full rounded-lg shadow-sm hover:scale-[1.02] transition-transform duration-300 cursor-zoom-in"
              style={{ border: "3px solid #fff" }}
            />
          </div>
        )}
      </div>

      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 font-sans font-semibold text-[0.95rem] px-7 py-3.5 rounded-full transition-colors duration-300"
        style={{ backgroundColor: "#0d1b42", color: "#ffffff" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff5722")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d1b42")}
      >
        <Github size={18} />
        View Code on GitHub
      </a>
    </div>
  );
}

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="works"
className="px-[8%] py-40"
      style={{ backgroundColor: "#ffffff" }}
      aria-label="Selected works"
    >
      {/* Subtle section divider at top */}
      <div
        className="mb-0 h-px mx-0"
        style={{ background: "linear-gradient(to right, transparent, rgba(13,27,66,0.07), transparent)" }}
        aria-hidden="true"
      />

      {/* Header */}
      <motion.div
className="mb-28 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
      >
        <span
          className="inline-block font-sans text-[0.75rem] font-semibold tracking-[3px] uppercase mb-5"
          style={{ color: "#ff5722" }}
        >
          Portfolio
        </span>
        <h2
          className="font-serif text-[clamp(2rem,4vw,3rem)] mb-4 leading-tight"
          style={{ color: "#0d1b42" }}
        >
          Selected Works
        </h2>
        <p className="font-sans text-[1.05rem] leading-relaxed" style={{ color: "#4a5568" }}>
          A glimpse into my development projects.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            onClick={() => setSelectedProject(project)}
            className="group relative rounded-[24px] overflow-hidden cursor-pointer"
            style={{
              backgroundColor: "#fdfcf8",
              boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
            whileHover={{
              y: -10,
              boxShadow: "0 30px 70px rgba(0,0,0,0.1)",
              transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
            }}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
            role="button"
            aria-label={`Open ${project.title} project details`}
          >
            {/* Thumbnail */}
            <div className="h-[300px] overflow-hidden relative">
              <Image
                src={project.thumbnail}
                alt={project.thumbnailAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(13,27,66,0.4)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm"
                  style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                >
                  <ArrowUpRight size={24} style={{ color: "#0d1b42" }} />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3
                  className="font-serif text-[1.5rem] leading-snug"
                  style={{ color: "#0d1b42" }}
                >
                  {project.title}
                </h3>
                <span
                  className="flex-shrink-0 inline-block font-sans text-[0.75rem] font-medium px-3 py-1 rounded-full mt-1"
                  style={{
                    backgroundColor: "rgba(13,27,66,0.06)",
                    color: "#0d1b42",
                  }}
                >
                  {project.tag}
                </span>
              </div>
              <p
                className="font-sans text-[0.95rem] leading-relaxed"
                style={{ color: "#4a5568" }}
              >
                {project.tagline}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        ariaLabel={selectedProject ? `${selectedProject.title} details` : ""}
      >
        {selectedProject && <ProjectModalContent project={selectedProject} />}
      </Modal>
    </section>
  );
}