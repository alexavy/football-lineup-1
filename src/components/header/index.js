import { Grid, GridItem, Box } from '@chakra-ui/react';

const Header = () => {
    return (
        <GridItem pl='25px' bg='#fff' area={'header'} display='flex' alignItems='center' borderBottom='1px solid #e1e1e1'>
            <header>
                <h3>Football LineUp</h3>
            </header>
        </GridItem>
    )
}

export default Header;