import React, {ChangeEvent, useState} from 'react';
import {ApiPizza, PizzaMutation} from "../../../types.ts";
import Spinner from "../../UI/Spinner/Spinner.tsx";

interface Props {
    addNewPizza: (newPizza: ApiPizza) => void;
    existingPizza?: PizzaMutation;
    isEditingPizza?: boolean;
    isLoading: boolean
}

const initialState = {
    name: '',
    price: 0,
    image: '',
}

const AdminForm: React.FC<Props> = ({addNewPizza, existingPizza = initialState, isLoading, isEditingPizza = false}) => {
    const [pizza, setPizza] = useState<PizzaMutation>(existingPizza)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;

        setPizza((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        addNewPizza({
            ...pizza,
            price: Number(pizza.price),
        })

        if (!isEditingPizza) {
            setPizza({
                name: '',
                price: 0,
                image: '',
            });
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            {isLoading ? <Spinner /> :
                <>
            <div className="form-group">
                <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={pizza.name}
                        onChange={handleChange}
                        className='form-control'/>
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="price">
                    Price:
                    <input
                        type="number"
                        id="price"
                        name="price"
                        required
                        value={pizza.price}
                        onChange={handleChange}
                        className='form-control'/>
                </label>
            </div>

            <div className="form-group">
                <label htmlFor="image">
                    Photo:
                    <input
                        type="url"
                        id="image"
                        name="image"
                        required
                        value={pizza.image}
                        onChange={handleChange}
                        className='form-control'/>
                </label>
            </div>
                    {isEditingPizza ? <button className='btn btn-success' type='submit'>Edit</button>
                        :
                        <button className='btn btn-dark' type="submit">Create</button>
                    }
                </>
            }
        </form>
    );
};

export default AdminForm;