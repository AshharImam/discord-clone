import React from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from '@material-ui/icons/Add'
import "./Sidebar.css"
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import { Call, Headset, InfoOutlined, Mic, Settings } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Cleve Programmer</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Text Channels</h4>
                </div>
                <AddIcon className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                <SidebarChannel />
                <SidebarChannel />
                <SidebarChannel />
            </div>
            </div>
            
            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlined />
                    <Call />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4D03AQHlxDbizDFLOA/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=NMV9GhZRQZo4jp2tFQu9ECjfN4zQHB_DdQyWMpuY3-0"/>
                <div className="sidebar__profileInfo">
                    <h3>Ashhar Imam</h3>
                    <p>#thisismyID</p>
                </div>
                <div className="sidebar__profileIcons">
                    <Mic />
                    <Headset />
                    <Settings />
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar
