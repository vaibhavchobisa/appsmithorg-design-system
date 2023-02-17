import React from "react";
import styled from "styled-components";

import Icon, { IconSize } from "Icon";

type Props = {
  backgroundColor: string;
  className?: string;
  icon: string;
  iconColor: string;
  iconSize: IconSize;
  messageHeader?: string;
  ctaText?: string;
  ctaURL?: string;
  message: string;
  textColor: string;
  fontWeight?: string;
  intentLine?: boolean;
};

const MessageContainer = styled.div<{
  $backgroundColor: string;
  $iconColor: string;
  $intentLine: boolean;
  $textColor: string;
}>`
  display: flex;
  padding: 2px 8px;
  margin-bottom: 8px;
  flex-direction: row;
  color: ${(props) => props.$textColor};
  background: ${(props) => props.$backgroundColor};
  ${(props) =>
    props.$intentLine && `border-left: solid ${props.$iconColor} 2px;`}
  }
`;
const StyledIcon = styled(Icon)`
  padding: 8px 4px;
  cursor: default;

  svg {
    cursor: default;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4px;
  padding-bottom: 8px;
  padding-top: 8px;
  line-height: 16px;
`;

const MessageText = styled.p<{
  $fontWeight?: string;
}>`
  font-size: 13px;
  font-weight: ${(props) => props.$fontWeight || `400`};
  margin-bottom: 0;
`;

const MessageHeader = styled.h2`
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 5px;
`;

const CTALink = styled.a<{
  textColor: string;
}>`
  padding-top: 8px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  :hover {
    color: ${(props) => props.textColor};
  }
`;

export function BannerMessage(props: Props) {
  const handleCTAOnClick = (e: any) => {
    if (props.ctaURL) {
      window.open(props.ctaURL, "_blank");
    }
    e.preventDefault();
  };
  return (
    <MessageContainer
      $backgroundColor={props.backgroundColor}
      className={props.className}
      $iconColor={props.iconColor}
      $intentLine={!!props.intentLine}
      $textColor={props.textColor}
    >
      <StyledIcon
        fillColor={props.iconColor}
        name={props.icon}
        size={props.iconSize}
      />
      <MessageWrapper>
        {props.messageHeader && (
          <MessageHeader>{props.messageHeader}</MessageHeader>
        )}
        <MessageText $fontWeight={props.fontWeight}>
          {props.message}
        </MessageText>
        {props.ctaText && props.ctaURL && (
          <CTALink
            href={props.ctaURL}
            onClick={handleCTAOnClick}
            textColor={props.textColor}
          >
            {props.ctaText}
          </CTALink>
        )}
      </MessageWrapper>
    </MessageContainer>
  );
}
