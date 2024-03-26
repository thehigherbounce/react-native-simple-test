import { HStack, Text, Spinner } from "@gluestack-ui/themed";
import React, {FC} from "react";

interface SpinnerProps {
  fullfill?: boolean;
}

export const CustomSpinner: FC<SpinnerProps> = ({
  fullfill = true,
}) => {
  return (
    fullfill ? <HStack
    space="sm"
    justifyContent="center"
    alignItems="center"
    h="100%"
  >
    <Spinner />
    <Text size="md">Please Wait</Text>
  </HStack> : <HStack
    space="sm"
  >
    <Spinner />
    <Text size="md">Please Wait</Text>
  </HStack>
  );
};
