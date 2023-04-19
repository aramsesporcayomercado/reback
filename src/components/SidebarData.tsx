import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    // {
    //     title:'Nuevo Empleado',
    //     path: '/newemployee',
    //     icon: <FaIcons.FaUserPlus/>
    // },
    {
        title: 'Empleados',
        path: '/team',
        icon: <FaIcons.FaUsers />
    },
    {
        title: 'Incidencias',
        path: '/tasks',
        icon: <FaIcons.FaTasks />
    },
    {
        title: 'Chats',
        path: '/chats',
        icon: <FaIcons.FaRocketchat />
    },
    {
        title: 'Informe',
        path: '/analytics',
        icon: <FaIcons.FaRegChartBar />
    }
]