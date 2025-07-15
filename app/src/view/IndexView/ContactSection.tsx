import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useMailprex } from "usemailprex-react";
import { toast } from "react-toastify";

const ContactSection = ({ language }: any) => {
  const webName = "Portfolio Freelance Landing New";
  const emailDestiny = process.env.NEXT_PUBLIC_EMAIL_DESTINY || "";
  const url = "https://api.mailprex.excelso.xyz/email/send";
  const formToken = process.env.NEXT_PUBLIC_MAILPREX_FORM_TOKEN || "";
  const { formData, handleChange, handleSubmit, response } = useMailprex({
    url,
    webName,
    emailDestiny,
    formToken,
  });
  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    await handleSubmit(e);
    if (response.error) {
      toast.error("Error sending message. Try again later.");
    } else {
      toast.success("Message sent succesfully!");
    }
  };
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === "es"
              ? "¿Listo para Lanzar tu MVP?"
              : "Ready to Launch Your MVP?"}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === "es"
              ? "Cuéntame sobre tu proyecto y te ayudo a convertirlo en realidad en tiempo récord."
              : "Tell me about your project and I'll help you turn it into reality in record time."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="name" className="text-gray-900">
                      {language === "es" ? "Nombre completo" : "FullName"}
                    </Label>
                    <Input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      required
                      id="fullname"
                      aria-labelledby="fullname"
                      onChange={handleChange}
                      className="border-gray-300 focus:border-gray-900"
                      placeholder={
                        language === "es" ? "Tu Nombre" : "Your Name"
                      }
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email" className="text-gray-900">
                      {language === "es" ? "Tu correo" : "Your Email"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      required
                      onChange={handleChange}
                      name="email"
                      aria-labelledby="email"
                      className="border-gray-300 focus:border-gray-900"
                      placeholder={
                        language === "es" ? "Tu correo" : "Your Email"
                      }
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="space-y-2"
                >
                  <Label htmlFor="project" className="text-gray-900">
                    {language === "es" ? "Tipo de Proyecto" : "Project Type"}
                  </Label>
                  <Input
                    type="text"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-gray-900"
                    placeholder={
                      language === "es" ? "Tipo de Proyecto" : "Project Type"
                    }
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="space-y-2"
                >
                  <Label htmlFor="message" className="text-gray-900">
                    {language === "es" ? "Mensaje" : "Message"}
                  </Label>
                  <Textarea
                    name="message"
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-labelledby="message"
                    className="border-gray-300 focus:border-gray-900 min-h-[120px]"
                    placeholder={
                      language === "es" ? "Tu mensaje" : "Your message"
                    }
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gray-900 text-white hover:bg-gray-800 font-semibold"
                  >
                    {language === "es" ? "Enviar" : "Send"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
