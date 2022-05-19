import React, {useState} from 'react';

const Form = ({ getFilter}) => {
    const [form,setForm] = useState({name:'', username:'', email:''})

    const formHandler = (e) => {
       const eventData= {...form, [e.target.name]:e.target.value}
        setForm({...form, ...eventData})
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        getFilter(form)
    }

    return (
        <div>
            <form>
                <label> Name:<input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                <label> User name:<input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                <label> Email:<input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                <button onClick={onSubmit}>Filter</button>
            </form>
        </div>
    );
};

export default Form;