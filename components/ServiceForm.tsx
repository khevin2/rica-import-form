"use client";

import InputSelect from "./InputSelect";
import { InputText } from "./InputText";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  citizenship: "",
  id: "",
  passport_number: "",
  other_names: "",
  surname: "",
  nationality: "",
  phone_number: "",
  email: "",
  owner_location: "",
  business_type: "",

  company_name: "",

  tin_number: "",
  registration_date: "",
  business_location: "",
  purpose_of_import: "",
  other_purpose_import: "",
  import_description: "",
  product_category: "",
  product_name: "",
  weight: "",
  product_description: "",
  unit_of_measurement: "",
  product_quantity: "",
};

const Schema = Yup.object({
  citizenship: Yup.string().required("Required"),
  id: Yup.string().required("Required"),
  passport_number: Yup.string().required("Required"),
  other_names: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  nationality: Yup.string().required("Required"),
  phone_number: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  owner_location: Yup.string().required("Required"),
  business_type: Yup.string().required("Required"),
  company_name: Yup.string().required("Required"),
  tin_number: Yup.number().required("Required"),
  registration_date: Yup.string().required("Required"),
  business_location: Yup.string().required("Required"),
  purpose_of_import: Yup.string().required("Required"),
  other_purpose_import: Yup.string().required("Required"),
  import_description: Yup.string().required("Required"),
  product_category: Yup.string().required("Required"),
  product_name: Yup.string().required("Required"),
  weight: Yup.string().required("Required"),
  product_description: Yup.string().required("Required"),
  unit_of_measurement: Yup.string().required("Required"),
  product_quantity: Yup.number().required("Required"),
});

export default function ServiceForm() {
  async function handleSubmit() {
    const res = await fetch("/api/email", {
      body: JSON.stringify(formik.values),
      method: "POST",
    });
    if (res.ok) {
      alert("Email Sent");
    }
  }
  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    // validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  });
  console.log("errors: ", formik.errors);
  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      {Object.keys(formik.errors).length > 0 ? (
        <div className="flex flex-col text-red-700">
          {Object.keys(formik.errors).map((el: string, index) => (
            // @ts-ignore
            <p key={index}>{el}: {formik.errors[el]}</p>
          ))}
        </div>
      ) : (
        <></>
      )}
      <div className="border-2 border-blue-600 my-5 rounded">
        <h4 className="w-full p-3 border-b border-b-blue-600 bg-blue-200 font-semibold rounded-t">
          User Details
        </h4>
        <div className="p-3">
          <h5 className="font-bold">Business Owner Details</h5>

          <InputSelect
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            name="citizenship"
            options={["Rwandan", "Foreigner"]}
            label="Applicant Citizenship"
            required
          />
          {/**  */}
          {formik.values.citizenship === "Rwandan" ? (
            <div className="flex gap-3 mt-4">
              <InputText
                name="id"
                type="text"
                label="National ID"
                placeholder="Natioanl ID"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                required
              />

              <InputText
                type="text"
                name="surname"
                label="Surname"
                placeholder="Surname"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                required
              />
              <InputText
                type="text"
                name="other_names"
                label="Other Names"
                placeholder="Other Names"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                required
              />
            </div>
          ) : (
            <></>
          )}
          {formik.values.citizenship == "Foreigner" ? (
            <div className="flex gap-3 mt-4">
              <InputText
                name="passport_number"
                type="text"
                label="Passport ID"
                placeholder="Passport ID"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                required
              />
            </div>
          ) : (
            <></>
          )}
          {/**  */}
          <div className="flex gap-3 mt-4">
            <InputText
              label="Phone Number"
              name="phone_number"
              placeholder="Phone Number"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
            <InputText
              label="Email Address"
              name="email"
              placeholder="Email Address"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
          </div>

          <h5 className="font-bold mt-5">Business Owner Address</h5>
          <InputSelect
            name="owner_location"
            label="Location"
            placeholder="Enter District"
            options={["Gasabo", "Kucukiro", "Nyarugenge"]}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            required
          />
        </div>
      </div>
      <div className="border-2 border-blue-600 my-5 rounded">
        <h4 className="w-full p-3 border-b border-b-blue-600 bg-blue-200 font-semibold rounded-t">
          Business Details
        </h4>
        <div className="p-3">
          <h5 className="font-bold">Business Details</h5>
          <div className="flex gap-3">
            <InputSelect
              name="business_type"
              options={["Retailer", "Wholesale", "Manufacturer"]}
              label="Business Type"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
            <InputText
              label="Company Name"
              name="company_name"
              placeholder="Company Name"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
          </div>
          <div className="flex gap-3">
            <InputText
              label="Tin Number"
              type="number"
              name="tin_number"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
            <InputText
              label="Registration Date"
              type="date"
              name="registration_date"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
          </div>

          <h5 className="font-bold mt-5">Business Address</h5>
          <InputSelect
            name="business_location"
            label="Province"
            placeholder="Enter Province"
            options={["Kigali", "Southern", "Northern", "Eastern", "Western"]}
            handleBlur={formik.handleBlur}
            handleChange={formik.handleChange}
            required
          />
        </div>
      </div>
      <div className="border-2 border-blue-600 my-5 rounded">
        <h4 className="w-full p-3 border-b border-b-blue-600 bg-blue-200 font-semibold rounded-t">
          Product Details
        </h4>
        <div className="p-3">
          <h5 className="font-bold">Importation Details</h5>
          <div className="flex gap-3">
            <InputSelect
              name="purpose_of_import"
              options={["Direct Sale", "Personal User", "Trial Use", "Other"]}
              label="Purpose of Importation"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
            {formik.values.purpose_of_import === "Other" ? (
              <InputText
                type="text"
                label="Other Purpose of Importation"
                name="other_purpose_import"
                handleBlur={formik.handleBlur}
                handleChange={formik.handleChange}
                required={formik.values.purpose_of_import === "Other"}
              />
            ) : (
              <></>
            )}
          </div>
          <h5 className="font-bold mt-5">Product Details</h5>
          <div className="flex gap-3 mt-3">
            <InputText
              label="Product Name"
              name="product_name"
              type="text"
              placeholder="product Name"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
            />
          </div>
          <div className="flex gap-3 mt-3">
            <InputSelect
              name="product_category"
              label="Product Category"
              placeholder="Enter Province"
              options={[
                "General Purpose",
                "Construction Materials",
                "Chemicals",
              ]}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
          </div>
          <div className="flex gap-3 mt-3">
            <InputText
              label="Weight(KG)"
              name="weight"
              type="number"
              placeholder="Weight(KG)"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
          </div>

          <div className="flex gap-3 mt-4">
            <InputSelect
              name="unit_of_measurement"
              label="Unit of Measuremetnt"
              placeholder="Unit of Measuremetnt"
              options={["Kgs", "tonnes"]}
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
            <InputText
              type="number"
              name="product_quantity"
              label="Quantity of Product(s)"
              placeholder="Quantity of Product(s)"
              handleBlur={formik.handleBlur}
              handleChange={formik.handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="name">
              Description of Product(s)
              <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-[300px] border h-20 px-2 rounded placeholder:text-gray-600"
              name="import_description"
              placeholder="Enter Product Description"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end p-3">
        <button
          className="bg-blue-500 text-white px-8 py-2 rounded"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}
