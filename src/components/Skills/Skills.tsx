import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Skills.module.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section className={styles.skills} id="skills">
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
          <span className={styles.sectionLabel}>Habilidades</span>
          <h2 className={styles.sectionTitle}>Tecnologias e Ferramentas</h2>
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <img
            src="/tecnologia e ferramentas.svg"
            alt="Tecnologias e Ferramentas"
            className={styles.skillsImage}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
