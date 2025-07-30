import { useState } from "react";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Copy,
  Check,
  QrCode,
  Download,
  User,
} from "lucide-react";
import "./index.css";
// import qrImage from "../src/qrcode.jpg"
import Image from "../src/profileImage.jpg"
import { FaWhatsapp } from "react-icons/fa";
import { SiGoogledrive } from "react-icons/si";
import { ProfileImage } from "./ProfileCard";

const App = () => {
  const [copiedField, setCopiedField] = useState("");

  const contactInfo = {
    name: "Dharnesh Bhayani",
    title: "Production Manager",
    company: "Neeva Jewels",
    phone: "+91 95868 46507",
    email: "dharmeshbhayani999@gmail.com",
    location:
      "7-435 A, 4th Floor, Anjiriya Wadi, Ramkrishna tools Gate, Gotalawadi, Torrent Power Road, Katargam, Surat - 395003.",
    url: "https://maps.app.goo.gl/sugMK5Z4FxbPBXgg7",
    whatsapp: "+91 95868 46507",
    about: "Production Manager at Neeva Jewels.",
  };

  const socialIcons = [
    {
      icon: Instagram,
      color: "instagram",
      link: "https://www.instagram.com/neeva_jewels_/",
      name: "Instagram",
    },
    {
      icon: SiGoogledrive,
      color: "google-drive",
      link: "https://drive.google.com/drive/folders/1Pw2jsrxlHUNIDU3wwcrY-LnFWdyY_iz2",
      name: "Google Drive",
    },
    {
      icon: Facebook,
      color: "facebook",
      link: "/",
      name: "Facebook",
    },
    {
      icon: FaWhatsapp,
      color: "whatsapp",
      link: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`,
      name: "WhatsApp",
    },
  ];

  const handlePhoneCall = () => {
    window.open(`tel:${contactInfo.phone}`, "_self");
  };

  const handleEmail = () => {
    window.open(`mailto:${contactInfo.email}`, "_self");
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello ${contactInfo.name}, I found your profile and would like to connect!`
    );
    const whatsappNumber = contactInfo.whatsapp.replace(/[^0-9]/g, "");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleLocation = () => {
    window.open(`https://maps.app.goo.gl/sugMK5Z4FxbPBXgg7`, "_blank");
  };

  const handleDrive = () => {
    window.open(`https://drive.google.com/drive/folders/1Pw2jsrxlHUNIDU3wwcrY-LnFWdyY_iz2?usp=sharing`, "_blank");
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(""), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleSocialClick = (link) => {
    window.open(link, "_blank");
  };

  const saveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
TITLE:${contactInfo.title}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
ADR:;;${contactInfo.location};;;;
END:VCARD`;

    const blob = new Blob([vCard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${contactInfo.name.replace(" ", "_")}.vcf`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const generateQRCode = () => {
    const link = document.createElement("a");
    // link.href = qrImage;
    link.download = contactInfo.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <ProfileImage
          profileImage={Image}
          contactInfo={contactInfo}
          socialIcons={socialIcons}
          onSocialClick={handleSocialClick}
        />

        <div className="card-content">
          <div className="section">
            <h2 className="section-title">
              <User className="section-icon" />
              About Me
            </h2>
            <p className="about-text">{contactInfo.about}</p>
          </div>

          <div className="section">
            <h2 className="section-title">
              <div className="contact-info-icon">
                <span>i</span>
              </div>
              Contact Me
            </h2>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-item-header">
                  <span className="contact-label">Phone</span>
                  <div className="contact-actions">
                    <button
                      onClick={handlePhoneCall}
                      className="action-btn"
                      title="Call"
                    >
                      <Phone size={16} />
                    </button>
                    <button
                      onClick={() =>
                        copyToClipboard(contactInfo.phone, "phone")
                      }
                      className="action-btn"
                      title="Copy phone number"
                    >
                      {copiedField === "phone" ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
                <p className="contact-value">{contactInfo.phone}</p>
              </div>

              <div className="contact-item">
                <div className="contact-item-header">
                  <span className="contact-label">Email</span>
                  <div className="contact-actions">
                    <button
                      onClick={handleEmail}
                      className="action-btn"
                      title="Send email"
                    >
                      <Mail size={16} />
                    </button>
                    <button
                      onClick={() =>
                        copyToClipboard(contactInfo.email, "email")
                      }
                      className="action-btn"
                      title="Copy email"
                    >
                      {copiedField === "email" ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
                <p className="contact-value">{contactInfo.email}</p>
              </div>

              <div className="contact-item">
                <div className="contact-item-header">
                  <span className="contact-label">Location</span>
                  <div className="contact-actions">
                    <button
                      onClick={handleLocation}
                      className="action-btn"
                      title="Open in maps"
                    >
                      <MapPin size={16} />
                    </button>
                    <button
                      onClick={() =>
                        copyToClipboard(contactInfo.location, "location")
                      }
                      className="action-btn"
                      title="Copy address"
                    >
                      {copiedField === "location" ? (
                        <Check size={16} />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
                <p className="contact-value location-text">
                  {contactInfo.location}
                </p>
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="section-title-simple">Social Media</h2>
            <button
              onClick={handleWhatsApp}
              className="quick-action-btn whatsapp-action"
            >
              <div className="action-content">
                <div className="action-icon whatsapp-icon">
                  <FaWhatsapp size={20} color="#ffffffff" />
                </div>
                <div className="action-text">
                  <p className="action-title">WhatsApp</p>
                  <p className="action-subtitle">Connect on WhatsApp</p>
                </div>
              </div>
              <ChevronRight className="chevron" />
            </button>
          </div>

          <div className="section">
            <h2 className="section-title-simple">Our Collection</h2>
            <button
              onClick={handleDrive}
              className="quick-action-btn whatsapp-action"
            >
              <div className="action-content">
                <div className="action-icon drive-icon">
                  <SiGoogledrive size={20} color="#ffffffff" />
                </div>
                <div className="action-text">
                  <p className="action-title">See Our Collection</p>
                </div>
              </div>
              <ChevronRight className="chevron" />
            </button>
          </div>

          <div className="action-buttons">
            <button onClick={saveContact} className="primary-btn">
              <Download size={20} />
              Save Contact
            </button>

            <button onClick={generateQRCode} className="secondary-btn">
              <QrCode size={20} />
              Download QR Code
            </button>
          </div>
        </div>

        <div className="footer">
          <p className="footer-text">
            <span className="powered-by">Powered by</span>{" "}
            <span className="brand-name">{contactInfo.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
