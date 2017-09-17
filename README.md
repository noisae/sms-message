# SMS Message

## Development Concepts

The code are based on best practices from some concepts like Clean Code, Refactor to Patterns, SOLID, Object Calisthenics, [Test Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html), [Behavior Drive Development](https://dannorth.net/introducing-bdd/), [Domain Driven Development](https://www.amazon.com.br/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215).

[Docker](https://docs.docker.com/compose/install/) are used to run the projects.

## Running the project
When start the application we will see a **no data** list. To make the things happen, you can try to send a message to number **13615023168** using your cellphone.
Now it's time to send a message, go foward on it!

Obs: To do the realtime we use [Pusher](https://pusher.com/) service, a great socket solution :)

```sh
$ docker-compose up
```

### Endpoints
- **List:** localhost:8080/messages
- **Send Message:** GET - localhost:8080/messages/send


## Backend
The Backend application structure are based on Architeture Layer Idea explained by Robert Martin on "[Ruby Midwest 2011 - Keynote: Architecture the Lost Years by Robert Martin](https://www.youtube.com/watch?v=WpkDN78P884)".

### Tests
```sh
$ docker-compose run --rm smsmessageapi yarn integration
$ docker-compose run --rm smsmessageapi yarn test
```

## Frontend
The Frontend application core are builded on top of Webpack, React Components, Redux, Graphql (with Apollo) and LESS. The code use some new features of ECMA2015 with a great help of our friend [Babel](https://babeljs.io/) :)

### Tests
```sh
$ docker-compose run --rm ssmsmessage-front yarn test
```
