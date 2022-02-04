import { useState } from 'react';
import Image from 'next/image';
import {
  Flex,
  Input,
  InputRightElement,
  InputGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useToast,
  Button,
  Text,
} from '@chakra-ui/react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

import api from '@services/api';

type IValues = {
  email: string;
  password: string;
};

const Auth = () => {
  const toast = useToast({ position: 'top-right' });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const initialValues: IValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values: IValues) => {
    try {
      api.post('/auth', values);
    } catch (err) {
      toast({ title: 'Erro!', description: 'Erro ao fazer login' });
    }
  };

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      bg="#FAFAFA"
      flexDir="column"
    >
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ errors, touched, isSubmitting }) => (
          <Flex
            bg="#fff"
            w="20%"
            as={Form}
            flexDir="column"
            shadow="md"
            p="20px"
            rounded="4px"
          >
            <Flex pos="relative" w="150px" h="40px" my="10px">
              <Image src="/marca-clina.png" layout="fill" alt="Logo CLina" />
            </Flex>
            <Text fontWeight={600} fontSize="20px">
              Bem-vindo de volta
            </Text>
            <FormControl
              mt="10px"
              isRequired
              isInvalid={!!(errors?.email && touched?.email)}
            >
              <FormLabel color="#4F4F4F" fontWeight={600}>
                Endereço de e-mail
              </FormLabel>

              <Field
                as={Input}
                name="email"
                placeholder="Digite o seu e-mail"
              />
              <ErrorMessage name="email" component={FormErrorMessage} />
            </FormControl>
            <FormControl
              mt="10px"
              isRequired
              isInvalid={!!(errors?.password && touched?.password)}
            >
              <FormLabel color="#4F4F4F" fontWeight={600}>
                Senha
              </FormLabel>
              <InputGroup>
                <Field
                  as={Input}
                  name="password"
                  placeholder="Senha"
                  type={passwordVisible ? 'text' : 'password'}
                />
                <InputRightElement
                  onClick={() => setPasswordVisible((old) => !old)}
                  cursor="pointer"
                >
                  {passwordVisible ? <BsEye /> : <BsEyeSlash />}
                </InputRightElement>
              </InputGroup>
              <ErrorMessage name="password" component={FormErrorMessage} />
            </FormControl>
            <Button
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
              rounded="4px"
              mt="20px"
              bg="#7A35FF"
              color="#fff"
              type="button"
              _hover={{ bg: '#6c2cec' }}
            >
              Entrar
            </Button>
            <Text
              mt="30px"
              fontWeight={600}
              textAlign="center"
              color="#212E89"
              textDecor="underline"
              cursor="pointer"
            >
              Esqueci minha senha
            </Text>
          </Flex>
        )}
      </Formik>
      <Flex w="20%" mt="30px">
        <Text>Novo na plataforma? </Text>
        <Text cursor="pointer" ml="5px" color="#212E89" fontWeight={600}>
          Cadastre-se
        </Text>
      </Flex>
    </Flex>
  );
};

export default Auth;
