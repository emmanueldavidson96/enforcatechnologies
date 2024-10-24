import React, { useState, useEffect, useRef } from 'react';
import {ChakraProvider, Box, Flex, VStack, HStack, Input, IconButton, Text, Avatar, Button, extendTheme, InputGroup, InputRightElement, InputLeftElement, Icon, Menu, MenuButton, MenuList, MenuItem, Popover, PopoverTrigger, PopoverContent, PopoverHeader,
    PopoverBody,
    PopoverArrow,
    Link,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';
import {SearchIcon, BellIcon, ChevronDownIcon, ChevronRightIcon, CheckIcon,} from '@chakra-ui/icons';
import { FiSend, FiSmile, FiMoreVertical, FiClock, FiPaperclip, FiHash, FiMessageSquare, FiBookmark, FiShare2, FiFilter } from 'react-icons/fi';
import { BsPinAngle } from 'react-icons/bs';
import { MdKeyboardVoice } from 'react-icons/md';


// Custom theme configuration for consistent styling
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
    // State for notifications and UI controls
    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const [selectedChat, setSelectedChat] = useState(null);

    // State for sidebar category visibility
    const [openCategories, setOpenCategories] = useState({
        group: true,
        pinned: true,
        all: true,
    });

    // Message handling states
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]);

    // Search and filter states
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('All');
    const [status, setStatus] = useState('All Status');

    // Reference for chat auto-scroll
    const chatBoxRef = useRef(null);

    // Chat lists states
    const [groupChats, setGroupChats] = useState([]);
    const [pinnedChats, setPinnedChats] = useState([]);
    const [allChats, setAllChats] = useState([]);
    const [topSearchQuery, setTopSearchQuery] = useState('');

    // Initial data loading
    useEffect(() => {
        fetchNotifications();
        fetchGroupChats();
        fetchPinnedChats();
        fetchAllChats();
    }, []);

    // Auto-scroll chat when new messages arrive
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // API fetch functions (to be implemented)
    const fetchNotifications = async () => {
        // TODO: Implement notification fetching
    };

    const fetchGroupChats = async () => {
        // TODO: Implement group chats fetching
    };

    const fetchPinnedChats = async () => {
        // TODO: Implement pinned chats fetching
    };

    const fetchAllChats = async () => {
        // TODO: Implement all chats fetching
    };

    // Scroll chat to bottom
    const scrollToBottom = () => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    };

    // Toggle category expansion in sidebar
    const toggleCategory = (category) => {
        setOpenCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    // Handle message input changes
    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    // Handle sending new messages
    const handleSendMessage = async () => {
        if (inputMessage.trim()) {
            // Create new message object
            const newMessage = {
                id: messages.length + 1,
                text: inputMessage,
                sender: 'me',
                timestamp: new Date().toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            // Add message to state and clear input
            setMessages([...messages, newMessage]);
            setInputMessage('');

            // TODO: Implement API integration
            // await sendMessageToAPI(newMessage);
            // await fetchResponseFromAPI();
        }
    };

    // Handle chat selection
    const handleChatSelect = async (chat) => {
        setSelectedChat(chat);
        // TODO: Implement chat message fetching
        // const chatMessages = await fetchMessagesForChat(chat.id);
        // setMessages(chatMessages);
    };

    // Reusable category box component for sidebar
    const CategoryBox = ({title, chats, onChatSelect, isOpen, onToggle, icon}) => (
        <Box borderWidth="1px" borderRadius="md" mb={4} bg="white" overflow="hidden">
            <Button
                onClick={onToggle}
                variant="ghost"
                justifyContent="space-between"
                width="100%"
                p={4}
                fontWeight="bold"
            >
                <HStack spacing={2}>
                    <Icon as={icon} color="gray.500" />
                    <Text>{title}</Text>
                </HStack>
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
                                {chat.isGroup ? (
                                    <Flex
                                        w="32px"
                                        h="32px"
                                        bg="gray.200"
                                        borderRadius="md"
                                        justify="center"
                                        align="center"
                                    >
                                        <Icon as={FiHash} color="gray.500" />
                                    </Flex>
                                ) : (
                                    <Avatar name={chat.user} size="sm"/>
                                )}
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
            <Box className="messages-component" h="100vh" w="100%">
                <Flex h="full" flexDirection="column">
                    <Flex justify="space-between" align="center" p={4} borderBottom="1px" borderColor="gray.200">
                        <InputGroup size="md" flex={1} mr={4}>
                            <InputLeftElement pointerEvents="none">
                                <SearchIcon color="gray.400" />
                            </InputLeftElement>
                            <Input
                                placeholder="Search for users and job listings"
                                value={topSearchQuery}
                                onChange={(e) => setTopSearchQuery(e.target.value)}
                            />
                        </InputGroup>
                        <HStack spacing={4}>
                            <Text fontSize="sm">
                                {new Date().toLocaleString('en-US', {year: 'numeric', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit',
                                    hour12: true
                                })}
                            </Text>
                            <Popover
                                isOpen={showNotifications}
                                onClose={() => setShowNotifications(false)}
                                placement="bottom-end"
                            >
                                <PopoverTrigger>
                                    <IconButton
                                        icon={<BellIcon />}
                                        aria-label="Notifications"
                                        onClick={() => setShowNotifications(!showNotifications)}
                                    />
                                </PopoverTrigger>
                                <PopoverContent width="400px">
                                    <PopoverArrow />
                                    <PopoverHeader>
                                        <Flex justify="space-between" align="center">
                                            <Text fontWeight="bold" fontSize="xl">Notifications</Text>
                                            <Link href="#" color="blue.500">Settings</Link>
                                        </Flex>
                                    </PopoverHeader>
                                    <PopoverBody>
                                        <VStack align="stretch" spacing={4}>
                                            {notifications.map((notification) => (
                                                <Box key={notification.id} borderBottomWidth="1px" pb={4}>
                                                    <Flex>
                                                        <Avatar name={notification.title.split(' - ')[0]} size="sm" mr={3} />
                                                        <Box>
                                                            <Text fontWeight="bold">{notification.title}</Text>
                                                            <Text fontSize="sm">{notification.description}</Text>
                                                            <Text fontSize="xs" color="gray.500" mt={1}>{notification.time}</Text>
                                                            <HStack mt={2} spacing={2}>
                                                                <Button size="sm" variant="outline" colorScheme="gray">Read more</Button>
                                                                <Button size="sm" colorScheme="blue">View job application</Button>
                                                            </HStack>
                                                        </Box>
                                                    </Flex>
                                                </Box>
                                            ))}
                                        </VStack>
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        </HStack>
                    </Flex>

                    {/*messages header*/}
                    <Box p={4} borderBottom="1px" borderColor="gray.200">
                        <Text fontWeight="bold" fontSize="2xl" mb={2}>Messages</Text>
                        <Breadcrumb separator="•" fontSize="sm" color="gray.500">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink  href="#"  color="blue.500">Messages</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Box>

                    {/* Integrated search bar with filter and status */}
                    <Flex p={4} bg="white" borderBottom="1px" borderColor="gray.200" alignItems="center">
                        <InputGroup size="md" maxWidth="300px" mr={4}>
                            <InputLeftElement pointerEvents="none">
                                <SearchIcon color="gray.400" />
                            </InputLeftElement>
                            <Input
                                placeholder="Search by name, group chat, team..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                borderRadius="full"
                            />
                            <InputRightElement>
                                <Icon as={ChevronDownIcon} color="gray.400" />
                            </InputRightElement>
                        </InputGroup>
                        <Button
                            leftIcon={<Icon as={FiFilter} />}
                            rightIcon={<ChevronDownIcon />}
                            variant="outline"
                            mr={4}
                            borderRadius="md"
                        >
                            Filter
                        </Button>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="outline" borderRadius="md">
                                All Status
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => setStatus('All Status')}>All Status</MenuItem>
                                <MenuItem onClick={() => setStatus('Online')}>Online</MenuItem>
                                <MenuItem onClick={() => setStatus('Offline')}>Offline</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                    {/* Main Content */}
                    <Flex flex={1} overflow="hidden">
                        <Box w="300px" bg="white" borderRight="1px" borderColor="gray.200" overflowY="auto">
                            <VStack align="stretch" spacing={0} p={4}>
                                <CategoryBox
                                    title="Group Chats"
                                    chats={groupChats}
                                    onChatSelect={handleChatSelect}
                                    isOpen={openCategories.group}
                                    onToggle={() => toggleCategory('group')}
                                    icon={FiHash}
                                />
                                <CategoryBox
                                    title="Pinned Messages"
                                    chats={pinnedChats}
                                    onChatSelect={handleChatSelect}
                                    isOpen={openCategories.pinned}
                                    onToggle={() => toggleCategory('pinned')}
                                    icon={BsPinAngle}
                                />
                                <CategoryBox
                                    title="All Messages"
                                    chats={allChats}
                                    onChatSelect={handleChatSelect}
                                    isOpen={openCategories.all}
                                    onToggle={() => toggleCategory('all')}
                                    icon={FiMessageSquare}
                                />
                            </VStack>
                        </Box>
                        <Flex flex={1} flexDirection="column" bg="white">
                            {selectedChat ? (
                                <>
                                    <Flex p={4} borderBottom="1px" borderColor="gray.200" justifyContent="space-between" alignItems="center">
                                        <HStack>
                                            <Avatar name={selectedChat.user} size="sm" />
                                            <Box>
                                                <Text fontWeight="bold" fontSize="md">{selectedChat.user}</Text>
                                                <Text fontSize="xs" color="green.500">Available</Text>
                                            </Box>
                                        </HStack>
                                        <HStack spacing={2}>
                                            <IconButton
                                                icon={<FiBookmark />}
                                                aria-label="Bookmark"
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
                                                icon={<FiShare2 />}
                                                aria-label="Share"
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
                                    <Flex flexDirection="column" flex={1} overflowY="auto" px={4} py={2} ref={chatBoxRef}>
                                        <VStack align="stretch" spacing={4}>
                                            {messages.map((message) => (
                                                <Flex
                                                    key={message.id}
                                                    flexDirection="column"
                                                    alignItems={message.sender === 'me' ? 'flex-end' : 'flex-start'}
                                                >
                                                    <HStack mb={1} spacing={2}>
                                                        {message.sender !== 'me' && <Avatar name={selectedChat.user} size="xs" />}
                                                        <Text fontSize="sm" fontWeight="bold" color={message.sender === 'me' ? 'blue.500' : 'gray.700'}>
                                                            {message.sender === 'me' ? 'Me' : selectedChat.user}
                                                        </Text>
                                                    </HStack>
                                                    <Box
                                                        maxW="70%"
                                                        bg={message.sender === 'me' ? 'gray.100' : 'gray.100'}
                                                        color={message.sender === 'me' ? 'black' : 'black'}
                                                        borderRadius="lg"
                                                        px={3}
                                                        py={2}
                                                    >
                                                        <Text fontSize="sm">{message.text}</Text>
                                                    </Box>
                                                    <Text fontSize="xs" color="gray.500" mt={1}>
                                                        {message.timestamp}
                                                        {message.sender === 'me' && (
                                                            <CheckIcon w={3} h={3} color="green.500" ml={1} />
                                                        )}
                                                    </Text>
                                                </Flex>
                                            ))}
                                        </VStack>
                                    </Flex>
                                    <Box p={4} borderTop="1px" borderColor="gray.200">
                                        <InputGroup size="md">
                                            <InputLeftElement width="4.5rem">
                                                <HStack spacing={2}>
                                                    <IconButton
                                                        icon={<FiClock />}
                                                        aria-label="Schedule message"
                                                        variant="ghost"
                                                        size="sm"
                                                    />
                                                    <IconButton
                                                        icon={<FiPaperclip />}
                                                        aria-label="Add attachment"
                                                        variant="ghost"
                                                        size="sm"
                                                    />
                                                </HStack>
                                            </InputLeftElement>
                                            <Input
                                                placeholder="Type your message here..."
                                                value={inputMessage}
                                                onChange={handleInputChange}
                                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                                pl="4.5rem"
                                                pr="4.5rem"
                                            />
                                            <InputRightElement width="6rem">
                                                <HStack spacing={2}>
                                                    <IconButton
                                                        icon={<FiSmile />}
                                                        aria-label="Add emoji"
                                                        variant="ghost"
                                                        size="sm"
                                                    />
                                                    <IconButton
                                                        icon={<MdKeyboardVoice />}
                                                        aria-label="Voice message"
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
                                                </HStack>
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
