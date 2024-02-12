"use client";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerificationMessage from "../api/VerificationMessage";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface StateOption {
  value: string;
  label: string;
}

interface CityOption {
  value: string;
  label: string;
}

interface FormData {
  name: string;
  address: string;
  phoneNumber: string;
  idOrDL: string;
  ssn: string;
  zipCode: string;
  email: string;
  selectedState: StateOption | null;
  selectedCity: CityOption | null;
  idFrontImage: File | null; // Added idFrontImage property
  idBackImage: File | null; // Added idBackImage property
}

const EmploymentForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    phoneNumber: "",
    idOrDL: "",
    ssn: "",
    zipCode: "",
    email: "",
    idFrontImage: null as File | null,
    idBackImage: null as File | null,
    selectedState: null,
    selectedCity: null,
  });
  const [phoneValue, setPhoneValue] = useState<string>("");

  const [submitted, setSubmitted] = useState(false);
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const handleStateChange = (selectedState: StateOption | null) => {
    setFormData({ ...formData, selectedState });
  };

  const handleCityChange = (selectedCity: CityOption | null) => {
    setFormData({ ...formData, selectedCity });
  };

  const handlePhoneChange = (value: string) => {
    setPhoneValue(value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "file") {
      const file = e.target.files?.[0];
      if (file) {
        if (e.target.name === "idFrontImage") {
          setFormData({ ...formData, idFrontImage: file });
        } else if (e.target.name === "idBackImage") {
          setFormData({ ...formData, idBackImage: file });
        }
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidSSN(formData.ssn)) {
      toast.error("Please enter a valid Social Security Number (SSN)");
      return;
    }

    if (!isValidZipCode(formData.zipCode)) {
      toast.error("Please enter a valid Zip Code");
      return;
    }

    // Create FormData object
    const formDataToSend = new FormData();

    // Append all form data to FormData object
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "idFrontImage" || key === "idBackImage") {
        // Append images separately
        if (value) {
          formDataToSend.append(key, value);
        }
      } else if (key === "selectedState" || key === "selectedCity") {
        // Append selected state and city values
        if (value) {
          formDataToSend.append(key, value.value);
        }
      } else if (key === "phoneNumber") {
        // Append phone number
        formDataToSend.append(key, phoneValue);
      } else {
        // Append other form fields
        formDataToSend.append(key, value);
      }
    });

    try {
      // Send formDataToSend to backend using fetch or axios
      const response = await fetch(
        "http://localhost:3001/api/employment-form",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      // Check response status
      if (response.ok) {
        toast.success("Form submitted successfully!");
        setSubmitted(true);
        setShowVerificationModal(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again later.");
    }
  };

  const isValidSSN = (ssn: string): boolean => {
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
    return ssnPattern.test(ssn);
  };

  const isValidZipCode = (zipCode: string): boolean => {
    // Regular expression to match Zip Code format: ##### or #####-####
    const zipCodePattern = /^\d{5}(?:-\d{4})?$/;
    return zipCodePattern.test(zipCode);
  };

  const handleCloseModal = () => {
    setShowVerificationModal(false);
  };

  // List of all states with full names
  const stateOptions = [
    { value: "Alabama", label: "Alabama" },
    { value: "Alaska", label: "Alaska" },
    { value: "Arizona", label: "Arizona" },
    { value: "Arkansas", label: "Arkansas" },
    { value: "California", label: "California" },
    { value: "Colorado", label: "Colorado" },
    { value: "Connecticut", label: "Connecticut" },
    { value: "Delaware", label: "Delaware" },
    { value: "Florida", label: "Florida" },
    { value: "Georgia", label: "Georgia" },
    { value: "Hawaii", label: "Hawaii" },
    { value: "Idaho", label: "Idaho" },
    { value: "Illinois", label: "Illinois" },
    { value: "Indiana", label: "Indiana" },
    { value: "Iowa", label: "Iowa" },
    { value: "Kansas", label: "Kansas" },
    { value: "Kentucky", label: "Kentucky" },
    { value: "Louisiana", label: "Louisiana" },
    { value: "Maine", label: "Maine" },
    { value: "Maryland", label: "Maryland" },
    { value: "Massachusetts", label: "Massachusetts" },
    { value: "Michigan", label: "Michigan" },
    { value: "Minnesota", label: "Minnesota" },
    { value: "Mississippi", label: "Mississippi" },
    { value: "Missouri", label: "Missouri" },
    { value: "Montana", label: "Montana" },
    { value: "Nebraska", label: "Nebraska" },
    { value: "Nevada", label: "Nevada" },
    { value: "New Hampshire", label: "New Hampshire" },
    { value: "New Jersey", label: "New Jersey" },
    { value: "New Mexico", label: "New Mexico" },
    { value: "New York", label: "New York" },
    { value: "North Carolina", label: "North Carolina" },
    { value: "North Dakota", label: "North Dakota" },
    { value: "Ohio", label: "Ohio" },
    { value: "Oklahoma", label: "Oklahoma" },
    { value: "Oregon", label: "Oregon" },
    { value: "Pennsylvania", label: "Pennsylvania" },
    { value: "Rhode Island", label: "Rhode Island" },
    { value: "South Carolina", label: "South Carolina" },
    { value: "South Dakota", label: "South Dakota" },
    { value: "Tennessee", label: "Tennessee" },
    { value: "Texas", label: "Texas" },
    { value: "Utah", label: "Utah" },
    { value: "Vermont", label: "Vermont" },
    { value: "Virginia", label: "Virginia" },
    { value: "Washington", label: "Washington" },
    { value: "West Virginia", label: "West Virginia" },
    { value: "Wisconsin", label: "Wisconsin" },
    { value: "Wyoming", label: "Wyoming" },
  ];

  // Sample options for city dropdown
  const cityOptions = [
    { value: "nyc", label: "New York City" },
    { value: "la", label: "Los Angeles" },
    // Add more cities as needed
  ];

  return (
    <div className="h-full w-full bg-[#ccc]">
      <ToastContainer />
      <div className="py-10 flex flex-col  items-center gap-3 mx-auto container md:px-20 px-10">
        <h1 className="md:text-2xl text-base font-extrabold text-black uppercase text-center">
          Employment Application Form
        </h1>
        <div className="">
          <p className="text-black text-center text-sm mb-3">
            Please fill out the following information to apply for employment
            with our organization.
          </p>
          <p className="text-black text-center  text-sm">
            Your application will be processed, and we will reach out to you
            regarding the next steps.
          </p>
        </div>
      </div>
      <div className="container py-10 w-full md:mx-auto md:px-20 px-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="" className="text-black mb-3 font-bold uppercase">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full mb-3 bg-white text-xs py-3 px-5 text-black "
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="" className="text-black mb-3 font-bold uppercase">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full mb-3 bg-white text-xs py-3 px-5 text-black "
            />
          </div>
          <div className="mt-4 outline-none">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Phone number
            </label>
            <PhoneInput
              international
              defaultCountry="US"
              value={phoneValue}
              onChange={handlePhoneChange}
              placeholder="Enter phone number"
              className="w-full mb-3 mt-4  bg-white text-xs px-3 text-black rounded-md outline-none focus:outline-none focus:border-none !important"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              State
            </label>
            <Select
              className="w-full  text-xs py-3  text-black outline-none"
              name="state"
              value={formData.selectedState}
              onChange={(selectedOption) => handleStateChange(selectedOption)}
              options={stateOptions}
              placeholder="State"
            />
          </div>

          {/* City dropdown */}
          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3 font-bold uppercase">
              City
            </label>
            <Select
              className="w-full  text-xs py-3 outline-none text-black"
              value={formData.selectedCity}
              onChange={(selectedOption) => handleCityChange(selectedOption)}
              options={cityOptions}
              placeholder="City"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              ID/Driver's License Number
            </label>
            <input
              type="text"
              name="idOrDL"
              value={formData.idOrDL}
              onChange={handleChange}
              placeholder="ID/Driver's License Number"
              className="w-full mb-3 mt-4 bg-white text-xs py-3 px-5 text-black "
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Upload ID/Driver Licence Front Image
            </label>{" "}
            <div className="w-full ">
              <input
                type="file"
                id="idFrontImage"
                name="idFrontImage"
                onChange={handleChange}
                className="w-full mb-3 mt-4 outline-none bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Upload ID/Driver Licence Back Image
            </label>{" "}
            <div className="w-full ">
              <input
                type="file"
                id="idBackImage"
                name="idBackImage"
                onChange={handleChange}
                className="w-full mb-3 mt-4 outline-none bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Social Security Number(SSN)
            </label>
            <input
              type="text"
              name="ssn"
              value={formData.ssn}
              onChange={handleChange}
              placeholder="SSN"
              className="w-full mb-3 mt-4 outline-none bg-white text-xs py-3 px-5 text-black "
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Zip Code
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Zip Code"
              className="w-full mb-3 mt-4 bg-white text-xs py-3 px-5 text-black "
            />
          </div>

          <div className="mb-5.5 flex flex-col  gap-10 sm:flex-row">
            <div className="w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-white outline-none text-xs py-3 px-5 text-black "
              />
            </div>
          </div>

          <button type="submit" className="bg-[#0C51A1] w-full mt-4 px-2 py-3">
            Submit
          </button>
        </form>
        {submitted && (
          <VerificationMessage
            onClose={handleCloseModal}
            show={showVerificationModal}
          />
        )}
      </div>
    </div>
  );
};

export default EmploymentForm;
