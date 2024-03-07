#URL Alias API
##Description
The URL Alias API is a service that allows users to create aliases for URLs. It provides a convenient way to shorten and manage URLs.

Installation
Clone the repository:
´´´bash
git clone https://github.com/luizverissimo/shortner-api
´´´
Navigate to the project directory:
´´´bash
cd shortner-api
´´´
Install dependencies:
´´´bash
npm install
´´´

##Configuration
To configure the project, you need to create a .env file based on the provided .env.example. This file should contain environment-specific variables such as database connection details, API keys, etc.

##Setting up the Database
Before starting the server, ensure you have Docker installed. If not, follow the instructions on Docker's installation guide.

Start the database by running the following command in your terminal:
´´´bash
docker-compose up -d
´´´
This command will initialize the database container in the background.

##Usage
###To start the server, run:

´´´bash
npm run start:dev
´´´
This command will start the server in development mode. You can then access the API at http://localhost:3333.

Running Tests
To execute the tests, run:

´´´bash
npm run test
´´´
This command will run the unit test and provide feedback on the test results.


##Contact
If you have any questions, concerns, or suggestions regarding the project, feel free to contact me at luizverissimosouza@gmail.com.