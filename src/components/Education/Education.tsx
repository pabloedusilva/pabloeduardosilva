import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '@/data/portfolio';
import styles from './Education.module.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className={styles.education} id="education">
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
          <span className={styles.sectionLabel}>Formação</span>
          <h2 className={styles.sectionTitle}>Educação e Certificações</h2>
        </motion.div>

        <div className={styles.grid}>
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              <motion.div 
                className={styles.cardIcon}
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6, type: 'spring' }}
              >
                🎓
              </motion.div>
              
              <div className={styles.cardContent}>
                <motion.span 
                  className={styles.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                >
                  {edu.period}
                </motion.span>
                <motion.h3 
                  className={styles.degree}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
                >
                  {edu.degree}
                </motion.h3>
                <motion.h4 
                  className={styles.institution}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                >
                  {edu.institution}
                </motion.h4>
                {edu.description && (
                  <motion.p 
                    className={styles.description}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                  >
                    {edu.description}
                  </motion.p>
                )}
              </div>

              <div className={styles.cardDecoration}></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
