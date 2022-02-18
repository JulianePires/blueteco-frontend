import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import styled from "styled-components";
import { colors } from "../../resources/colors";

const InputWrapper = styled(FormControl)``;

const InputLabel = styled(FormLabel)`
  color: ${colors.white};
`;

const InputField = styled(Input)`
  color: ${colors.secondaryLighter};
`;

const FeedbackMessage = styled(FormErrorMessage)`
  color: ${colors.error};
`;

const SelectInput = styled(Select)`
  color: ${colors.white};
  &::placeholder {
    color: ${colors.mainDark};
  }
`;

const Option = styled.option`
  color: ${colors.mainDark};
`;

export {
  InputWrapper,
  InputLabel,
  SelectInput,
  InputField,
  FeedbackMessage,
  Option,
};
