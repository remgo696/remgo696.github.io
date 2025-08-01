import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.8 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/banner.png" 
          alt="Maxwell Soluciones Tecnológicas - Servicios profesionales en Lima" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container-custom text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          variants={itemVariants}
        >
          Maxwell
          <br />
          <span className="text-accent">Soluciones Tecnológicas</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Expertos en <strong>cableado eléctrico</strong>, <strong>cámaras de vigilancia</strong>, <strong>cableado estructurado</strong> y <strong>automatización de motores</strong> en Lima Metropolitana
        </motion.p>

        <motion.p 
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Más de 10 años brindando soluciones tecnológicas confiables y de calidad para empresas y hogares
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#contacto"
            className="btn-primary text-lg px-8 py-4 inline-block"
            variants={buttonVariants}
            whileHover="hover"
          >
            <i className="fas fa-phone mr-2"></i>
            Solicitar Cotización
          </motion.a>
          
          <motion.a
            href="#servicios"
            className="btn-secondary text-lg px-8 py-4 inline-block border-white text-white hover:bg-white hover:text-primary"
            variants={buttonVariants}
            whileHover="hover"
          >
            <i className="fas fa-tools mr-2"></i>
            Ver Servicios
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 text-center"
          >
            <i className="fas fa-chevron-down text-2xl"></i>
            <p className="text-sm mt-2">Desliza para conocer más</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
