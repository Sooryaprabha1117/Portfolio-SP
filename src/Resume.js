import React from 'react';
import Resume from './portfolio/Assets/SOORYA PRABHA.pdf'; // Import the PDF file
import BackgroundImage from './portfolio/Assets/A12.png'; // Import the image
import qrcode from "./portfolio/Assets/qrcode.png";
import "./ResumeP.css"
const ResumePage = () => {
  // Function to handle resume download
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume; // Reference the imported PDF file
    link.download = 'Resume_SP.pdf'; // Name for the downloaded file
    link.click();
  };

  // Function to open PDF in a new tab
  const handleDemoPreview = () => {
    window.open(Resume, '_blank');
  };

  return (

    <div className="resume-page" style={{ display: "flex",
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: '25%', // Set to 25% as per your requirement
      backgroundRepeat: 'no-repeat', // Prevent repetition of the background
      backgroundPosition: 'left center', // Align background image to the left and center vertically
      marginTop: "1%",
      minHeight: '91vh', // Ensure it covers the full height of the viewport
      flexDirection: 'column', // Stack elements vertically
      alignItems: 'center', // Center items horizontally
      justifyContent: 'center', // Center items vertically
      padding: '20px', // Add padding for better spacing 
      }} >
        <img src={qrcode} id='qr'/>
      {/* Download button */}
      <button className="download-btn" onClick={handleDownload}>
        Download Resume
      </button>

     
    </div>
  );
};

export default ResumePage;
