import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const floatingImages = [
    { src: '/assets/imagens/3D/html5.png', name: 'html5', delay: 0, duration: 3 },
    { src: '/assets/imagens/3D/react.png', name: 'react', delay: 0.5, duration: 3.5 },
    { src: '/assets/imagens/3D/notebook.png', name: 'notebook', delay: 1, duration: 4 },
    { src: '/assets/imagens/3D/nodejs.png', name: 'nodejs', delay: 1.5, duration: 3.2 },
    { src: '/assets/imagens/3D/VSCode.png', name: 'vscode', delay: 2, duration: 3.8 },
  ];

  return (
    <section className={styles.about} id="about">
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
          <span className={styles.sectionLabel}>Sobre Mim</span>
          <h2 className={styles.sectionTitle}>Conheça mais sobre meu trabalho</h2>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className={styles.textContent}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Desenvolvedor Full Stack com paixão por criar experiências digitais excepcionais.
              Minha jornada no desenvolvimento começou há alguns anos, e desde então venho
              aprimorando minhas habilidades em tecnologias modernas.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Tenho experiência em construir aplicações web escaláveis, desde a concepção até
              o deploy. Meu foco está em escrever código limpo, manutenível e que resolva
              problemas reais dos usuários.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Além das habilidades técnicas, valorizo muito o trabalho em equipe, comunicação
              clara e aprendizado contínuo. Estou sempre buscando novos desafios que me
              permitam crescer profissionalmente.
            </motion.p>
          </div>

          <div className={styles.imagesContainer}>
            {floatingImages.map((image, index) => (
              <motion.div
                key={index}
                className={`${styles.imageWrapper} ${styles[image.name]}`}
                initial={{ opacity: 0, scale: 0.3, rotateX: -90 }}
                animate={inView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotateX: 0,
                } : {}}
                transition={{ 
                  delay: 0.6 + image.delay * 0.1, 
                  duration: 0.8,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <motion.div
                  className={styles.floatingImage}
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: image.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: image.delay,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.name}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
