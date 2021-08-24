import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as CgIcons from 'react-icons/cg'
import * as BiIcons from 'react-icons/bi'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title:'Home',
        path:'/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Profile',
        path:'/profile',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title:'Training',
        path:'/training',
        icon: <BiIcons.BiRun />,
        cName: 'nav-text'
    },
    {
        title:'CSF',
        path:'/CSF',
        icon: <AiIcons.AiFillStar />,
        cName: 'nav-text'
    },
    {
        title:'BU/SU Engagement',
        path:'/BUSU',
        icon: <AiIcons.AiFillWechat />,
        cName: 'nav-text'
    },
    {
        title:'Attrition',
        path:'/attrition',
        icon: <BsIcons.BsFillPersonCheckFill />,
        cName: 'nav-text'
    },
    {
        title:'Budget',
        path:'/budget',
        icon: <GiIcons.GiTwoCoins />,
        cName: 'nav-text'
    },
    {
        title:'Audit Plan Progress',
        path:'/auditplanprogress',
        icon: <BiIcons.BiPencil />,
        cName: 'nav-text'
    },
    {
        title:'Help',
        path:'/help',
        icon: <BiIcons.BiHelpCircle />,
        cName: 'nav-text'
    }
]