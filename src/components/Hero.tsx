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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
        className="container-custom text-center text-white relative z-10 flex flex-col justify-center min-h-screen py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.h1 
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="block">Soluciones</span>
            <motion.span 
              className="block text-accent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            >
              Maxwell
            </motion.span>
            <span className="block">Tecnológicas</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Haz crecer tu negocio con <span className="text-accent font-semibold">soluciones eléctricas</span> y de
            <span className="text-accent font-semibold"> vigilancia</span> confiables
          </motion.p>
        </motion.div>

        {/* Key Points */}
        <motion.div 
          className="grid md:grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <i className="fas fa-shield-alt text-accent"></i>
            <span className="font-medium">Garantía Total</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <i className="fas fa-clock text-accent"></i>
            <span className="font-medium">Respuesta 24/7</span>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            <i className="fas fa-tools text-accent"></i>
            <span className="font-medium">Equipo Experto</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
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

        {/* Scroll Indicator - Ahora posicionado relativamente al final del contenido */}
        <motion.div 
          className="flex flex-col items-center justify-center mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [-10, 0, -10] }}
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
