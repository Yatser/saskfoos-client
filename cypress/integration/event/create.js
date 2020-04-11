describe('Create event', () => {
	beforeEach(() => {
		cy.visit('/event/create?type=koh')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Create Event')
	});

	it('navigates to /events/<eventId>', () => {
		cy.get('button').contains('Create').click();
		cy.url().should('include', '/event/id');
	});
});