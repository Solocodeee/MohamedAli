import { useState, type FormEvent } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { personalInfo } from '@/data/personalInfo';
import './Contact.css';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend is wired up yet — replace this with a real submit handler
    // (e.g. an API route, mailto link, or a service like Formspree).
    setStatus('sent');
  }

  return (
    <section id="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your sales team"
          description="Open to Sales Manager and Business Development roles, and consulting engagements."
        />

        <div className="contact">
          <div className="contact__info">
            <a className="contact__row" href={`mailto:${personalInfo.email}`}>
              <span className="contact__label mono">Email</span>
              <span className="contact__value">{personalInfo.email}</span>
            </a>
            {personalInfo.phones.map((phone) => (
              <a className="contact__row" href={`tel:${phone}`} key={phone}>
                <span className="contact__label mono">Phone</span>
                <span className="contact__value">{phone}</span>
              </a>
            ))}
            <a className="contact__row" href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              <span className="contact__label mono">LinkedIn</span>
              <span className="contact__value">Connect on LinkedIn</span>
            </a>
            <div className="contact__row contact__row--static">
              <span className="contact__label mono">Location</span>
              <span className="contact__value">{personalInfo.location}</span>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                required
                value={values.name}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={values.email}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
              />
            </div>
            <button type="submit" className="contact__submit">
              {status === 'sent' ? 'Message ready to send ✓' : 'Send Message'}
            </button>
            {status === 'sent' && (
              <p className="contact__note">
                Form captured locally — connect it to an email service or API route to deliver it.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
