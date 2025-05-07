import { DevTool } from "@hookform/devtools";
import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
const NewForm = () => {
  const {
    register,
    formState: {
      errors,
      isDirty,
      touchedFields,
      dirtyFields,
      isValid,
      isSubmitting,
      isSubmitSuccessful,
      isSubmitted,
    },
    control,
    handleSubmit,
    watch,
    getValues,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      content: "",
      social: {
        age: "",
        address: "",
      },
      phoneNumber: ["", ""],
      phnumbers: [
        {
          number: "",
        },
      ],
      pincode: 0,
      dob: new Date(),
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "phnumbers",
    control,
  });
  const submitData = (data) => {
    console.log(data);
  };
  const onError = (err) => {
    console.log("error", err);
  };
  console.log(fields);
  const handleGetvalues = () => {
    console.log("getValues", getValues());
    console.log("getValues Social", getValues("social"));
  };
  const handleSetvalue = () => {
    setValue("name", "", {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
  };
  console.log("formstate", isDirty, touchedFields, dirtyFields);
  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful]);
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitData, onError)}
        style={{ display: "flex", flexDirection: "column", width: "50%" }}
      >
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          name="name"
          {...register("name", {
            required: { value: true, message: "Username is required" },
          })}
        ></input>
        <p style={{ display: `${errors?.name?.message ? "block" : "none"}` }}>
          {errors?.name?.message}
        </p>
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", {
            validate: {
              noadmin: (val) => {
                return val != "akshatham9@gmail.com" || "use different mail id";
              },
              emailAvailable: async (fieldValue) => {
                const res = await fetch(
                  "https://jsonplaceholder.typicode.com/users"
                );
                const data = await res.json();
                return data.length === 0 || "email already exists";
              },
            },
          })}
        ></input>
        <p style={{ display: `${errors?.email?.message ? "block" : "none"}` }}>
          {errors?.email?.message}
        </p>
        <label htmlFor="content">content</label>
        <input
          type="text"
          id="content"
          name="content"
          {...register("content")}
        ></input>

        <label htmlFor="age">AGE</label>
        <input
          type="text"
          id="age"
          name="age"
          {...register("social.age")}
        ></input>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          {...register("social.address", {
            required: true,
            disabled: watch("social.age") === "",
          })}
        ></input>

        <label htmlFor="primary-num">primary-num</label>
        <input
          type="text"
          id="primary-num"
          name="primary-num"
          {...register("phoneNumber.0")}
        ></input>

        <label htmlFor="sec-num">sec-num</label>
        <input
          type="text"
          id="sec-num"
          name="sec-num"
          {...register("phoneNumber[1]")}
        ></input>
        <h1>List of phone numbers</h1>
        <div>
          {fields.map((item, index) => {
            return (
              <div key={item.id} className="form-control">
                <input
                  type="text"
                  {...register(`phnumbers[${index}].number`)}
                ></input>
                {index > 0 && (
                  <button onClick={() => remove(index)}> Remove </button>
                )}
              </div>
            );
          })}
        </div>
        <button onClick={() => append({ number: "" })}>Add phoneNumber</button>

        <label htmlFor="pincode">Pincode</label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          {...register("pincode", {
            valueAsNumber: true,
            required: {
              value: true,
              message: "pincode is required",
            },
          })}
        ></input>
        <p
          style={{ display: `${errors?.pincode?.message ? "block" : "none"}` }}
        >
          {errors?.pincode?.message}
        </p>
        <label htmlFor="dob">Dob</label>
        <input
          type="date"
          id="dob"
          name="dob"
          {...register("dob", {
            valueAsDate: true,
            required: {
              value: true,
              message: "dob is required",
            },
          })}
        ></input>
        <p style={{ display: `${errors?.dob?.message ? "block" : "none"}` }}>
          {errors?.dob?.message}
        </p>
        <button disabled={!isDirty || !isValid || isSubmitting}>Submit</button>
        <button onClick={handleGetvalues}>Get values</button>
        <button onClick={handleSetvalue}>Set values</button>
        <button onClick={() => reset()}>Reset values</button>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default NewForm;
