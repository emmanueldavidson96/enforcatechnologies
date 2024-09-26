'use client';

import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, VStack, HStack, Input, IconButton, Text, Avatar, Divider } from '@chakra-ui/react';
import { SearchIcon, BellIcon } from '@chakra-ui/icons';

const Messages = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    { id: 1, user: 'Alice', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM' },
    { id: 2, user: 'Bob', lastMessage: 'Did you see the latest update?', timestamp: '11:45 AM' },
  ];

  const notifications = [
    { id: 1, type: 'Job Offer', user: 'John Doe', content: 'John Doe received a job offer for senior developer...' },
    { id: 2, type: 'Job Rejection', user: 'Jane Smith', content: 'Jane Smith\'s application for Senior Developer has been rejected...' },
  ];

  return (
      <ChakraProvider resetCSS={false}>
        <Flex h="100vh">
          {/* Left sidebar */}
          <Box w="312px" bg="white" borderRight="1px" borderColor="gray.200">
            <VStack align="stretch" h="full">
              <HStack p={4} borderBottom="1px" borderColor="gray.200">
                <Input
                    placeholder="Search for users and job listings"
                    borderRadius="full"
                    pr="40px"
                />
                <IconButton
                    aria-label="Search"
                    icon={<SearchIcon />}
                    position="absolute"
                    right="4"
                    borderRadius="full"
                    bg="transparent"
                />
              </HStack>
              <Box p={4}>
                <Text fontWeight="bold" mb={4}>Messages</Text>
                <HStack mb={4}>
                  <Input placeholder="Search by name,group,chat..." size="sm" borderRadius="full" />
                  <IconButton size="sm" icon={<SearchIcon />} borderRadius="full" />
                </HStack>
                <HStack mb={4}>
                  <Text fontSize="sm">Filter:</Text>
                  <Text fontSize="sm" color="blue.500">All Status</Text>
                </HStack>
                {chats.map((chat) => (
                    <HStack
                        key={chat.id}
                        spacing={3}
                        p={2}
                        _hover={{ bg: 'gray.100' }}
                        cursor="pointer"
                        onClick={() => setSelectedChat(chat)}
                    >
                      <Avatar name={chat.user} size="sm" />
                      <Box flex={1}>
                        <Text fontWeight="bold">{chat.user}</Text>
                        <Text fontSize="sm" color="gray.500" noOfLines={1}>
                          {chat.lastMessage}
                        </Text>
                      </Box>
                      <Text fontSize="xs" color="gray.500">{chat.timestamp}</Text>
                    </HStack>
                ))}
              </Box>
            </VStack>
          </Box>

          {/* Right content area */}
          <Flex flex={1} flexDirection="column" bg="gray.50">
            <HStack justify="space-between" p={4} bg="white" borderBottom="1px" borderColor="gray.200">
              <Text>{new Date().toLocaleString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              })}</Text>
              <IconButton
                  aria-label="Notifications"
                  icon={<BellIcon />}
                  onClick={() => setShowNotifications(!showNotifications)}
                  borderRadius="full"
              />
            </HStack>
            <Box flex={1} p={4}>
              {selectedChat ? (
                  <VStack align="stretch" h="full" bg="white" borderRadius="md" p={4}>
                    <Text fontWeight="bold">{selectedChat.user}</Text>
                    <Divider />
                  </VStack>
              ) : (
                  <Flex justify="center" align="center" h="full">
                    <Text color="gray.500">Select a chat to start messaging</Text>
                  </Flex>
              )}
            </Box>
          </Flex>

          {/* Notifications panel */}
          {showNotifications && (
              <Box
                  position="absolute"
                  top="60px"
                  right="20px"
                  w="350px"
                  bg="white"
                  boxShadow="lg"
                  borderRadius="md"
                  p={4}
              >
                <Text fontWeight="bold" mb={2}>Notifications</Text>
                {notifications.map((notif) => (
                    <Box key={notif.id} p={2} borderWidth="1px" borderRadius="md" mb={2}>
                      <Text fontWeight="bold">{notif.user} - {notif.type}</Text>
                      <Text fontSize="sm">{notif.content}</Text>
                    </Box>
                ))}
              </Box>
          )}
        </Flex>
      </ChakraProvider>
  );
};

export default Messages;
