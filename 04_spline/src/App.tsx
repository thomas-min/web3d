import Spline from "@splinetool/react-spline";

export default function App() {
  return (
    <div className="flex max-w-screen-2xl justify-center mx-auto">
      <div className="flex-1 h-screen">
        <Spline scene="https://prod.spline.design/Q6rBsMLcviUqYbwc/scene.splinecode" />
      </div>
      <div className="flex flex-col justify-center  border-red-600 pl-20">
        <h1 className="text-2xl text-gray-400">🤝 스태프 매칭</h1>
        <h2 className="text-5xl font-bold mt-5">
          검증된 스태프들이 <br />
          프로젝트를 기다리고 있어요
        </h2>
        <p className="text-2xl font-bold text-gray-500 mt-10">
          써폿 STAFF 앱을 통해 실시간으로 <br />
          공고가 오픈되고 스태프들이 <br />
          실시간으로 공고에 지원합니다
        </p>
      </div>
    </div>
  );
}
