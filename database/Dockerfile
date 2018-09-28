FROM postgres:9.6

COPY create_fixtures.sql /docker-entrypoint-initdb.d/create_fixtures.sql

RUN mkdir /code

WORKDIR /code

RUN mkdir /code/postgres_data
RUN chmod -R 777 /code/postgres_data
