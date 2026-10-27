import { useTranslation } from "react-i18next";
import profilePic from "../../assets/hero.webp";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// configuration for the starting and ending position of the animation
const sliderVariants = (delay: number, startingPos: number): Variants => ({
  hidden: { x: startingPos, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5
    }
  }
})

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 variants={sliderVariants(0.25, -100)}
                       initial="hidden"
                       animate="visible"
                       className="pb-6 pb-xl-16 text-center xl:text-left text-6xl font-thin tracking-tight lg:mt-16 lg_text-8xl">
              {t("hero.headline")}
            </motion.h1>
            <motion.span variants={sliderVariants(0.5, -100)}
                         initial="hidden"
                         animate="visible"
                         className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mb-8">
              {t("hero.subheadline")}
            </motion.span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div className="flex justify-center"
                      variants={sliderVariants(1, 100)}
                      initial="hidden"
                      animate="visible">
            <img src={profilePic} alt={t("hero.portraitAlt")} className="rounded-2xl min-w-80 max-w-xl"/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}