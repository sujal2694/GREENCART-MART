// ...existing code...
import React, { useState } from 'react'
import './Contact.css'

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  contactMethod: 'email',
  message: '',
  agree: false
}

const Contact = () => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else if (!/^[0-9+\-() ]{7,20}$/.test(form.phone)) e.phone = 'Enter a valid phone'
    if (!form.address.trim()) e.address = 'Address is required'
    if (!form.city.trim()) e.city = 'City is required'
    if (!form.state.trim()) e.state = 'State is required'
    if (!form.zip.trim()) e.zip = 'ZIP / Postal code is required'
    if (!form.agree) e.agree = 'You must agree to be contacted'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    const eobj = validate()
    setErrors(eobj)
    if (Object.keys(eobj).length !== 0) return

    setStatus('sending')
    try {
      // Use Formsubmit.co AJAX endpoint to forward form to the provided email.
      // The endpoint will send the form contents to valsursujal59@gmail.com after verification.
      const endpoint = 'https://formsubmit.co/ajax/3933a6fe91d8b653efe4a8bcce3014c5 '
      const fd = new FormData()
      // append visible fields
      Object.entries({
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        state: form.state,
        zip: form.zip,
        contactMethod: form.contactMethod,
        message: form.message
      }).forEach(([k, v]) => fd.append(k, v))

      // Formsubmit special params
      fd.append('_subject', 'New GreenCart contact / order inquiry')
      fd.append('_captcha', 'false') // disable captcha (optional)
      fd.append('_template', 'table') // optional formatting

      const res = await fetch(endpoint, { method: 'POST', body: fd })
      const data = await res.json()
      if (res.ok && data.success !== false) {
        setStatus('success')
        setForm(initialState)
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="contact page-container">
      <h1>Contact / Order Inquiry</h1>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="field">
            <label>Full Name</label>
            <input name="name" value={form.name} onChange={handleChange} required />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>

          <div className="field">
            <label>Email</label>
            <input name="email" value={form.email} onChange={handleChange} required />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label>Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} required />
            {errors.phone && <small className="error">{errors.phone}</small>}
          </div>

          <div className="field">
            <label>Preferred Contact</label>
            <select name="contactMethod" value={form.contactMethod} onChange={handleChange}>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label>Address</label>
          <input name="address" value={form.address} onChange={handleChange} required />
          {errors.address && <small className="error">{errors.address}</small>}
        </div>

        <div className="row">
          <div className="field">
            <label>City</label>
            <input name="city" value={form.city} onChange={handleChange} required />
            {errors.city && <small className="error">{errors.city}</small>}
          </div>

          <div className="field">
            <label>State</label>
            <input name="state" value={form.state} onChange={handleChange} required />
            {errors.state && <small className="error">{errors.state}</small>}
          </div>

          <div className="field">
            <label>ZIP / Postal</label>
            <input name="zip" value={form.zip} onChange={handleChange} required />
            {errors.zip && <small className="error">{errors.zip}</small>}
          </div>
        </div>

        <div className="field">
          <label>Message / Order details</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows="4" />
        </div>

        <div className="row center">
          <label className="agree">
            <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
            I agree to be contacted about my request
          </label>
          {errors.agree && <small className="error">{errors.agree}</small>}
        </div>

        <div className="row actions">
          <button type="submit" className="submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Submit'}
          </button>
          <button type="button" className="reset-btn" onClick={() => { setForm(initialState); setErrors({}); setStatus(null) }}>
            Reset
          </button>
        </div>

        {status === 'success' && <div className="success">Thanks — your information was sent.</div>}
        {status === 'error' && <div className="error">Submission failed. Please try again later.</div>}
      </form>
    </div>
  )
}

export default Contact
// ...existing code...