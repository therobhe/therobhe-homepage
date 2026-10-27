import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../../data/data";

export default function Experience() {
  const { t } = useTranslation();

  const experienceWithTech = t('experience.items', { returnObjects: true }).map((exp) => ({
    ...exp,
    technologies: EXPERIENCES.find(e => e.id === exp.id)?.technologies || []
  }));

  return (
    <section className="border-b border-neutral-900 pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        {t('experience.headline')}
      </motion.h2>
      <div>
        {experienceWithTech.map((experience, index) => (
          <div key={index} className="mb-8 py-6 flex fley-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} - <a href={experience.link} target="_blank" className="text-small text-purple-100">{experience.company}</a>
              </h6>
              <p className="mb-2 text-sm text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="rounded bg-purple-950 px-2 py-1 text-xs text-purple-100">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
