import { useForm } from "react-hook-form";
import ErrorsMessage from "../../components/ErrorsMessage/ErrorsMessage";


export default function Contact(){

    const {register, handleSubmit, formState:{errors}} = useForm();
    const submit =(data) => {
        console.log(data)
        console.log(errors)
    }

    return(
    <>
        <h2>Contact Page</h2>

        <form onSubmit={handleSubmit(submit)}>
            <label>
                <input type="text" {...register("name", {required: true})}/>
                {errors.name && errors.type === "required" && "El campo nombre es requerido"}
            </label>
            <span>
                <ErrorsMessage errors={errors} name="name"></ErrorsMessage>
                {/* {errors.name} */}
            </span>
            <label>
                <input type="email" {...register("email", {required: true, minLength: 10} )}/>
                <ErrorsMessage errors={errors} name="email"></ErrorsMessage>
                {/* {errors.mail && errors.type === "required" && "El campo nombre es requerido"}
                {errors.mail && errors.type === "required" && "El campo nombre es requerido"} */}
            </label>
            <label>
            <select name="lenguaje" {...register("lenguaje", {required: true, message: "Tienes que seleccionar un idioma"} )}>
                <option value="SelectIdioma">SelectIdioma</option>
                <option value="Español">Español</option>
                <option value="Ingles" selected>Ingles</option>
                <option value="Frances">Frances</option>
                {/* {errors.lenguaje && errors.type !== "required" && "El campo idioma es requerido"} */}
            </select>
                <ErrorsMessage errors={errors} name="lenguaje"></ErrorsMessage>
            </label>
            <button>Enviar</button>
        </form>
    </>
    )
}