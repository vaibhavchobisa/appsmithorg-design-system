import styled, { css } from "styled-components";
import { Size } from "./Toggle.types";

const Variables = css`
  --toggle-padding: var(--ads-v2-spaces-2);
  --toggle-color-border: var(--ads-v2-color-border);
  --toggle-color-background: var(--ads-v2-color-bg);
  --toggle-color-icon: var(--ads-v2-color-fg);
`;

const Sizes = {
  sm: css`
    --toggle-padding: var(--ads-v2-spaces-2) var(--ads-v2-spaces-1);
  `,
  md: css`
    --toggle-padding: var(--ads-v2-spaces-2);
  `,
};

export const StyledToggle = styled.button<{
  isDisabled?: boolean;
  isFocusVisible?: boolean;
  isSelected?: boolean;
  size?: Size;
}>`
  ${Variables};

  ${({ size }) => size && Sizes[size]};

  padding: var(--toggle-padding);
  border-radius: var(--ads-v2-border-radius);

  &:hover {
    --toggle-color-background: var(--ads-v2-color-bg-muted);
    --toggle-color-border: var(--ads-v2-color-border-emphasis);
  }

  ${({ isSelected }) =>
    isSelected &&
    `--toggle-color-background: var(--ads-v2-color-bg-brand-secondary);
     --toggle-color-border: var(--ads-v2-color-border-brand-secondary);
     --toggle-color-icon: var(--ads-v2-color-fg-on-brand-secondary);

     :hover {
       --toggle-color-background: var(--ads-v2-color-bg-brand-secondary-emphasis);
       --toggle-color-border: var(--ads-v2-color-border-brand-secondary-emphasis);
     }
  `}

  ${({ isFocusVisible }) =>
    isFocusVisible &&
    ` outline: var(--ads-v2-border-width-outline) solid var(--ads-v2-color-outline);
      outline-offset: var(--ads-v2-offset-outline);
    `}}

  &:disabled {
    opacity: var(--ads-v2-opacity-disabled);

    &:hover {
      --toggle-color-border: var(--ads-v2-color-border);
      --toggle-color-background: var(--ads-v2-color-bg);
    }
  }

  border: 1px solid var(--toggle-color-border);
  background-color: var(--toggle-color-background);
  & path {
    color: var(--toggle-color-icon);
  }
`;
