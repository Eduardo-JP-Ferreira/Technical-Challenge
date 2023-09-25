## Etapa 1 - BUILD do projeto front-end

# imagem node
FROM node:alpine AS build

# um diretório de trabalho (cd <pasta>)
WORKDIR /app

# copiar o projeto pra dentro dessa imagem
COPY . .

# executar as paradinhas (scripts npm)
RUN npm install
RUN npm run build

## Etapa 2 - Servir o build do projeto em um servidor na porta que vc quiser (80)
## nginx - servidor de aplicações para prod

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# só para documentar, não tem efeito prático
EXPOSE 80

# dizer qual comando executar quando essa imagem virar um container
CMD [ "nginx", "-g", "daemon off;" ]