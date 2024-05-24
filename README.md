# Chat Roomly

Chat Roomly é uma aplicação web de chat em tempo real. O principal objetivo do desenvolvimento da aplicação foi aprender mais sobre WebSockets, explorar novas funcionalidades e tecnologias.

👉 [acesse a aplicação](https://chat-roomly.vercel.app)

![Preview](https://utfs.io/f/996547c6-8b1a-4dcf-a296-a277094162c4-gsen88.png)

Desenvolvi o frontend da aplicação utilizando Next.js em conjunto com TypeScript. A tela inicial foi projetada para fornecer uma breve introdução à aplicação e destacar um botão para login.

Para associar cada mensagem a um usuário, utilizei a biblioteca NextAuth para implementar a autenticação com o Google. Dessa forma, consegui obter o nome e a imagem do usuário, permitindo que ele acesse e interaja no chat de forma efetiva.

O sistema de envio de mensagens é muito intuitivo, semelhante à maioria dos aplicativos de chat. Na tela de chat, há um campo para inserir a mensagem e um botão para enviá-la. Ao enviar uma mensagem, o chat é atualizado em tempo real, permitindo que você veja sua mensagem instantaneamente, junto com seu nome e foto associados à conta do Google logada.

As mensagens são armazenadas em um banco de dados e podem ser visualizadas diretamente na tela de chat. Coloquei um botão na tela de chat que, ao ser clicado, exibe todas as mensagens enviadas e salvas no banco de dados.

## Backend

Utilizei o Express para desenvolver o backend e, para garantir a atualização em tempo real do chat, usei WebSockets com a biblioteca Socket.io. Além disso, utilizei o Prisma para conectar ao banco de dados e modelar a estrutura das mensagens. Optei pelo Supabase como banco de dados relacional para armazenar as mensagens da aplicação.
Você pode conferir o código do backend [aqui](https://github.com/arisonfirmino/api-chat-roomly)
