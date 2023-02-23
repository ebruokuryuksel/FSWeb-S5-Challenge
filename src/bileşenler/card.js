import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const cardClass = document.createElement("div");
  cardClass.classList.add("card");

  const headLineClass = document.createElement("div");
  headLineClass.classList.add("headline");
  headLineClass.textContent = makale.anabaslik;
  

  const authorClass = document.createElement("div");
  authorClass.classList.add("author");
  

  const imageClass = document.createElement("div");
  imageClass.classList.add("img-container");

  const image = document.createElement("img");
  image.setAttribute("src", makale.yazarFoto);

  const nameSpan = document.createElement("span");
  nameSpan.textContent = makale.yazarAdi + "tarafından";


  cardClass.append(headLineClass,authorClass);
  authorClass.append(imageClass,nameSpan);
  imageClass.append(image);

  cardClass.addEventListener("click", ()=>{
    console.log(cardClass.querySelector(".headline"));
  });
  return cardClass;



}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const addChoice3 = document.querySelector(secici);
  axios
  .get ("http://localhost:5001/api/makaleler")
  .then((res)=>{
    console.log(res)
    for(const [key, value] of Object.entries(res.data.makaleler)){
      value.forEach((element)=>{
        addChoice3.append(Card(element));
      })
    }
  })
}

export { Card, cardEkleyici }
