import React from 'react';

export const ProfileImage = ({
  profileImage,
  contactInfo,
  socialIcons,
  onSocialClick,
}) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-image-container">
          <img
            src={profileImage}
            alt={contactInfo.name}
            className="profile-image"
          />
        </div>
        
        <div className="profile-info">
          <h1 className="profile-name">
            {contactInfo.name}
          </h1>
          <p className="profile-title">
            {contactInfo.title}
          </p>
          <p className="profile-company">
            {contactInfo.company}
          </p>
        </div>
      </div>

      <div className="social-section">
        <div className="social-icons">
          {socialIcons.map((social, index) => (
            <button
              key={index}
              onClick={() => onSocialClick(social.link)}
              className="social-icon"
              title={`Connect via ${social.name}`}
              aria-label={`Connect via ${social.name}`}
            >
              <social.icon size={20} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};