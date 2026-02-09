"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  discoveryFormSchema,
  type DiscoveryFormData,
  formatDiscoveryBodyForOwner,
  NECESIDAD_OPTIONS,
  PRESUPUESTO_OPTIONS,
  URGENCIA_OPTIONS,
  DECISION_OPTIONS,
} from "@/app/src/lib/contact/schema";
import { sendToMailprex } from "@/app/src/lib/contact/sendToMailprex";
import { sendThankYouEmail } from "@/app/actions/sendThankYouEmail";

const ContactSection = ({ language }: { language: "es" | "en" }) => {
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formState, setFormState] = useState<DiscoveryFormData>({
    fullname: "",
    email: "",
    necesidad: "desarrollo",
    presupuesto: "2k-5k",
    urgencia: "2-semanas",
    decision: "si",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = discoveryFormSchema.safeParse(formState);
    if (!parsed.success) {
      const first = parsed.error.flatten().fieldErrors;
      const msg = Object.values(first).flat().join(" ") || (language === "es" ? "Revisa los campos." : "Check the fields.");
      toast.error(msg);
      return;
    }
    const data = parsed.data;
    setLoading(true);

    const webName = "Portfolio Freelance Discovery";
    const emailDestiny = process.env.NEXT_PUBLIC_EMAIL_DESTINY?.trim() || "";
    const formToken = process.env.NEXT_PUBLIC_MAILPREX_FORM_TOKEN?.trim() || "";

    if (!emailDestiny || !formToken) {
      toast.error(
        language === "es"
          ? "Falta configurar NEXT_PUBLIC_EMAIL_DESTINY y NEXT_PUBLIC_MAILPREX_FORM_TOKEN en .env"
          : "Missing NEXT_PUBLIC_EMAIL_DESTINY and NEXT_PUBLIC_MAILPREX_FORM_TOKEN in .env"
      );
      setLoading(false);
      return;
    }

    const bodyForOwner = formatDiscoveryBodyForOwner(data, language);

    const [mailprexResult, thankYouResult] = await Promise.all([
      sendToMailprex({
        fullname: data.fullname,
        email: data.email,
        service: data.necesidad,
        message: bodyForOwner,
        webName,
        emailDestiny,
        formToken,
      }),
      sendThankYouEmail({
        to: data.email,
        name: data.fullname,
        language,
      }),
    ]);

    if (!mailprexResult.ok) {
      const errMsg = typeof mailprexResult.error === "string" ? mailprexResult.error : "";
      toast.error(
        language === "es"
          ? `Error al enviar. ${errMsg || "Inténtalo más tarde."}`
          : `Error sending. ${errMsg || "Try again later."}`
      );
      setLoading(false);
      return;
    }

    if (!thankYouResult.ok) {
      toast.warning(
        language === "es"
          ? "Recibí tu solicitud, pero no pude enviarte el email de confirmación."
          : "Request received, but the confirmation email could not be sent."
      );
    }
    setShowSuccessModal(true);

    setFormState({
      fullname: "",
      email: "",
      necesidad: "desarrollo",
      presupuesto: "2k-5k",
      urgencia: "2-semanas",
      decision: "si",
      message: "",
    });
    setLoading(false);
  };

  const isEs = language === "es";

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
            {isEs ? "¿Listo para Lanzar tu MVP?" : "Ready to Launch Your MVP?"}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {isEs
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="fullname" className="text-gray-900">
                      {isEs ? "Nombre completo" : "Full Name"}
                    </Label>
                    <Input
                      type="text"
                      id="fullname"
                      required
                      value={formState.fullname}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, fullname: e.target.value }))
                      }
                      className="border-gray-300 focus:border-gray-900"
                      placeholder={isEs ? "Tu Nombre" : "Your Name"}
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
                      {isEs ? "Tu correo" : "Your Email"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, email: e.target.value }))
                      }
                      className="border-gray-300 focus:border-gray-900"
                      placeholder={isEs ? "Tu correo" : "Your Email"}
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
                  <Label className="text-gray-900">
                    {isEs ? "Necesidad" : "Need"}
                  </Label>
                  <Select
                    value={formState.necesidad}
                    onValueChange={(v) =>
                      setFormState((s) => ({
                        ...s,
                        necesidad: v as DiscoveryFormData["necesidad"],
                      }))
                    }
                  >
                    <SelectTrigger className="border-gray-300 focus:border-gray-900">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {NECESIDAD_OPTIONS.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {isEs ? o.labelEs : o.labelEn}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.55 }}
                  className="space-y-2"
                >
                  <Label className="text-gray-900">
                    {isEs ? "Presupuesto estimado" : "Estimated budget"}
                  </Label>
                  <Select
                    value={formState.presupuesto}
                    onValueChange={(v) =>
                      setFormState((s) => ({
                        ...s,
                        presupuesto: v as DiscoveryFormData["presupuesto"],
                      }))
                    }
                  >
                    <SelectTrigger className="border-gray-300 focus:border-gray-900">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PRESUPUESTO_OPTIONS.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {isEs ? o.labelEs : o.labelEn}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="space-y-2"
                >
                  <Label className="text-gray-900">
                    {isEs ? "Urgencia" : "Urgency"}
                  </Label>
                  <Select
                    value={formState.urgencia}
                    onValueChange={(v) =>
                      setFormState((s) => ({
                        ...s,
                        urgencia: v as DiscoveryFormData["urgencia"],
                      }))
                    }
                  >
                    <SelectTrigger className="border-gray-300 focus:border-gray-900">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {URGENCIA_OPTIONS.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {isEs ? o.labelEs : o.labelEn}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.65 }}
                  className="space-y-2"
                >
                  <Label className="text-gray-900">
                    {isEs
                      ? "¿Sos dueño o decisor del proyecto?"
                      : "Are you the project owner or decision maker?"}
                  </Label>
                  <Select
                    value={formState.decision}
                    onValueChange={(v) =>
                      setFormState((s) => ({
                        ...s,
                        decision: v as DiscoveryFormData["decision"],
                      }))
                    }
                  >
                    <SelectTrigger className="border-gray-300 focus:border-gray-900">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {DECISION_OPTIONS.map((o) => (
                        <SelectItem key={o.value} value={o.value}>
                          {isEs ? o.labelEs : o.labelEn}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="space-y-2"
                >
                  <Label htmlFor="message" className="text-gray-900">
                    {isEs ? "Mensaje adicional (opcional)" : "Additional message (optional)"}
                  </Label>
                  <Textarea
                    id="message"
                    rows={3}
                    value={formState.message ?? ""}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    className="border-gray-300 focus:border-gray-900 min-h-[80px]"
                    placeholder={
                      isEs ? "Algo más que quieras contar" : "Anything else you want to share"
                    }
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.75 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={loading}
                    size="lg"
                    className="w-full bg-gray-900 text-white hover:bg-gray-800 font-semibold"
                  >
                    {loading
                      ? isEs
                        ? "Enviando..."
                        : "Sending..."
                      : isEs
                        ? "Enviar solicitud"
                        : "Submit request"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl">
              {isEs ? "¡Solicitud enviada!" : "Request sent!"}
            </DialogTitle>
            <DialogDescription className="text-base">
              {isEs
                ? "Recibí tu mensaje. En las próximas 24-48 horas te escribiré para coordinar una breve conversación. Revisa tu correo: te envié un mensaje de confirmación."
                : "I received your message. I'll get in touch within 24-48 hours to schedule a short call. Check your inbox for a confirmation message."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center pt-2">
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="bg-gray-900 hover:bg-gray-800"
            >
              {isEs ? "Entendido" : "Got it"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default ContactSection;
