document.addEventListener('DOMContentLoaded', () => {
    const fridgeIngredients = [
        "Carrots", "Bell Peppers", "Broccoli", "Spinach", "Lettuce", "Tomatoes", 
        "Cucumbers", "Celery", "Cauliflower", "Mushrooms", "Green Beans", 
        "Peas", "Corn", "Apples", "Oranges", "Grapes", "Strawberries", 
        "Blueberries", "Raspberries", "Lemons", "Limes", "Bananas", "Pineapple", 
        "Avocado", "Mango", "Watermelon", "Peaches", "Plums", "Milk", "Yogurt", 
        "Cheese", "Eggs", "Ketchup", "Mustard", "Mayonnaise", "Soy Sauce", 
        "BBQ Sauce", "Hot Sauce", "Pickles", "Chicken Breast", "Ground Beef", 
        "Bacon", "Turkey", "Salmon", "Tuna", "Shrimp", "Orange Juice", 
        "Apple Juice", "Milk (Dairy)", "Almond Milk", "Soy Milk", "Iced Tea", 
        "Lemonade", "Smoothies", "Bread", "Leftovers", "Cooked Pasta", 
        "Cooked Rice"
    ];

    const recipes = [
        {
            name: "Chicken Stir-Fry",
            ingredients: ["Chicken Breast", "Bell Peppers", "Broccoli", "Carrots", "Soy Sauce", "Hot Sauce"],
            description: "A quick and healthy stir-fry with tender chicken and fresh vegetables tossed in a savory soy and hot sauce mixture."
        },
        {
            name: "Vegetable Salad",
            ingredients: ["Lettuce", "Tomatoes", "Cucumbers", "Carrots", "Bell Peppers", "Celery", "Avocado", "Lemon Juice"],
            description: "A refreshing and crunchy salad with a mix of fresh vegetables, dressed in a tangy lemon and olive oil vinaigrette."
        },
        {
            name: "Fruit Smoothie",
            ingredients: ["Bananas", "Strawberries", "Blueberries", "Yogurt", "Milk", "Honey"],
            description: "A delicious and nutritious smoothie blended with fresh fruits, yogurt, and milk, sweetened with a touch of honey."
        },
        {
            name: "Cheese Omelette",
            ingredients: ["Eggs", "Cheese", "Spinach", "Mushrooms"],
            description: "A classic omelette filled with melted cheese, sautéed spinach, and mushrooms."
        },
        {
            name: "BBQ Chicken Wrap",
            ingredients: ["Chicken Breast", "Lettuce", "Tomatoes", "Cheese", "BBQ Sauce", "Tortilla Wraps"],
            description: "A tasty wrap with grilled chicken, fresh veggies, and melted cheese, drizzled with BBQ sauce."
        },
        {
            name: "Tuna Salad",
            ingredients: ["Tuna", "Celery", "Mayonnaise", "Lemon Juice", "Lettuce", "Tomatoes", "Pickles"],
            description: "A creamy and tangy tuna salad, perfect for sandwiches or as a standalone dish."
        },
        {
            name: "Avocado Toast",
            ingredients: ["Avocado", "Bread", "Lemon Juice", "Salt", "Pepper", "Red Pepper Flakes"],
            description: "A simple and delicious avocado toast with creamy avocado, seasoned with lemon juice, salt, and pepper, topped with red pepper flakes."
        },
        {
            name: "Fruit Salad",
            ingredients: ["Apples", "Oranges", "Grapes", "Strawberries", "Blueberries", "Raspberries", "Pineapple", "Mint"],
            description: "A colorful and refreshing fruit salad with a mix of fresh fruits, garnished with mint leaves."
        },
        {
            name: "Chicken Caesar Salad",
            ingredients: ["Chicken Breast", "Lettuce", "Parmesan Cheese", "Croutons", "Caesar Dressing"],
            description: "A classic Caesar salad with grilled chicken, crispy lettuce, Parmesan cheese, and crunchy croutons, dressed in Caesar dressing."
        },
        {
            name: "Shrimp Stir-Fry",
            ingredients: ["Shrimp", "Bell Peppers", "Broccoli", "Carrots", "Soy Sauce", "Hot Sauce", "Garlic", "Ginger"],
            description: "A quick and tasty stir-fry with succulent shrimp and fresh vegetables, tossed in a savory soy and hot sauce mixture."
        }
    ];

    const ingredientSelect = document.getElementById('ingredient');
    const ingredientForm = document.getElementById('ingredient-form');
    const ingredientList = document.getElementById('ingredient-list');
    const recipesDiv = document.getElementById('recipes');
    const ingredients = [];

    fridgeIngredients.forEach(ingredient => {
        const option = document.createElement('option');
        option.value = ingredient;
        option.textContent = ingredient;
        ingredientSelect.appendChild(option);
    });

    document.getElementById('add-ingredient').addEventListener('click', () => {
        const ingredient = ingredientSelect.value;
        if (ingredient && !ingredients.includes(ingredient)) {
            ingredients.push(ingredient);
            updateIngredientList();
        }
    });

    ingredientForm.addEventListener('submit', (e) => {
        e.preventDefault();
        findRecipes();
    });

    function updateIngredientList() {
        if (ingredients.length === 0) {
            ingredientList.innerHTML = '<p>No ingredients added yet.</p>';
        } else {
            ingredientList.innerHTML = '<ul>' + ingredients.map(ing => `<li>${ing}</li>`).join('') + '</ul>';
        }
    }

    function findRecipes() {
        const matchedRecipes = recipes.filter(recipe => 
            recipe.ingredients.some(ingredient => ingredients.includes(ingredient))
        );

        if (matchedRecipes.length === 0) {
            recipesDiv.innerHTML = '<p>No recipes found. Please add more ingredients.</p>';
        } else {
            recipesDiv.innerHTML = '<ul>' + matchedRecipes.map(recipe => `
                <li>
                    <h3>${recipe.name}</h3>
                    <p>${recipe.description}</p>
                </li>
            `).join('') + '</ul>';
        }
    }
});
