FROM node:6

ENV TARGET dev
ENV PORT 3000
ENV APP_DIR /data/app

COPY ./ /tmp
RUN cd /tmp \
    && npm install \
    && npm run release \
    && mkdir -p /data \
    && mv ./build/release/* /data \
    && rm -rf /tmp/* \
    && cd $APP_DIR \
    && npm install --only=prod --ignore-scripts

WORKDIR /data
CMD ["npm", "start"]
