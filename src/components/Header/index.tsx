import Image from 'next/image';
import Router from 'next/router';
import {
  Flex,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { BiChevronDown } from 'react-icons/bi';
import { destroyCookie } from 'nookies';

export const Header = () => {
  const logout = () => {
    destroyCookie(null, 'token');
    Router.reload();
  };

  return (
    <Flex align="center" px="80px" mb="30px" justify="space-between">
      <Flex align="center">
        <Flex pos="relative" w="100px" h="30px" my="10px">
          <Image src="/marca-clina.png" layout="fill" alt="Logo CLina" />
        </Flex>
      </Flex>
      <Flex>
        <Menu>
          <MenuButton
            bg="#fff"
            as={IconButton}
            rightIcon={<BiChevronDown color="#4F4F4F" size={25} />}
          >
            <Avatar mr="10px" size="sm" />
          </MenuButton>
          <MenuList>
            <MenuItem>Perfil</MenuItem>
            <MenuItem onClick={logout}>Sair</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
