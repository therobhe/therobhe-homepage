import { PROJECTS } from '../../data/data.js'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects () {
	const { t } = useTranslation()
	
	const projectsWithTech = t('projects.items', { returnObjects: true }).
	map((project) => ({
		...project,
		...PROJECTS.find(p => p.id === project.id) || {},
	}))
	
	return (
		<section className="border-b border-neutral-900 pb-4">
			<motion.h2
				className="my-20 text-center text-4xl"
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: -100 }}
				transition={{ duration: 0.5 }}
			>
				{t('projects.headline')}
			</motion.h2>
			<div>
				{projectsWithTech.map((project, index) => (
					<div
						key={index}
						className="flex flex-wrap mb-8 py-6 md:justify-center"
					>
						<motion.div
							className="w-full lg:w-1/4 flex flex-col lg:block items-center"
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
						>
							<a
								target="_blank"
                href={project.links.find(link => !link.includes("github"))}
							>
								<img
									src={project.image}
									width={274}
									height={274}
									alt={t(`projects.items.${index}.imageAlt`)}
									className="mb-6 rounded-2xl"
								/>
							</a>
						</motion.div>
						<motion.div
							className="w-full max-w-xl lg:w-3/4 flex flex-col lg:block items-center"
							whileInView={{ opacity: 1, x: 0 }}
							initial={{ opacity: 0, x: 100 }}
							transition={{ duration: 0.5 }}
						>
							<h6 className="mb-2 font-semibold">
								<span className="text-small text-purple-100">{project.title}</span>
							</h6>
							<p className="text-sm text-neutral-400 mb-4">{project.description}</p>
							<div className="flex flex-wrap justify-center lg:justify-normal">
								{project.technologies?.map((technology, index) => (
									<span
										key={index}
										className="mr-2 mt-4 px-2 py-2 bg-neutral-800 text-purple-400 rounded"
									>
                    {technology}
                  </span>
								))}
							</div>
							<div className="flex items-center mt-4">
								{project.links && project.links.map((link, idx) => (
									<a
										key={idx}
										href={link}
										target="_blank"
										rel="noreferrer"
										className="mr-4"
									>
										{link.includes('github') ? (
											<FaGithub className="text-4xl" />
										) : (
											<FaExternalLinkAlt className="text-4xl" />
										)}
									</a>
								))}
							</div>
						</motion.div>
					</div>
				))}
			</div>
		</section>
	)
}
