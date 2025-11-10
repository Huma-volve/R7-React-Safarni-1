import { useNavigate } from "react-router-dom";

export default function ActionButton({ selected }: { selected: number | null }) {
  const navigate = useNavigate();
      return (
    <button
      disabled={selected === null}
      onClick={() => {navigate("/checkout")}}
      className={`mt-6 px-6 py-2 rounded text-white font-semibold ${
        selected === null
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {selected === null ? "Select a Tour" : "Continue"}
      Checkout
    </button>
  );
}
