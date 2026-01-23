import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '@/data/portfolio';
import styles from './Education.module.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  return (
    <section className={styles.education} id="education">
      <div className={styles.container} ref={ref}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionLabel}>Formação</span>
          <h2 className={styles.sectionTitle}>Educação e Certificações</h2>
        </motion.div>

        <div className={styles.grid}>
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ 
                  delay: index * 0.1 + 0.2, 
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 200
                }}
                style={{ marginBottom: '0.5rem' }}
              >
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  style={{ color: 'var(--color-accent)' }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" 
                  />
                </svg>
              </motion.div>
              <div className={styles.cardContent}>
                <motion.span 
                  className={styles.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                >
                  {edu.period}
                </motion.span>
                <motion.h3 
                  className={styles.degree}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                >
                  {edu.degree}
                </motion.h3>
                <motion.h4 
                  className={styles.institution}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                >
                  {edu.institution}
                </motion.h4>
                {edu.description && (
                  <motion.p 
                    className={styles.description}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                  >
                    {edu.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.continueLearning}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            delay: education.length * 0.1 + 0.2, 
            duration: 0.5
          }}
        >
          <span className={styles.dots}>•</span>
          <span className={styles.learningText}>Em constante aprendizado</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
