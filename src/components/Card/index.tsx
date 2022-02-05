import Image from 'next/image';

import { Flex, Text, Button } from '@chakra-ui/react';

interface ICardProps {
  id: number;
  name: string;
  image: string;
  address: {
    state: string;
    city: string;
  };
}

export const Card = ({}: ICardProps) => {
  return (
    <Flex
      bg="#fff"
      rounded="5px"
      align="center"
      shadow="xs"
      justify="space-between"
    >
      <Flex
        pos="relative"
        h={['50px', '100px', '150px', '200px', '250px']}
        w={['50px', '150px', '250px', '300px', '350px']}
        rounded="5px"
        overflow="hidden"
      >
        <Image src="/exemplo-sala.jpg" layout="fill" alt="Exemplo" />
      </Flex>
      <Flex flexDir="column">
        <Text fontSize={['13px', '13px', '16px', '22px']} fontWeight={600}>
          Nome do consultório - Sala 01
        </Text>
        <Text fontSize={['13px', '13px', '14px']} color="#4F4F4F">
          Em Bela Vista, SP
        </Text>
      </Flex>
      <Flex
        flexDir="column"
        align="flex-end"
        mr={['30px', '20px', '10px', '0px']}
      >
        <Text fontSize={['13px', '13px', '14px']} color="#4F4F4F">
          A partir de{' '}
        </Text>
        <Flex>
          <Text
            fontSize={['13px', '13px', '14px', '16px', '20px']}
            fontWeight={600}
          >
            R$ 80
          </Text>
          <Text fontSize={['13px', '13px', '14px', '16px', '20px']}>/h</Text>
        </Flex>
      </Flex>
      <Button
        display={['none', 'none', 'block']}
        mr={['10px', '20px', '30px', '40px']}
        px={['10px', '20px', '30px', '50px']}
        mt="20px"
        bg="#7A35FF"
        color="#fff"
        type="button"
        _hover={{ bg: '#6c2cec' }}
      >
        Reservar
      </Button>
    </Flex>
  );
};
