import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export default function CURP() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);

      const alertActivated = () => {
          Swal.fire({
              position: "center",
              icon: "success",
              title: "CURP valida",
              showConfirmButton: false,
              timer: 1600,
          });
      };

      const onSubmit = (data) => {
          alertActivated();
      }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="CURP" {...register("CURP", {
                    required: {
                      value: true,
                      message: "Campo obligatorio",
                    },
                    pattern: {
                      value: /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
                      message: "La CURP no es correcto",
                    },
                  })}
                  className="input is-purple"
                  type="text"
                />
                {errors.CURP && (
                  <span className="error-message-field">
                    {errors.CURP.message}
                  </span>
                )}
      <input type="submit" />
    </form>
  );
}