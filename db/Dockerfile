FROM mysql:5.7.33

COPY . /docker-entrypoint-initdb.d/

ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_USER=root

CMD ["--innodb_use_native_aio=0" , "--explicit_defaults_for_timestamp"]