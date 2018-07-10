FROM node:alpine
LABEL maintainer = "Hector Lovo <lovohh@gmail.com>"

ENV USER foodacidity
ENV HOME /home/${USER}

RUN npm install -g @angular/cli

COPY package.json ${HOME}/

WORKDIR ${HOME}/

RUN npm install

COPY . ${HOME}/

EXPOSE 4200

CMD ["npm", "start"]
