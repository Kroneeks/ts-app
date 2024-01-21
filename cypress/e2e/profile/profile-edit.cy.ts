let profileId = '';

describe('User open profile page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login().then(data => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    })
  })
  afterEach(() => {
    cy.resetProfile(profileId);
  })
  it('Profile has been successfully loaded', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test')
  })
  it('User change profile', () => {
    const newName = 'new';
    const newLastName = 'lastname'
    cy.updateProfile(newName, newLastName)
    cy.getByTestId('ProfileCard.firstname').should('have.value', newName)
    cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName)
  })
})