"use client";
import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import "./custom-styles.css"; // Import the custom CSS file

const ReactApp = () => {
  return (
    <WhatsAppWidget
      phoneNo="918050730949"
      position="right"
      widgetWidth="300px"
      widgetWidthMobile="260px"
      messageBox={true}
      iconSize="40"
      iconColor="white"
      iconBgColor="tomato"
      headerIcon="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXtfIY1cqOwrCftqOIMGskt__dwa6uXek4s1Du9JStlkVg7BpJ4wHNm2zyXROLzq518J4InZRaG7vJJvWpCmIsGSktriVnL1m5Cv69Z8RVu7nGZWDKRxyEEsmhntvFHed4XE9PAVb7bSjDRKluTlcB-UcdRMDUaOXMzpSA1dP_q7SdYQMZHFvnFFEXTAI/s320/FreeSEOTools_high-1726051232.jpg"
      headerIconColor="pink"
      headerTxtColor="black"
      headerBgColor="tomato"
    />
  );
};

export default ReactApp;