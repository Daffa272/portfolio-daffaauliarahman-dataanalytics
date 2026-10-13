import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone,
  Linkedin, 
  Github, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  MessageSquare,
  Clock
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject line is required.';
    if (!formData.message.trim()) {
      errs.message = 'Message content cannot be blank.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your inquiry.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus('submitting');

    // Simulate connection to email service
    setTimeout(() => {
      setStatus('submitted');
    }, 900);
  };

  const mailtoHref = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Data Analyst Inquiry'
  )}&body=${encodeURIComponent(
    `Hello Rian,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 font-mono">
            07. Initiate Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mt-2 mb-3">
            Let's Discuss High-Impact Data Opportunities
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Open for Data Analyst, Research & Foresight Specialist, Economic / Financial Modeling, and Digital Solution Developer roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs space-y-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Direct Channels & Coordinates
              </h3>

              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/60">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href="tel:+62895374774041"
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
                  >
                    +62 895-3747-74041
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                    Base Location
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block">
                    Turnaround Cadence
                  </span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">
                    Usually replies within 24 hours
                  </span>
                </div>
              </div>

              {/* Professional Networks */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  Network Links
                </span>
                <div className="flex flex-col gap-2">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-600" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-slate-800 dark:text-white" />
                      <span>GitHub Analytics Repos</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Send an Inquiry Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                All fields are validated. In this demo environment, you can also launch your pre-filled email client directly.
              </p>

              {status === 'submitted' ? (
                <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        Form Validation Passed
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        To connect this form to a production email inbox, simply wire the submission to Formspree, Resend, or your server route.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-blue-200 dark:border-blue-900/60 flex flex-wrap items-center gap-3">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Default Email App</span>
                    </a>
                    <button
                      onClick={() => setStatus('idle')}
                      className="px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Amanda Chen"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                          errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-700'
                        } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="amanda@enterprise.com"
                        className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                          errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-700'
                        } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Subject / Inquiry Type *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Senior Data Analyst Role / Dashboard Audit"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                        errors.subject ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-700'
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your organization's analytics objectives, project scope, or role specifications..."
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border ${
                        errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-slate-700'
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Form Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 active:bg-blue-700 transition-colors shadow-sm disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <span>Validating Transmission...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoHref}
                      className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      Prefer default email client? Click here
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
