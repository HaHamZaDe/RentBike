import { ref, get } from "firebase/database";
import { db } from "../../../config";

const fetchInfo = async () => {
  const infoCardsRef = ref(db, "bikes/");
  try {
    const snapshot = await get(infoCardsRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.values(data);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return [];
  }
};

export default fetchInfo;
