import Link from "next/link";

function SelectDistrict() {
  const DistrictData = [
    {
      id: 1,
      name: "อำเภอ เมืองเพชรบูรณ์",
      description: "เมืองมะขามหวาน อุทยานน้ำหนาว ศรีเทพเมืองเก่า เขาค้ออนุสรณ์ นครพ่อขุนผาเมือง",
      link: "/Phetchabun"
    },
    {
      id: 2,
      name: "อำเภอ หล่มสัก",
      description: "เถิ่นพ่อขุนผาเมือง ลือเลื่องมะขามหวาน ที่ตั้งศาลหลักเมืองนครบาล น้ำตกธารทิพย์มนต์ขลัง ท้องพระคลังถ้ำสมบัติ",
      link: "/Lomsak"
    },
    {
      id: 3,
      name: "อำเภอ เขาค้อ",
      description: "ดินแดนแห่งขุนเขา ลำเนาพนาไพรงามจับใจทะเลหมอก พันธุ์ไม้ดอกเมืองหนาว เรื่องราววีรชนผู้กล้าตระการตาพระตำหนักเขาค้อ",
      link: "/Khaokho"
    },
    {
      id: 4,
      name: "อำเภอ ชนแดน",
      description: " หลวงพ่อทบลือก้อง ประกายทองมะขามหวาน งามตระการถ้ำผาทอง น้ำใสชวนมองคลองบุษบง",
      link: "/Chondaen"
    },
    {
      id: 5,
      name: "อำเภอ หล่มเก่า",
      description: "เมืองขนมจีน ถิ่นมะขามหวาน เทศกาลแข่งเรือยาว",
      link: "/Lomkao"
    },
    {
      id: 6,
      name: "อำเภอ หนองไผ่",
      description: "สระหลวงคู่หนองไผ่ น้ำใสฝายคลองยาง พระปรางค์เก่าบ้านโภชน์ วังโบสถ์ผ้าทอพื้นบ้าน งามตระการน้ำตกชับชมภู",
      link: "/Nongphai"
    },
    {
      id: 7,
      name: "อำเภอ วังโป่ง",
      description: "เพชรเม็ดที่ 9 อู่ข้าวอู่น้ำ แหล่งแร่ทองคำ ถ้ำงามน้ำตก มรดกผ้าไทย",
      link: "/Wangpong"
    },
    {
      id: 8,
      name: "อำเภอ บึงสามพัน",
      description: "หลวงพ่อคู่บ้าน บึงสามพันคู่เมือง ลือเลื่องบุญบั้งไฟ",
      link: "/Bungsamphan"
    },
    {
      id: 9,
      name: "อำเภอ วิเชียรบุรี",
      description: "ศาลนเรศวรรวมใจ ถิ่นไก่ย่างรสอร่อย สุสานหอยล้านปี พุร้อนมีใต้ดิน อุทยานหินโบราณ บ่อน้ำมันล้ำค่า",
      link: "/Wichianburi"
    },
    {
      id: 10,
      name: "อำเภอ ศรีเทพ",
      description: "ศรีเทพเมืองประวัติศาสตร์ราษฎร์เชิดชู ประตูสู่ภาคอุดรน้ำพุร้อนวังขาม งามเขาถมอรัตน์รื่นรมย์ กรมพระยาดำรงฯ ทรงค้นพบ",
      link: "/Srithep"
    },
    {
      id: 11,
      name: "อำเภอ น้ำหนาว",
      description: "แผ่นดินสูงเฉียดฟ้า แหล่งป่าไม้นานาพันธุ์ มหัศจรรย์ถ้ำใหญ่น้ำหนาว รอยเท้าสัตว์ล้านปี ประเพณีเผาข้าวหลาม เลื่องลือนามข้าวพญาลืมแกง",
      link: "/Namnao"
    },
  ]
  return (
    <div>
      <h1 className="font-bold text-3xl text-center mt-5">เลือกอำเภอที่ต้องการท่องเที่ยว</h1>
      <div className="h-screen text-center justify-center items-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 ml-5">
        {DistrictData.map((card) => (
          <div
            key={card.id}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow"
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">
                {card.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {card.description}
            </p>
            <Link href={card.link}>
            <button
                className="btn btn-primary text-white w-40 mt-4"
              >
                Read more
              </button>
              </Link>
          </div>
        ))}
      </div>
    </div>

  );
 
}

export default SelectDistrict;
