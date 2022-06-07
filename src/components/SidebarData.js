import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import HomeIcon from '@material-ui/icons/Home';
import {MdAccountCircle} from 'react-icons/md'
import {SiGnuprivacyguard} from 'react-icons/si'
import { BiLogIn } from 'react-icons/bi'
import { RiLogoutBoxLine } from 'react-icons/ri'

export const SidebarData = [
{
	title: "Home",
	path: "/",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <HomeIcon />,
},
{
	title: "Our Fleet",
	path: "/fleet",
	icon: <AiIcons.AiFillCar />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "Contacts",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},
{
	title: "My Account",
	path: "/",
	icon: <MdAccountCircle />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Sign Up",
		path: "/register",
		icon: <SiGnuprivacyguard />,
	},
	{
		title: "Login",
		path: "/login",
		icon: <BiLogIn />,
	},
	{
		title: "Logout",
		path: "/logout",
		icon: <RiLogoutBoxLine />,
	},
	],
},
];