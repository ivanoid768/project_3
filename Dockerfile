FROM node:latest
LABEL maintainer="dgrigoryev@maprox.net"
LABEL description="Dockerised NOMP"

ENV HOME /opt/sigmapool

COPY . $HOME/

WORKDIR $HOME

RUN npm install
RUN npm run build

EXPOSE 3333 80

# Default arguments, can be overriden

CMD npm start

# End.