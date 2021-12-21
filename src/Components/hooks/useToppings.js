import { useState } from 'react';

// const getTopping = toppings => toppings && toppings.map(topping => ({
//     name: topping,
//     checked: false
// }))

const getTopping = (toppings) =>
    toppings.map((topping) => ({
        name: topping,
        checked: false,
    }));

export function useToppings(openItem) {
    // const [toppings, setToppings] = useState(getTopping(openItem.toppings))

    // const checkToppings = index => {
    //     setToppings(toppings.map((topping, i) => {
    //         if(i === index) {
    //             topping.checked = !topping.checked
    //         }
    //         return topping;
    //     }))
    // }


    const readyTopping = openItem.topping ? openItem.topping : openItem.toppings ? getTopping(openItem.toppings) : []

    const [toppings, setToppings] = useState(readyTopping);

    const checkToppings = (index) => {
        setToppings(
            toppings.map((topping, i) => {
                if (i === index) {
                    topping.checked = !topping.checked;
                }
                return topping;
            })
        );
    };

    return { toppings, checkToppings };
}
