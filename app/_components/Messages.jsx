'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
    ChakraProvider,
    Box,
    Flex,
    VStack,
    HStack,
    Input,
    IconButton,
    Text,
    Avatar,
    Button,
    Badge,
    extendTheme,
    InputGroup,
    InputRightElement,
    InputLeftElement,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
} from '@chakra-ui/react';
import {
    SearchIcon,
    BellIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    AttachmentIcon,
    CheckIcon,
    CalendarIcon,
    PhoneIcon,
} from '@chakra-ui/icons';
import { FiSend, FiSmile, FiMoreVertical, FiPlusCircle } from 'react-icons/fi';
import { BsPinAngle } from 'react-icons/bs';
import { MdKeyboardVoice } from 'react-icons/md';

// Custom theme for Messages component
const messagesTheme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: 'var(--font-geist-sans), sans-serif',
            },
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'normal',
            },
        },
        Text: {
            baseStyle: {
                fontSize: 'sm',
            },
        },
    },
});

const Messages = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [selectedChat, setSelectedChat] = useState(null);
    const [openCategories, setOpenCategories] = useState({
        group: true,
        pinned: true,
        all: true,
    });
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Good Morning. I'll have them ready before the general meeting today.",
            sender: 'Chukwumeka',
            timestamp: new Date('2023-09-27T10:20:00')
        },
        {
            id: 2,
            text: "Great! I need those reports by 3 PM, please.",
            sender: 'me',
            timestamp: new Date('2023-09-27T10:21:00')
        },
        {
            id: 3,
            text: "Certainly, I've seen the project updates. I'll have them ready before the general meeting today.",
            sender: 'Chukwumeka',
            timestamp: new Date('2023-09-27T10:22:00')
        },
        {
            id: 4,
            text: "Perfect, thank you for your prompt attention to this.",
            sender: 'me',
            timestamp: new Date('2023-09-27T10:23:00')
        },
    ]);
    const [searchQuery, setSearchQuery] = useState('');
    const [notifications, setNotifications] = useState([
        {id: 1, type: 'message', user: 'Alice', content: 'New message from Alice', timestamp: '2 min ago'},
        {id: 2, type: 'mention', user: 'Bob', content: 'Bob mentioned you in Design Team', timestamp: '15 min ago'},
        {id: 3, type: 'request', user: 'Charlie', content: 'Charlie Applied for fronted dev...', timestamp: '1 hour ago'},
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const chatBoxRef = useRef(null);
    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    };

    const toggleCategory = (category) => {
        setOpenCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
        setIsTyping(true);

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            setIsTyping(false);
        }, 1000);
    };

    const handleSendMessage = () => {
        if (inputMessage.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text: inputMessage,
                sender: 'me',
                timestamp: new Date()
            };
            setMessages([...messages, newMessage]);
            setInputMessage('');
            setIsTyping(false);

            // Simulate receiving a response after 2 seconds
            setTimeout(() => {
                const response = {
                    id: messages.length + 2,
                    text: "I've received your message. I'll get back to you soon.",
                    sender: selectedChat.user,
                    timestamp: new Date()
                };
                setMessages(prevMessages => [...prevMessages, response]);
            }, 2000);
        }
    };

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    };

    // mock data
    const groupChats = [
        {id: 1, user: 'HR Announcement', lastMessage: 'New policy update', timestamp: '10:22 AM'},
        {id: 2, user: 'Design Team', lastMessage: "Good morning! Let's have our...", timestamp: '10:17 AM'},
        {id: 3, user: 'Dev Team', lastMessage: 'Sprint planning at 2 PM', timestamp: '9:45 AM'},
    ];

    const pinnedChats = [
        {id: 4, user: 'Project X', lastMessage: 'Deadline extended to Friday', timestamp: 'Yesterday'},
        {id: 5, user: 'Alice (Manager)', lastMessage: 'Great job on the presentation!', timestamp: '2d ago'},
    ];

    const allChats = [
        {id: 6, user: 'Chukwumeka', lastMessage: "Good Morning ma'am", timestamp: '10:20 AM'},
        {id: 7, user: 'Aishat Doe', lastMessage: "Sure, I'll get them to you on time", timestamp: '10:14 AM'},
        {id: 8, user: 'Edward', lastMessage: 'Hi, how are you today?', timestamp: '10:07 AM'},
        {id: 9, user: 'Olumide', lastMessage: 'Can we schedule a quick call?', timestamp: '9:55 AM'},
        {id: 10, user: 'Omowunmi', lastMessage: 'Thanks for your help!', timestamp: '9:30 AM'},
        {id: 11, user: 'Jide', lastMessage: "I have sent the report to your email", timestamp: '8:45 AM'},
    ];

    const CategoryBox = ({title, chats, onChatSelect, isOpen, onToggle}) => (
        <Box borderWidth="1px" borderRadius="md" mb={4} bg="white" overflow="hidden">
            <Button
                onClick={onToggle}
                variant="ghost"
                justifyContent="space-between"
                width="100%"
                p={4}
                fontWeight="bold"
            >
                {title}
                <ChevronRightIcon
                    transform={isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
                    transition="transform 0.2s"
                />
            </Button>
            {isOpen && (
                <VStack align="stretch" p={2}>
                    {chats
                        .filter((chat) =>
                            chat.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((chat) => (
                            <HStack
                                key={chat.id}
                                spacing={3}
                                p={2}
                                _hover={{bg: 'gray.100'}}
                                cursor="pointer"
                                onClick={() => onChatSelect(chat)}
                                borderRadius="md"
                            >
                                <Avatar name={chat.user} size="sm"/>
                                <Box flex={1}>
                                    <Text fontWeight="medium" fontSize="sm">
                                        {chat.user}
                                    </Text>
                                    <Text fontSize="xs" color="gray.500" noOfLines={1}>
                                        {chat.lastMessage}
                                    </Text>
                                </Box>
                                <Text fontSize="xs" color="gray.500">
                                    {chat.timestamp}
                                </Text>
                            </HStack>
                        ))}
                </VStack>
            )}
        </Box>
    );

    return (
        <ChakraProvider theme={messagesTheme} resetCSS={false}>
            <Box className="messages-component" h="100vh">
                <Flex h="full" flexDirection="column">
                    {/* Top Navigation */}
                    <Flex justify="space-between" align="center" p={4} borderBottom="1px" borderColor="gray.200">
                        <InputGroup maxW="400px">
                            <InputLeftElement pointerEvents="none">
                                <SearchIcon color="gray.300" />
                            </InputLeftElement>
                            <Input placeholder="Search for users and job listings" />
                        </InputGroup>
                        <HStack spacing={4}>
                            <Text fontSize="sm">{new Date().toLocaleString()}</Text>
                            <Popover
                                isOpen={showNotifications}
                                onClose={() => setShowNotifications(false)}
                                placement="bottom-end"
                            >
                                <PopoverTrigger>
                                    <IconButton
                                        icon={<BellIcon/>}
                                        aria-label="Notifications"
                                        onClick={() => setShowNotifications(!showNotifications)}
                                    />
                                </PopoverTrigger>
                                <PopoverContent width="350px">
                                    <PopoverArrow/>
                                    <PopoverBody>
                                        <Text fontWeight="bold" mb={2}>
                                            Notifications
                                        </Text>
                                        <VStack align="stretch" spacing={2}>
                                            {notifications.map((notification) => (
                                                <Box key={notification.id} p={2} bg="gray.50" borderRadius="md">
                                                    <HStack>
                                                        <Avatar name={notification.user} size="sm"/>
                                                        <Box>
                                                            <Text fontSize="sm" fontWeight="bold">
                                                                {notification.user}
                                                            </Text>
                                                            <Text fontSize="xs" color="gray.500">
                                                                {notification.timestamp}
                                                            </Text>
                                                        </Box>
                                                    </HStack>
                                                    <Text fontSize="sm" mt={1}>
                                                        {notification.content}
                                                    </Text>
                                                </Box>
                                            ))}
                                        </VStack>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </HStack>
                    </Flex>

                    {/* Main Content */}
                    <Flex flex={1} overflow="hidden">
                        {/* Left sidebar */}
                        <Box w="300px" bg="gray.50" borderRight="1px" borderColor="gray.200" overflowY="auto">
                            <VStack align="stretch" spacing={0} p={4}>
                                <Text fontWeight="bold" fontSize="xl" mb={4}>
                                    Messages
                                </Text>
                                <InputGroup size="md" mb={4}>
                                    <InputLeftElement pointerEvents="none">
                                        <SearchIcon color="gray.300" />
                                    </InputLeftElement>
                                    <Input
                                        placeholder="Search by name, group, chat..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </InputGroup>
                                <HStack mb={4} justify="space-between">
                                    <Text fontSize="sm">Filter:</Text>
                                    <Button
                                        rightIcon={<ChevronDownIcon/>}
                                        size="sm"
                                        variant="outline"
                                    >
                                        All Status
                                    </Button>
                                </HStack>
                                <CategoryBox
                                    title="Group Chats"
                                    chats={groupChats}
                                    onChatSelect={handleChatSelect}
                                    isOpen={openCategories.group}
                                    onToggle={() => toggleCategory('group')}
                                />
                                <CategoryBox
                                    title="Pinned Messages"
                                    chats={pinnedChats}
                                    onChatSelect={handleChatSelect}
                                    isOpen={openCategories.pinned}
                                    onToggle={() => toggleCategory('pinned')}
                                />
                                <CategoryBox
                                    title="All Messages"
                                    chats={allChats}
                                    onChatSelect={handleChatSelect}
                                    isOpen={openCategories.all}
                                    onToggle={() => toggleCategory('all')}
                                />
                            </VStack>
                        </Box>

                        {/* Right content area */}
                        <Flex flex={1} flexDirection="column" bg="white" width="calc(100% - 300px)">
                            {selectedChat ? (
                                <>
                                    <Flex p={4} borderBottom="1px" borderColor="gray.200" justifyContent="space-between" alignItems="center">
                                        <HStack>
                                            <Avatar name={selectedChat.user} size="sm" />
                                            <Box>
                                                <Text fontWeight="bold" fontSize="md">{selectedChat.user}</Text>
                                                <HStack>
                                                    <Badge colorScheme="green" fontSize="xs">Active</Badge>
                                                    <Text fontSize="xs" color="gray.500">Last seen recently</Text>
                                                </HStack>
                                            </Box>
                                        </HStack>
                                        <HStack spacing={2}>
                                            <IconButton
                                                icon={<PhoneIcon />}
                                                aria-label="Call"
                                                variant="ghost"
                                                size="sm"
                                            />
                                            <IconButton
                                                icon={<BsPinAngle />}
                                                aria-label="Pin chat"
                                                variant="ghost"
                                                size="sm"
                                            />
                                            <IconButton
                                                icon={<CalendarIcon />}
                                                aria-label="Schedule"
                                                variant="ghost"
                                                size="sm"
                                            />
                                            <IconButton
                                                icon={<FiMoreVertical />}
                                                aria-label="More options"
                                                variant="ghost"
                                                size="sm"
                                            />
                                        </HStack>
                                    </Flex>
                                    <Flex flexDirection="column" flex={1} overflowY="hidden">
                                        <Box flex={1} overflowY="auto" px={4} py={2} ref={chatBoxRef}>
                                            <VStack align="stretch" spacing={4}>
                                                {messages.map((message) => (
                                                    <Flex
                                                        key={message.id}
                                                        justifyContent={message.sender === 'me' ? 'flex-end' : 'flex-start'}
                                                    >
                                                        <Box
                                                            maxW="70%"
                                                            bg={message.sender === 'me' ? 'blue.500' : 'gray.100'}
                                                            color={message.sender === 'me' ? 'white' : 'black'}
                                                            borderRadius="lg"
                                                            px={3}
                                                            py={2}
                                                        >
                                                            <Text fontSize="sm">{message.text}</Text>
                                                            <Flex justifyContent="flex-end" alignItems="center" mt={1}>
                                                                <Text fontSize="xs" color={message.sender === 'me' ? 'whiteAlpha.800' : 'gray.500'}>
                                                                    {formatTime(message.timestamp)}
                                                                </Text>
                                                                {message.sender === 'me' && (
                                                                    <HStack spacing={0} ml={1}>
                                                                        <CheckIcon w={3} h={3} color="green.300" />
                                                                        <CheckIcon w={3} h={3} color="green.300" ml={-1} />
                                                                    </HStack>
                                                                )}
                                                            </Flex>
                                                        </Box>
                                                    </Flex>
                                                ))}
                                            </VStack>
                                        </Box>
                                        {isTyping && (
                                            <Text fontSize="xs" color="gray.500" px={4} py={2}>
                                                {selectedChat.user} is typing...
                                            </Text>
                                        )}
                                    </Flex>
                                    <Box p={4} borderTop="1px" borderColor="gray.200">
                                        <InputGroup size="md">
                                            <InputLeftElement width="4.5rem">
                                                <IconButton
                                                    icon={<FiPlusCircle />}
                                                    aria-label="Add attachment"
                                                    variant="ghost"
                                                    size="sm"
                                                />
                                                <IconButton
                                                    icon={<MdKeyboardVoice />}
                                                    aria-label="Voice message"
                                                    variant="ghost"
                                                    size="sm"
                                                />
                                            </InputLeftElement>
                                            <Input
                                                pl="4.5rem"
                                                pr="4.5rem"
                                                placeholder="Type a message..."
                                                value={inputMessage}
                                                onChange={handleInputChange}
                                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                            />
                                            <InputRightElement width="4.5rem">
                                                <IconButton
                                                    icon={<AttachmentIcon />}
                                                    aria-label="Attach file"
                                                    variant="ghost"
                                                    size="sm"
                                                />
                                                <IconButton
                                                    icon={<FiSmile />}
                                                    aria-label="Add emoji"
                                                    variant="ghost"
                                                    size="sm"
                                                />
                                                <IconButton
                                                    icon={<FiSend />}
                                                    aria-label="Send message"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={handleSendMessage}
                                                />
                                            </InputRightElement>
                                        </InputGroup>
                                    </Box>
                                </>
                            ) : (
                                <Flex justify="center" align="center" h="full">
                                    <Text color="gray.500">Select a chat to start messaging</Text>
                                </Flex>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </ChakraProvider>
    );
};

export default Messages;