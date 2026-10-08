import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt, FaYoutube, FaGlobe, FaListUl, FaInstagram, FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ScrollAnimation from "@/components/ui/scroll-animation";
import {
  projects,
  aiTrainingProjects,
  uxUiProjects,
  contentCreationProjects,
  creatorProfiles,
  sungateProjects,
  sungateCarousels,
  type ExtendedProject,
  type InstagramCarousel,
  type LinkType,
} from "@/lib/data";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const getLinkIcon = (type: LinkType) => {
  switch (type) {
    case "github":   return <FaCode className="mr-2 flex-shrink-0" />;
    case "live":     return <FaGlobe className="mr-2 flex-shrink-0" />;
    case "video":    return <FaYoutube className="mr-2 flex-shrink-0" />;
    case "figma":    return <FaExternalLinkAlt className="mr-2 flex-shrink-0" />;
    case "playlist":   return <FaListUl className="mr-2 flex-shrink-0" />;
    case "instagram":  return <FaInstagram className="mr-2 flex-shrink-0" />;
    default:           return <FaExternalLinkAlt className="mr-2 flex-shrink-0" />;
  }
};

// ─── Reusable card for new-style projects ────────────────────────────────────

const ExtendedProjectCard = ({ project, index }: { project: ExtendedProject; index: number }) => {
  const [reelPlaying, setReelPlaying] = useState(false);

  return (
    <ScrollAnimation delay={0.15 * (index % 3)} className="h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
        <div className="relative">
          {project.instagramReelId && reelPlaying ? (
            <iframe
              src={`https://www.instagram.com/reel/${project.instagramReelId}/embed/`}
              className="w-full"
              style={{ height: "500px", border: "none", overflow: "hidden" }}
              allowFullScreen
              title={project.title}
            />
          ) : (
            <div
              className={project.instagramReelId ? "relative cursor-pointer group" : "relative"}
              onClick={project.instagramReelId ? () => setReelPlaying(true) : undefined}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {project.instagramReelId && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <FaPlay className="text-primary text-xl ml-1" />
                  </div>
                </div>
              )}
            </div>
          )}
          {project.badge && !reelPlaying && (
            <span className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full">
              {project.badge}
            </span>
          )}
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-dark-400">{project.title}</h3>
          <p className="text-dark-200 mb-4 flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
          {project.links.length > 0 && (
            <div className="flex flex-col gap-2 mt-auto">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-violet-800 transition flex items-center text-sm"
                >
                  {getLinkIcon(link.type)}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </ScrollAnimation>
  );
};

// ─── Instagram reel carousel card ────────────────────────────────────────────

const InstagramCarouselCard = ({ card, index }: { card: InstagramCarousel; index: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);

  const prev = () => { setCurrentIndex(i => (i - 1 + card.reelIds.length) % card.reelIds.length); setPlaying(false); };
  const next = () => { setCurrentIndex(i => (i + 1) % card.reelIds.length); setPlaying(false); };

  return (
    <ScrollAnimation delay={0.15 * (index % 3)}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
        {/* Media */}
        <div className="relative">
          {playing ? (
            <iframe
              src={`https://www.instagram.com/reel/${card.reelIds[currentIndex]}/embed/`}
              className="w-full"
              style={{ height: "500px", border: "none", overflow: "hidden" }}
              allowFullScreen
              title={`${card.title} – Reel ${currentIndex + 1}`}
            />
          ) : (
            <div className="relative cursor-pointer group h-56" onClick={() => setPlaying(true)}>
              <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <FaPlay className="text-primary text-xl ml-1" />
                </div>
              </div>
            </div>
          )}
          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {card.reelIds.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setPlaying(false); }}
                className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-white scale-125" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Prev / counter / Next */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-100">
          <button onClick={prev} className="flex items-center gap-1 text-primary hover:text-violet-800 transition text-sm font-medium">
            <FaChevronLeft className="text-xs" /> Prev
          </button>
          <span className="text-sm text-gray-500 font-medium">Clip {currentIndex + 1} of {card.reelIds.length}</span>
          <button onClick={next} className="flex items-center gap-1 text-primary hover:text-violet-800 transition text-sm font-medium">
            Next <FaChevronRight className="text-xs" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-dark-400">{card.title}</h3>
          <p className="text-dark-200 mb-4">{card.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {card.technologies.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <a
              href={`https://www.instagram.com/reel/${card.reelIds[currentIndex]}/`}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-violet-800 transition flex items-center text-sm"
            >
              <FaInstagram className="mr-2" /> View Current Reel on Instagram
            </a>
            <a
              href={card.artistUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-violet-800 transition flex items-center text-sm"
            >
              <FaInstagram className="mr-2" /> {card.artistLabel}
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

// ─── Section header with underline ───────────────────────────────────────────

type SectionTheme = "default" | "sungate" | "personal" | "ucf";

const SectionHeader = ({
  title,
  subtitle,
  theme = "default",
}: {
  title: string;
  subtitle?: string;
  theme?: SectionTheme;
}) => {
  const titleColor =
    theme === "ucf"
      ? "text-amber-300"
      : theme === "sungate"
        ? "text-orange-950"
        : theme === "personal"
          ? "text-violet-950"
          : "text-dark-400";
  const underline =
    theme === "ucf"
      ? "bg-amber-400"
      : theme === "sungate"
        ? "bg-gradient-to-r from-amber-500 to-orange-600"
        : theme === "personal"
          ? "bg-gradient-to-r from-violet-600 via-blue-500 to-amber-400"
          : "bg-primary";
  const subtitleColor =
    theme === "ucf"
      ? "text-neutral-300"
      : theme === "sungate"
        ? "text-orange-900/70"
        : theme === "personal"
          ? "text-violet-950/70"
          : "text-dark-200";
  return (
    <div className="mb-10">
      <h2 className={`text-2xl md:text-3xl font-bold ${titleColor} mb-3`}>{title}</h2>
      <div className={`h-1 w-16 ${underline} rounded mb-4`}></div>
      {subtitle && <p className={`${subtitleColor} max-w-3xl`}>{subtitle}</p>}
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const Projects = () => {
  const [, navigate] = useLocation();

  return (
    <>
      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-violet-700 via-violet-600 to-amber-500 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Projects
          </motion.h1>
          <motion.div
            className="h-1 w-20 bg-white mx-auto"
            initial={{ width: 0 }}
            animate={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="mt-4 text-white text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A collection of my recent work and projects I've contributed to
          </motion.p>
        </div>
      </section>

      {/* ── Section 1: Creative Production ──────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 via-orange-50 to-amber-100">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <SectionHeader
              title="Creative Production"
              subtitle="Real-world production experience spanning music marketing, content strategy, and creative direction."
              theme="sungate"
            />
          </ScrollAnimation>

          <ScrollAnimation>
            <h3 className="text-lg font-semibold text-orange-950 mb-6">Sungate Internship Work</h3>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {sungateProjects.map((project, index) => (
              <ExtendedProjectCard key={project.id} project={project} index={index} />
            ))}
            {sungateCarousels.map((carousel, index) => (
              <InstagramCarouselCard key={carousel.id} card={carousel} index={sungateProjects.length + index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Content Creation & Music Production ──────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-violet-50 via-blue-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <SectionHeader
              title="Personal Projects: Content Creation & Music Production"
              theme="personal"
            />
          </ScrollAnimation>

          <ScrollAnimation>
            <p className="text-violet-950/70 mb-8 max-w-3xl">
              Self-taught in music analysis with hands-on experience in AI vocal training, content
              creation, SEO growth, and audience engagement. Developed a strong ear for vocal
              layering, pitch, and structure through years of creative experimentation and iterative
              AI refinement.
            </p>

            {/* Featured Creator Channels */}
            <h3 className="text-lg font-semibold text-violet-950 mb-4">Featured Channels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {creatorProfiles.map((creator) => (
                <a
                  key={creator.name}
                  href={creator.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 p-6 border-l-4 border-amber-400 no-underline"
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaYoutube className="text-white text-xl" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-lg font-bold text-violet-950">{creator.name}</h4>
                    <p className="text-xs text-primary font-medium mb-1">{creator.handle}</p>
                    <p className="text-dark-200 text-sm">{creator.description}</p>
                  </div>
                  <FaExternalLinkAlt className="text-gray-400 flex-shrink-0" />
                </a>
              ))}
            </div>
          </ScrollAnimation>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentCreationProjects.map((project, index) => (
              <ExtendedProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: UX/UI Research & Immersive Development ───────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <SectionHeader
              title="UX/UI Research & Immersive Development (2025–Present)"
              subtitle="Combining user research methodologies with immersive technologies — from Figma prototypes shaped by real user feedback to AR and VR experiences in active development."
            />
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uxUiProjects.map((project, index) => (
              <ExtendedProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Iterative AI Training Projects ────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <SectionHeader
              title="Iterative AI Training Projects"
              subtitle="Projects built using iterative prompting, AI-assisted workflows, and real-world experimentation — emphasizing structured development, debugging, and incremental feature growth."
            />
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTrainingProjects.map((project, index) => (
              <ExtendedProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: UCF Code & Design Projects ────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <SectionHeader title="UCF Code & Design Projects (2023–2024)" theme="ucf" />
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.id} delay={0.15 * (index % 3)} className="h-full">
                <div className="bg-neutral-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col border border-amber-400/30">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-amber-100">{project.title}</h3>
                    <p className="text-neutral-300 mb-4 flex-grow">{project.description}</p>

                    {/* YouTube Video Embed */}
                    {"videoId" in project && project.videoId && (
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <iframe
                          className="w-full aspect-video"
                          src={`https://www.youtube.com/embed/${project.videoId}`}
                          title={`${project.title} Demo Video`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}

                    {/* TODO App Design Link */}
                    {"isTodoApp" in project && project.isTodoApp && (
                      <div className="mb-4">
                        <a
                          href="/todo-app-design.pdf"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-amber-400 text-neutral-950 font-medium rounded-md hover:bg-amber-300 transition"
                        >
                          <FaExternalLinkAlt className="mr-2" />
                          View TODO App Design PDF
                        </a>
                        <p className="mt-2 text-sm text-neutral-400 italic">
                          Design prototype created in Figma showing login, task list, and profile screens
                        </p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-neutral-800 text-amber-200/90 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-amber-400 hover:text-amber-300 transition flex items-center"
                        >
                          <FaCode className="mr-1" />
                          Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-amber-400 hover:text-amber-300 transition flex items-center"
                        >
                          <FaExternalLinkAlt className="mr-1" />
                          Watch on YouTube
                        </a>
                      )}
                      {"liveUrl" in project && project.liveUrl && (
                        <a
                          href={project.liveUrl as string}
                          target="_blank"
                          rel="noreferrer"
                          className="text-amber-400 hover:text-amber-300 transition flex items-center"
                        >
                          <FaGlobe className="mr-1" />
                          Live Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration CTA ────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-dark-400 mb-4">Interested in Collaborating?</h2>
            <p className="text-dark-200 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-violet-700 transition"
            >
              Get In Touch
            </button>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
};

export default Projects;
