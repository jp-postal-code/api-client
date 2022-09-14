describe('spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('#app').should(
      'have.text',
      `[
  {
    "postalCode": "1000001",
    "regionId": 13,
    "region": "東京都",
    "locality": "千代田区",
    "address1": "千代田",
    "address2": "",
    "regionKana": "トウキョウト",
    "localityKana": "チヨダク",
    "address1Kana": "チヨダ",
    "address2Kana": ""
  }
]`
    );
  });
});
