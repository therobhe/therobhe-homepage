import { RiReactjsLine, RiNodejsLine, RiPhpLine, RiTailwindCssLine } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import "../index.css"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

export default function Techstack() {
  const { t } = useTranslation();

  return (
    <div>
      <motion.h2 className="my-20 text-center text-4xl"
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -100 }}
                 transition={{ duration: 0.5 }}>
        {t("techstack.headline")}
      </motion.h2>
      <motion.div className="flex flex-wrap items-center justify-center gap-4"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -80 }}
                  transition={{ duration: 1 }}>
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4 ts-icon"
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate">
          <SiTypescript className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants(2.75)}
                    initial="initial"
                    animate="animate">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants(1.75)}
                    initial="initial"
                    animate="animate">
          <SiNextdotjs className="text-7xl text-neutral-100" />
        </motion.div>
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate">
          <RiNodejsLine className="text-7xl text-green-500" />
        </motion.div>
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants(2.25)}
                    initial="initial"
                    animate="animate">
          <RiTailwindCssLine className="text-7xl text-cyan-600" />
        </motion.div>
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                    variants={iconVariants(1.75)}
                    initial="initial"
                    animate="animate">
          <RiPhpLine className="text-7xl text-purple-700" />
        </motion.div>
      </motion.div>
    </div>
  )
}
