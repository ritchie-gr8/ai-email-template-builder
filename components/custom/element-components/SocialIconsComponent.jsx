import React from 'react'

const SocialIconsComponent = ({socialIcons, style, outerStyle}) => {
  return (
    <div style={outerStyle}>
        {socialIcons.map((icon, idx) => (
            <img style={style} src={icon.icon} alt='social icon' key={idx} />
        ))}
    </div>
  )
}

export default SocialIconsComponent