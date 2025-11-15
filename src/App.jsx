import myImg from "./assets/IMG_7142.jpg";
const App = () => {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <img src={myImg} className="w-64" alt="my image" />
      </div>

      <div className="text-center mt-4">
        <h1>ชาญกิจ วงษ์ตาดำ</h1>
        <h1>อยู่ ม.6 แล้วววว หาผลงาน</h1>
      </div>
    </div>
  );
};

export default App;
