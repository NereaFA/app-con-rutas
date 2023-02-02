
//https://thesimpsonsquoteapi.glitch.me/quotes?count=15&character=homer

import { useForm } from "react-hook-form";

export default function Search({onSubmit}){

    const {register, handleSubmit} = useForm();
    const submit = ({text}) =>{ //text o fdata
        console.log(text)
        onSubmit(text);
    }

    return(
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" {...register("text")}/>
        <button>Buscar</button>
    </form>
    )
}