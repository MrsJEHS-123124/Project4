import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function RegistrationPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        agree: false,
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };
    const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Invalid Username';
    if (formData.password.length < 8 || !/\d/.test(formData.password)) {
      newErrors.password = 'At least 8 characters and a number required';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.agree) newErrors.agree = 'You must accept the terms';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.post('/api/register', formData);
      setSuccess('Registration successful!');
    } catch (err) {
      setErrors({ username: 'Username already exists' });
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '600px' }}>
      <h2>Register to Soul-Fuel </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            value={formData.username}
            onChange={handleChange}
            isInvalid={!!errors.username}
          />
          <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            isInvalid={!!errors.confirmPassword}
          />
          <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
        </Form.Group>

        <Form.Check
          name="agree"
          type="checkbox"
          label="I agree to the Terms and Conditions and Privacy Policy"
          checked={formData.agree}
          onChange={handleChange}
          isInvalid={!!errors.agree}
        />
        <Form.Control.Feedback type="invalid">{errors.agree}</Form.Control.Feedback>

        <Button variant="success" type="submit" className="mt-3">Register</Button>
        {success && <Alert variant="success" className="mt-3">{success}</Alert>}
      </Form>
    </Container>
  );
}

export default RegistrationPage;





