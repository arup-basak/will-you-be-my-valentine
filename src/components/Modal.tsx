import React from "react";
import { Formik, Form, Field } from "formik";
import { z } from "zod";
import { violenceKeywords } from "../utils/constant";

interface ModalProps {
  isOpen: boolean;
  onSubmit: (value: string) => void;
}

const Modal = ({ isOpen, onSubmit }: ModalProps) => {
  const validateName = (value: string) => {
    const nameSchema = z
      .string()
      .min(1)
      .transform((text) => text.toLowerCase().trim())
      .refine(
        (text) => {
          const normalized = text.toLowerCase();
          return !violenceKeywords.some((keyword) =>
            normalized.includes(keyword.toLowerCase())
          );
        },
        { message: "Text contains inappropriate words" }
      )
      .refine((text) => !/[0-9]/.test(text), {
        message: "Text should not contain numbers",
      })
      .refine((text) => !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]+/.test(text), {
        message: "Text should not contain symbols",
      });

    try {
      nameSchema.parse(value);
      return undefined;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.errors[0].message;
      }
      return "Validation failed";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-8 bg-pink-50 rounded-xl shadow-lg flex flex-col gap-3">
        <Formik
          initialValues={{ name: "" }}
          validate={(values) => {
            const errors: { name?: string } = {};
            const nameError = validateName(values.name);
            if (nameError) {
              errors.name = nameError;
            }
            return errors;
          }}
          onSubmit={(values) => onSubmit(values.name)}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-2">
              <Field
                name="name"
                placeholder="Enter Your Name"
                className="border-2 border-pink-300 rounded-lg py-2 px-4 focus:outline-none focus:border-pink-500 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              />
              {errors.name && touched.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                disabled={!!errors.name || !touched.name}
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Modal;
