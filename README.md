## Getting Started

Primeiramente rode o backend da aplicação na porta 3030, porta já está definida, se precisar mudar, mude os arquivos .env.production e .env.development.

```bash
npm run dev
# or
yarn dev
```
A aplicação conta com uma autenticação basica com JWT e salva o token em um cookie no navegador, as credencias são:

email: caio@clina.care.com
senha: clinacare

é a mesma entidade que é salva no DB

# Design System
Para construção da UI gosto muito do `@chakra-ui` possui componentes bons e vem com uma estilização por padrão muito boa, mas faceis de sobreescrever se precisarmos, a lib usa o conceito de UI declarativa aonde todo o CSS é declarado via props do componente assim aumentando muito a produtividade.

# Cliente HTTP
Para requisições gosto muito do `axios` + `swr`, axios conta com uma gama de funcionalidades muito uteis no nosso dia a dia, o `swr` para revalidações de requests e cache também assim evitando duplicidade de requisições e sem contar do seu poder com a hidratação da pagina com o next
