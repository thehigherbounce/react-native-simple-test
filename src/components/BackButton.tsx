import { ArrowLeftIcon, Button } from "@gluestack-ui/themed";
import React, { FC } from "react";

interface BackButtonProps{
  onClick: () => void;
  ml?: number;
  mt?: number;
}

export const BackButton: FC<BackButtonProps> = ({
  onClick,
  ml = 0,
  mt = 0,
}) => {
  return (
    <Button
      onPress={onClick}
      w={40}
      h={40}
      ml={ml}
      mt={mt}
      borderRadius={20}
      bg="$lightGray"
    >
      <ArrowLeftIcon />
    </Button>
  );
};