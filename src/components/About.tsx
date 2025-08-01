import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('nosotros');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="nosotros" className="section-padding bg-gray-50">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div variants={slideInLeft}>
            <motion.h2 
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6"
              variants={fadeInUp}
            >
              Sobre <span className="text-accent">Nosotros</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-700 mb-6 leading-relaxed"
              variants={fadeInUp}
            >
              <strong>Maxwell: Soluciones Tecnológicas</strong> es una empresa especializada en brindar servicios integrales de tecnología para empresas y hogares en Lima Metropolitana. Con más de 10 años de experiencia, nos hemos consolidado como líderes en el sector.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-700 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Nuestro equipo de profesionales altamente capacitados garantiza la excelencia en cada proyecto, utilizando las mejores prácticas y tecnologías más avanzadas del mercado.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-gray-600 font-medium">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-gray-600 font-medium">Años de Experiencia</div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-2 text-gray-700">
                <i className="fas fa-check-circle text-accent"></i>
                <span>Certificaciones Internacionales</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <i className="fas fa-check-circle text-accent"></i>
                <span>Garantía en Todos los Servicios</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <i className="fas fa-check-circle text-accent"></i>
                <span>Soporte Técnico 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            className="relative"
            variants={slideInRight}
          >
            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white">
              <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
              >
                <motion.div 
                  className="text-center"
                  variants={fadeInUp}
                >
                  <i className="fas fa-bolt text-4xl mb-4 text-yellow-300"></i>
                  <h3 className="font-semibold mb-2">Cableado Eléctrico</h3>
                  <p className="text-sm opacity-90">Instalaciones seguras y eficientes</p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  variants={fadeInUp}
                >
                  <i className="fas fa-video text-4xl mb-4 text-red-300"></i>
                  <h3 className="font-semibold mb-2">Cámaras de Vigilancia</h3>
                  <p className="text-sm opacity-90">Sistemas de seguridad avanzados</p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  variants={fadeInUp}
                >
                  <i className="fas fa-network-wired text-4xl mb-4 text-green-300"></i>
                  <h3 className="font-semibold mb-2">Cableado Estructurado</h3>
                  <p className="text-sm opacity-90">Infraestructura de redes</p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  variants={fadeInUp}
                >
                  <i className="fas fa-cogs text-4xl mb-4 text-purple-300"></i>
                  <h3 className="font-semibold mb-2">Automatización</h3>
                  <p className="text-sm opacity-90">Control de motores inteligente</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
