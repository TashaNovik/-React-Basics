import { Link } from 'react-router-dom';
import { Box, HStack, Spacer } from '@chakra-ui/react';


function Header() {
    return (
        <header>
            <nav>
                <HStack spacing="240px" >
                    <Link to="/">Главная</Link>
                    <Link to="/favorites">Избранное</Link>
                    <Link to="/add">Добавить фильм</Link>
                </HStack>
            </nav>
        </header>
    );
}


export default Header;