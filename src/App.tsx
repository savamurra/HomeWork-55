import './App.css';
import {CountProps, IIngredient, IProps} from './types';
import meatImage from './assets/meat.png';
import saladImage from './assets/salad.png';
import cheeseImage from './assets/cheese.png';
import baconImage from './assets/bacon.png';
import {useState} from 'react';
import Ingredients from './components/Ingredients/Ingredients.tsx';
import Burger from './components/Burger/Burger.tsx';


const App = () => {
        const ingredients: IIngredient[] = [
            {name: 'Meat', price: 80, image: meatImage},
            {name: 'Salad', price: 10, image: saladImage},
            {name: 'Cheese', price: 50, image: cheeseImage},
            {name: 'Bacon', price: 60, image: baconImage},
        ];

        const [ingredientsCount, setIngredientsCount] = useState<CountProps[]>([
            {name: 'Meat', count: 0},
            {name: 'Salad', count: 0},
            {name: 'Cheese', count: 0},
            {name: 'Bacon', count: 0},
        ]);

        const [items, setItems] = useState<IProps[]>([]);
        const [total, setTotal] = useState<number>(30);


        const getIngredientsCount = (ingredientName: string) => {
            setIngredientsCount(prevState =>
                prevState.map(ingredient =>
                    ingredient.name === ingredientName ? {...ingredient, count: ingredient.count + 1} : ingredient,
                )
            );

            const total = ingredients.find(item => item.name === ingredientName);
            if (total) {
                setTotal(prevTotal => prevTotal + total.price);
            }

            const ingred = ingredientsCount.find(item => item.name === ingredientName);
            if (ingred) {
                setItems([...items, ingred]);
            }

        };

        const deleteIngredient = (ingredientName: string) => {
            const newItems = ingredientsCount.map(item => {
                if (item.name === ingredientName && item.count > 0) {
                    return {...item, count: item.count - 1};
                }
                return item;
            });

            const total = ingredients.find(item => item.name === ingredientName);
            if (total) {
                setTotal(prevTotal => prevTotal - total.price);
            }
            setIngredientsCount(newItems);

           const lastIndex = items.findIndex(item => item.name === ingredientName);

           if (lastIndex !== -1) {
               const deleteIngredient = items.slice();
               deleteIngredient.splice(lastIndex, 1);
               setItems(deleteIngredient);
           }
        };

        return (
            <>
                <h1>Your Order</h1>
                <div className='order'>
                    <Ingredients
                        ingredients={ingredients}
                        deleteIngredient={deleteIngredient}
                        ingredientsCount={ingredientsCount}
                        getIngredientsCount={getIngredientsCount}/>
                    <Burger items={items} total={total}/>
                </div>
            </>
        )

            ;
    }
;

export default App;
