import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";

const states = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    image: "https://www.mapsofindia.com/maps/rajasthan/images/rajasthan.jpg",
    description: "Known as the 'Land of Kings', Rajasthan is India's largest state by area. The state is adorned with magnificent palaces, majestic forts, and vibrant culture that reflect the royal heritage of Rajputana.",
    monumentCount: 12
  },
  {
    id: "uttar-pradesh",
    name: "Uttar_Pradesh",
    image: "https://w.ndtvimg.com/sites/3/2020/07/23135630/660x330-uttar-pradesh.jpg",
    description: "Uttar Pradesh, India's most populous state, is home to some of the country's most iconic monuments, including the Taj Mahal. The state's rich historical and cultural heritage attracts visitors from around the world.",
    monumentCount: 15
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    image: "https://static.toiimg.com/photo/msid-64028333,width-96,height-65.cms",
    description: "Maharashtra, the third-largest state in India, is a blend of modernity and tradition. From ancient caves to colonial architecture, Maharashtra offers a diverse range of historical monuments and natural wonders.",
    monumentCount: 10
  },
  {
    id: "tamil-nadu",
    name: "Tamil_Nadu",
    image: "https://www.tourmyindia.com/states/tamilnadu/image/tamilnadu-banner.webp",
    description: "Tamil Nadu, known for its Dravidian-style temples, is a state with a rich cultural and architectural heritage dating back thousands of years. The state is home to magnificent temples that showcase the excellence of ancient craftsmanship.",
    monumentCount: 18
  },
  {
    id: "gujarat",
    name: "Gujarat",
    image: "https://media.assettype.com/thenewsminute/2025-01-09/0bu6l88m/statue-of-unity-gujarat-Sardar-Vallabhbhai-Patel?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true",
    description: "Gujarat, the birthplace of Mahatma Gandhi, is known for its diverse landscape, vibrant culture, and rich history. From ancient cities to magnificent temples, Gujarat offers a glimpse into India's glorious past.",
    monumentCount: 8
  },
  {
    id: "delhi",
    name: "Delhi",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/red-fort-delhi1-attr-hero?qlt=82&ts=1727352314555",
    description: "Delhi, the capital of India, is a city steeped in history. With monuments dating back to the 12th century, Delhi showcases the architectural marvels of various dynasties that ruled over India.",
    monumentCount: 14
  },
  {
    id: "kerala",
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fHww",
    description: "Kerala, known as 'God's Own Country', is famous for its backwaters, beaches, and lush green landscapes. The state also boasts a rich cultural heritage with ancient temples, churches, and mosques.",
    monumentCount: 6
  },
  {
    id: "westbengal",
    name: "West_Bengal",
    image: "https://static2.tripoto.com/media/filter/tst/img/747664/TripDocument/1564483640_masthead_howrah_bridge.jpg",
    description:"West Bengal, a land of cultural vibrance, is home to Kolkata, the 'City of Joy,' and iconic landmarks like the Victoria Memorial, reflecting its rich colonial and artistic heritage",
    monumentCount: 6
  },
  {
    id: "chattisgarh",
    name: "Chattisgarh",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/54/c6/0a/another-view-of-the-falls.jpg?w=500&h=-1&s=1",
    description: "Chhattisgarh, known for its ancient temples and lush forests, is home to mesmerizing waterfalls and tribal culture that offer a unique glimpse into India's heritage.",
    monumentCount: 6
  },
  {
    id: "goa",
    name: "Goa",
    image: "https://thewandertherapy.com/wp-content/uploads/2024/03/4.beaches-goa.jpg",
    description: "Goa, India's coastal paradise, boasts golden beaches, vibrant nightlife, and a blend of Portuguese and Indian traditions, making it a favorite destination for travelers",
    monumentCount: 6
  },
  {
    id: "jharkhand",
    name: "Jharkhand",
    image: "https://img.etimg.com/thumb/width-420,height-315,imgsize-587994,resizemode-75,msid-97395146/wealth/spend/holidaying-in-jharkhand-where-to-go-where-to-stay-total-cost/harkhand.jpg",
    description: "Jharkhand, rich in natural beauty, features breathtaking waterfalls, wildlife sanctuaries, and historic temples, showcasing a perfect mix of adventure and spirituality.",
    monumentCount: 6
  },
  {
    id: "karnataka",
    name: "Karnataka",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/mysore-palace-karnataka-state-hero?qlt=82&ts=1726723003730",
    description: "Karnataka, a blend of history and nature, boasts the magnificent ruins of Hampi, the serene landscapes of Coorg, and the vibrant city of Bengaluru, India's tech hub.",
    monumentCount: 6
  },
  {
    id: "himachal-pradesh",
    name: "Himachal_Pradesh",
    image: "https://lp-cms-production.imgix.net/2019-06/GettyImages-149353949_high.jpg",
    description: "Himachal Pradesh, nestled in the Himalayas, is famed for its picturesque hill stations like Shimla and Manali, offering breathtaking mountain views and adventure sports.",
    monumentCount: 6
  },
  {
    id: "arunachal-pradesh",
    name: "Arunachal_Pradesh",
    image: "https://static.toiimg.com/photo/91692789.cms",
    description: "Arunachal Pradesh, India's easternmost state, is home to lush valleys, Buddhist monasteries, and the stunning Tawang, a hidden gem in the Himalayas.",
    monumentCount: 6
  },
  {
    id: "assam",
    name: "Assam",
    image: "https://media.istockphoto.com/id/470248962/photo/tea-plantations-sunset.jpg?s=612x612&w=0&k=20&c=xo98EQ7-n4_nKqvzy4204GErBr4W_iRplcTqzyhj_K0=",
    description: "Assam, the gateway to the Northeast, is famous for its tea gardens, the mighty Brahmaputra River, and Kaziranga National Park, a haven for one-horned rhinoceroses.",
    monumentCount: 6
  },
  {
    id: "haryana",
    name: "Haryana",
    image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/11/Haryana-Tourism-600.jpg",
    description: "Haryana, a land of rich heritage and rapid urbanization, showcases historic sites like Kurukshetra, where the Mahabharata was fought, alongside modern cities like Gurugram.",
    monumentCount: 6
  },
  {
    id: "odisha",
    name: "Odisha",
    image: "https://www.tourmyindia.com/states/odisha/images/odisha-home-banner.webp",
    description: "Odisha, a land of ancient temples and pristine beaches, is home to the famous Jagannath Temple in Puri and the stunning Chilika Lake, a paradise for birdwatchers.",
    monumentCount: 6
  },
  {
    id: "sikkim",
    name: "Sikkim",
    image: "https://www.esikkimtourism.in/wp-content/uploads/2019/04/3rd-image.jpg",
    description: "Sikkim, nestled in the Himalayas, offers breathtaking landscapes, serene monasteries, and the vibrant charm of Gangtok, making it a haven for nature lovers and trekkers.",
    monumentCount: 6
  },
  {
    id: "andhra-pradesh",
    name: "Andhra_Pradesh",
    image: "https://etimg.etb2bimg.com/photo/89314482.cms",
    description: "Andhra Pradesh, rich in history and spirituality, boasts iconic sites like Tirupati Temple, the magnificent Araku Valley, and the ancient ruins of Hampi.",
    monumentCount: 6
  },
  {
    id: "bihar",
    name: "Bihar",
    image: "https://blissfulbihar.com/wp-content/uploads/2023/07/nalanda-bihar.webp",
    description: "Bihar, a cradle of ancient civilization, features historic treasures like Nalanda University, Bodh Gaya—where Buddha attained enlightenment—and the scenic beauty of Rajgir.",
    monumentCount: 6
  },
  {
    id: "tripura",
    name: "Tripura",
    image: "https://darkgreenadventures.com/wp-content/uploads/2023/09/Tripura-Where-Culture-Meets-Nature-7-1024x786.jpg",
    description: "Tripura, a hidden gem in Northeast India, is known for its lush green hills, enchanting palaces like Ujjayanta, and vibrant tribal culture that adds to its charm.",
    monumentCount: 6
  },
  {
    id: "telangana",
    name: "Telangana",
    image: "https://telanganatourism.gov.in/assets/css/sslider/data1/images/city/charminar.jpg",
    description: "Telangana, a blend of heritage and modernity, is home to the iconic Charminar in Hyderabad, the stunning Golconda Fort, and rich cultural traditions.",
    monumentCount: 6
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    image: "https://uttarakhandtourism.net/wp-content/uploads/2023/12/badrinath_page-600x540.jpg",
    description: "Uttarakhand, the ‘Land of Gods,’ offers serene landscapes, revered temples like Kedarnath and Badrinath, and thrilling adventure sports in Rishikesh.",
    monumentCount: 6
  },
  {
    id: "nagaland",
    name: "Nagaland",
    image: "https://etimg.etb2bimg.com/photo/91278276.cms",
    description: "Nagaland, a cultural treasure of the Northeast, boasts vibrant tribal festivals, lush hills, and the famous Hornbill Festival celebrating its rich heritage.",
    monumentCount: 6
  },
  {
    id: "chandigarh",
    name: "Chandigarh",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/hand-monument-chandigarh-chandigarh-city-1-hero?qlt=82&ts=1726739006101",
    description: "Chandigarh, India’s first planned city, showcases modern architecture, lush gardens like Rock Garden, and a blend of urban charm and greenery.",
    monumentCount: 6
  },
  {
    id: "mizoram",
    name: "Mizoram",
    image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/12/07115226/champhai-1.jpg",
    description:"Mizoram, the Land of the Hill People ,is a hidden gem in Northeast India with lush green landscapes, cascading waterfalls, and serene mountain peaks. Rich in tribal culture and natural beauty, it's a paradise for nature lovers and adventure seekers.",
    monumentCount: 6
  },
  {
    id: "manipur",
    name: "Manipur",
    image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/18/41382e8a00fb64504e33762e52d83b21_1000x1000.jpg",
    description: "Manipur, rich in natural beauty, is famous for the breathtaking Loktak Lake, historic temples, and the mesmerizing landscapes of Ukhrul.",
    monumentCount: 6
  },
  {
    id: "punjab",
    name: "Punjab",
    image: "https://www.holidify.com/images/bgImages/PUNJAB.jpg",
    description: "Punjab, the heart of Sikh heritage, offers the stunning Golden Temple in Amritsar, vibrant festivals, and delicious Punjabi cuisine.",
    monumentCount: 6
  },
  {
    id: "meghalaya",
    name: "Meghalaya",
    image: "https://www.meghalayatourism.in/wp-content/uploads/2020/07/Dawki-Shnongpdeng-1.jpg",
    description: "Meghalaya, known as the ‘Abode of Clouds,’ is a land of misty valleys, living root bridges, and the mesmerizing waterfalls of Cherrapunji.",
    monumentCount: 6
  },
  {
    id: "andamanandnicobar",
    name: "Andaman_and_Nicobar_Islands",
    image: "https://www.gokitetours.com/wp-content/uploads/2025/01/10-Best-Places-to-Visit-in-Andaman-and-Nicobar-in-2025.webp",
    description:"Andaman and Nicobar Islands, a tropical paradise, features pristine beaches, crystal-clear waters, and vibrant marine life, perfect for diving and snorkeling.",
    monumentCount: 6
  },
  {
    id: "jammuandkashmir",
    name: "Jammu_and_Kashmir",
    image: "https://www.timesindiatravels.com/wp-content/uploads/2017/09/Best-of-Jammu-Kashmir-Tour.jpg",
    description: "Jammu & Kashmir, often called ‘Paradise on Earth,’ boasts breathtaking landscapes, houseboats on Dal Lake, and the snowy beauty of Gulmarg.",
    monumentCount: 6
  },
  {
    id: "ladakh",
    name: "Ladakh",
    image: "https://lp-cms-production.imgix.net/2022-03/shutterstock_744715432.jpg?w=1095&fit=crop&crop=faces%2Cedges&auto=format&q=75",
    description: "Ladakh, an adventurer’s dream, offers majestic monasteries, surreal desert landscapes, and thrilling mountain treks amidst the Himalayas.",
    monumentCount: 6
  }, 
  {
    id: "lakshwadeep",
    name: "Lakshwadeep",
    image: "https://www.emperortraveline.com/wp-content/uploads/2024/02/Agatti-Lakshadweep.jpg",
    description: "Lakshadweep, a cluster of coral islands, is known for its untouched beaches, vibrant marine biodiversity, and peaceful, secluded getaways.",
    monumentCount: 6
  },
  {
    id: "puducherry",
    name: "Puducherry",
    image: "https://travelgallivant.com/wp-content/uploads/2020/10/puducherry-sea-min.jpg",
    description: "Puducherry, a charming coastal retreat, features French colonial architecture, serene beaches, and spiritual sites like Auroville.",
    monumentCount: 6
  },
  {
    id: "dadaranddaman",
    name: "Dadra_and_Nagar_Haveli_and_Daman_and_Diu",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-baps-swaminarayan-temple-silvassa-dadra-and-nagar-haveli-2-city-hero?qlt=82&ts=1726737660598",
    description: "Dadra and Nagar Haveli and Daman and Diu, a union territory of India, boasts serene beaches, Portuguese-influenced architecture, and lush greenery, offering a perfect mix of history and natural beauty.",
    monumentCount: 6
  },

  {
    id: "madhya-pradesh",
    name: "Madhya_Pradesh",
    image: "https://travelmail.in/wp-content/uploads/2020/08/Mandu.jpg",
    description: "Madhya Pradesh, the ‘Heart of India,’ is home to ancient forts, stunning temples, and wildlife-rich national parks like Kanha and Bandhavgarh.",
    monumentCount: 9
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Explore India's States</h1>
        <p><b> SIKDAR GETAWAYS</b></p>
        <p><b> Discover the rich cultural heritage and breathtaking landscapes of
          India's diverse states.
        </b></p>
        <div className="marquee-container">
  <p className="marquee-text">
    Experience India's incredible diversity—from majestic forts and serene beaches to breathtaking mountains and vibrant festivals!
  </p>
</div>
        <div className="states-grid">
          {states.map((states, index) => (
            <div
              key={index}
              className="state-card" onClick={() => navigate(`/state/${states.name}`)}
            >
              <img src={states.image} alt={states.name}/>
               <p><b className="state-name">{states.name}</b></p>
              <div className="state-info">
                <p>{states.description}</p>
                <span>Discover more about the place→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-section" id="about">
  <h2>About Us</h2>
  <p>Sikdar Getaways is a captivating travel experience that offers adventure, relaxation, and cultural immersion. Nestled in scenic landscapes, it provides breathtaking views, serene accommodations, and thrilling activities that cater to nature lovers and explorers. Whether you seek tranquil retreats or adrenaline-pumping adventures, Sikdar Getaways ensures a memorable escape with its rich heritage and diverse attractions. Visitors can enjoy guided tours, wildlife encounters, and local cuisine, making every trip special. With a blend of modern comforts and natural beauty, it stands out as an ideal destination for travelers looking to unwind and explore in a unique and enriching way.</p>
</div>

<div className="contact-section" id="contact">
  <h2>Contact Us</h2>
  <p>Have questions or suggestions? Reach out to us!</p>
  <form>
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" required></textarea>
    <button type="submit">Send</button>
  </form>
</div>
<footer className="footer">
  <div className="footer-container">
    <div className="footer-section">
      <h3>Sikdar Getaways</h3>
      <p>Discover the beauty and heritage of India.</p>
    </div>
    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="#states-grid">States & UT</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</footer>
    </>
  );
}

