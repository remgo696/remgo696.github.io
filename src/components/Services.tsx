import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('servicios');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "fas fa-bolt",
      title: "Cableado Eléctrico Profesional",
      description: "Instalación y mantenimiento de sistemas eléctricos residenciales, comerciales e industriales con los más altos estándares de seguridad.",
      features: [
        "Instalaciones eléctricas residenciales",
        "Sistemas eléctricos comerciales",
        "Mantenimiento preventivo",
        "Certificaciones técnicas"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: "fas fa-video",
      title: "Instalación de Cámaras de Vigilancia",
      description: "Sistemas de videovigilancia HD y 4K con monitoreo remoto, perfectos para hogares, oficinas y empresas en Lima Metropolitana.",
      features: [
        "Cámaras HD y 4K",
        "Monitoreo remoto 24/7",
        "Sistemas de grabación",
        "Aplicaciones móviles"
      ],
      color: "from-red-400 to-pink-500"
    },
    {
      icon: "fas fa-network-wired",
      title: "Cableado Estructurado",
      description: "Infraestructura de redes completa para empresas, incluyendo fibra óptica, UTP y sistemas de telecomunicaciones avanzados.",
      features: [
        "Redes de fibra óptica",
        "Cableado UTP Cat 6/6A",
        "Certificación de enlaces",
        "Documentación técnica"
      ],
      color: "from-green-400 to-blue-500"
    },
    {
      icon: "fas fa-cogs",
      title: "Automatización y Dimensionamiento de Motores",
      description: "Sistemas de control automático y dimensionamiento de motores para optimizar la eficiencia energética en procesos industriales.",
      features: [
        "Control automático de motores",
        "Dimensionamiento eficiente",
        "Sistemas SCADA",
        "Ahorro energético"
      ],
      color: "from-purple-400 to-indigo-500"
    }
  ];

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="servicios" className="section-padding bg-white">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Nuestros <span className="text-accent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones tecnológicas integrales especializadas para empresas y hogares en Lima Metropolitana
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className="p-8">
                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                >
                  <i className={`${service.icon} text-2xl`}></i>
                </motion.div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.3 + (index * 0.1) + (featureIndex * 0.1) }}
                    >
                      <i className="fas fa-check text-accent mr-3 text-sm"></i>
                      <span className="text-sm font-medium">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#contacto"
                  className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  Solicitar información
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                </motion.a>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Necesitas una solución personalizada para tu empresa?
          </p>
          <motion.a
            href="#contacto"
            className="btn-primary text-lg px-8 py-4 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-phone mr-2"></i>
            Contactar Ahora
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
