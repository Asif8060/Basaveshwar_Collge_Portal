import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Load Botpress Webchat script
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script.async = true;
    document.body.appendChild(script);

    // Load Botpress bot configuration
    const botScript = document.createElement("script");
    botScript.src = "https://files.bpcontent.cloud/2025/01/09/11/20250109111655-SERLKY98.js";
    botScript.async = true;
    document.body.appendChild(botScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(botScript);
    };
  }, []);

  return null; // No visible UI, just loading the script
};

export default BotpressChat;