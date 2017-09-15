Feature: Message Api
  As an User
  I want to manage my Messages
  So that I can use it to Internal Communication

  Scenario: List Messages
    Given I have Messages
    When I retrieve a list of Messages
    Then I receive a list of Messages

  Scenario: Send Message
    Given I have a Message
    When I send a Message
    Then The message has been sended
