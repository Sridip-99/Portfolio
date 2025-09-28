import { useState, useEffect} from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
  
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

const API_URL = import.meta.env.VITE_API_URL;
const baseURL = API_URL.replace(/\/+$/, ""); // Remove trailing slashes if any

const ContactForm = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;

    // Force email to lowercase
    if (name === "email") {
      value = value.toLowerCase();
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

    // Run validation
    if (!validate()) {
      return;
    }
console.log("Sending formData:", formData); //test
    try {
        const res = await fetch(`${baseURL}/contact/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (res.ok) {
        // onSuccess();
        toast.success("Message sent successfully", {
              duration: 3000,
              position: "bottom-right",
              style: {
                background: "#1e293b",
                color: "#fff",
                borderRadius: "12px",
                padding: "12px 18px",
                fontSize: "15px",
              },
              iconTheme: {
                primary: "#22c55e",
                secondary: "#fff",
              },
            });
        setFormData({ name: "", email: "", message: "" }); // reset fields
        } else {
          toast.error("Something went wrong", {
              duration: 3000,
              position: "bottom-right",
              style: {
                background: "#1e293b",
                color: "#fff",
                borderRadius: "12px",
                padding: "12px 18px",
                fontSize: "15px",
              },
              iconTheme: {
                primary: "#c52245ff",
                secondary: "#fff",
              },
            });
        }
    }
    catch (error) {
       toast.error("Server error", {
              duration: 3000,
              position: "bottom-right",
              style: {
                zIndex: 200,
                background: "#1e293b",
                color: "#ffffffbb",
                borderRadius: "12px",
                padding: "12px 18px",
                fontSize: "15px",
              },
              iconTheme: {
                primary: "#c52245ff",
                secondary: "#fff",
              },
        });
      }
    };


  return (
    <motion.form 
      onSubmit={handleSubmit}
      initial={isMobile ? { opacity: 0, y: -20 } : { opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-5 text-slate-300"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-slate-400"
        initial={isMobile ? { opacity: 0, y: -20 } : { opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h2>

      {/* Name */}
      <div>
        <input
          type="text"
          autoComplete="true"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full rounded-md border border-slate-500 bg-[#0000007f] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          autoComplete="true"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full rounded-md border border-slate-500 bg-[#0000007f] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full rounded-md border border-slate-500 bg-[#0000007f] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        className="cursor-pointer w-full py-3 bg-emerald-700 text-slate-100 rounded-lg font-semibold shadow-md hover:bg-emerald-800 transition"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  );
}

export default ContactForm;

