import { Avatar, Button, Card, Flex, Typography } from 'antd'
import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { UserOutlined } from '@ant-design/icons'

const UserProfile = () => {
  const {userData, logout} = useAuth();
  const handleLogout = async () => {
    await logout();
  }
  return (
    <Card className='md:w-[450px] md:mr-[-80px] m-0 w-[100px] h-[80px] hover:overflow-visible overflow-hidden bg-transparent border-hidden'>
      <Flex vertical gap='small' className='flex flex-col items-center justify-center'>
          <div className='md:flex md:items-center md:gap-4 hidden cursor-pointer'>
            <Avatar size={50} icon={<UserOutlined />} />
            <Typography.Title
              level={4}
              strong 
              className='text-white'
            >
              {userData.name}
              </Typography.Title>
          </div>
          <Typography.Text type='secondary' className='text-center md:visible hidden'>
            Email: {userData.email}
          </Typography.Text>
        <Button size='large' type='primary' className='' onClick={handleLogout}>Logout</Button>
      </Flex>
    </Card>
  )
}

export default UserProfile