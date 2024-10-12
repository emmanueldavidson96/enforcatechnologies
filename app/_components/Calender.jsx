import React, { useState } from 'react';
import { ChakraProvider, Box, Grid, Heading, Text, VStack, HStack, Button, Input, Flex, Select, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverCloseButton, PopoverHeader } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, SearchIcon, AddIcon, BellIcon } from '@chakra-ui/icons';

const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const Calendar = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [isAddInterviewOpen, setIsAddInterviewOpen] = useState(false);

    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    const toggleAddInterview = () => {
        setIsAddInterviewOpen(!isAddInterviewOpen);
    };

    return (
        <ChakraProvider resetCSS={false}>
            <Box minH="100vh" w="100vw" bg="white" overflowX="hidden">
                <VStack spacing={4} align="stretch" h="100%" p={4}>
                    <Flex justify="space-between" align="center" w="100%">
                        <Input
                            placeholder="Search for users and job listings"
                            maxW="600px"
                            w="100%"
                            leftIcon={<SearchIcon color="gray.300" />}
                        />
                        <HStack>
                            <Text fontSize="sm" color="gray.500">
                                {new Date().toLocaleString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    second: 'numeric',
                                    hour12: true,
                                })}
                            </Text>
                            <IconButton
                                aria-label="Notifications"
                                icon={<BellIcon />}
                                variant="ghost"
                                colorScheme="gray"
                            />
                        </HStack>
                    </Flex>
                    <Flex justify="space-between" align="center" w="100%">
                        <Heading as="h2" size="lg" color="#000080">
                            My Schedule
                        </Heading>
                        <Popover
                            isOpen={isAddInterviewOpen}
                            onClose={() => setIsAddInterviewOpen(false)}
                            placement="bottom-end"
                        >
                            <PopoverTrigger>
                                <Button
                                    leftIcon={<AddIcon />}
                                    bg="#3B4BF9"
                                    color="white"
                                    _hover={{ bg: '#2A3AD6' }}
                                    onClick={toggleAddInterview}
                                    borderRadius="full"
                                    px={6}
                                    fontWeight="normal"
                                >
                                    Add Interview
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent p={0} borderRadius="md" boxShadow="lg">
                                <PopoverHeader fontWeight="bold" borderBottomWidth={1} p={4}>
                                    Add Interview
                                </PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody p={4}>
                                    <Text>Add Interview form will be implemented here.</Text>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                    <Flex justify="space-between" align="center" w="100%">
                        <HStack>
                            <IconButton
                                aria-label="Previous month"
                                icon={<ChevronLeftIcon />}
                                variant="ghost"
                                color="#3B4BF9"
                            />
                            <Text fontSize="xl" fontWeight="bold" color="#3B4BF9">
                                August 2026
                            </Text>
                            <IconButton
                                aria-label="Next month"
                                icon={<ChevronRightIcon />}
                                variant="ghost"
                                color="#3B4BF9"
                            />
                        </HStack>
                        <Select
                            placeholder="View Month"
                            maxW="150px"
                            borderRadius="full"
                            borderColor="#3B4BF9"
                            color="#3B4BF9"
                            _hover={{ borderColor: "#2A3AD6" }}
                            icon={<ChevronDownIcon color="#3B4BF9" />}
                        >
                            <option value="week">View Week</option>
                            <option value="day">View Day</option>
                        </Select>
                    </Flex>
                    <Box flex={1} overflowY="auto" w="100%">
                        <Grid templateColumns="repeat(7, 1fr)" gap={0} w="100%" borderWidth={1} borderColor="gray.200">
                            {daysOfWeek.map((day) => (
                                <Box key={day} textAlign="center" fontWeight="bold" p={2} borderBottomWidth={1} borderRightWidth={1} borderColor="gray.200">
                                    {day}
                                </Box>
                            ))}
                            {[...Array(35)].map((_, index) => (
                                <Popover
                                    key={index}
                                    isOpen={selectedDay === index}
                                    onClose={() => setSelectedDay(null)}
                                >
                                    <PopoverTrigger>
                                        <Box
                                            onClick={() => handleDayClick(index)}
                                            textAlign="left"
                                            p={2}
                                            borderBottomWidth={1}
                                            borderRightWidth={1}
                                            borderColor="gray.200"
                                            position="relative"
                                            height="120px"
                                            cursor="pointer"
                                        >
                                            <Text fontSize="sm" color={index < 3 ? "gray.400" : "black"}>
                                                {index < 3 ? `JULY ${29 + index}` : index - 2}
                                            </Text>
                                        </Box>
                                    </PopoverTrigger>
                                    <PopoverContent borderRadius="md" boxShadow="lg">
                                        <PopoverHeader fontWeight="bold" borderBottomWidth={1} p={4}>
                                            Event Details
                                        </PopoverHeader>
                                        <PopoverCloseButton />
                                        <PopoverBody p={4}>
                                            <Text>Event details will be loaded here.</Text>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            ))}
                        </Grid>
                    </Box>
                </VStack>
            </Box>
        </ChakraProvider>
    );
}

export default Calendar;