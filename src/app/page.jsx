import HomeImg from "./images/hdhome.png";
import Image from 'next/image';
import Link from "next/link";
export default function Home() {
  return (
    <div className="h-screen text-center justify-center items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
      <div className="">
        <h1 className="text-5xl font-bold text-primary">Visit Phetchabun</h1>
        <p className="text-xl mt-3">
          เพชรบูรณ์ ที่นี่ไม่เพียงแค่เมืองท่องเที่ยว
          แต่เป็นคำตอบสำหรับใจผู้ที่ต้องการหาความสุขและความสงบในทุกที่ทุกเวลา
        </p>
        <Link href="/SelectDistrict">
          <button className="btn btn-primary text-white w-40 mt-3">
            เที่ยวเลย
          </button>
        </Link>
      </div>
      <div>
        <Image
          src={HomeImg} 
          alt="Phetchabun" 
          width={1000} 
          height={500} 
          layout="responsive" 
        />
      </div>
    </div>
  );
}
