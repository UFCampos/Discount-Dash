"use client";
import { useState } from 'react';
import style from './contact.module.css';

const Contact=() =>{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };

  return (
   <div>
   <div >
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.container}>
      <h1>Contact Us</h1>
        <div>
        <label htmlFor="name" className={style.label}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={style.inputField}
        />
</div>
        <div>
        <label htmlFor="email" className={style.label} >Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={style.inputField}
        />
</div>
      <div>
        <label htmlFor="message" className={style.label}>Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className={style.textareaField}
        />
</div>
        <button className={style.submitButton} type="submit">Send</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default Contact;