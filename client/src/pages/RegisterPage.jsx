import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";


function RegisterPage() {
  const {register, handleSubmit} = useForm();
  const {signup, user} = useAuth();

  console.log(user)

  const onSubmit = handleSubmit(async (values) =>{
    signup(values)
    
    });
  
  
  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onsubmit}>

        <input type="email" {...register('email', {required : true})}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3"
        placeholder="email"
        />

        <input type="number" {...register('telefono',{valueAsNumber:true, required : true})}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-3" placeholder="telefono"/>

        <input type="password" {...register('password', {required : true})}
        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" placeholder="password"/>

        <button type="submit">
          Registrar
        </button>
        
      </form>
      
      </div>
  )
}

export default RegisterPage
