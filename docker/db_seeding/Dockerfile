FROM node:13.8.0

WORKDIR /code


COPY ./docker/db_seeding/package.json /code/package.json
COPY ./db-mongo/index.js /code/db-mongo/index.js
COPY ./db-mongo/Review.js /code/db-mongo/Review.js
COPY ./db-mongo/seed.js /code/db-mongo/seed.js

RUN npm install

CMD ["node", "db-mongo/seed.js"]