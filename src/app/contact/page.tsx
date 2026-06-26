'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import { useContactPage } from './contact';
import { Button } from '../../components/Button';

export default function ContactPage() {
  const {
    register,
    errors,
    submitted,
    handleSubmit,
    toastMessage
  } = useContactPage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-fade-in">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-4xl font-extrabold text-txt-main tracking-tight">
          Contact Us
        </h1>
        <p className="text-txt-muted text-sm leading-relaxed">
          Have a question about our high-performance electronics or shipping terms? Send us a message, and our crew will get back to you shortly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-bg-card border border-border-main p-6 rounded-2xl shadow-sm space-y-6">
            <h3 className="font-bold text-txt-main text-lg border-b border-border-main pb-3">
              Office Information
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-semibold text-txt-main text-sm">Company Address</h4>
                  <p className="text-xs text-txt-muted mt-1 leading-relaxed">
                    100 Innovation Parkway, Suite 500<br />
                    Silicon Valley, CA 94025, USA
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-semibold text-txt-main text-sm">Email Contact</h4>
                  <p className="text-xs text-txt-muted mt-1 font-medium">
                    support@electroshow.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="p-2.5 bg-brand-primary/10 text-brand-primary rounded-xl flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-semibold text-txt-main text-sm">Call Support</h4>
                  <p className="text-xs text-txt-muted mt-1 font-medium">
                    +1 (555) 019-2834
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-bg-card border border-border-main p-6 md:p-8 rounded-2xl shadow-sm">
            <h3 className="font-bold text-txt-main text-lg border-b border-border-main pb-3 mb-6">
              Send a Message
            </h3>
            
            {submitted ? (
              <div className="p-5 bg-brand-success/10 border border-brand-success/20 text-brand-success rounded-xl flex items-start gap-3 animate-fade-in">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm">Message Sent Successfully!</h4>
                  <p className="text-xs text-txt-muted mt-1 leading-relaxed">
                    Thank you for reaching out. We have logged your enquiry, and an electronic specialist will email you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="text-xs font-semibold text-txt-muted block mb-1">
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your name"
                      {...register('name', { required: 'Name is required.' })}
                      className={`w-full px-4 py-2.5 bg-bg-alt border rounded-xl text-sm text-txt-main placeholder-txt-dim focus:outline-none focus:ring-1 transition-all ${
                        errors.name
                          ? 'border-brand-danger focus:border-brand-danger focus:ring-brand-danger/20'
                          : 'border-border-main focus:border-brand-primary focus:ring-brand-primary'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-brand-danger font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-xs font-semibold text-txt-muted block mb-1">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="text"
                      placeholder="Your email address"
                      {...register('email', {
                        required: 'Email is required.',
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: 'Please enter a valid email address.'
                        }
                      })}
                      className={`w-full px-4 py-2.5 bg-bg-alt border rounded-xl text-sm text-txt-main placeholder-txt-dim focus:outline-none focus:ring-1 transition-all ${
                        errors.email
                          ? 'border-brand-danger focus:border-brand-danger focus:ring-brand-danger/20'
                          : 'border-border-main focus:border-brand-primary focus:ring-brand-primary'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-brand-danger font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="text-xs font-semibold text-txt-muted block mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Describe your enquiry here (minimum 10 characters)..."
                    {...register('message', {
                      required: 'Message is required.',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters long.'
                      }
                    })}
                    className={`w-full px-4 py-2.5 bg-bg-alt border rounded-xl text-sm text-txt-main placeholder-txt-dim focus:outline-none focus:ring-1 transition-all ${
                      errors.message
                        ? 'border-brand-danger focus:border-brand-danger focus:ring-brand-danger/20'
                        : 'border-border-main focus:border-brand-primary focus:ring-brand-primary'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-brand-danger font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </span>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-bg-card border border-brand-primary/30 text-txt-main px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in ring-4 ring-brand-primary/10">
          <span className="p-1 bg-brand-primary text-white rounded-lg">
            <Mail className="w-4 h-4" />
          </span>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
