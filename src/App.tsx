import { Icon, IconSize, Text, Typography } from "@channel.io/bezier-react";
import { ChannelBtnSmileFilledIcon } from "@channel.io/bezier-icons";
import * as Styled from "@/App.styled";
import ChannelService from "./ChannelService";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if(!window.ChannelIO){
      ChannelService.loadScript();
    }

    ChannelService.boot({
      "pluginKey": import.meta.env.VITE_PLUG_IN_KEY,
    });

    ChannelService.openChat(import.meta.env.VITE_PLUG_IN_KEY, "테스트 중입니다.");

    // ChannelService.showMessenger();
    // ChannelService.openChat();
  }, []);

  return (
    <Styled.Container>
      <Styled.Content>
        <Icon
          source={ChannelBtnSmileFilledIcon}
          size={IconSize.XL}
          color="bgtxt-blue-normal"
        />
        <Text typo={Typography.Size24} bold>
          Bezier Design System + Vite
        </Text>
        <Text typo={Typography.Size16}>
          See{" "}
          <a
            href="https://main--62bead1508281287d3c94d25.chromatic.com/?path=/story/intro--page"
            target="_blank"
            rel="noopener"
          >
            Storybook
          </a>{" "}
          For more information.
        </Text>
      </Styled.Content>
    </Styled.Container>
  );
}

export default App;
