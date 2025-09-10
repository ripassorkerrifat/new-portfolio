import Input from "../../components/input";
import Button from "../../components/button";
import React from "react";

export default function ContactPage() {
    return (
        <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-24 bg-[var(--primary-bg)]">
            <div className="max-w-lg w-full bg-white/10 rounded-2xl shadow-xl p-8 backdrop-blur-md border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-2 text-center">
                    Contact Me
                </h2>
                <p className="text-white/70 mb-8 text-center">
                    Have a question or want to work together? Fill out the form
                    below.
                </p>
                <form className="flex flex-col gap-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-white/80 mb-1 font-medium">
                            Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-white/80 mb-1 font-medium">
                            Email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-white/80 mb-1 font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Your message..."
                            required
                            className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-[var(--button-color)] transition-all duration-200 resize-none"
                        />
                    </div>
                    <Button type="submit" className="w-full text-lg py-3 mt-2">
                        Send Message
                    </Button>
                </form>
            </div>
        </section>
    );
}
