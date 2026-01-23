import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '@/data/portfolio';
import styles from './Experience.module.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionLabel}>Experiência</span>
          <h2 className={styles.sectionTitle}>Trajetória Profissional</h2>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.position}>{exp.position}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>

                <p className={styles.description}>{exp.description}</p>

                <ul className={styles.achievementsList}>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {index < experiences.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
