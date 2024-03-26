import { Pressable, Heading, Text } from "@gluestack-ui/themed";
import React, { FC } from "react";

interface PostItem {
  data: any;
  onClick?: () => void;
}

export const PostItem: FC<PostItem> = ({ data, onClick }) => {
  return (
    <Pressable
      borderColor="$borderLight200"
      borderRadius="$xs"
      borderWidth="$1"
      p="$6"
      mb="$1"
      $dark-bg="$backgroundDark900"
      $dark-borderColor="$borderDark800"
      onPress={onClick}
    >
      <Heading isTruncated>{data.title}</Heading>
      <Text isTruncated size="sm" mt="$1.5">{data.body}</Text>
    </Pressable>
  );
}