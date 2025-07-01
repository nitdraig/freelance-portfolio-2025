import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialSection = ({ language }: any) => {
  // const testimonials = [
  //   (es : {
  //     testimonial1: {
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  //       name: "John Doe",
  //       role: "CEO",
  //     },
  //   },
  //   en: {
  //     testimonial1: {
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  //       name: "John Doe",
  //       role: "CEO",
  //     },
  //   },
  // )];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 bg-white"
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
            {language === "en" ? "Testimonials" : "Testimonios"}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            content[language].testimonials.testimonial1,
            content[language].testimonials.testimonial2,
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Card className="border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {testimonial.text}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold"
                    >
                      {testimonial.author.charAt(0)}
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
