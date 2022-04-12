export default function getListStudentIds(idArray) {
  if (Array.isArray(idArray) !== true) {
    return [];
  }
  return idArray.map((item) => item.id);
}
