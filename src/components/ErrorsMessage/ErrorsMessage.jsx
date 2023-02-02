export default function ErrorsMessage({errors,name}) {
    return <div>
        {errors[name] && errors[name].type === "required" && "El campo nombre es requerido"}
        {errors[name] && errors[name].type === "minLength" && "El campo tiene que tener mas de 3 caracteres"}
        {errors[name] && errors[name].type === "required" && "El campo idioma es requerido"}
    </div>

}