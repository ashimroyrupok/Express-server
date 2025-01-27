
export const BOOKING_TYPE = {
  available: "available",
  booked: "booked",
  cancelled: "canceled",
};

// user.name, user.email, user.phone, service.name, service.description, booking.vehicleType, booking.vehicleBrand
export const bookingsSearchableFields = [
  "user.name.firstName",
  "user.email",
  "user.phone",
  "service.name",
  "service.description",
  "vehicleInfo.vehicleType",
  "vehicleInfo.vehicleBrand",
];
