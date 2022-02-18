import {
  Icon,
  InputGroup,
  InputProps as ChakraInputProps,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  FeedbackMessage,
  InputField,
  InputLabel,
  InputWrapper,
  Option,
  SelectInput,
} from "./styled";
import { RiEyeCloseLine, RiEyeFill } from "react-icons/ri";

interface InputProps extends ChakraInputProps {
  haveError: boolean;
  errorMessage: string | undefined;
  label: string;
  isInvalid: boolean;
  isRequired?: boolean;
  isSelect?: boolean;
  options?: any[];
}

const Input: React.FC<InputProps> = ({
  haveError,
  errorMessage,
  label,
  isInvalid,
  isRequired = false,
  isSelect,
  options,
  id,
  type,
  placeholder,
  onChange,
  value,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSwitchPasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputWrapper isInvalid={isInvalid} isRequired={isRequired}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      {isSelect ? (
        <SelectInput
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        >
          {options?.map((option, index) => (
            <Option key={index} value={option}>
              {option}
            </Option>
          ))}
        </SelectInput>
      ) : (
        <InputGroup>
          <InputField
            id={id}
            type={type === "password" && showPassword ? "text" : type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            vi
          />
          {type === "password" && (
            <InputRightElement
              cursor="pointer"
              children={<Icon as={showPassword ? RiEyeFill : RiEyeCloseLine} />}
              color="whiteAlpha.900"
              onClick={handleSwitchPasswordVisibility}
            />
          )}
        </InputGroup>
      )}
      {haveError && <FeedbackMessage>{errorMessage}</FeedbackMessage>}
    </InputWrapper>
  );
};

export const MemoizedInput = React.memo(Input);
