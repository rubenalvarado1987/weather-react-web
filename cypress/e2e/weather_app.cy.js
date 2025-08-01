describe("Weather App E2E Test", () => {
  it("should search for a city and display the weather", () => {
    // Visit the app
    cy.visit("http://localhost:5173/");

    // Enter city name into the search bar
    cy.get('[data-testid="city-input"]').clear().type("New York");

    // Click the search button
    cy.contains("button", "Search").click();

    // Verify that the weather information is displayed
    cy.get('[data-testid="weather-city-name"]').should("contain", "New York");
    cy.get('[data-testid="weather-temperature"]').should("exist");
    cy.get('[data-testid="weather-condition"]').should("exist");
  });
});
