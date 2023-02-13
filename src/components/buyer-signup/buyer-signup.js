import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../buyer-login/login-signup.css";
import { useState } from "react";

const BuyerSignUpForm = () => {
  const [apiResponse, setApiResponse] = useState(null);

  const handleSubmit = async (values, actions) => {

    try {
      const response = await fetch("http://localhost:3001/api/buyers/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if(data==="Account created successfuly"){
        window.location.replace("http://localhost:3000/buyer_login");

      }
      setApiResponse(data);
      console.log("apuuuu",apiResponse)
    } catch (error) {
      console.error(error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email cannot be blank."),
    name: Yup.string()
      .required("Name cannot be blank.")
      .matches(/^[a-zA-Z\s]+$/, "Name must contain only alphabets and spaces")
      .min(3, "Name must be at least 3 characters"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number is not valid.")
      .min(11, "03XXXXXXXXX")
      .max(11, "03XXXXXXXXX")

      .required("Phone cannot be blank."),
    password: Yup.string()
      .required("Password cannot be blank")
      .min(8, "Password must have at least 8 characters")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must contains one uppercase letter, one lowercase letter, one digit, and one special character."),
  });

  return (
    <div className="main">
      <div className="form-container">
        <h2 className="title-text">Buyer Signup</h2>
        <div className="image-container">
          <img
            className="profile-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPzBF74hA1avhZGbDvPRJK-cAaN7KL9I8ew&usqp=CAU"
            alt="profile"
          />
        </div>
        <Formik
          initialValues={{ email: "", name: "", phone: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit} >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="form">
                <label htmlFor="name" className="input-fields-lable">
                  Name
                </label>
                <Field
                  className="input-fields"
                  name="name"
                  placeholder="Name"
                />
                {errors.name && touched.name ? (
                  <div className="error-meessage">{errors.name}</div>
                ) : null}

                <label htmlFor="email" className="input-fields-lable">
                  Email
                </label>
                <Field
                  className="input-fields"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <div className="error-meessage">{errors.email}</div>
                ) : null}

                <label htmlFor="phone" className="input-fields-lable">
                  Phone
                </label>
                <Field
                  className="input-fields"
                  name="phone"
                  placeholder="Phone"
                />
                {errors.phone && touched.phone ? (
                  <div className="error-meessage">{errors.phone}</div>
                ) : null}

                <label htmlFor="password" className="input-fields-lable">
                  Password
                </label>
                <Field
                  className="input-fields"
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div className="error-meessage">{errors.password}</div>
                ) : null}
                {apiResponse && <p className="backend-response">{apiResponse}</p>}

                <button
                  className="submit-buton"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p className="text-before-link">
          Already have an account?{" "}
          <Link className="link-to-redirect" to="/buyer_login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default BuyerSignUpForm;
