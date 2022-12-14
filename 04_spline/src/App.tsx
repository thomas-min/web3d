import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div className="flex max-w-screen-2xl justify-center mx-auto">
      <div className="flex-1 h-screen">
        <Spline scene="https://prod.spline.design/Q6rBsMLcviUqYbwc/scene.splinecode" />
      </div>
      <div className="flex flex-col justify-center  border-red-600 pl-20">
        <h1 className="text-2xl text-gray-400">π€ μ€νν λ§€μΉ­</h1>
        <h2 className="text-5xl font-bold mt-5">
          κ²μ¦λ μ€ννλ€μ΄ <br />
          νλ‘μ νΈλ₯Ό κΈ°λ€λ¦¬κ³  μμ΄μ
        </h2>
        <p className="text-2xl font-bold text-gray-500 mt-10">
          μ¨νΏ STAFF μ±μ ν΅ν΄ μ€μκ°μΌλ‘ <br />
          κ³΅κ³ κ° μ€νλκ³  μ€ννλ€μ΄ <br />
          μ€μκ°μΌλ‘ κ³΅κ³ μ μ§μν©λλ€
        </p>
      </div>
    </div>
  );
}
