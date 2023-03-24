import { useRef, useState } from "react";

export function Modal({toggleSort}: any) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <button onClick={() => setIsModalVisible(!isModalVisible)}>
        <span className="inline-block sort-triangle w-5 h-4 mx-1"></span>
      </button>

      <div
        className={`w-24 h-24 bg-white shadowy rounded-2xl overflow-hidden absolute text-xs flex flex-col items-center justify-around ${
          !isModalVisible && "hidden"
        }`}
      >
        <div className="flex  items-center justify-around border-b w-full h-1/2 cursor-pointer" onClick={() => {
            toggleSort(true)
            setIsModalVisible(false);
        }}>
          <span>Largest</span>
        </div>
        <div className="flex  items-center justify-around w-full h-1/2 cursor-pointer" onClick={() => {
            toggleSort(false)
            setIsModalVisible(false);
            }}>
          <span>Smallest</span>
        </div>
      </div>
    </>
  );
}
