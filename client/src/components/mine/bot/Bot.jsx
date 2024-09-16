<<<<<<< HEAD:client/src/bot/Bot.jsx
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

import './bot.css'
import builderHat from './assets/builder-hat.png'

const { theme, style } = buildTheme({
  themeName: "eggplant",
  themeColor: "#634433",
});

//Add your Client ID here ⬇️
const clientId = "75273c02-6b44-4be7-8126-9cee0d1f2cc6";
const config = {
  composerPlaceholder: "What would you like to know?",
  botName: "MineGuard",
  botAvatar: builderHat,
  botDescription:
    "MineGuard is an advanced chatbot tailored for coal mine supervisors to streamline operations, monitor safety, and manage alerts efficiently.",
  email: {
    title: "randomEmail@boptress.com",
    link: "mailto:randomEmail@boptress.com",
  },
  phone: {
    title: "555-555-5555",
    link: "tel:555-555-5555",
  },
  website: {
    title: "https://botpress.com",
    link: "https://botpress.com",
  },
  termsOfService: {
    title: "Terms of service",
    link: "https://botpress.com/terms",
  },
  privacyPolicy: {
    title: "Privacy policy",
    link: "https://botpress.com/privacy",
  },
};

export default function Bot() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <style>{style}</style>
        <WebchatProvider
          key={JSON.stringify(config)}
          theme={theme}
          //Add the configuration to the Webchat Provider ⬇️
          configuration={config}
          client={client}
        >
          <Fab onClick={toggleWebchat} />
          <div
            style={{
              display: isWebchatOpen ? "block" : "none",
            }}
          >
            <Webchat />
          </div>
        </WebchatProvider>
      </div>

  );
  }
=======
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import { useState } from "react";

// import './bot.css'
// import builderHat from './assets/builder-hat.png'

const { theme, style } = buildTheme({
  themeName: "eggplant",
  themeColor: "#634433",
});

//Add your Client ID here ⬇️
const clientId = "75273c02-6b44-4be7-8126-9cee0d1f2cc6";
const config = {
  composerPlaceholder: "What would you like to know?",
  botName: "MineGuard",
  botAvatar: builderHat,
  botDescription:
    "MineGuard is an advanced chatbot tailored for coal mine supervisors to streamline operations, monitor safety, and manage alerts efficiently.",
  email: {
    title: "randomEmail@boptress.com",
    link: "mailto:randomEmail@boptress.com",
  },
  phone: {
    title: "555-555-5555",
    link: "tel:555-555-5555",
  },
  website: {
    title: "https://botpress.com",
    link: "https://botpress.com",
  },
  termsOfService: {
    title: "Terms of service",
    link: "https://botpress.com/terms",
  },
  privacyPolicy: {
    title: "Privacy policy",
    link: "https://botpress.com/privacy",
  },
};

const ChatBot = () => {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
      <div style={{ width: "100%", height: "100%" }}>
        <style>{style}</style>
        <WebchatProvider
          key={JSON.stringify(config)}
          theme={theme}
          //Add the configuration to the Webchat Provider ⬇️
          configuration={config}
          client={client}
        >
          <Webchat />
        </WebchatProvider>
      </div>

  );
}

export default ChatBot;
>>>>>>> c61c7337d50d90236c918a8d3f2deb426b08c8b1:client/src/components/mine/bot/Bot.jsx
