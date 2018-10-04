FROM node:latest
LABEL maintainer="dgrigoryev@maprox.net"
LABEL description="SigMaPool White Label Portal"

ENV HOME /opt/sigmapool

COPY . $HOME/

WORKDIR $HOME

RUN npm install
RUN npm run build

EXPOSE 3000

# Default arguments, can be overriden

CMD npm start

# End.