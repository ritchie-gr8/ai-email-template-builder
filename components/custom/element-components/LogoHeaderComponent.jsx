import React from 'react'

const LogoHeaderComponent = ({imageUrl, style, outerStyle}) => {
  return (
    <div style={outerStyle}>
        <img style={style} src={imageUrl} alt='header' />
    </div>
  )
}

export default LogoHeaderComponent