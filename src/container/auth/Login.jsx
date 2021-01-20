import React from "react";
import { useHistory } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {
  RenderFieldText,
  RenderFieldPassword,
  required,
} from "../../components/field/Field";

import SinglePage from "../../layout/SinglePage";

const Login = (props) => {
  const history = useHistory();
  const { handleSubmit } = props;
  const onSubmit = (val) => {
    console.log(val);
    history.push("/admin");
  };
  return (
    <SinglePage isNavbar={true} isFooter={true}>
      <div className="row justify-content-center">
        <div className="col-6 py-5">
          <div className="bg py-3 px-4 rounded">
            <h1 className="text-center">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Field
                id="id_user"
                name="id_user"
                label="User ID"
                placeholder="User ID"
                component={RenderFieldText}
                validate={[required]}
              />
              <Field
                id="password"
                name="password"
                label="Password"
                placeholder="*******"
                component={RenderFieldPassword}
                validate={[required]}
              />
              <button className="btn btn-primary w-100 py-2 mb-2">Login</button>
            </form>
          </div>
        </div>
      </div>
    </SinglePage>
  );
};

export default reduxForm({ form: "Login" })(Login);
