import React, { useState } from 'react';
import { ChakraProvider, Box, Grid, Heading, Text, VStack, HStack, Button, Input, Flex, IconButton, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverCloseButton, PopoverHeader } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, SearchIcon, AddIcon, BellIcon } from '@chakra-ui/icons';

const Calendar = () => {
    // State to track which day is currently selected
    const [selectedDay, setSelectedDay] = useState(null);
    // State to control interview form popup visibility
    const [isAddInterviewOpen, setIsAddInterviewOpen] = useState(false);

    // Array of weekday labels for calendar header
    const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

    // Handle click events on calendar days
    const handleDayClick = (day) => {
        setSelectedDay(day);
    };

    // Toggle the interview form popup
    const toggleAddInterview = () => {
        setIsAddInterviewOpen(!isAddInterviewOpen);
    };

    return (
        <ChakraProvider resetCSS={false}>
            <Box minH="100vh" w="100vw" bg="white" overflowX="hidden">
                <VStack spacing={4} align="stretch" h="100%" p={4}>
                    {/* Top search bar and notifications section */}
                    <Flex justify="space-between" align="center" w="100%">
                        <Input
                            placeholder="Search for users and job listings"
                            maxW="600px"
                            w="100%"
                            leftIcon={<SearchIcon color="gray.300" />}
                        />
                        <HStack>
                            {/* Current date/time display */}
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
                            {/* Notifications bell icon */}
                            <IconButton
                                aria-label="Notifications"
                                icon={<BellIcon />}
                                variant="ghost"
                                colorScheme="gray"
                            />
                        </HStack>
                    </Flex>

                    {/* Calendar header with title and add interview button */}
                    <Flex justify="space-between" align="center" w="100%">
                        <Heading as="h2" size="lg" color="#000080">
                            My Schedule
                        </Heading>
                        {/* Add Interview button with popup form */}
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

                    {/* Month navigation and view selector */}
                    <Flex justify="space-between" align="center" w="100%">
                        <HStack>
                            {/* Previous month button */}
                            <IconButton
                                aria-label="Previous month"
                                icon={<ChevronLeftIcon />}
                                variant="ghost"
                                color="#3B4BF9"
                            />
                            {/* Current month display */}
                            <Text fontSize="xl" fontWeight="bold" color="#3B4BF9">
                                August 2026
                            </Text>
                            {/* Next month button */}
                            <IconButton
                                aria-label="Next month"
                                icon={<ChevronRightIcon />}
                                variant="ghost"
                                color="#3B4BF9"
                            />
                        </HStack>
                        {/* View type selector */}
                        <Box
                            borderRadius="full"
                            borderColor="#3B4BF9"
                            color="#3B4BF9"
                            borderWidth={1}
                            px={4}
                            py={2}
                            display="flex"
                            alignItems="center"
                        >
                            <Text mr={2}>View Month</Text>
                            <ChevronDownIcon color="#3B4BF9" />
                        </Box>
                    </Flex>

                    {/* Calendar grid */}
                    <Box flex={1} overflowY="auto" w="100%">
                        <Grid templateColumns="repeat(7, 1fr)" gap={0} w="100%" borderWidth={1} borderColor="gray.200">
                            {/* Render weekday headers */}
                            {daysOfWeek.map((day) => (
                                <Box key={day} textAlign="center" fontWeight="bold" p={2} borderBottomWidth={1} borderRightWidth={1} borderColor="gray.200">
                                    {day}
                                </Box>
                            ))}
                            {/* Render calendar days */}
                            {[...Array(31)].map((_, index) => (
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
                                            {/* Display dates (including overflow from previous month) */}
                                            <Text fontSize="sm" color={index < 3 ? "gray.400" : "black"}>
                                                {index < 3 ? `JULY ${29 + index}` : index - 2}
                                            </Text>
                                        </Box>
                                    </PopoverTrigger>
                                    {/* Event details popup */}
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