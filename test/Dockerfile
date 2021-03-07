FROM node:12.18.4-alpine
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/
COPY app.js ./app.js
ENV NODE_ENV production
CMD node app.js
