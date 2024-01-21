let currentArticleId = '';

describe('User is on article details page', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${article.id}`);
    })
  })
  afterEach(() => {
    cy.removeArticle(currentArticleId);
  })
  it.skip('User see article details', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  })
  it.skip('User see recommendations list', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  })
  it.skip('User set comment', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })
  it('User set rating', () => {
    cy.intercept('GET', '**/articles/*', {fixture: 'article-details.json'})
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  })
})