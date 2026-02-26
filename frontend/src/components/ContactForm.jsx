import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('http://localhost:8000/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to connect to the server.');
        }
    };

    return (
        <div className="max-w-xl mx-auto py-12 px-6">
            <h2 className="text-sm uppercase tracking-[0.3em] text-center mb-8 opacity-70">contact</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors placeholder:text-white/30"
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors placeholder:text-white/30"
                    />
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full bg-transparent border-b border-white/20 py-2 focus:border-white outline-none transition-colors placeholder:text-white/30 resize-none"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="text-sm uppercase tracking-widest border border-white/30 px-8 py-3 hover:bg-white hover:text-black transition-all disabled:opacity-50"
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
                {status === 'success' && (
                    <p className="text-center text-green-400 text-sm mt-4">Message sent successfully.</p>
                )}
                {status === 'error' && (
                    <p className="text-center text-red-400 text-sm mt-4">{errorMessage}</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
