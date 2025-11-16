

export default function PaymentMethodButton( {
  src,
  alt,
  onClick,
  imgClassName,
  text,
  active,
}: {
  src: string
  alt: string
  onClick: () => void
  imgClassName?: string
  text: string;
  active: boolean;
}) {
  return (
    <>
    <button onClick={onClick} className={`flex gap-2 justify-center cursor-pointer items-center text-lg  bg-[#F3F4F6] text-center  px-4 rounded-full ${active ? "bg-blue-100" : "bg-[#F3F4F6]" } py-1`}>
        <img src={src} alt={alt} className={imgClassName} />
        {text}
    </button>
    </>
  )
}
