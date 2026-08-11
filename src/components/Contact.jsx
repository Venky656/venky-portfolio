import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Send, Check, FileText, Phone as PhoneLucide } from 'lucide-react'
import Reveal from './Reveal'
import { profile } from '../data/portfolioData'

const mono = { fontFamily: "'Share Tech Mono', monospace" }

const ClipboardIcon = ({ className }) => (
  <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
  </svg>
)

const ClipboardCheckIcon = ({ className }) => (
  <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
  </svg>
)

const EmailIcon = ({ className }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 295.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L288 310.4c-11.4 8.5-27 8.5-38.4 0L0 176z" />
  </svg>
)

const LocationIcon = ({ className }) => (
  <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
  </svg>
)

const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 496 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6.8 5.5-.3 6.2-2.3.7-2-1.3-4.3-4.3-5.1-2.6-.7-5.5.4-6.2 2.5zm-29-2.4c-1.7 1.7-1.1 4.3 1.4 5.7 2.5 1.5 5.4.7 7.1-1 1.7-1.7 1.1-4.3-1.4-5.7-2.5-1.5-5.4-.7-7.1 1zm39.5-21.3c-3.3-1.1-7.1.1-8.5 2.7-1.4 2.5-.2 5.3 3.1 6.4 3.3 1.1 7.1-.1 8.5-2.7 1.4-2.5.2-5.3-3.1-6.4zM248 8C111.1 8 0 119.1 0 256c0 112 73.3 206.6 175.5 239.2 12.8 2.4 17.5-5.5 17.5-12.2 0-6-.2-22.3-.3-43.6-71.3 15.4-86.4-36.3-86.4-36.3-11.6-29.5-28.4-37.4-28.4-37.4-23.2-15.9 1.7-15.6 1.7-15.6 25.7 1.8 39.2 26.4 39.2 26.4 22.8 39.1 59.8 27.7 74.4 21.2 2.3-16.5 8.9-27.7 16.2-34.1-57-6.5-116.6-28.5-116.6-126.8 0-28 10-50.9 26.3-68.9-2.6-6.5-11.4-32.6 2.5-67.9 0 0 21.5-6.9 70.3 26.3 20.4-5.6 42.2-8.5 63.8-8.6 21.6.1 43.4 3 63.8 8.6 48.8-33.2 70.2-26.3 70.2-26.3 14 35.3 5.1 61.4 2.5 67.9 16.4 18 26.3 40.9 26.3 68.9 0 98.6-59.8 120.4-116.8 126.8 9.2 7.9 17.5 23.5 17.5 47.4 0 34.3-.3 62-.3 70.5 0 6.8 4.7 14.6 17.7 12.1C424.7 462.6 498 367.8 498 256 498 119.1 386.9 8 252 8z" />
  </svg>
)

const LinkedinIcon = ({ className }) => (
  <svg viewBox="0 0 448 512" fill="currentColor" className={className} aria-hidden="true">
    <path d="M100.3 448H7V199.6h93.3V448zM53.8 138.2c-30 0-54.4-24.4-54.4-54.4S23.8 29.4 53.8 29.4s54.4 24.4 54.4 54.4-24.4 54.4-54.4 54.4zM447.7 448h-93.4V302.4c0-34.7-1-79.2-48.2-79.2-48.2 0-55.6 37.7-55.6 76.7V448h-93.4V199.6h89.7v40.8h1.2c12.4-23.6 42.8-48.6 88.1-48.6 94.3 0 111.8 62.1 111.8 142.8V448z" />
  </svg>
)

const contactRows = [
  {
    key: 'email',
    label: 'By email',
    value: 'venkaiahkalikaya123@gmail.com',
    href: 'mailto:venkaiahkalikaya123@gmail.com',
    icon: EmailIcon,
  },
  {
    key: 'phone',
    label: 'By phone',
    value: '+91 90009 60788',
    href: 'tel:+919000960788',
    icon: PhoneLucide,
  },
  {
    key: 'address',
    label: 'My address',
    value: 'Ongole, Andhra Pradesh, India',
    href: undefined,
    icon: LocationIcon,
  },
]

const socials = [
  { label: 'GitHub', url: 'https://github.com/Venky656', icon: GithubIcon },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/venkaiah-swamy-kalikaya-236208295/', icon: LinkedinIcon },
]

const inputClasses =
  'w-full rounded-xl border border-border bg-card px-4 py-4 text-base tracking-wide text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/25'

function ContactCard() {
  const [copied, setCopied] = useState(null)
  const [toast, setToast] = useState(null)

  const copy = (row) => {
    navigator.clipboard?.writeText(row.value).catch(() => {})
    setCopied(row.key)
    setToast(`${row.label} copied!`)
    setTimeout(() => setCopied(null), 2000)
    setTimeout(() => setToast(null), 3000)
  }

  return (
    <div
      className="relative overflow-hidden rounded-3xl p-6 shadow-2xl md:p-8"
      style={{
        background: 'linear-gradient(170deg, color-mix(in srgb, var(--color-secondary) 100%, transparent) 0%, color-mix(in srgb, var(--color-primary) 25%, var(--color-secondary)) 100%)',
      }}
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--color-primary) 60%, transparent) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--color-secondary) 80%, transparent) 0%, transparent 70%)' }}
      />

      <div className="relative z-10">
        <h2
          className="mb-8 text-[1.8rem] font-bold leading-8 text-foreground/90 md:text-[2.4rem]"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          Get in touch
        </h2>

        <div className="flex flex-col gap-3">
          {contactRows.map((row, i) => {
            const Icon = row.icon
            const isCopied = copied === row.key
            return (
<motion.div
            key={row.key}
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.9, delay: i * 0.15 }}
            className="w-full"
          >
                <div
                  className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.04] p-3 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.07]"
                >
                  {/* icon */}
                  <span
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 group-hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 20%, transparent), color-mix(in srgb, var(--color-primary) 8%, transparent))',
                    }}
                  >
                    <Icon className="size-5 text-primary" />
                  </span>

                  {/* text */}
                  {row.href ? (
                    <a href={row.href} className="flex min-w-0 flex-1 flex-col">
                      <span className="text-xs tracking-widest text-muted-foreground/70" style={mono}>{row.label}</span>
                      <span className="truncate text-sm font-medium text-foreground/90" style={mono}>{row.value}</span>
                    </a>
                  ) : (
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="text-xs tracking-widest text-muted-foreground/70" style={mono}>{row.label}</span>
                      <span className="truncate text-sm font-medium text-foreground/90" style={mono}>{row.value}</span>
                    </div>
                  )}

                  {/* clipboard */}
                  <button
                    onClick={() => copy(row)}
                    aria-label={`Copy ${row.label}`}
                    className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-white/5 bg-white/[0.03] transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 active:scale-90"
                  >
                    <AnimatePresence mode="wait">
                      {isCopied ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <ClipboardCheckIcon className="size-4 text-primary" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <ClipboardIcon className="size-4 text-muted-foreground/60" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* divider */}
        <div className="my-6 h-px w-full bg-white/10" />

        {/* socials */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs tracking-widest text-muted-foreground/60 uppercase" style={mono}>Follow me</h3>
          <div className="flex gap-3">
            {socials.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="group/social flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.04] px-4 py-3 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.08]"
                >
                  <Icon className="size-4 text-muted-foreground transition-colors duration-300 group-hover/social:text-primary" />
                  <span className="text-sm text-foreground/70 transition-colors duration-300 group-hover/social:text-foreground" style={mono}>{s.label}</span>
                </motion.a>
              )
            })}
          </div>
        </div>

        {/* resume */}
        <div className="mt-5">
          <p className="flex items-center gap-2 text-sm text-muted-foreground/60" style={mono}>
            <FileText className="size-4 text-primary/60" /> Resume — coming soon
          </p>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0.4, duration: 0.5 }}
            className="pointer-events-none fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/90 px-4 py-3 text-white shadow-xl backdrop-blur-xl"
            style={mono}
          >
            <span className="flex size-6 items-center justify-center rounded-full bg-white/20">
              <Check className="size-4" />
            </span>
            <span className="text-sm font-semibold tracking-wide">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ firstname: '', lastname: '', email: '', company: '', message: '' })
  const [consent, setConsent] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!consent) return
    const subject = encodeURIComponent(`Portfolio message from ${form.firstname} ${form.lastname}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.firstname} ${form.lastname} (${form.email})${form.company ? ` @ ${form.company}` : ''}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
          {/* Left: title + form */}
          <div className="flex w-full flex-col lg:w-1/2">
            <Reveal>
              <h2
                className="text-[2rem] font-bold leading-tight text-primary md:text-[2.8rem]"
                style={{ fontFamily: "'Orbitron', sans-serif" }}
              >
                Just say Hello !
              </h2>
              <p
                className="mb-8 mt-2 text-base text-muted-foreground md:text-lg"
                style={mono}
              >
                Let me know more about you
              </p>
            </Reveal>

            <Reveal delay={0.1} variant="slideRight">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {sent ? (
                  <div className="flex flex-col items-center gap-3 py-10 text-center">
                    <h3 className="font-heading text-lg font-semibold">Thanks!</h3>
                    <p className="text-sm text-muted-foreground">
                      Your email app should open with your message. I'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        name="firstname"
                        required
                        value={form.firstname}
                        onChange={handleChange}
                        placeholder="Firstname*"
                        className={inputClasses}
                      />
                      <input
                        name="lastname"
                        required
                        value={form.lastname}
                        onChange={handleChange}
                        placeholder="Lastname*"
                        className={inputClasses}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email*"
                        className={inputClasses}
                      />
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company"
                        className={inputClasses}
                      />
                    </div>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Message*"
                      className={`${inputClasses} resize-none`}
                    />
                    <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground/80" style={mono}>
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 size-4 shrink-0 accent-primary"
                      />
                      I consent to the use of my personal data for the purpose of responding to my inquiry.
                    </label>
                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        disabled={!consent}
                        className="flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50 active:scale-95 disabled:opacity-40 disabled:hover:scale-100"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                      >
                        <span className="tracking-widest">Send</span>
                        <Send className="size-5" />
                      </button>
                    </div>
                  </>
                )}
              </form>
            </Reveal>
          </div>

          {/* Right: Get in touch card */}
          <div className="w-full lg:w-fit lg:min-w-[24rem]">
            <Reveal delay={0.2} variant="slideLeft">
              <ContactCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
