// Footer.jsx
import { Box, Text, Link, HStack, VStack } from '@chakra-ui/react';

function Footer() {
    const currentYear = new Date().getFullYear();


    return (
        <Box bg="gray.100" p="4" mt="8">
            <VStack spacing="4" align="center"> {/* Для вертикального центрирования */}

                <Text fontSize="lg" fontWeight="bold">Фильмография</Text> {/* Название */}
                <Text fontSize="sm">Приложение для поиска и сохранения информации о фильмах.</Text>  {/* Описание */}

                <HStack spacing="4"> {/* Для горизонтального расположения ссылок */}
                    <Link href="#"  _hover={{ textDecoration: 'underline' }}> О нас</Link>
                    <Link href="#" _hover={{ textDecoration: 'underline' }}>Контакты </Link>
                </HStack>

                <Text fontSize="sm">© {currentYear} Фильмография</Text> {/* Copyright */}


            </VStack>
        </Box>
    );
}


export default Footer;