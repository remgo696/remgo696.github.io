import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Contact = () => {
  // Hardcoded contact information
  const phoneNumber = "+51957080898";
  const whatsappNumber = "51957080898";
  const email = "maxwell.technology.solutions@gmail.com";
  const locationLink = "DoPHT8bDLd3Ybbiw6"

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

    const section = document.getElementById('contacto');
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const contactMethods = [
    {
      icon: "fas fa-phone",
      title: "Llámanos",
      info: phoneNumber,
      description: "Lunes a Viernes: 8:00 AM - 6:00 PM",
      action: `tel:${phoneNumber}`,
      color: "from-green-400 to-green-600"
    },
    {
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      info: phoneNumber,
      description: "Respuesta inmediata",
      action: `https://wa.me/${whatsappNumber}?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20servicios%20tecnol%C3%B3gicos`,
      color: "from-green-500 to-green-700"
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      info: email,
      description: "Respuesta en 24 horas",
      action: `mailto:${email}`,
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Ubicación",
      info: "Lima Metropolitana",
      description: "Servicios en toda la ciudad",
      action: `https://maps.app.goo.gl/${locationLink}`,
      color: "from-red-400 to-red-600"
    }
  ];

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-primary to-primary/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-8 gap-4 h-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="bg-white/5 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contáctanos <span className="text-accent">Ahora</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Estamos listos para ayudarte con tus proyectos tecnológicos en Lima Metropolitana. ¡Solicita tu cotización gratuita!
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.action}
              target={method.title !== "Llámanos" ? "_blank" : undefined}
              rel={method.title !== "Llámanos" ? "noopener noreferrer" : undefined}
              className="group block bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <i className={`${method.icon} text-xl`}></i>
              </motion.div>
              
              <h3 className="font-heading text-lg font-bold mb-2 text-white group-hover:text-accent transition-colors duration-300">
                {method.title}
              </h3>
              
              <p className="text-accent font-semibold mb-2 break-words text-sm">
                {method.info}
              </p>
              
              <p className="text-gray-300 text-sm">
                {method.description}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Main CTA Section */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20"
          variants={cardVariants}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <motion.h3 
                className="font-heading text-2xl lg:text-3xl font-bold mb-4"
                variants={cardVariants}
              >
                ¿Listo para transformar tu proyecto?
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-200 mb-6 leading-relaxed"
                variants={cardVariants}
              >
                Nuestro equipo de expertos está esperando para asesorarte y brindarte la mejor solución tecnológica para tus necesidades específicas.
              </motion.p>

              <motion.div 
                className="space-y-3 mb-6"
                variants={cardVariants}
              >
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-accent"></i>
                  <span>Cotización gratuita y sin compromiso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-accent"></i>
                  <span>Asesoría técnica especializada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-accent"></i>
                  <span>Garantía en todos nuestros servicios</span>
                </div>
              </motion.div>
            </div>

            {/* Right CTA */}
            <motion.div 
              className="text-center lg:text-right"
              variants={cardVariants}
            >
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20servicios%20tecnol%C3%B3gicos`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-accent to-blue-500 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:from-blue-500 hover:to-accent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-whatsapp mr-3 text-xl"></i>
                Solicitar Cotización por WhatsApp
              </motion.a>
              
              <p className="text-sm text-gray-300">
                O llámanos directamente al: 
                <br />
                <strong className="text-accent">{phoneNumber}</strong>
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Service Areas */}
        <motion.div 
          className="mt-16 text-center"
          variants={cardVariants}
        >
          <h4 className="font-heading text-xl font-bold mb-4">
            Áreas de Servicio en Lima Metropolitana
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Miraflores", "San Isidro", "Surco", "La Molina", "San Borja", 
              "Barranco", "Chorrillos", "Jesús María", "Lince", "Magdalena",
              "Pueblo Libre", "Breña", "Lima Cercado", "Los Olivos", "San Miguel"
            ].map((area, index) => (
              <motion.span
                key={index}
                className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + (index * 0.05) }}
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
