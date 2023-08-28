import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem,Flex,Box,Spacer, } from '@chakra-ui/react'

const NavBar = () => {
    return (
        <>
            <Flex>
                <Box p='4' >
                    candystore
                </Box>
                <Spacer />

                <Box p='4' >
                
                    <Menu>
                        <MenuButton >categorias</MenuButton>
                        <MenuList>
                            <MenuItem as='a' href='#'>Link 1</MenuItem>
                            <MenuItem as='a' href='#'>Link 2</MenuItem>
                        </MenuList>
                    </Menu>
                    
                </Box>
                <Spacer/>
                <Box p='4' >

                    <CartWidget />
                </Box>
            </Flex>






        </>
    )
}

export default NavBar