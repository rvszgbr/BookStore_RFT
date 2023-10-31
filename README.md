This is a simple BookStore application. It consists of Java back-end part and an Angular (Typescript) front-end.

Installation guide for back-end:

1. Run Wildfly - https://www.wildfly.org/ download and install it from the link if you didnt install it.

2. Run the "mvn package" command in the root directory of the bookstore-back application. This creates a target folder.

3. Deploy the bookstore-back.war from the generated target folder in Wildfly.

4. Now if you copy the following link into the browser, it lists all the books available in the database:

http://localhost:8080/bookstore-back/api/books

5. The API documentation of the application can be reached here: http://localhost:8080/bookstore-back/swagger.json

6. The APIs can be tested here: http://localhost:8080/bookstore-back/swagger-ui/#/Book

In addition, API integration tests can be found the BookEndpointTest.java file.

7. NOTES for the POST endpoint usage:

The id field must be ommitted. If you set this field you will get an Internal Server Error.

Other restrictions related to the fields of the Book model can be found in the API documentation.


The front-end documentation can be found in the root folder of the bookstore-front application.

Note: In order to reach the database from the front-end application, the back-end application must be running.

The CI-CD pipeline failes because the Wild fly deployment cannot be installed in the Github actions workflow.

Contributors:

- Ajtai Alex (neo3600) NEPTUN kód: IJG5H1

- Rivasz Gábor (rvszgbr) NEPTUN kód: U0W5J8

- Kicska Bence (benceee1204) NEPTUN kód: L26116