import { server } from './server/Server.js';

const PORT = process.env.PORT || 3333;

process.on('uncaughtException', (error) => {
  console.error('Erro não tratado:', error);
  process.exit(1);
});

process.on('unhandledRejection', (error) => {
  console.error('Promise rejeitada não tratada:', error);
  process.exit(1);
});

server
  .listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}!`);
  })
  .on('error', (error) => {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  });
