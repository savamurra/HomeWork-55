import * as React from 'react';
import {CountProps, IIngredient} from '../../types';
import './Ingredients.css';

interface Ingredient {
    ingredients: IIngredient[];
    ingredientsCount: CountProps[];
    getIngredientsCount: (ingredientName: string) => void
    deleteIngredient: (ingredientName: string) => void;
}

const Ingredients:React.FC<Ingredient> = ({ingredients,ingredientsCount, getIngredientsCount ,deleteIngredient}) => {
    return (
        <div className='ingredients'>
            <h3 className='ingredientsTitle'>Ingredients</h3>
            {ingredients.map((ingredient) => (
                    <div key={ingredient.name} className='ingredientsInner'>
                        <button type='button'
                                onClick={() => getIngredientsCount(ingredient.name)}
                                className='addButton'
                        >
                            <img style={{width: '50px'}}
                                 src={ingredient.image}
                                 alt={ingredient.name}/>
                        </button>
                        <p>{ingredient.name}</p>
                        <p>x{ingredientsCount.find(item => item.name === ingredient.name)?.count}</p>
                        {ingredientsCount.find(item => item.name === ingredient.name && item.count > 0) ?
                            <button type='button' className='deleteBtn'
                                    onClick={() => deleteIngredient(ingredient.name)}></button> : null}
                    </div>
                ))}
        </div>

    );
};

export default Ingredients;