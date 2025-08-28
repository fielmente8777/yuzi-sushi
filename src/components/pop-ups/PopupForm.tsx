"use client";
import { useEffect, useState, useCallback, useRef, useContext } from "react";
import React from "react";
import { AppContext } from "@/contextApi/AppContext";
import { usePathname } from "next/navigation";
import Form from "../forms/Form";
import { AiOutlineClose } from "react-icons/ai";

const PopupForm = () => {
  const { isOpenPopupForm, setIsOpenPopupForm } = useContext(AppContext);
  const pathName = usePathname();
  const [hasShown, setHasShown] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpenPopupForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenPopupForm]);

  useEffect(() => {
    // Only show if not already shown and modal isn't open
    if (!hasShown && !isOpenPopupForm) {
      timerRef.current = setTimeout(() => {
        setIsOpenPopupForm(true);
        setHasShown(true);
        document.body.style.overflow = "hidden";
      }, 40000); // Show after 40 seconds
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isOpenPopupForm, hasShown, setIsOpenPopupForm]);

  const closeModal = useCallback(() => {
    setIsOpenPopupForm(false);
    document.body.style.overflow = "auto";

    // Clear any pending timer when modal is closed
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  }, [setIsOpenPopupForm]);

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <>
      <section
        className={`fixed inset-0 z-[999] bg-black/50 duration-700 ease-in-out transition-all box-shadow ${isOpenPopupForm ? "block" : "hidden"}`}
        onClick={closeModal}
      >
        <article
          className={`${isOpenPopupForm ? "flex justify-center items-center h-full scale-100 opacity-100 max-md:px-4" : "h-0 scale-0 opacity-0"} transition-all duration-700 ease-in-out`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex max-w-md w-full shadow-2xl relative rounded-lg overflow-hidden bg-white">
            <button
              onClick={closeModal}
              className="absolute top-6 right-4 w-8 h-8 flex justify-center items-center text-lg rounded-full text-white bg-secondary z-10 transition-all duration-300"
              ariaLabel="Close popup"
            >
              <AiOutlineClose />
            </button>
            <Form />
          </div>
        </article>
      </section>
    </>
  );
};

export default PopupForm;
