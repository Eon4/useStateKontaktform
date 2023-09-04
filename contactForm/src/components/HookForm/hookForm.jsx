import { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./hookForm.module.scss";

export const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h1 className={style.hookTitle}>HookForm Here</h1>

      <form className={style.formStyle} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="fullName">
          Fulde navn:
          <input
            {...register("fullName", { required: true, maxLength: 15 })}
            placeholder="Enter your fullname here"
          ></input>
        </label>
        {errors.fullName && <span>Vær venlig at udfylde dette felt.</span>}


        <label htmlFor="phone">Skriv telefonnummer her:</label>
        <input
          {...register("phonenumber")}
          name="phone"
          
          placeholder="Enter your phonenumber here"
        ></input>

        <label htmlFor="email">
          Email her:
          <input
            {...register("emailRequired", { required: true })}
            placeholder="Enter your email here"
          ></input>
        </label>
        {errors.emailRequired && <span>Udfyld venligst dette felt også.</span>}
        
        <h3>Evt. Kommentar:</h3>
        <textarea
          rows="4"
          cols="50"
          name="comment"
          placeholder="Skriv en kommentar her"
        ></textarea>

        <label htmlFor="choice">
          Foretrukken kontaktmetode:
          <select {...register("choice")}>
            <option value="telefone">Telefon</option>
            <option value="email">Email</option>
          </select>
        </label>

        <input type="reset" value={"Reset"}></input>

        <input type="submit" value={"Send"}></input>
      </form>
    </>
  );
};

