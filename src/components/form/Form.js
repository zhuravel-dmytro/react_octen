import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {

    const {
        register, handleSubmit,watch, formState:{errors}
    } = useForm();

    const submit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>model: <input type="text" defaultValue={''} {...register('model')}></input></label>
                <label>price: <input type="text" defaultValue={'0'} {...register('price')}></input></label>
                <label>year: <input type="text" defaultValue={'2022'} {...register('year')}></input></label>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;