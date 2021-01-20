import React from "react";
import SinglePage from "../../../layout/SinglePage";
import { withRouter } from "react-router-dom";
import dummy6 from "../../../assets/images/narnia.jpg";
import DropzoneFile from "../../../components/field/DropzoneFile";
import { Field, reduxForm } from "redux-form";
import {
  RenderFieldNumber,
  renderFieldRadio,
  RenderFieldText,
  RenderFieldDate,
  textAreaField,
  required,
  selectField,
} from "../../../components/field/Field";

const AddFilm = (props) => {
  const { history, handleSubmit } = props;

  const onSubmit = (val) => {
    console.log(val);
  };
  return (
    <SinglePage>
      <div className="row h-100 bg">
        <div className="col-12 px-0 mb-2">
          <div className="d-flex justify-content-between bg">
            <button className="btn" onClick={() => history.goBack()}>
              <i className="fas fa-arrow-left mr-2"></i>Back
            </button>
          </div>
        </div>
        <div className="col-12 px-0">
          <div
            className="border bg"
            style={{
              height: 200,
              backgroundImage: `url(${dummy6})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex bg">
              <div className="d-flex flex-column p-3">
                <Field name="file" component={DropzoneFile} />
              </div>
              <div className="w-100 p-3">
                <Field
                  id="name"
                  name="name"
                  label="Nama Film"
                  placeholder="Nama Film"
                  component={RenderFieldText}
                  validate={[required]}
                />
                <Field
                  id="name"
                  name="name"
                  label="Nama Film"
                  placeholder="Nama Film"
                  component={RenderFieldText}
                  validate={[required]}
                />
                <Field
                  id="type"
                  name="type"
                  label="Type"
                  options={[
                    { name: "Tv Series", value: "series" },
                    { name: "Moview", value: "moview" },
                  ]}
                  component={renderFieldRadio}
                  validate={[required]}
                />
                <Field
                  id="status"
                  name="status"
                  label="Status"
                  options={[
                    { name: "Tamat", value: "tamat" },
                    { name: "Ongoing", value: "ongoing" },
                  ]}
                  component={renderFieldRadio}
                  validate={[required]}
                />
                <Field
                  id="genre"
                  name="genre"
                  label="Genre"
                  options={[]}
                  component={selectField}
                  validate={[required]}
                />
                <Field
                  id="skor"
                  name="skor"
                  label="Rating"
                  placeholder="Ratting"
                  min={0}
                  max={10}
                  increment={0.5}
                  component={RenderFieldNumber}
                  validate={[required]}
                />
                <Field
                  id="tgl_rilis"
                  name="tgl_rilis"
                  label="Rilis"
                  placeholder="Date"
                  component={RenderFieldDate}
                  validate={[required]}
                />
                <Field
                  id="sinopsis"
                  name="sinopsis"
                  label="Sinopsis"
                  placeholder="Sinopsis"
                  rows={4}
                  component={textAreaField}
                  validate={[required]}
                />
                <Field
                  id="review_penulis"
                  name="review_penulis"
                  label="Review Penulis"
                  placeholder="Review Penulis"
                  rows={4}
                  component={textAreaField}
                  validate={[required]}
                />
                <button
                  className="btn btn-outline-primary px-4 mr-2"
                  type="button"
                >
                  Cancel
                </button>
                <button className="btn btn-primary px-4">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SinglePage>
  );
};

export default withRouter(reduxForm({ form: "AddFilm" })(AddFilm));
