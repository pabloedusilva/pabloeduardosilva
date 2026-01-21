import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '@/data/portfolio';
import styles from './Experience.module.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className={styles.experience} id="experience">
      <motion.div
        className={styles.container}
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className={styles.sectionLabel}>Experiência</span>
          <h2 className={styles.sectionTitle}>Trajetória Profissional</h2>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
            >
              <motion.div
                className={styles.card}
                whileHover={{ scale: 1.02, y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={styles.cardHeader}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                >
                  <div>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </motion.div>

                <motion.p 
                  className={styles.description}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  {exp.description}
                </motion.p>

                <div className={styles.achievements}>
                  <h5 className={styles.achievementsTitle}>Principais Realizações:</h5>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.1, duration: 0.5 }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {index < experiences.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
