// Dùng switch-case khi xử lý nhiều giá trị rời rạc
// Dùng if-else khi cần kiểm tra điều kiện, khoảng giá trị hoặc biểu thức phức tạp.

const vehicleType = "BIKE";
const distance = 5;
const isPeakHour = true;

let openingFee = 0;
let nextKmFee = 0;
let openingDistance = 1;
let totalBeforePeak = 0;
let isValidVehicle = true;

switch (vehicleType) {
  case "BIKE":
    openingFee = 12000;
    nextKmFee = 4500;
    break;

  case "CAR_4":
    openingFee = 20000;
    nextKmFee = 9000;
    break;

  case "CAR_7":
    openingFee = 25000;
    nextKmFee = 11000;
    break;

  case "DELIVERY":
    openingFee = 15000;
    nextKmFee = 5000;
    openingDistance = 3;
    break;

  default:
    console.log("Loại phương tiện không tồn tại.");
    isValidVehicle = false;
    break;
}

if (isValidVehicle) {
  if (distance <= openingDistance) {
    totalBeforePeak = openingFee;
  } else {
    totalBeforePeak = openingFee + (distance - openingDistance) * nextKmFee;
  }

  const peakMultiplier = isPeakHour ? 1.2 : 1;
  const finalPrice = totalBeforePeak * peakMultiplier;

  console.log("Loại xe:", vehicleType);
  console.log("Quãng đường:", distance, "km");
  console.log("Cước trước cao điểm:", totalBeforePeak, "VNĐ");
  console.log("Phụ phí cao điểm:", isPeakHour ? "1.2x" : "Không");
  console.log("Tổng tiền:", finalPrice, "VNĐ");
}
