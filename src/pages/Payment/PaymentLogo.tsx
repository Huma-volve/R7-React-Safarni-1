
export default function PaymentLogo({ src }: { src: string }) {
  return (
    <div className="w-[40%] h-full">
        <img src={src} alt="payment logo" className="w-full h-full object-cover"/>
      
    </div>
  )
}
