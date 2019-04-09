FROM node:8

ENV NODE_ENV caas
ENV PORT 8080

COPY ./ /data
RUN cd /data \
    && npm install \
    && npm run build

WORKDIR /data
CMD ["npm", "start"]
