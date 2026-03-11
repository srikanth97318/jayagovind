import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project idea, internship opportunity, or collaboration in mind?
            Feel free to reach out — I’d love to connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-panel p-8 rounded-3xl space-y-8">

              <h3 className="text-2xl font-display font-bold">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:srikanth97318@gmail.com"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    srikanth97318@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:+919731899969"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    +91 97318 99969
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-medium">
                    Electronic City, Bengaluru, India
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl">

              <form
                action="https://formspree.io/f/your-form-id"
                method="POST"
                className="space-y-6"
              >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="h-14 rounded-xl px-4 bg-background/50 border border-border"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="h-14 rounded-xl px-4 bg-background/50 border border-border"
                  />

                </div>

                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full min-h-[160px] rounded-xl p-4 bg-background/50 border border-border resize-none"
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-base rounded-xl hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] transition-all"
                >
                  <div className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </div>
                </Button>

              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}