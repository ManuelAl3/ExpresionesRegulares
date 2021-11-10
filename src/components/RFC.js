import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export default function RFC() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);

    const alertActivated = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "RFC valida",
            showConfirmButton: false,
            timer: 1600,
        });
    };

    const onSubmit = (data) => {
        alertActivated();
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="RFC" {...register("RFC", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                    pattern: {
                      value: /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/,
                      message: "El RFC no es correcto",
                    },
                  })}
                  className="input is-purple"
                  type="text"
                />
                {errors.RFC && (
                  <span className="error-message-field">
                    {errors.RFC.message}
                  </span>
                )}
      <input type="submit" />
    </form>
  );
}
