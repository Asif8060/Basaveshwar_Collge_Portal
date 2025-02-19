import React from 'react'
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from 'antd'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup'


const Register = () => {

    const {loading, error, registerUser} = useSignup();

    const handleRegister = (values) => {
        registerUser(values);
    }

    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <Card>
                <Flex>
                    {/* form */}
                    <Flex vertical flex={1}>
                        <Typography.Title level={3} strong className='title text-red-600'>
                            Create an account
                        </Typography.Title>
                        <Typography.Text type='secondary' strong className='slogan'>Join for exclusive access</Typography.Text>

                        <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
                            <Form.Item
                                label='Full Name'
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your full name',
                                    }
                                ]}
                            >
                                <Input size='large' placeholder='Enter your full name' autoComplete="off" />
                            </Form.Item>
                            <Form.Item
                                label='Email'
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email',
                                    },
                                    {
                                        type: 'email',
                                        message: 'The input is not valid Email'
                                    }
                                ]}
                            >
                                <Input size='large' placeholder='Enter your email' autoComplete="off" />
                            </Form.Item>
                            <Form.Item
                                label='Password'
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password',
                                    }
                                ]}
                            >
                                <Input.Password size='large' placeholder='Enter your password' autoComplete="new-password" />
                            </Form.Item>
                            <Form.Item
                                label='Password'
                                name="passwordConfirm"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Confirm Password',
                                    }
                                ]}
                            >
                                <Input.Password size='large' placeholder='Re-enter your password' />
                            </Form.Item>
                            {error && <Alert description={error} type='error' showIcon closable className='alert' />}
                            <Form.Item>
                                <Button
                                    type={`${loading ? '' : 'primary'}`}
                                    htmlType='submit'
                                    size='large'
                                    className='btn'
                                >
                                    {loading ? <Spin /> : 'Create Account'}
                                    
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                
                                <Link to="/login">
                                    <Button size='large' className='btn'>Sign In</Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </Flex>

                    {/* Image */}
                    <Flex flex={1}>
                        <img className='auth-img h-[600px]' src='/register.png' alt="" />
                    </Flex>
                </Flex>
            </Card>
        </div>
    )
}

export default Register