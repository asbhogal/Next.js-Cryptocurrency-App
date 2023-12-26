'use client';

import { IoMdNotifications } from "react-icons/io"

const HeadingBar = () => {
  return (
    <div className="DashboardHeading">
        <h2>Dashboard</h2>
        <div className="IconTray">
            <div className="CurrentStatus">
                <p>Status</p>
                <span className="CurrentStatusLight">
                    <span className="AnimatedPulseFront"></span>
                    <span className="AnimatedPulseBack"></span>
                </span>
            </div>
            <div className="Notifications">
                <IoMdNotifications  />
            </div>
        </div>
    </div>
  )
}

export default HeadingBar;