"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // ✅ tambahin Variants
import { Github } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import Modal from "./Modal";

// ── Card animation variants ───────────────────────────────────────────────
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.13,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// ── Modal content component ───────────────────────────────────────────────
function ProjectModalContent({ project }: { project: Project }) {
  return (
    <div className="text-center">
      {/* Title */}
      <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-semibold italic mb-3 text-navy">
        {project.title}
      </h2>

      {/* Role pill */}
      <span className="inline-block bg-navy text-white font-sans text-[0.9rem] font-medium px-6 py-2 rounded-pill mb-10">
        {project.role}
      </span>

      {/* Description */}
      <p className="font-sans text-[1.1rem] text-muted max-w-[700px] mx-auto leading-[1.8] mb-8">
        {project.description}
      </p>

      {/* Image gallery */}
      <div
        className={`grid gap-5 mb-8 text-left ${
          project.certificate ? "grid-cols-1 md:grid-cols-[1.5fr_1fr]" : "grid-cols-1"
        }`}
      >
        {/* Main project screenshot */}
        <div>
          <Image
            src={project.imageFull}
            alt={`${project.title} screenshot`}
            width={800}
            height={500}
            className="w-full rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          />
        </div>

        {/* Certificate (conditional) */}
        {project.certificate && (
          <div className="bg-[#f8f8f8] p-5 rounded-[12px] border border-dashed border-[#ccc]">
            <h4 className="font-sans text-[1rem] text-muted mb-3">
              Contribution Certificate
            </h4>
            <Image
              src={project.certificate}
              alt={`Certificate for ${project.title}`}
              width={400}
              height={300}
              className="w-full rounded-lg border-4 border-white shadow-sm cursor-zoom-in hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        )}
      </div>

      {/* GitHub link */}
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-6 py-3 bg-navy text-white font-sans font-semibold rounded-pill hover:bg-accent transition-colors duration-300"
      >
        <Github size={18} />
        View Code on GitHub
      </a>
    </div>
  );
}

// ── Main Works component ──────────────────────────────────────────────────
export default function Works() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="works"
      className="bg-white px-[8%] py-[100px]"
      aria-label="Selected works"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-[60px]"
      >
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] mb-3">
          Selected Works
        </h2>
        <p className="font-sans text-[1.1rem] text-muted">
          A glimpse into my development projects.
        </p>
      </motion.div>

      {/* Project cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-10">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            whileHover={{
              y: -12,
              scale: 1.01,
              boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedProject(project)}
            className="bg-cream rounded-card overflow-hidden cursor-pointer"
            aria-label={`Open ${project.title} project details`}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
            role="button"
          >
            {/* Thumbnail */}
            <div className="h-[250px] overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.thumbnailAlt}
                width={700}
                height={400}
                className="w-full h-full object-cover transition-transform duration-[600ms] ease-in-out group-hover:scale-[1.08]"
                style={{
                  transition:
                    "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.3s ease",
                }}
              />
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="font-serif text-[1.5rem] mb-2.5">
                {project.title}
              </h3>
              <p className="font-sans text-muted mb-4">{project.tagline}</p>
              <span className="inline-block font-sans text-[0.85rem] font-medium text-navy bg-navy-light px-4 py-1.5 rounded-pill">
                {project.tag}
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        ariaLabel={selectedProject ? `${selectedProject.title} details` : ""}
      >
        {selectedProject && (
          <ProjectModalContent project={selectedProject} />
        )}
      </Modal>
    </section>
  );
}
