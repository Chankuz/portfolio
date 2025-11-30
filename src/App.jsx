import myImg from "./assets/IMG_7142.jpg";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [create, setCreate] = useState("กำลังสร้างอยู่รอแปป...");

  useEffect(() => {
    if (count >= 10) {
      setCreate("สร้างเสร็จ(ก็บ้า)แล้ว ");
    }
  }, [count]);

  return (
    <div>
      <div className="flex justify-center mt-8">
        <img src={myImg} className="w-64" alt="my image" />
      </div>

      <div className="text-center mt-4">
        <h1>ชาญกิจ กหฟกหฟวงษ์ตาดำ</h1>
        <h1>อยู่ ม.6 แล้วววว หาผลงาน</h1>
        <h1 className="mt-8 font-bold text-5xl">{create}</h1>

        <div className="space-y-[30px]">
          <h1 className="mt-[30px] font-bold text-2xl">นับเลยรอไปก่อน</h1>
          <h1 className="text-3xl">{count}</h1>

          <button
            className="p-4 bg-blue-500 w-1/4 text-white font-bold rounded-2xl"
            onClick={() => setCount(count + 1)}
          >
            Click
          </button>
          {count >= 10 && (
            <div>
              <button
                className="p-4 bg-red-500 w-1/4 text-white font-bold rounded-2xl"
                onClick={() => setCount(0)}
              >
                Reset
              </button>
              <h1 className="my-[50px] font-bold text-4xl">
                กดจนเบื่อแล้วอะดิ
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
