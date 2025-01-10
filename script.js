const searchInput = document.getElementById("search-input");
        const searchBtn = document.getElementById("search-btn");
        const mealResults = document.getElementById("meal-results");
        const showAllContainer = document.getElementById("show-all-container");
        const modal = document.getElementById("mealDetailsModal");
        const overlay = document.getElementById("modal-overlay");

        async function fetchMeals(query) {
            const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
            const response = await fetch(url);
            const data = await response.json();
            return data.meals || [];
        }

        function renderMeals(meals, showAll = false) {
            mealResults.innerHTML = "";
            showAllContainer.innerHTML = "";

            const displayedMeals = showAll ? meals : meals.slice(0, 5);

            displayedMeals.forEach(meal => {
                const mealCard = `
                    <div class="card">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p><strong>ID:</strong> ${meal.idMeal}</p>
                            <p>${meal.strInstructions.substring(0, 100)}...</p>
                            <button class="btn" onclick="showMealDetails('${meal.idMeal}')">Details</button>
                        </div>
                    </div>
                `;
                mealResults.insertAdjacentHTML("beforeend", mealCard);
            });

            if (!showAll && meals.length > 5) {
                const showAllBtn = `<button class="btn">Show All</button>`;
                showAllContainer.innerHTML = showAllBtn;
                showAllContainer.querySelector("button").addEventListener("click", () => renderMeals(meals, true));
            }
        }
