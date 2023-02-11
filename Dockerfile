FROM buildkite/puppeeter:latest

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install nodejs -y

WORKDIR /app
COPY . /app
RUN npm install
CMD ["sh", "start.sh"]
EXPOSE 8080
