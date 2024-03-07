
URL Alias API
Description
URL Alias API is a tool that allows users to create aliases for URLs. This can be useful for shortening long URLs or creating custom, memorable links.

Installation
Clone the repository:
bash
Copy code
git clone https://github.com/luizverissimo/shortner-api
Navigate to the project directory:
bash
Copy code
cd url-alias-api
Install dependencies:
Copy code
npm install
Configuration
Before starting the server, you need to create a .env file based on the provided .env.example file. Update the variables in the .env file as needed for your environment.

Setting up the Database
Ensure you have Docker installed by following the instructions on Docker's official website. Then, start the database by running the following command in your terminal:

Copy code
docker-compose up -d
Usage
To start the server in development mode, run:

arduino
Copy code
npm run start:dev
Running Tests
To execute the tests, run:

arduino
Copy code
npm run test

