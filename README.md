# E-commerce Website

This is an e-commerce website built using **Spring Boot 3**, **React 18**, and **Bootstrap 5** with a **Bootswatch** theme. The application uses a **PostgreSQL** database to store data.

![plot](https://github.com/mgrybel/ecommerce-website/blob/master/frontend/public/images/products.png?raw=true)

![plot](https://github.com/mgrybel/ecommerce-website/blob/master/frontend/public/images/cart.png?raw=true)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the application](#run-the-application)
- [Copyright and License](#copyright-and-license)

## Prerequisites

Install the following prerequisites:

1. [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) or [OpenJDK](https://openjdk.org/)
2. [Node.js](https://nodejs.org/en/)
3. [PostgreSQL](https://www.postgresql.org/download/)
4. [Visual Studio Code](https://code.visualstudio.com/download) with two extensions installed:

- [Language Support for Java(TM) by Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.java)
- [Maven for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-maven)

## Installation

### 1. Backend

From the **root** directory, run:

```bash
cd backend
```

```bash
mvn compile
```

### 2. Install and start PostgreSQL

This process will be different depending on your operating system, so please check the documentation on how to set up and start **PostgreSQL** on your operating system.

You will find more information [here](https://www.postgresql.org/download/).

### 3. Set up a PostgreSQL database

With **PostgreSQL** up and running, in a new Terminal window, run:

```bash
dropdb --if-exists ecommerce
```

Start **psql**, which is a terminal-based front-end to PostgreSQL, by running the command:

```bash
psql postgres
```

Create a new PostgreSQL database:

```sql
CREATE DATABASE ecommerce;
```

To quit **psql**, run:

```bash
\q
```

### 4. Frontend

From the **root** directory, run:

```bash
cd frontend
```

```bash
npm install
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

### 1. Run backend

From the **backend** directory, run:

```bash
./mvnw spring-boot:run
```

### 2. Run frontend

From the **frontend** directory, run:

```bash
npm run dev
```

## View the application

Go to http://localhost:3000/ to view the application.

## Copyright and License

Copyright © 2024 mgrybel. Code released under the MIT license.
