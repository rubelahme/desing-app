import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const AddService = () => {
  const [user, setUser] = useContext(ThemeContext);
  console.log(setUser);
  const serviceOne = {
    backgroundColor: "#ffffff",
    padding: "15px",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="AddService">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between mt-4">
              <div>
                <h2>Add Service</h2>
              </div>
              <div>{user.displayName}</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service">
              <div style={serviceOne}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-6">
                      <label for="floatingInput" className="form-label">
                        Service Name
                      </label>
                      <input
                        id="floatingInput"
                        placeholder="Enter Product name"
                        className="form-control"
                        {...register("example")}
                      />
                    </div>
                    <div className="col-6">
                      <label for="floatingEmail" className="form-label">
                        Service Title
                      </label>
                      <input
                        id="floatingEmail"
                        placeholder="Enter Service Title"
                        className="form-control"
                        {...register("exampleRequired", { required: true })}
                      />
                      {errors.exampleRequired && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="col-12">
                      <label
                        for="floatingTextarea2"
                        className="form-label pt-3"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control pb-5"
                        placeholder="Enter Description"
                        id="floatingTextarea2"
                        {...register("examples")}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="d-flex justify-content-between">
                        <div>
                          <input
                            id="floatingTextarea4"
                            className="fileOne"
                            type="file"
                            {...register("exampleRequires", { required: true })}
                          />
                          <label for="floatingTextarea4" className="form-label">
                            <span>
                              <FontAwesomeIcon
                                className=" fileTwo"
                                icon={faFolderOpen}
                              />
                            </span>
                            <p className="p-0 m-0">Add Photo</p>
                          </label>
                          {errors.exampleRequires && (
                            <p className="text-danger pt-2">
                              This Photo is required
                            </p>
                          )}
                        </div>
                        <div>
                          <input className="Add" type="submit" value="Add" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
