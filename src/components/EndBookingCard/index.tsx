import { Flex, Text, Button } from '@chakra-ui/react';

type EndBookingCardProps = {
  onSubmit: () => void;
  loading: boolean;
};

export const EndBookingCard = ({ onSubmit, loading }: EndBookingCardProps) => {
  return (
    <Flex
      height="auto"
      bg="#fff"
      shadow="xs"
      rounded="5px"
      p="25px"
      flexDir="column"
    >
      <Text fontWeight={600}>Valor total: R$ 80/h</Text>
      <Text>Nome do consultório - Sala 1</Text>

      <Text mt="20px" fontWeight={600}>
        Comodidades da sala incluídas
      </Text>
      <Text fontSize="14px">Sofá/Divá</Text>
      <Text fontSize="14px">Lavatório/Pia</Text>
      <Text fontSize="14px">Impressora</Text>

      <Text mt="20px" fontWeight={600}>
        Data e horário escolhido
      </Text>
      <Text>02 de março, 11:00 as 12:00</Text>

      <Button
        isLoading={loading}
        isDisabled={loading}
        loadingText="Reservando..."
        onClick={onSubmit}
        bg="#7A35FF"
        color="#fff"
        type="button"
        my="20px"
        _hover={{ bg: '#6c2cec' }}
      >
        Finalizar reserva
      </Button>
    </Flex>
  );
};
