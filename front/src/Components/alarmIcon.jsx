import React from 'react'
export default function AlarmIcon({number}) {
  return (
    <div className="alarm-icon">
      <i className="fa-solid fa-bell fa-2x" style={{color: "#74C0FC"}}></i>
      <span className="badge rounded-circle">{number}</span>
    </div>
  )
}
