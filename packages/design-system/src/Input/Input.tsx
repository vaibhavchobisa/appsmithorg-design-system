import React, { forwardRef } from "react";
import clsx from "classnames";

import { InputProps } from "./Input.types";
import {
  Description,
  Error,
  Label,
  MainContainer,
  StyledInput,
  InputSection,
  InputContainer,
} from "./Input.styles";
import { Icon } from "Icon";
import {
  InputClassName,
  InputLabelClassName,
  InputSectionClassName,
  InputSectionInputClassName,
  InputEndIconClassName,
  InputIconClassName,
  InputStartIconClassName,
} from "./Input.constants";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref): JSX.Element => {
    let { isValid } = props;
    const {
      className,
      description,
      endIcon,
      endIconProps,
      errorMessage,
      isDisabled = false,
      isReadOnly = false,
      isRequired = false,
      label,
      labelPosition = "top",
      onChange,
      renderAs = "input",
      size = "sm",
      startIcon,
      startIconProps,
      type = "text",
      UNSAFE_height,
      UNSAFE_width,
      value,
      ...rest
    } = props;
    const {
      className: startIconClassName,
      onClick: startIconOnClick,
      ...restOfStartIconProps
    } = startIconProps || {};
    const {
      className: endIconClassName,
      onClick: endIconOnClick,
      ...restOfEndIconProps
    } = endIconProps || {};

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    isValid = isValid === undefined ? !errorMessage : isValid;

    return (
      <MainContainer
        className={clsx(InputClassName, className)}
        component={renderAs}
        labelPosition={labelPosition}
        size={size}
      >
        {/* TODO: replace this with text component */}
        {/* Issue: adding kind while implementing
        text is throwing typescript error.
        https://stackoverflow.com/questions/68073958/cant-use-href-with-iconbuttonprops*/}
        {label && (
          <Label className={InputLabelClassName}>
            {label}
            {/* Show required star only if label is present */}
            {label && isRequired && <span>*</span>}
          </Label>
        )}
        <InputSection className={InputSectionClassName}>
          <InputContainer isDisabled={isDisabled || isReadOnly}>
            {/* Start Icon Section */}
            {startIcon && renderAs === "input" ? (
              <Icon
                className={clsx(
                  InputIconClassName,
                  InputStartIconClassName,
                  startIconClassName,
                )}
                data-has-onclick={!!startIconOnClick}
                name={startIcon}
                onClick={startIconOnClick}
                size={size}
                {...restOfStartIconProps}
              />
            ) : null}
            {/* Input Section */}
            <StyledInput
              UNSAFE_height={UNSAFE_height}
              UNSAFE_width={UNSAFE_width}
              as={renderAs}
              className={InputSectionInputClassName}
              data-is-valid={isValid}
              hasEndIcon={!!endIcon}
              hasStartIcon={!!startIcon}
              inputSize={size}
              onChange={handleOnChange}
              readOnly={isReadOnly}
              ref={ref}
              renderer={renderAs}
              type={type}
              value={value}
              {...rest}
            />
            {/* End Icon Section */}
            {endIcon && renderAs === "input" ? (
              <Icon
                className={clsx(
                  InputIconClassName,
                  InputEndIconClassName,
                  endIconClassName,
                )}
                data-has-onclick={!!endIconOnClick}
                name={endIcon}
                onClick={endIconOnClick}
                size={size}
                {...restOfEndIconProps}
              />
            ) : null}
          </InputContainer>
          {description && (
            <Description
              color="var(--ads-v2-color-fg-muted)"
              kind="body-s"
              style={
                isDisabled ? { opacity: "var(--ads-v2-opacity-disabled)" } : {}
              }
            >
              {description}
            </Description>
          )}
          {errorMessage && (
            <Error color="var(--ads-v2-color-fg-error)" kind="body-s">
              {errorMessage}
            </Error>
          )}
        </InputSection>
      </MainContainer>
    );
  },
);

Input.displayName = "Input";

export { Input };
