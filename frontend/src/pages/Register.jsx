import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { BASE_URL } from '../utils/config';

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
        setError('');
        setPasswordError('');
    };

    const validatePassword = () => {
        if (credentials.password !== credentials.confirmPassword) {
            setPasswordError('Passwords do not match!');
            return false;
        }
        if (credentials.password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            return false;
        }
        return true;
    };

    const handleClick = async e => {
        e.preventDefault();
        if (!validatePassword()) return;

        setIsLoading(true);
        setError('');
        
        try {
            const res = await fetch(`${BASE_URL}/auth/register`, {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            const result = await res.json();
            
            if (!res.ok) {
                setError(result.message || 'Registration failed. Please try again.');
                return;
            }
            
            navigate('/login');
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className='m-auto'>
                        <div className="login__container">
                            <div className="login__form">
                                <h2>Create Account</h2>
                                <p>Join us to start your journey</p>

                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}

                                <Form onSubmit={handleClick}>
                                    <FormGroup>
                                        <input
                                            type="text"
                                            placeholder='Username'
                                            required
                                            id="username"
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <input
                                            type="email"
                                            placeholder='Email'
                                            required
                                            id="email"
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <input
                                            type="password"
                                            placeholder='Password'
                                            required
                                            id="password"
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <input
                                            type="password"
                                            placeholder='Confirm Password'
                                            required
                                            id="confirmPassword"
                                            onChange={handleChange}
                                            disabled={isLoading}
                                        />
                                    </FormGroup>

                                    {passwordError && (
                                        <div className="alert alert-warning" role="alert">
                                            {passwordError}
                                        </div>
                                    )}

                                    <Button 
                                        className='btn auth__btn' 
                                        type='submit'
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Creating Account...' : 'Create Account'}
                                    </Button>
                                </Form>
                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;
