describe('User on articles list', () => {
  beforeEach(() => {
    cy.login().then(data => {
      cy.visit('articles')
    })
  })
  it('The articles has been successfully loaded', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  })
})