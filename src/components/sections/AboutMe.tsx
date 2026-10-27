import { useTranslation } from "react-i18next";
import profilePic from "../../assets/about.webp";
import Techstack from "../Techstack";
import { motion } from "framer-motion";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">{t("aboutMe.headline")}</h2>
      <div className="flex flex-wrap">
        <motion.div
          className="w-full lg:w-1/2 lg:p-8"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}>
          <div className="flex justify-center items-center">
            <img src={profilePic} alt={t("aboutMe.moodImageAlt")} className="rounded-2xl min-w-80 max-w-xl" />
          </div>
        </motion.div>
        <motion.div className="w-full lg:w-1/2"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}>
          <div className="flex flex-col items-center lg:items-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{t("aboutMe.description")}</p>
          </div>
        </motion.div>
      </div>

      <Techstack />
    </section>
  )
}