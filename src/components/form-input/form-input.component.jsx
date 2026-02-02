import { Group, FormInputLabel, Input } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;