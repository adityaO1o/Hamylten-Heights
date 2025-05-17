import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FloatingEnquireButton = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Google Form entry IDs
    const formBody = new URLSearchParams({
      'entry.404169681': formData.name,
      'entry.1438851795': formData.email,
      'entry.1612487710': formData.phone,
      'entry.772243822': formData.message,
    });

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSe7kstdYQeYz_kNjRqirhGWLTamnGyhyNGRJlOIe7E6hhQ2cw/formResponse",
        {
          method: "POST",
          mode: "no-cors", // IMPORTANT: This avoids CORS errors
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody.toString(),
        }
      );

      toast({
        title: "Success",
        description: "Thank you! Your enquiry has been sent."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setOpen(false);
    } catch (err) {
      toast({
        title: "Server Error",
        description: "Could not connect to server. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 rounded-full bg-hamylten-gold hover:bg-hamylten-darkgold text-hamylten-navy shadow-lg transition-transform transform hover:scale-110 animate-enter-custom"
        aria-label="Enquire Now"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="ml-2 font-bold">Enquire Now</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="animate-enter-custom sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="font-playfair text-2xl text-hamylten-navy">
                Enquire <span className="text-hamylten-gold">Now</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </DialogTitle>
          </DialogHeader>

          <div className="py-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="float-name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Your Name*
                </label>
                <Input
                  id="float-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="border-gray-300 focus:ring-hamylten-gold focus:border-hamylten-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="float-email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email Address*
                </label>
                <Input
                  type="email"
                  id="float-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="border-gray-300 focus:ring-hamylten-gold focus:border-hamylten-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="float-phone"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Phone Number*
                </label>
                <Input
                  type="tel"
                  id="float-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="border-gray-300 focus:ring-hamylten-gold focus:border-hamylten-gold"
                />
              </div>

              <div>
                <label
                  htmlFor="float-message"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <Textarea
                  id="float-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="I'm interested in knowing more about..."
                  className="border-gray-300 focus:ring-hamylten-gold focus:border-hamylten-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-hamylten-navy hover:bg-hamylten-navy/80 text-white font-bold px-6 py-2 rounded transition-all transform hover:scale-105"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingEnquireButton;
