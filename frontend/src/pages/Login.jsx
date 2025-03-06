import React, { useState, useContext } from 'react';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { AuthContext } from '../components/context/AuthContext';
import { BASE_URL } from '../utils/config';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
        setError('');
    };

    const handleClick = async e => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        dispatch({ type: 'LOGIN_START' });
        
        try {
            const res = await fetch(`${BASE_URL}/auth/login`, {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(credentials),
            });
            const result = await res.json();
            
            if (!res.ok) {
                setError(result.message || 'Login failed. Please try again.');
                return;
            }
            
            dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
            navigate('/');
        } catch (err) {
            setError('An error occurred. Please try again.');
            dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
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
                                <h2>Welcome Back</h2>
                                <p>Please login to your account</p>
                                
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}

                                <Form onSubmit={handleClick}>
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

                                    <Button 
                                        className='btn auth__btn' 
                                        type='submit'
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Logging in...' : 'Login'}
                                    </Button>
                                </Form>
                                <p>Don't have an account? <Link to='/register'>Create Account</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
