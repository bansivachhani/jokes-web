import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Allow cross-origin requests

app.get("/", (req, res) => {
  res.send("Hello from the Jokes API! 🚀");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Teacher: Batao sabse wafadar kaun hota hai? Student: Mobile charger... khud kahin bhi latak jaye lekin phone ko zinda rakhta hai!",
      category: "School",
    },
    {
      id: 2,
      joke: "Pati: Tumse shaadi meri zindagi ka sabse bada decision tha. Patni (khush hokar): Aww, sach mein? Pati: Haan, galat decision kabhi bhoolta nahi!",
      category: "Marriage",
    },
    {
      id: 3,
      joke: "Doctor: Aapko rest ki zarurat hai. Patient: Kahan jaake karun rest? Doctor: Office mein hi kar lo, kaam to waise bhi nahi karte!",
      category: "Doctor",
    },
    {
      id: 4,
      joke: "Boy: Tum itni khubsurat kaise ho? Girl: Kyunki main ladki hoon. Boy: Arre main to samjha filter lagaya hai!",
      category: "Love",
    },
    {
      id: 5,
      joke: "Friend 1: Tera phone kahan hai? Friend 2: Charging pe laga diya hai. Friend 1: Achha to aaj busy hai?",
      category: "Technology",
    },
    {
      id: 6,
      joke: "Santa: Jab bhi main mirror dekhta hoon, dil garden garden ho jata hai! Banta: Toh fir selfie mein jungle kyun lagta hai?",
      category: "Santa Banta",
    },
    {
      id: 7,
      joke: "Teacher: Define pressure. Student: Sir, exam ke ek din pehle sab yaad karne ki koshish – that's pressure!",
      category: "School",
    },
    {
      id: 8,
      joke: "Wife: Aaj ghar jaldi aana... Husband: Kyun? Wife: Gas khatam ho gaya hai, mummy ke ghar jana hai!",
      category: "Marriage",
    },
    {
      id: 9,
      joke: "Boy: Tumhare baalon mein kaunsi cream lagti hai? Girl: Ye natural hai. Boy: Toh shampoo band kar de, electricity bachayegi.",
      category: "Funny",
    },
    {
      id: 10,
      joke: "Boss: Tum late kyun aaye ho? Employee: Sir, sapna dekh raha tha office ka... usi mein busy tha!",
      category: "Office",
    },
    {
      id: 11,
      joke: "Raju: Mujhe tumse ek zaruri baat kehni hai... Pinky: Haan bolo. Raju: Mere phone ka cover kidhar hai?",
      category: "Funny",
    },
    {
      id: 12,
      joke: "Wife: Tum mujhe itna pyaar kyun karte ho? Husband: Timepass bhi toh zaroori hota hai na!",
      category: "Marriage",
    },
    {
      id: 13,
      joke: "Doctor: Apne aap ko fit kaise rakhte ho? Patient: Main toh har din mobile khojta hoon – yoga ka kaam ho jata hai!",
      category: "Doctor",
    },
    {
      id: 14,
      joke: "Pappu: Agar homework na kiya ho to teacher kya karti hai? Gappu: Free mein sabke saamne insult deti hai!",
      category: "School",
    },
    {
      id: 15,
      joke: "Boy: Tumhare bina zindagi adhoori hai. Girl: Awwww! Boy: Nahi seriously... Notes de do warna fail ho jaunga.",
      category: "College",
    },
    {
      id: 16,
      joke: "Mom: Kya kar rahe ho? Beta: Padhai... Mom: Screen pe meme dikha raha hai. Beta: Motivation ka part hai mummy!",
      category: "Home",
    },
    {
      id: 17,
      joke: "Wife: Tum mere birthday pe kya gift doge? Husband: Tum hi to ho meri zindagi ka gift... aur kya chahiye?",
      category: "Love",
    },
    {
      id: 18,
      joke: "Friend: Tu gym jaata hai? Dusra: Haan... Google pe exercise ke photos dekh ke thak jaata hoon.",
      category: "Funny",
    },
    {
      id: 19,
      joke: "Teacher: Tum class mein itne chup kyun rehte ho? Student: Sir, aap khud hi to bolte rehte ho!",
      category: "School",
    },
    {
      id: 20,
      joke: "Santa: Mujhe toh sab bhool jaata hai! Banta: Toh fir shaadi kaise yaad rakhta hai? Santa: Tabhi to roz naya bahana banana padta hai!",
      category: "Santa Banta",
    },
    {
      id: 21,
      joke: "Boy: Tum mere sapne mein aayi thi! Girl: Achha kya kar rahi thi? Boy: Math ka homework, isliye sapna bhi boring tha.",
      category: "Love",
    },
    {
      id: 22,
      joke: "Wife: Aap mujhe kitna pyaar karte ho? Husband: Jitna budget allow karta hai.",
      category: "Marriage",
    },
    {
      id: 23,
      joke: "Teacher: 1 + 1 kitna hota hai? Student: Sir, agar free ho to 1 hi hota hai!",
      category: "School",
    },
    {
      id: 24,
      joke: "Boy: Tumhe surprise pasand hai? Girl: Haan. Boy: Toh le... electricity bill tumhare naam pe hai!",
      category: "Funny",
    },
    {
      id: 25,
      joke: "Mom: Kya kar rahe ho phone pe? Beta: Homework dhoond raha hoon... Google pe!",
      category: "Home",
    },
    {
      id: 26,
      joke: "Ramu: Ek baar exam mein likha – 'Bolo Zubaan Kesari', teacher ne likh diya – Fail Kesari!",
      category: "Exam",
    },
    {
      id: 27,
      joke: "Wife: Aap har baar late kyun aate ho? Husband: Taaki aap mujhe yaad karo!",
      category: "Marriage",
    },
    {
      id: 28,
      joke: "Friend: Mujhe diet karna hai. Dusra: Achha kya kya khaya aaj? Friend: Diet ke baare mein soch ke pizza khaya.",
      category: "Food",
    },
    {
      id: 29,
      joke: "Teacher: Tum class mein hamesha soye kyun rehte ho? Student: Kyunki neend important hai sir!",
      category: "School",
    },
    {
      id: 30,
      joke: "Boy: Aaj birthday hai mera... Girl: Happy Birthday! Boy: Toh gift? Girl: Tera number block kar rahi hoon, bada gift!",
      category: "Savage",
    },
    {
      id: 31,
      joke: "Santa: Pyaar ek bhool hai! Banta: Toh tu fir baar baar kyun bhool karta hai?",
      category: "Santa Banta",
    },
    {
      id: 32,
      joke: "Girl: Tum mujhe bhool to nahi jaoge? Boy: Arre internet ka password ho kya?",
      category: "Funny",
    },
    {
      id: 33,
      joke: "Boy: Aankhon mein kuch ho gaya hai. Girl: Kya? Boy: Tum.",
      category: "Romantic",
    },
    {
      id: 34,
      joke: "Wife: Aap har jagah mujhe le jaate ho, kyun? Husband: Kyunki mujhe dar lagta hai ki aap kuch aur le na jao!",
      category: "Marriage",
    },
    {
      id: 35,
      joke: "Friend: Mera phone slow ho gaya hai. Dusra: Tere jaise doston ki wajah se!",
      category: "Technology",
    },
    {
      id: 36,
      joke: "Teacher: Tum class mein top kyun nahi karte? Student: Kyunki chhat pe jaana mana hai!",
      category: "School",
    },
    {
      id: 37,
      joke: "Pappu: Pyaar dard deta hai! Gappu: Khaana kha le, bhookh ka dard hai!",
      category: "Love",
    },
    {
      id: 38,
      joke: "Wife: Main ro rahi hoon! Husband: Main toh har din rota hoon... andar se!",
      category: "Marriage",
    },
    {
      id: 39,
      joke: "Teacher: Concentrate karo! Student: Sir, camera hi blur ho gaya hai...",
      category: "Online Class",
    },
    {
      id: 40,
      joke: "Boy: Main kuch bhi kar sakta hoon! Girl: Achha to ab chup ho jaa.",
      category: "Savage",
    },
    {
      id: 41,
      joke: "Pappu: Meri zindagi mein sirf gham hai. Bunty: To chocolate kha le, thoda meetha ho jayega.",
      category: "Funny",
    },
    {
      id: 42,
      joke: "Teacher: Kya karoge bade ho ke? Student: Sote rahenge... bada sapna hai sir!",
      category: "School",
    },
    {
      id: 43,
      joke: "Wife: Tum mujhe princess kyun nahi kehte? Husband: Tumhara kingdom kaun sa hai?",
      category: "Marriage",
    },
    {
      id: 44,
      joke: "Girl: Tum mujhe dekhte hi blush karte ho. Boy: Nahi, allergy hai perfume se!",
      category: "Funny",
    },
    {
      id: 45,
      joke: "Boss: Tumhara resume fake lagta hai. Employee: Toh job bhi waise hi le lunga!",
      category: "Office",
    },
    {
      id: 46,
      joke: "Mom: Khana kaisa laga? Beta: Insta pe daalne layak tha!",
      category: "Food",
    },
    {
      id: 47,
      joke: "Girl: Tum hamesha mujhe smile karte kyun dekhte ho? Boy: Dentist ne bola tha smile ke liye reason dhundo.",
      category: "Love",
    },
    {
      id: 48,
      joke: "Santa: Mere paas degree hai. Banta: Kaunsi? Santa: Garmi ki... AC lagwa de!",
      category: "Santa Banta",
    },
    {
      id: 49,
      joke: "Teacher: Ye kya likha hai tumne? Student: Sir, handwriting hi padh lo, answer mat padho!",
      category: "School",
    },
    {
      id: 50,
      joke: "Girl: Mujhe emotional support chahiye. Boy: Main toh financial bhi nahi de sakta!",
      category: "Savage",
    },
  ];

  res.json(jokes);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
