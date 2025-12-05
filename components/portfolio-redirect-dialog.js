import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Text,
    Box,
    useDisclosure,
    useColorModeValue
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const PortfolioRedirectDialog = () => {
    const [currentLang, setCurrentLang] = useState('fr')
    const text = {
        fr: {
            title: 'Nouveau Portfolio Disponible!',
            text1: 'Hello ! Vous êtes actuellement entrain de consulter mon premier portfolio (v1).',
            text2: 'J\'ai depuis créé un portfolio avec des projets mis à jour, un nouveau design, et plus de fonctionnalités.',
            text3: 'Soyez libre de consulter cette version, ou explorer mon nouveau portfolio !',
            visitNew: 'Visiter le nouveau portfolio',
            stayHere: 'Restez ici',
        },
        en: {
            title: 'New Portfolio Available!',
            text1: 'Hello! You\'re currently viewing my first portfolio (v1).',
            text2: 'I\'ve since created a brand new portfolio with updated projects, improved design, and more features.',
            text3: 'Feel free to explore this version, or check out the latest one!',
            visitNew: 'Visit the new portfolio',
            stayHere: 'Stay here',
        }
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        // Check if there's a source query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const hasSourceParam = urlParams.has('source');
        const lang = urlParams.get('lang');

        // Set language, default to 'en' if lang i?? s null or invalid
        if (lang && (lang === 'fr' || lang === 'en')) {
            setCurrentLang(lang);
        }
        // Check if user has already seen the dialog
        const hasSeenDialog = sessionStorage.getItem('hasSeenPortfolioDialog');

        // Show dialog only if no source param and hasn't been seen
        if (!hasSourceParam && !hasSeenDialog) {
            onOpen();
            sessionStorage.setItem('hasSeenPortfolioDialog', 'true');
        }
    }, [onOpen]);

    const handleVisitNew = () => {
        window.location.href = 'https://alexottmann.com';
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
            <ModalOverlay
                bg={useColorModeValue('#fffff480', '#20202380')}
                backdropFilter="blur(10px)"
            />
            <ModalContent
                mx={4}
                borderRadius="lg"
            >
                <ModalHeader
                    fontSize="2xl"
                    fontWeight="bold"
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}

                >
                    🎉 {text[currentLang].title}
                </ModalHeader>
                <ModalBody pb={6}>
                    <Box>
                        <Text fontSize="md" mb={3}>
                            {text[currentLang].text1}
                        </Text>
                        <Text fontSize="md" mb={3}>
                            {text[currentLang].text2}
                        </Text>
                        <Text
                            fontSize="md"
                            color={useColorModeValue('gray.600', 'gray.400')}
                        >
                            {text[currentLang].text3}
                        </Text>
                    </Box>
                </ModalBody>

                <ModalFooter gap={3}>
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        colorScheme="gray"
                    >
                        {text[currentLang].stayHere}
                    </Button>
                    <Button
                        colorScheme="teal"
                        onClick={handleVisitNew}
                        rightIcon={<ExternalLinkIcon />}
                    >
                        {text[currentLang].visitNew}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default PortfolioRedirectDialog;
