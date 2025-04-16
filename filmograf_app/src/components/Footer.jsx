import { Box, Text, Link, HStack, VStack } from '@chakra-ui/react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <Box bg="black" color="white" p="4" mt="8"> {/* Измененный фон и цвет текста */}
            <VStack spacing="4" align="center">

                <Text fontSize="lg" fontWeight="bold">Фильмограф</Text>
                <Text fontSize="sm">Приложение для поиска и сохранения информации о фильмах.</Text>

                <HStack spacing="4">
                    <Link href="#" _hover={{ textDecoration: 'underline' }}>О нас</Link>
                    <Link href="#" _hover={{ textDecoration: 'underline' }}>Контакты</Link>
                </HStack>

                <Text fontSize="sm">© {currentYear} Фильмограф</Text>

            </VStack>
        </Box>
    );

}

export default Footer;