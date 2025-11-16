import ReturnHome from "@/components/reusable/ReturnHome"
import { useState } from "react"
import PaymentLogo from "./PaymentLogo"
import PaymentMethodButton from "./PaymentMethodButton"
import FormikInput from "./FormikInput"
import { Formik ,Form} from "formik"
import { useNavigate } from "react-router-dom"

export default function Payment() {
    const [paymentMethod,setPaymentMethod] = useState<string | null>(null) 
    const[bookingDone,setBookingDone] = useState<boolean>(false)
    const navigate  = useNavigate();

    return (
    <div className="p-4 ps-[85px] font-[poppins]">
        <div className="flex justify-between items-center mb-6">
            <ReturnHome />
            </div>
          <div className="flex gap-7 justify-between h-[600px] rounded-3xl overflow-hidden">
           {!bookingDone ? <PaymentLogo  src="public/Rectangle 20.png"/> : <PaymentLogo  src="public/Rectangle 21.png"/>}
             
             { bookingDone ? (
              <>
              <div className="w-[50%] p-5 px-40  h-full flex flex-col items-center  justify-center  gap-2">
                    <img src="public/subtract.png" alt="Payment Successful" className="w-10 h-10 object-cover"/>
                    <h2 className="text-center text-[26px] font-[poppins] capitalize font-medium mb-3  ">
                      Payment Successful
                    </h2>
                    <p className=" text-[18px] font-medium text-md text-[#6B7280] capitalize font-[poppins]">Thank you for your trust</p>
                    <button title="Go to Home" className="w-full  text-white bg-[#1E429F] py-2 rounded-lg font-[poppins] font-semibol capitalize text-lg " onClick={()=>{
                      navigate("/")
                    }}>
                      Back to Home 
                    </button>
                  </div>
             
             
             </>)  :
             (
             
              <div className="w-[50%] p-5 px-40 h-full  justify-center  gap-6">
                <h2 className="text-center text-[26px] font-[poppins] capitalize font-medium mb-5  ">
                  Payment method 
                </h2>
                <p className="mb-6 text-[24px] font-medium capitalize font-[poppins]">Add your payment method</p>
                <div className="flex  gap-4">
                <PaymentMethodButton
                  src="public/logos_paypal.png"
                  alt="Payment Method"
                  onClick={() => {
                    console.log("clicked");
                    console.log(paymentMethod);
                    setPaymentMethod("paypal");
                    console.log(paymentMethod);
                  }}
                  active={paymentMethod === "paypal"} 

                  imgClassName="w-4 h-3 "
                  text="Paypal"
                />
                <PaymentMethodButton
                  src="public/Mastercard.png"
                  alt="Payment Method"
                  onClick={() => setPaymentMethod("masterCard")}
                  imgClassName="w-4 h-3 "
                  text="Mastercard"
                  active={paymentMethod === "masterCard"}

                />
                    
                <PaymentMethodButton
                  src="public/Visa.png"
                  alt="Payment Method"
                  onClick={() => setPaymentMethod("visa")}
                  imgClassName="w-6 h-3  "
                  text="Visa"
                  active={paymentMethod === "visa"}
                />

                </div>
                {
                  paymentMethod === null &&  (
                  <div className="mt-10 flex flex-col pt-70 gap-4 w-full ">
                    <button onClick={() => setPaymentMethod("visa")} title={paymentMethod || "Add Card"} className="w-full  text-[#111928]">
                    Add Card <span className="  border  px-[3px] rounded-[100%] text-lg border-[#111928]  text-[#111928] ">+</span> 
                    </button>
                    <button onClick={() => setPaymentMethod("paypal")} title={paymentMethod || "Add Card"} className="w-full  text-white bg-[#1E429F] py-2 rounded-lg font-[poppins] font-semibol capitalize text-lg ">
                      continue
                    </button>

                    
                  </div>
                  )
                  
                }
                
                {paymentMethod === "paypal" && (
                      <Formik
                        initialValues={{
                          fullName: "",
                          paypalEmail: "",
                        }}
                        onSubmit={(values) => console.log(values)}
                      >
                        <Form className="mt-10 flex flex-col gap-4  text-md w-full">
                          <FormikInput
                            label="Full Name"
                            name="fullName"
                            type="text"
                            iconSrc="public/vector.png"
                            placeholder="kneeDue@untitledui.com"
                          />

                          <FormikInput
                            label="PayPal Email"
                            name="paypalEmail"
                            placeholder="Enter your PayPal email"
                            iconSrc="public/emailvector.png"
                          />

                          <button
                            type="submit"
                            onClick={() => {setBookingDone(true)
                              console.log("Booking done");
                              
                            }}
                             className="w-full font-semibold  text-white bg-[#1E429F] py-2 rounded-lg font-[poppins] font-semibol capitalize text-lg "
                          >
                            Continue booking 
                          </button>
                        </Form>
                      </Formik>
                    )}
                 {paymentMethod === "masterCard" && (
                      
                      <Formik
                        initialValues={{
                          fullName: "",
                          paypalEmail: "",
                        }}
                        onSubmit={(values) => console.log(values)}
                      >
                        <Form className="mt-10 flex flex-col gap-4  text-md w-full">
                          <FormikInput
                            label="Full Name"
                            name="fullName"
                            type="text"
                            iconSrc="public/vector.png"
                            placeholder="kneeDue@untitledui.com"
                          />

                          <FormikInput
                            label="Card Number"
                            name="cardNumber"
                            placeholder="Enter your card number"
                            iconSrc="public/cvv.png"
                          />
                        <div className="flex gap-4 ">
                             <div className="w-3/4">
                                <FormikInput
                            label="Valid Date"
                            name="date"
                            placeholder="12-5-2027"
                            
                          />
                             </div>
                            <div>
                               <FormikInput
                            label="Cvv"
                            name="cvv"
                            placeholder="Enter your CVV"
                           iconSrc="public/cvv.png"
                          />
                            </div>
                        </div>

                          <button
                            type="submit"
                            onClick={() => {setBookingDone(true)
                              console.log("Booking done");
                              
                            }}
                             className="w-full font-semibold  text-white bg-[#1E429F] py-2 rounded-lg font-[poppins] font-semibol capitalize text-lg "
                          >
                            Continue booking 
                          </button>
                        </Form>
                      </Formik>
                    )}

                  {paymentMethod === "visa" && (
                      
                      <Formik
                        initialValues={{
                          fullName: "",
                          paypalEmail: "",
                        }}
                        onSubmit={(values) => console.log(values)}
                      >
                        <Form className="mt-10 flex flex-col gap-4  text-md w-full">
                          <FormikInput
                            label="Full Name"
                            name="fullName"
                            type="text"
                            iconSrc="public/vector.png"
                            placeholder="kneeDue@untitledui.com"
                          />

                          <FormikInput
                            label="Card Number"
                            name="cardNumber"
                            placeholder="Enter your card number"
                            iconSrc="public/cvv.png"
                          />
                        <div className="flex gap-4 ">
                             <div className="w-3/4">
                                <FormikInput
                            label="Valid Date"
                            name="date"
                            placeholder="12-5-2027"
                            
                          />
                             </div>
                            <div>
                               <FormikInput
                            label="Cvv"
                            name="cvv"
                            placeholder="Enter your CVV"
                           iconSrc="public/cvv.png"
                          />
                            </div>
                        </div>

                          <button
                            type="submit"
                            onClick={() => {setBookingDone(true)
                              console.log("Booking done");
                              
                            }}
                             className="w-full font-semibold  text-white bg-[#1E429F] py-2 rounded-lg font-[poppins] font-semibol capitalize text-lg "
                          >
                            Continue booking
                          </button>
                        </Form>
                      </Formik>
                    )}

                  

                <div>
              
                </div>

              </div>
              ) }

          </div>
      
        </div>
  
  )
}
