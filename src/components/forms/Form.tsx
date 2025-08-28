"use client";

import { countries } from "@/utils/countryCode";
import { ArrowBtn } from "@/utils/icons";
import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [countryCode, setCountryCode] = useState("+44"); // Default country code
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(
        `https://nexon.eazotel.com/eazotel/addcontacts`,
        {
          // Domain: "",
          Domain: "abhijeet",
          email: userEmail,
          Name: userName,
          Contact: `${countryCode}${userPhone}`,
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserPhone("");
        setCountryCode("+91"); // Reset country code
        setFormRes(false);
        // router.push(`/thank-you/`);
        window.open("/thank-you/", "_blank");
        // router.push(`/thank-you/?name=${encodeURIComponent(userName)}`);
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formData = [
    {
      tag: "input",
      type: "text",
      name: "name",
      placeholder: "Full Name*",
      value: userName,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
      },
    },
    {
      tag: "div", // Use div to wrap select and input for phone number
      name: "phone",
      placeholder: "Phone Number*",
      required: true,
      content: (
        <div className="flex gap-2 text-base border border-light rounded-lg w-full divide-x divide-light">
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-auto bg-transparent text-light focus:outline-none ps-2 py-4"
            style={{ inlineSize: `${countryCode.length + 6.5}ch` }}
            ariaLabel="Country Code"
          >
            {countries.map((country, index) => (
              <option key={index} value={country.code} className="text-black">
                {`${country.code} ${country.name}`}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            max={"9999999999"}
            placeholder="Phone Number*"
            value={userPhone}
            onChange={handlePhoneChange}
            className="w-full bg-transparent placeholder:text-black-primary text-light no-spinner focus:outline-none"
          />
        </div>
      ),
    },
    {
      tag: "input",
      type: "email",
      name: "email",
      placeholder: "Email Id*",
      value: userEmail,
      onChange: handleEmailChange,
    },
    {
      tag: "textarea",
      type: "text",
      name: "",
      placeholder: "Your Message*",
      value: userMessage,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserMessage(e.target.value);
      },
    },
  ];
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-6 box-shadow_2 bg-white p-6 form`}
    >
      <h2 className="text-secondary font-fr x_lg_font_s text-center">Get in Touch</h2>
      <p className="text-lg text-light text-center">Fill out the form below to place your bulk order enquiry.</p>
      <div className="flex gap-4 flex-col ">
        {formData.map((data, index) => (
          <div
            key={index}
            className={`w-full  flex flex-col  ${formData.length - 1 !== index ? "border-r" : ""} border-white/40 "}`}
          >
            <div className={`w-full  bg-transparent flex items-center `}>
              {data.tag === "div"
                ? data.content
                : React.createElement(data.tag, {
                    id: data.name,
                    ariaLabel: data.placeholder,
                    type: data.type,
                    name: data.name,
                    value: data.value,
                    onChange: data.onChange,
                    placeholder: data.placeholder,
                    required: data.required,
                    autoComplete: "off",
                    spellCheck: "false",
                    rows: 3,
                    className:
                      "w-full placeholder:text-light bg-transparent border border-light p-4 rounded-lg text-light no-spinner resize-none focus:outline-none valid:outline-blue-primary invalid:outline-Saffron-primary",
                  })}
            </div>
            {data.name === "phone" && errorMessage && (
              <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
            )}
            {data.name === "email" && emailErrorMessage && (
              <p className="text-sm text-red-500 mt-2">{emailErrorMessage}</p>
            )}
          </div>
        ))}
        <button className="w-full text-center text-lg bg-secondary md:py-4 py-3 text-white justify-center border-orange-primary text-md h-full duration-300 rounded-full border-white hover:scale-105 border">
          {formRes ? (
            "Loading...."
          ) : (
            <span className="flex items-center justify-center gap-2">
              Submit
              <span>
              <ArrowBtn />
            </span>
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
