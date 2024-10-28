import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!validateEmail(formData.email)) newErrors.email = "Invalid email address";
        if (!formData.message) newErrors.message = "Message is required";
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
            // To hanlde form submission
        }
    };


    return (
        <section id="contact" >
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p>{errors.name}</p>}
                <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p>{errors.email}</p>}
                <input
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <p>{errors.message}</p>}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default Contact;