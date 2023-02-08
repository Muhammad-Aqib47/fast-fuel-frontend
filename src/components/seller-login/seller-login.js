import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../buyer-login/login-signup.css";
import { useState } from "react";

const SellerLoginForm = () => {
  const [apiResponse, setApiResponse] = useState(null);


  const handleSubmit = async (values, actions) => {
    console.log(">>>>>>>>>>>>>>>>>>>>", values);

    try {
      const response = await fetch("http://localhost:3001/api/sellers/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(".>>>><<<>>>>", data);
      setApiResponse(data);
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
    password: Yup.string().required("Password is required"),
    // .min(8, "Password must have at least 8 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/, "Password must have at least one uppercase letter, one lowercase letter, and one digit")
  });

  return (
    <div className="main">
      <div className="form-container">
        <h2 className="title-text">Seller Login</h2>
        <div className="image-container">
          <img
            className="profile-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTPzBF74hA1avhZGbDvPRJK-cAaN7KL9I8ew&usqp=CAU"
            alt="profile"
          />
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit} >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="form">
                <label htmlFor="email" className="input-fields-lable">
                  Email
                </label>
                <Field
                  className="input-fields inputfields2"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <div className="error-meessage">{errors.email}</div>
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

                <button className="submit-buton" type="submit">
                  Login
                </button>
                {apiResponse && <p>{apiResponse.message}</p>}
              </div>
            </Form>
          )}
        </Formik>
        <p className="text-before-link">
          Don't have account?{" "}
          <Link className="link-to-redirect" to="/seller_signup">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SellerLoginForm;
