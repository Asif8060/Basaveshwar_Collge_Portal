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
    <Card className='w-[180px] h-[88px] hover:overflow-visible overflow-hidden bg-transparent border-none'>
      <Flex vertical gap='small' className='flex flex-col items-center justify-center'>
          <div className='flex items-center gap-4'>
            <Avatar size={50} icon={<UserOutlined />} />
            <Typography.Title
              level={4}
              strong 
              className='username'
            >
              {userData.name}
              </Typography.Title>
          </div>
          <Typography.Text type='secondary' className='text-center'>
            Email: {userData.email}
          </Typography.Text>
        <Button size='large' type='primary' className='profile-btn' onClick={handleLogout}>Logout</Button>
      </Flex>
    </Card>
  )
}

export default UserProfile