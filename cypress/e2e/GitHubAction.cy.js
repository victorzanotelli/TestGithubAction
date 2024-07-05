
describe('Trello Test', function() {
  beforeEach('login', () => {
    cy.visit("https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D")
    cy.get("#username").type("victor.zano@gmail.com");
    cy.get("#login-submit").click();
    cy.wait(2000);
    cy.get("#password").type("");
    cy.get("#login-submit").click();
    cy.wait(5000);
    cy.visit("https://trello.com/b/6IjE1UlQ/testtrello");
  });
});
