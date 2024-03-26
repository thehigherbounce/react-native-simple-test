import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  ScrollView,
  Heading,
  HStack,
  Text,
  Accordion,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
  AccordionContentText,
  AccordionItem,
  AccordionTitleText,
  AccordionIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  Divider,
  VStack
} from '@gluestack-ui/themed';
import { fetchCommentsByPostId } from '../api/postAPI';
import { BackButton } from '../components/BackButton';
import { CustomSpinner } from '../components/CustomSpinner';

const DetailsScreen: FC<any> = ({ navigation, route }) => {
  const { item } = route.params;
  const [loading, setLoading] = useState<boolean>(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCommentsByPostId(item);
      setComments(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Box flex={1} bg="$backgroundDefault" px={16} pt={20}>
      <HStack justifyContent="space-between" alignItems="center" px={16}>
        <BackButton onClick={() => navigation.goBack()} />
        <Heading fontFamily="Poppins-SemiBold" fontSize={18}>
          Detail
        </Heading>
        <Box w={40} h={40}></Box>
      </HStack>
      <VStack
        mt="$1.5"
        mb="$1"
        $dark-bg="$backgroundDark900"
        $dark-borderColor="$borderDark800"
      >
        <Heading>{item.title}</Heading>
        <Text size="md" mt="$1.5">{item.body}</Text>
      </VStack>
      <Text mt={20} fontWeight='bold'>Comments:</Text>
      <ScrollView>
        {loading ? (
          <CustomSpinner fullfill={false} />
        ) : (
          <Accordion
            width="100%"
            size="md"
            variant="unfilled"
            type="single"
            isCollapsible={true}
            isDisabled={false}>
            {comments &&
              comments.map((comment: any, index) => (
                <AccordionItem
                  key={index}
                  value={comment.id.toString()}
                >
                  <AccordionHeader>
                    <AccordionTrigger>
                      {({ isExpanded }) => {
                        return (
                          <>
                            <AccordionTitleText>
                              {comment.name}
                            </AccordionTitleText>
                            {isExpanded ? (
                              <AccordionIcon as={ChevronUpIcon} ml="$3" />
                            ) : (
                              <AccordionIcon as={ChevronDownIcon} ml="$3" />
                            )}
                          </>
                        );
                      }}
                    </AccordionTrigger>
                  </AccordionHeader>
                  <AccordionContent>
                    <AccordionContentText>{comment.body}</AccordionContentText>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        )}
      </ScrollView>
    </Box>
  );
};

export default DetailsScreen;
