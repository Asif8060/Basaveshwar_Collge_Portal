import React from 'react'
import { Alert, Button, Card, Flex, Form, Input, Spin, Typography } from 'antd'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

const Login = () => {
    const {error, loading, loginUser} = useLogin();
    const handleLogin = async (values) => {
        await loginUser(values);
    }
  return (
    <div className='h-[100vh] flex justify-center items-center'>
        <Card className='form-container'>
            <Flex>
                {/* Image */}
                <Flex flex={1}>
                    <img className='auth-img h-[600px]' src='/login.png' alt="" />
                </Flex>

                {/* form */}
                <Flex vertical flex={1}>
                    <Typography.Title level={3} strong className='title'>
                        Sign In
                    </Typography.Title>
                    <Typography.Text type='secondary' strong className='slogan'>Unlock your world!</Typography.Text>

                    <Form layout='vertical' onFinish={handleLogin} autoComplete='off'>
                        
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
                        {error && <Alert description={error} type='error' showIcon closable className='alert' />}
                        <Form.Item>
                            <Button
                                type={`${loading ? '' : 'primary'}`}
                                htmlType='submit'
                                size='large'
                                className='btn'
                            >
                                {loading ? <Spin /> : 'Sign In'}
                                
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            
                            <Link to="/">
                                <Button size='large' className='btn'>Create an account</Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </Flex>
            </Flex>
        </Card>
    </div>
  )
}

export default Login