import React from "react";
import logo from "../../assets/images/wbaLogo.png";
import { Formik, FormikProps, Form, Field } from "formik";
import { object, string } from "yup";
import { useNavigate } from "react-router-dom";
interface PaymentFormValues {
  cardName: string;
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  cvv: string;
  checked: string[];
}
const PaymentForm: React.FC = () => {
  const initialValues: PaymentFormValues = {
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cvv: "",
    checked: [],
  };
  const navigate = useNavigate();
  const goBackToSignIn = (): void => {
    navigate(`/signup`);
  };

  return (
    <div className="mt-20 flex flex-col justify-center  items-center h-screen w-4/5 md:my-auto   xl:w-[40%] xl:mx-0">
      <div className="container w-[386px] ">
        <div>
          {/* logo */}
          <div
            className="mt-20 flex items-center justify-between md:items-center  md:justify-between mb-[30px] "
            data-aos="fade-down"
          >
            <img className="" src={logo} alt="logo" />
            <p
              className=" font-bold text-lg leading-6 text-[#515AE5] cursor-pointer"
              onClick={goBackToSignIn}
            >
              Cancel
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h2
              className="xl:max-w-[223px] md:text-left mb-[16px] font-[700] text-5xl md:text-[56px] md:leading-[64px] text-[#0D1259]"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Payment
            </h2>
            <h4
              className="font-[600] mb-[16px] capitalize xl:max-w-[311px] text-center md:text-left text-xl md:text-[36px] md:leading-[48px] text-[#0D1259]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Card details
            </h4>
          </div>
        </div>
        <div className=" mt-10" data-aos="fade-up" data-aos-delay="600">
          <Formik
            initialValues={initialValues}
            onSubmit={(values: PaymentFormValues) => {}}
            validationSchema={object().shape({
              cardNumber: string().min(16, "not less than 16"),
              cardHolder: string().required(),
              cardMonth: string().required(),
            })}
          >
            {(props: FormikProps<PaymentFormValues>) => {
              const {
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                isSubmitting,
              } = props;
              return (
                <Form className="flex flex-col items-center md:items-start">
                  <div className="flex flex-col">
                    <div className="flex justify-center md:justify-start">
                      <label
                        className="xl:max-w-[90px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] flex"
                        htmlFor="card-name"
                      >
                        Card name
                      </label>
                    </div>

                    <input
                      id="card-name"
                      placeholder=" Enter Card name"
                      className="bg-white h-10 border border-[#C4C4C4] text-slate-600 w-64 md:w-[386px] placeholder-[#C4C4C4] rounded-[5px]"
                      onBlur={handleBlur}
                    />
                  </div>

                  {touched.cardName && errors.cardName && (
                    <p className="text-red-500">{errors.cardName}</p>
                  )}

                  <div className=" mt-5 flex flex-col">
                    <div className="flex justify-center md:justify-start">
                      <label
                        className="xl:max-w-[90px] font-[500] text-left text-[12px] leading-[20px] text-[#0D1259] flex"
                        htmlFor="card-number"
                      >
                        Card number
                      </label>
                    </div>
                    <input
                      id="card-number"
                      placeholder=" Enter Card Number"
                      className="bg-white h-10  border border-[#C4C4C4] text-slate-600 w-64 md:w-[386px] placeholder-[#C4C4C4] rounded-[5px]"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.cardNumber && errors.cardNumber && (
                      <p className="text-red-500">{errors.cardNumber}</p>
                    )}
                  </div>

                  <div className="mt-5 flex flex-col items-center md:justify-between  md:flex-row xl:w-[386px]  ">
                    <div className="flex flex-col items-center md:items-start mb-4 order-last md:order-first">
                      <div className="flex justify-center md:justify-start">
                        <label
                          htmlFor="code"
                          className="font-[500]  text-left text-[12px] leading-[20px] text-[#0D1259]"
                        >
                          Security code
                        </label>
                      </div>
                      <input
                        id="code"
                        placeholder=" CVV"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="h-12  w-[55px] text-center  bg-white border border-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px]"
                      />
                    </div>

                    <div className="flex flex-col justify-between mb-4 ">
                      <label className=" font-[500] text-center md:text-left text-[12px] leading-[20px] text-[#0D1259]">
                        Expiration Date
                      </label>
                      <div className="flex gap-2 ">
                        <div>
                          <select className="h-12 xl:max-w-[130px] bg-white border border-[#C4C4C4] text-slate-600  text-[#C4C4C4] rounded-[5px]">
                            <option selected>Month</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                              (m, i) => (
                                <option value={m}>
                                  {m < 10 ? `0${m}` : m}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <div className="border border-solid border-1 border-blue-900 transform skew-y-12 rotate-2"></div>
                        <div>
                          <select className="h-12   bg-white border text-[#C4C4C4] text-slate-600  placeholder-[#C4C4C4] rounded-[5px]">
                            <option selected>Year</option>
                            {[
                              2020, 2021, 2023, 2024, 2025, 2026, 2027, 2028,
                              2029, 2030, 2031, 2032,
                            ].map((y, i) => (
                              <option value={y}>{y}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {touched.cvv && errors.cvv && (
                    <p className="text-red-500">{errors.cvv}</p>
                  )}
                  <div className="flex flex-col md:flex md:mt-6 md:flex-col items-center md:items-start md:gap-5">
                    <label className="flex items-center gap-2 mb-2 order-last md:order-first">
                      <Field type="checkbox" name="checked" />
                      Save card
                    </label>
                    <p className="xl:max-w-[25em] text-center  md:text-left font-[400] text-[16px] leading-[24px] text-[#0D1259]">
                      By completing your purchase you agree to these Terms and
                      conditions
                    </p>
                  </div>

                  <div
                    className="mt-5 flex flex-col gap-5 md:flex-row md:justify-between md:items-center xl:w-[386px]"
                    data-aos="fade-up"
                  >
                    <button
                      className="rounded-[5px] bg-[#515AE5] text-white py-[12px] px-[24px] font-[700] text-[18px] leading-[24px]"
                      type="submit"
                    >
                      Continue
                    </button>
                    <p className="underline font-[400] text-[12px] leading-[18px] text-[#515AE5]">
                      Cancel
                    </p>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
