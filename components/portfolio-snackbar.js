import {
    Box,
    Button,
    Container,
    Flex,
    Text,
    IconButton,
    useColorModeValue,
    Slide
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ExternalLinkIcon, CloseIcon } from '@chakra-ui/icons';

const text = {
    fr: {
        message: 'Nouveau portfolio disponible !',
        button: 'Visiter',
    },
    en: {
        message: 'New portfolio available!',
        button: 'Visit',
    }
}

const PortfolioSnackbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentLang, setCurrentLang] = useState('fr');

    useEffect(() => {
        // Check if there's a source query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const hasSourceParam = urlParams.has('source');
        const lang = urlParams.get('lang');

        // Set language
        if (lang && (lang === 'fr' || lang === 'en')) {
            setCurrentLang(lang);
        }

        // Check if user has dismissed the snackbar


    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
    };

    const handleVisit = () => {
        window.location.href = 'https://alexottmann.com';
    };

    return (
        <Slide direction="bottom" in={isVisible} style={{ zIndex: 1000 }}>
            {isVisible && <Box
                position="fixed"
                bottom={0}
                left={0}
                right={0}
                bg={useColorModeValue('white', '#202023')}
                borderTop="1px solid"
                borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
                boxShadow="0 -2px 10px rgba(0, 0, 0, 0.1)"
                py={3}
            >
                <Container maxW="container.md">
                    <Flex
                        align="center"
                        justify="space-between"
                        gap={3}
                        flexWrap={{ base: 'wrap', sm: 'nowrap' }}
                    >
                        <Flex align="center" gap={2} flex={1}>
                            <Text fontSize="sm" fontWeight="medium">
                                🎉 {text[currentLang].message}
                            </Text>
                        </Flex>

                        <Flex align="center" gap={2}>
                            <Button
                                size="sm"
                                colorScheme="teal"
                                onClick={handleVisit}
                                rightIcon={<ExternalLinkIcon />}
                            >
                                {text[currentLang].button}
                            </Button>
                            <IconButton
                                size="sm"
                                variant="ghost"
                                icon={<CloseIcon />}
                                onClick={handleDismiss}
                                aria-label="Dismiss"
                            />
                        </Flex>
                    </Flex>
                </Container>
            </Box>}
        </Slide>
    );
};

export default PortfolioSnackbar;
