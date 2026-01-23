import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15
  });

  return (
    <section className={styles.skills} id="skills">
      <motion.div
        className={styles.container}
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className={styles.sectionLabel}>Habilidades</span>
          <h2 className={styles.sectionTitle}>Tecnologias e Ferramentas</h2>
        </motion.div>

        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ 
            delay: 0.5, 
            duration: 1.2,
            ease: [0.65, 0, 0.35, 1]
          }}
        >
          <div className={styles.imageWrapper}>
            <img
              src="/tecnologia e ferramentas.svg"
              alt="Tecnologias e Ferramentas"
              className={styles.skillsImage}
            />
            {inView && <div className={styles.waveOverlay}></div>}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
