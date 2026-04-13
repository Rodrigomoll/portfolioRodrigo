'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mwvwjpdo");

    if (state.succeeded) {
        return (
            <div className="border border-zinc-700 p-10 w-full max-w-lg text-center">
                <h2 className="text-white text-3xl font-bold mb-2">Message sent.</h2>
                <p className="text-zinc-500 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                <div className="flex flex-col gap-2">
                    <label className="text-zinc-500 text-xs tracking-widest uppercase">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Rodrigo Mollocondo"
                        className="bg-transparent border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-600"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-zinc-500 text-xs tracking-widest uppercase">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="rodrigo@example.com"
                        className="bg-transparent border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-600"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-zinc-500 text-xs tracking-widest uppercase">Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        placeholder="Write your message here..."
                        className="bg-transparent border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-zinc-600 resize-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
                </div>

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="relative overflow-hidden border border-white text-white px-8 py-3 text-xs tracking-[0.2em] uppercase group transition-all duration-300 disabled:opacity-50"
                >
                    <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                    <span className="relative group-hover:text-black transition-colors duration-300">
                        Send Message
                    </span>
                </button>

            </form>
        </div>
    );
}