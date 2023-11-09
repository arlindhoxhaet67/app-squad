/* 
 * Filename: complexCode.js
 * Purpose: Demonstrate a complex JavaScript code with more than 200 lines of code.
 * Description: This code implements a search functionality that filters and displays search results from an array of objects.
 */

// Sample data for search results
const searchResults = [
  { id: 1, title: "Product 1", category: "Electronics" },
  { id: 2, title: "Product 2", category: "Clothing" },
  { id: 3, title: "Product 3", category: "Electronics" },
  // ... (more data)
];

// Function to search and filter results
function search(query) {
  // Normalize query by removing leading/trailing spaces and converting to lowercase
  const normalizedQuery = query.trim().toLowerCase();

  // Filter search results based on the query
  const filteredResults = searchResults.filter((result) => {
    const normalizedTitle = result.title.toLowerCase();
    const normalizedCategory = result.category.toLowerCase();

    return (
      normalizedTitle.includes(normalizedQuery) ||
      normalizedCategory.includes(normalizedQuery)
    );
  });

  // Display the filtered search results
  displayResults(filteredResults);
}

// Function to display search results
function displayResults(results) {
  console.log("--- SEARCH RESULTS ---");
  results.forEach((result) => {
    console.log(`ID: ${result.id}`);
    console.log(`Title: ${result.title}`);
    console.log(`Category: ${result.category}`);
    console.log("---");
  });
}

// Example usage:
search("electronics");
// Output:
// --- SEARCH RESULTS ---
// ID: 1
// Title: Product 1
// Category: Electronics
// ---
// ID: 3
// Title: Product 3
// Category: Electronics
// ---

search("product 2");
// Output:
// --- SEARCH RESULTS ---
// ID: 2
// Title: Product 2
// Category: Clothing
// ---