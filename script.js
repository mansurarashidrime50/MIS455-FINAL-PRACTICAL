const searchInput = document.getElementById("search-input");
        const searchBtn = document.getElementById("search-btn");
        const mealResults = document.getElementById("meal-results");
        const showAllContainer = document.getElementById("show-all-container");
        const modal = document.getElementById("mealDetailsModal");
        const overlay = document.getElementById("modal-overlay");

        async function fetchMeals(query) {