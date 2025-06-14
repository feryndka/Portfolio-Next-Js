export const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();

  // Hitung total bulan
  let totalMonths = (today.getFullYear() - start.getFullYear()) * 12;
  totalMonths -= start.getMonth();
  totalMonths += today.getMonth();

  // Jika hari ini belum mencapai tanggal mulai di bulan ini, kurangi satu bulan
  if (today.getDate() < start.getDate()) {
    totalMonths--;
  }

  // Jika hasilnya 0 atau negatif, berarti pengalaman kurang dari sebulan
  if (totalMonths <= 0) {
    return "Less than a month";
  }

  // Ubah total bulan menjadi tahun dan sisa bulan
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // Format output string
  const yearString = years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
  const monthString =
    months > 0 ? `${months} Month${months > 1 ? "s" : ""}` : "";

  // Gabungkan string tahun dan bulan
  return [yearString, monthString].filter(Boolean).join(" ");
};
