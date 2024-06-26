import React from 'react';
import { Menu, Avatar } from '@mantine/core';

const ProfileMenu = ({ user, logout }) => {
    return (
        <Menu>
            <Menu.Target>
                <Avatar src={user?.picture} alt='user image' radius={"x0.1"} />
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item>Favourites</Menu.Item>
                <Menu.Item>
                    Booking
                </Menu.Item>
                <Menu.Item onClick={() => {
                    localStorage.clear();
                    logout()
                }}>
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export default ProfileMenu;
