FROM mysql:8.0

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=rootpass
ENV MYSQL_DATABASE=mydb

# Copy your SQL schema/data file into the container
COPY pbooth_combined_db.sql /docker-entrypoint-initdb.d/

