"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";

/* ── animation variants ─────────────────────────── */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" as const } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" as const, delay: 0.1 },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    transition: { duration: 0.3, ease: "easeIn" as const },
  },
};

const fieldContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

/* ── focus-glow input ───────────────────────────── */
function AuthInput({
  icon: Icon,
  type,
  placeholder,
  extra,
}: {
  icon: React.ElementType;
  type: string;
  placeholder: string;
  extra?: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <motion.div variants={fieldVariants}>
      <motion.div
        animate={{
          boxShadow: focused
            ? "0 0 0 2px rgba(99,102,241,0.55)"
            : "0 0 0 1px rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.25 }}
        className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3.5"
      >
        <Icon className="w-4 h-4 text-gray-400 shrink-0" />
        <input
          type={isPassword && show ? "text" : type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="text-gray-500 hover:text-gray-300 transition-colors"
          >
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
        {extra}
      </motion.div>
    </motion.div>
  );
}

/* ── modal ──────────────────────────────────────── */
export function AuthModal({
  defaultTab = "signin",
  onClose,
}: {
  defaultTab?: "signin" | "signup";
  onClose: () => void;
}) {
  const [tab, setTab] = useState<"signin" | "signup">(defaultTab);

  /* close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      {/* backdrop */}
      <motion.div
        key="overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
      />

      {/* modal card */}
      <motion.div
        key="modal"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="pointer-events-auto relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0d0d1a]/90 backdrop-blur-2xl p-8 shadow-2xl"
          style={{
            background:
              "linear-gradient(145deg, rgba(17,17,35,0.95) 0%, rgba(10,10,25,0.98) 100%)",
          }}
        >
          {/* glow orb */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-indigo-600/20 blur-3xl" />

          {/* close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          {/* logo */}
          <div className="flex items-center justify-center gap-1 mb-8">
            <span className="text-2xl font-black tracking-tight text-white">
              COIN<span className="text-indigo-400">99</span>
            </span>
          </div>

          {/* tab pills */}
          <div className="relative flex bg-white/5 rounded-xl p-1 mb-8 gap-1">
            {(["signin", "signup"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="relative flex-1 text-sm font-semibold py-2.5 rounded-lg z-10 transition-colors duration-200"
                style={{ color: tab === t ? "white" : "#6b7280" }}
              >
                {t === "signin" ? "Sign In" : "Sign Up"}
                {tab === t && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-lg bg-indigo-600"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* form */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              variants={fieldContainerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="flex flex-col gap-3"
            >
              {tab === "signup" && (
                <AuthInput icon={User} type="text" placeholder="Full name" />
              )}
              <AuthInput icon={Mail} type="email" placeholder="Email address" />
              <AuthInput icon={Lock} type="password" placeholder="Password" />
              {tab === "signup" && (
                <AuthInput icon={Lock} type="password" placeholder="Confirm password" />
              )}

              {/* forgot */}
              {tab === "signin" && (
                <motion.div variants={fieldVariants} className="text-right">
                  <button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                    Forgot password?
                  </button>
                </motion.div>
              )}

              {/* submit */}
              <motion.div variants={fieldVariants} className="mt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-indigo-900/40"
                >
                  {tab === "signin" ? "Sign In" : "Create Account"}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>

              {/* divider */}
              <motion.div variants={fieldVariants} className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs text-gray-600">or continue with</span>
                <div className="flex-1 h-px bg-white/10" />
              </motion.div>

              {/* social */}
              <motion.div variants={fieldVariants} className="grid grid-cols-2 gap-3">
                {["Google", "GitHub"].map((p) => (
                  <motion.button
                    key={p}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-2.5 text-sm text-gray-300 font-medium transition-all"
                  >
                    {p}
                  </motion.button>
                ))}
              </motion.div>

              {/* switch hint */}
              <motion.p variants={fieldVariants} className="text-center text-xs text-gray-600 mt-2">
                {tab === "signin" ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => setTab(tab === "signin" ? "signup" : "signin")}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
                >
                  {tab === "signin" ? "Sign Up" : "Sign In"}
                </button>
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
