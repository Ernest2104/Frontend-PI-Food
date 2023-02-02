import axios from 'axios';
export const GET_RECIPES = 'GET_RECIPES';
export const GET_DIETS = 'GET_DIETS';
export const GET_RECIPE_NAME = 'GET_RECIPE_NAME';
export const GET_RECIPE_DETAIL = 'GET_RECIPE_DETAIL';
export const CLEAN_DETAIL_RECIPE = 'CLEAN_DETAIL_RECIPE';
export const FILTER_BY_DIET = 'FILTER_BY_DIET';
export const FILTER_BY_CREATED = 'FILTER_BY_CREATED';
export const ORDER = 'ORDER';
export const CREATE_RECIPE = 'CREATE_RECIPE';
export const SEARCH_BY_NAME = 'SEARCH_BY_NAME';

export const getRecipes = () => {
    return async (dispatch) => {
        const recipes = await axios.get('/recipes');
        return dispatch({
            type: 'GET_RECIPES',
            payload: recipes.data
        })
    }
};

export const cleanDetailRecipe = () => {
    return {
        type: 'CLEAN_DETAIL_RECIPE'
    }
}

export const getDiets = () => {
    return async (dispatch) => {
        const diets = await axios.get('/diets');
        return dispatch({
            type: 'GET_DIETS',
            payload: diets.data
        })
    }
};

export const getRecipeName = (name) => {
    return async (dispatch) => {
        try {
            const recipe = await axios.get('/recipes?name=' + name);
            return dispatch({
                type: 'GET_RECIPE_NAME',
                payload: recipe.data
            })
        }
        catch(error) {
            console.error(error)
            //alert('Receta no encontrada!!');
            document.getElementById('message').hidden = false;
            document.getElementById('message').innerText = '¡No se encontró la receta!'
            document.getElementById('inputName').focus();
        }
    }
}

export const getRecipeDetail = (id) => {
    return async (dispatch) => {
        try{
            const recipe = await axios.get('/recipes/'+ id);
            return dispatch({
                type: 'GET_RECIPE_DETAIL',
                payload: recipe.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export const postRecipe = (payload) => {
    return async () => {
        const recipe = await axios.post('/recipes', payload);
        return recipe;
    }
}

export const filterByDiet = (payload) => {
    return {
        type: 'FILTER_BY_DIET',
        payload
    }
};

export const filterByCreated = (payload) => {
    return {
        type: 'FILTER_BY_CREATED',
        payload
    }
};

export const order = (payload) => {
    return {
        type: 'ORDER',
        payload
    }
};

//------------------------------------------

// export const searchByName = (payload) => {
//     return {
//         type: 'SEARCH_BY_NAME',
//         payload
//     }
// }