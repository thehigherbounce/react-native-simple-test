import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  FlatList,
  Input,
  InputField,
  View,
  Heading,
  HStack,
  InputSlot,
  InputIcon,
  SearchIcon,
} from '@gluestack-ui/themed';
import { fetchPosts } from '../api/postAPI';
import { CustomSpinner } from '../components/CustomSpinner';
import { PostItem } from '../components/Postitem';

const HomeScreen: FC<any> = ({ navigation }) => {
  const [posts, setPosts] = useState<any>([]);
  const [filteredPosts, setFilteredPosts] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts();
      setPosts(data);
      setFilteredPosts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredPosts(posts.filter((item: any) => item.title.indexOf(searchText) > -1 || item.body.indexOf(searchText) > -1));
    console.log(filteredPosts.length, '---> updated')
  }, [searchText]);

  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <PostItem
      key={index}
      data={item}
      onClick={() => navigation.navigate('Detail', { item })}
    />
  );

  const inputKeyWords = (inputText: string) => {
    setSearchText(inputText);
  }

  if (loading) return <CustomSpinner />;

  return (
    <Box flex={1} bg="$backgroundDefault" px={16} pt={20}>
      <HStack justifyContent="space-between" alignItems="center" mx={10} mb={10}>
        <Heading flex={1}>Home </Heading>
        <Input flex={3}>
          <InputSlot pl="$3">
            <InputIcon as={SearchIcon} />
          </InputSlot>
          <InputField placeholder="Search..." value={searchText} onChangeText={inputKeyWords} />
        </Input>
      </HStack>
      <View mx={5}>
        <FlatList
          data={filteredPosts}
          renderItem={renderItem}
          keyExtractor={(item: any) => item.id.toString()}
        />
      </View>
    </Box>
  );
};

export default HomeScreen;
