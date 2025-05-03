import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./StateDetails.css";
const dummyPlaces = {
  Andhra_Pradesh: [
    { name: "Charminar",category: "Heritage",rating: "4.7",price: "50",image: "https://s7ap1.scene7.com/is/image/incredibleindia/charminar-mosque-hyderabad-telangana-3-attr-about?qlt=82&ts=1726652899615",description: "Iconic 16th-century mosque with grand architecture."},
  {
    name: "Tirupati Temple",category: "Temple",rating: "4.9",price: "Free",
    image: "https://swarajya.gumlet.io/swarajya%2F2017-12%2F12cd4383-28d5-4190-b9de-587cd7562e5f%2F00c53298-05d8-4d25-add9-95aa50dd7914.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100",
    description: "Famous Hindu pilgrimage site dedicated to Lord Venkateswara."
  },
  {
    name: "Araku Valley",
    category: "Hill Station",
    rating: "4.6",
    price: "100",
    image: "https://www.mapsofindia.com/maps/rajasthan/images/rajasthan.jpg",
    description: "Scenic coffee plantations and beautiful landscapes."
  },
  ],
  Arunachal_Pradesh: [
    {
      name: "Tawang Monastery",
      category: "Monastery",
      rating: "4.8",
      price: "Free",
      image: "https://static.toiimg.com/photo/msid-105076947,width-96,height-65.cms",
      description: "India's largest Buddhist monastery, perched at 3,000 meters, offering spiritual serenity and panoramic Himalayan views."
    },
    {
      name: "Ziro Valley",
      category: "Hill Station",
      rating: "4.7",
      price: "Free",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/A_cross_section_of_luch_green_valley_of_Ziro.jpg",
      description: "A picturesque plateau known for its pine-clad hills, rice fields, and the vibrant culture of the Apatani tribe."
    },
    {
      name: "Namdapha National Park",
      category: "Adventure",
      rating: "4.6",
      price: "100",
      image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/01/04131348/shutterstock_1325065313-1558x900.jpg",
      description: "A biodiversity hotspot in the Eastern Himalayas, home to over 1,000 floral and 1,400 faunal species."
    },
    {
      name: "Bomdila",
      category: "Hill Station",
      rating: "4.5",
      price: "Free",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzRx3tIi-8tVOV5FdfMCaXa9utaPTNg1wiQ&s",
      description: "A serene town offering panoramic views of snow-clad Himalayan ranges and rich cultural heritage."
    },],
  Assam: [  {
    name: "Kaziranga National Park",
    category: "Adventure",
    rating: "4.8",
    price: "100",
    image: "https://res.cloudinary.com/roundglass/image/upload/f_auto/q_auto/f_auto/c_limit,w_auto:breakpoints_200_2560_100_5:1265/v1572349187/roundglass/sustain/Rhino-2_Dhritiman-Mukherjee_mpkxeq.jpg",
    description: "Home to the largest population of one-horned rhinoceroses."
},
{
    name: "Majuli Island",
    category: "Beach",
    rating: "4.7",
    price: "Free",
    image: "https://footloosedev.com/wp-content/uploads/2016/01/bamboo-cottage.jpg",
    description: "World's largest river island, known for culture and monasteries."
},
{
    name: "Kamakhya Temple",
    category: "Temple",
    rating: "4.9",
    price: "Free",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kamakhya_Temple%2C_Guwahati.jpg/1200px-Kamakhya_Temple%2C_Guwahati.jpg",
    description: "Ancient Hindu temple dedicated to Goddess Kamakhya."
},
{
    name: "Sivasagar",
    category: "Heritage",
    rating: "4.5",
    price: "50",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/81/Shiva_Dol.jpg",
    description: "Historic town known for Ahom-era monuments."
},],
Bihar: [
  {
    name: "Mahabodhi Temple",
    category: "Temple",
    rating: "4.9",
    price: "Free",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYm7ho9d79BTlDvkQ3QDnEybwiZ_smRBHspg&s",
    description: "UNESCO site where Buddha attained enlightenment."
  },
  {
    name: "Nalanda University",
    category: "Heritage",
    rating: "4.8",
    price: "40",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg",
    description: "Ancient center of learning and Buddhist studies."
  },
  {
    name: "Vikramshila Ruins",
    category: "Heritage",
    rating: "4.6",
    price: "30",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdSHwimnXKNvvKEH25UG6CKs7dywM489RKQ&s",
    description: "Remains of a prominent Buddhist university."
  },
  {
    name: "Rajgir",
    category: "Heritage",
    rating: "4.5",
    price: "20",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shanti_Stupa_at_Rajgir_%28cropped%29.jpg",
    description: "Sacred town associated with Lord Buddha and Mahavira."
  }
],
Chattisgarh: [
  {
    name: "Chitrakote Waterfall",
    category: "Adventure",
    rating: "4.8",
    price: "50",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/44/c5/49/chitrakoot-falls.jpg?w=1200&h=-1&s=1",
    description: "The widest waterfall in India, often called Niagara of India."
  },
  {
    name: "Bastar Palace",
    category: "Heritage",
    rating: "4.5",
    price: "30",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/bastar-palace-jagdalpur-chhattisgarh-1-attr-hero?qlt=82&ts=1727011251135",
    description: "Royal palace reflecting tribal and colonial history."
  },
  {
    name: "Barnawapara Wildlife Sanctuary",
    category: "Adventure",
    rating: "4.6",
    price: "60",
    image: "https://www.chhattisgarhtourism.co.in/photo_gallery/barnawapara_wildlife_sanctuary/04.jpg",
    description: "Rich sanctuary with leopards, sloth bears, and birds."
  },
  {
    name: "Bhoramdeo Temple",category: "Temple",rating: "4.7",price: "25",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnoHJlqnSnOnLfm64VBmCPzj_9Fq0Y02qng&s",description: "Ancient temple complex, often called the Khajuraho of Chhattisgarh." },
],
Goa: [
  { name: "Basilica of Bom Jesus", category: "Heritage", rating: "4.8", price: "Free", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Basilica_of_bom_jesus_-_Front_View.jpg", description: "UNESCO heritage site preserving St. Francis Xavier’s relics." },
  { name: "Dudhsagar Waterfalls", category: "Adventure", rating: "4.7", price: "100", image: "https://tsprodimages.s3.ap-south-1.amazonaws.com/v/19804109/trips/ts_20240829105127000000336406485.webp", description: "Stunning four-tiered waterfall on the Goa-Karnataka border." },
  { name: "Chapora Fort", category: "Heritage", rating: "4.6", price: "50", image: "https://www.fabhotels.com/blog/wp-content/uploads/2022/01/Chapora-fort_709883707-600X400.jpg", description: "Popular fort with scenic views, famous from Bollywood movies." },
  { name: "Palolem Beach", category: "Beach", rating: "4.9", price: "Free", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dwwjWo-QPrGpSAmoXXij2unfh0PsKv8sYA&s", description: "Peaceful beach with golden sands and blue waters." },
  { name: "Aguada Fort", category: "Heritage", rating: "4.5", price: "70", image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Fort_aguada.jpg", description: "A well-preserved 17th-century Portuguese fort." },
  { name: "Salim Ali Bird Sanctuary", category: "Adventure", rating: "4.4", price: "40", image: "https://s7ap1.scene7.com/is/image/incredibleindia/dr-salim-ali-bird-sanctuary-goa-goa-1-attr-hero?qlt=82&ts=1726735361333", description: "A paradise for bird watchers with diverse species." },
],
Gujarat: [
  { name: "Gir National Park", category: "Adventure", rating: "4.8", price: "700", image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Gir_lion-Gir_forest%2Cjunagadh%2Cgujarat%2Cindia.jpeg", description: "Home to the Asiatic lions, perfect for wildlife lovers." },
  { name: "Somnath Temple", category: "Temple", rating: "4.9", price: "Free", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/960px-Somanath_mandir_%28cropped%29.jpg", description: "Ancient Shiva temple with significant historical relevance." },
  { name: "Rann of Kutch", category: "Adventure", rating: "4.7", price: "500", image: "https://www.rannutsav.net/wp-content/uploads/2024/02/head-images-Feb-Blog-3-min.jpg", description: "India’s largest salt desert, glowing beautifully at night." },
  { name: "Dwarka", category: "Temple", rating: "4.8", price: "Free", image: "https://www.daiwikhotels.com/wp-content/uploads/2024/07/Dwarkadish-temple-2.jpg", description: "A sacred Hindu city believed to be Krishna’s kingdom." },
  { name: "Laxmi Vilas Palace", category: "Heritage", rating: "4.6", price: "200", image: "https://image-tc.galaxy.tf/wijpeg-4ryg3h3na04hc4kwiqrta4qo5/laxmi-vilas-palace_standard.jpg?crop=134%2C0%2C1333%2C1000", description: "Grand palace showcasing Indo-Saracenic architecture." },
  { name: "Saputara", category: "Hill Station", rating: "4.5", price: "150", image: "https://static.toiimg.com/photo/59350928.cms", description: "Beautiful hill station offering panoramic views of Gujarat." },
],
Haryana: [
  { name: "Sultanpur Bird Sanctuary", category: "Adventure", rating: "4.6", price: "50", image: "https://haryanatourism.gov.in/wp-content/uploads/2024/07/bird_pic2.jpg", description: "A heaven for migratory birds with over 250 species." },
  { name: "Brahma Sarovar", category: "Nature", rating: "4.7", price: "Free", image: "https://static.toiimg.com/photo/52183388/.jpg", description: "Ancient sacred water tank linked to the Mahabharata." },
  { name: "Morni Hills", category: "Hill Station", rating: "4.5", price: "100", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/58/ae/62/morni-hills.jpg?w=1200&h=-1&s=1", description: "Lush green hills ideal for trekking and nature walks." },
  { name: "Panipat", category: "Heritage", rating: "4.6", price: "150", image: "https://assets.thepackersmovers.com/images/city/panipat-city-information.jpg", description: "Battlefield city with rich Mughal-era history." },
  { name: "Kurukshetra", category: "Heritage", rating: "4.8", price: "Free", image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Hitopadesha.jpg", description: "A historic town linked to the Mahabharata war." },
  { name: "Pinjore Gardens", category: "Heritage", rating: "4.6", price: "50", image: "https://static2.tripoto.com/media/filter/tst/img/1979318/TripDocument/1589267123_1589267108183.jpg.webp", description: "A Mughal garden with stunning fountains and greenery." },
],
Himachal_Pradesh: [
  { name: "Rohtang Pass", category: "Hill Station", rating: "4.8", price: "200", image: "https://jannattravelguru.com/wp-content/uploads/2023/03/Rohtang-pass.jpg", description: "A breathtaking high-altitude pass offering panoramic views." },
  { name: "Manali", category: "Hill Station", rating: "4.7", price: "150", image: "https://s7ap1.scene7.com/is/image/incredibleindia/solang-nullah-manali-himachal-pradesh-1-attr-hero?qlt=82&ts=1726730690372", description: "Popular honeymoon destination known for scenic landscapes." },
  { name: "Shimla", category: "Hill Station", rating: "4.8", price: "180", image: "https://c.ndtvimg.com/2025-01/tuhgraag_shimla_625x300_31_January_25.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738", description: "The capital city, offering colonial charm and mountain beauty." },
  { name: "Dalhousie", category: "Hill Station", rating: "4.6", price: "120", image: "https://thenewzradar.com/wp-content/uploads/2025/01/17370228412705697465661530996979.jpg", description: "A peaceful retreat with Victorian-style architecture." },
  { name: "Kullu", category: "Adventure", rating: "4.7", price: "300", image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/01/Kullu-Best-Places-to-Visit.jpg?fit=1024%2C630&ssl=1", description: "Known for thrilling river rafting and lush valleys." },
  { name: "Kangra Fort", category: "Heritage", rating: "4.5", price: "100", image: "https://static.toiimg.com/photo/49845139.cms", description: "Ancient fort with breathtaking views of the Dhauladhar range." },
],
Jharkhand: [
  { name: "Parasnath Hill", category: "Hill Station", rating: "4.7", price: "50", image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9b09e4f561e8dd2954b42774ecb0bae8_1000x1000.jpg", description: "A revered Jain pilgrimage site with peaceful surroundings." },
  { name: "Hundru Falls", category: "Adventure", rating: "4.6", price: "60", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/33/37/60/hudru-falls.jpg?w=1200&h=-1&s=1", description: "One of Jharkhand’s highest waterfalls, perfect for nature lovers." },
  { name: "Netarhat", category: "Hill Station", rating: "4.5", price: "100", image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/08/9ffc869f0419cc62a4e18896dc9b388b_1000x1000.jpg", description: "The ‘Queen of Chotanagpur’ known for scenic sunrise views." },
  { name: "Deoghar", category: "Temple", rating: "4.8", price: "Free", image: "https://static.wixstatic.com/media/794597_0b58d9eec48145a4b1464c3b3e20be2c~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/794597_0b58d9eec48145a4b1464c3b3e20be2c~mv2.jpg", description: "Home to the famous Baidyanath temple and religious festivals." },
  { name: "Betla National Park", category: "Adventure", rating: "4.7", price: "300", image: "https://www.myvisitinghours.org/pics/1181.jpg", description: "A biodiverse park housing elephants, tigers, and rich flora." },
  { name: "Dassam Falls", category: "Adventure", rating: "4.5", price: "70", image: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Dassam_falls.jpg   ", description: "A majestic waterfall known for its picturesque surroundings." },
],
Karnataka: [
  { name: "Coorg", category: "Hill Station", rating: "4.8", price: "200", image: "https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000x650-31.jpg", description: "Lush coffee plantations and misty landscapes." },
  { name: "Mysore Palace", category: "Heritage", rating: "4.7", price: "100", image: "https://dwq3yv87q1b43.cloudfront.net/public/blogs/fit-in/1200x675/Blog_20241130-237756404-1732944745.jpg", description: "Grand palace showcasing Indo-Saracenic architecture." },
  { name: "Hampi", category: "Heritage", rating: "4.9", price: "400", image: "https://www.holidaymonk.com/wp-content/uploads/2024/07/Interesting-things-to-do-in-Hampi.webp", description: "UNESCO World Heritage site with ancient temple ruins." },
  { name: "Jog Falls", category: "Adventure", rating: "4.7", price: "150", image: "https://scontent.fblr20-1.fna.fbcdn.net/v/t39.30808-6/471237815_8060002220769387_9102773737074870399_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=108&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=mth1Kwv3kJQQ7kNvwGDoYaP&_nc_oc=AdnJl8aZ64w_lZhqnWo6Pt5cjU3xo5pLtTgs2l3w3Ux-m54235sdr3WNBJY-xxB_H_peIWpbJ1bgjA9699Rq14kH&_nc_zt=23&_nc_ht=scontent.fblr20-1.fna&_nc_gid=IUuFFnzZ1XYp78N8p3yY-Q&oh=00_AfGLKWg7f6QRxl4cJUTK_Z2P-cdYmaXQcpR4VtvbyHMI_Q&oe=681ACDB0", description: "India’s second-highest waterfall offering breathtaking views." },
  { name: "Gokarna Beach", category: "Beach", rating: "4.6", price: "Free", image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-om-beach-gokarna-karnataka-city-hero?qlt=82&ts=1726720866389", description: "A serene alternative to Goa’s crowded beaches." },
  { name: "Belur Temple", category: "Temple", rating: "4.5", price: "50", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIS4QIq60B4UukGU21oMFe2avHi5GVH9vVlg&s", description: "Famous for intricate carvings and Hoysala architecture." },
],
Kerala: [
  { name: "Munnar", category: "Hill Station", rating: "4.8", price: "250", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Munnar_hill_station_.JPG/1200px-Munnar_hill_station_.JPG", description: "Endless tea gardens and misty mountain views." },
  { name: "Alleppey", category: "Adventure", rating: "4.9", price: "500", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTSi829gwSPRG6YUyG20iVmr951S_5mcaRw&s", description: "Venice of India, known for houseboat cruises." },
  { name: "Kumarakom", category: "Adventure", rating: "4.7", price: "300", image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Kumarkom.jpg", description: "A paradise for bird watchers with serene backwaters." },
  { name: "Wayanad", category: "Adventure", rating: "4.6", price: "350", image: "https://www.keralatourism.org/images/microsites/wayanad/waynadu-1024x768.jpg", description: "A rich biodiversity hub with trekking spots and caves." },
  { name: "Periyar Wildlife Sanctuary", category: "Adventure", rating: "4.8", price: "600", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxQd-585ZtWPZTMhAXQQ9wQX0Bg-iMSSKoww&s", description: "A famous tiger reserve with boat safaris on Periyar Lake." },
  { name: "Bekal Fort", category: "Heritage", rating: "4.5", price: "100", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ec/59/3c/bekal-fort.jpg?w=900&h=-1&s=1", description: "One of Kerala’s largest forts with stunning sea views." },
],
  Madhya_Pradesh: [
    { name: "Khajuraho Temples", category: "Heritage", rating: "4.8", price: "500", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1d/24/a5/visit-famous-khajuraho.jpg?w=900&h=500&s=1", description: "UNESCO World Heritage site known for intricate sculptures." },
    { name: "Sanchi Stupa", category: "Heritage", rating: "4.7", price: "300", image: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Key_Facts_about_Sanchi_ec2fd269c5.jpg", description: "Ancient Buddhist stupa dating back to the Maurya Dynasty." },
    { name: "Bhimbetka Caves", category: "Heritage", rating: "4.6", price: "150", image: "https://s7ap1.scene7.com/is/image/incredibleindia/bhimbetka-rock-shelters-bhopal-madhya-pradesh-1-attr-hero?qlt=82&ts=1726675096567", description: "Prehistoric cave paintings depicting early human life." },
    { name: "Pachmarhi", category: "Hill Station", rating: "4.8", price: "200", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/50/ea/e1/bee-falls.jpg?w=1200&h=-1&s=1", description: "Known as the Queen of Satpura with lush greenery." },
    { name: "Gwalior Fort", category: "Heritage", rating: "4.7", price: "250", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Gwalior_Fort_front.jpg/1200px-Gwalior_Fort_front.jpg", description: "Grand fort with a rich Rajput heritage." },
    { name: "Bandhavgarh National Park", category: "Adventure", rating: "4.9", price: "600", image: "https://cdn.prod.website-files.com/65aa483b5ed7ebb96ac699bd/66d93edb3e5c7ec1738c65d3_66d93e15b5f53f574a3aeaa9__DSC0541-1-2_11zon.jpeg", description: "Popular tiger reserve offering thrilling safaris." }
  ],
  Maharashtra: [
    { name: "Mumbai", category: "Adventure", rating: "4.8", price: "Free", image: "https://mountainsandmahals.com/wp-content/uploads/2023/03/PXL_20221231_030914950-scaled.jpg", description: "The bustling financial hub with Bollywood charm." },
    { name: "Pune", category: "Heritage", rating: "4.7", price: "Free", image: "https://media.holidify.com/images/cmsuploads/compressed/baps-shree-swaminarayan-mandir-pune-tourism-entry-fee-timings-holidays-reviews-header_20250130093022.jpg", description: "A mix of historical sites and IT innovation." },
    { name: "Lonavala", category: "Hill Station", rating: "4.6", price: "250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmoUWS_fi2uqRGfPLpqoOA02Lb7vLW2_5fWA&s", description: "Famous for its scenic beauty and delicious chikki." },
    { name: "Ajanta & Ellora Caves", category: "Heritage", rating: "4.9", price: "500", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/31/92/93.jpg", description: "Magnificent rock-cut caves with ancient carvings." },
    { name: "Shirdi", category: "Temple", rating: "4.8", price: "Free", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmgbfy2KiDoEOKXQ2XTiAMw0l3nc0JisOT3uPMVi1H5DhkcAQZzP-33J6oWhQKjaQCfCDl6pfV7dMgZkLMic8GAyYPWNQW1wzwt_CAWM2-VaUxt252I-TFiCO39j1yEzNggHqO6fSj-rtP_4JSJleKpIYyJWT2G30_8oGPuw07cpAZZ6v87Q4qRWixyTsk/w640-h478-rw/SAi.png", description: "Pilgrimage town dedicated to Sai Baba." },
    { name: "Mahabaleshwar", category: "Adventure", rating: "4.7", price: "300", image: "https://s7ap1.scene7.com/is/image/incredibleindia/pratapgarh-fort-mahabaleshwar-maharashtra-1-attr-nearby?qlt=82&ts=1726668880856", description: "Strawberry paradise with stunning viewpoints." }
  ],
  Manipur: [
    { name: "Loktak Lake", category: "Adventure", rating: "4.9", price: "Free", image: "https://static.toiimg.com/photo/msid-106325315,width-96,height-65.cms", description: "India’s only floating lake, home to Phumdis." },
    { name: "Kangla Fort", category: "Heritage", rating: "4.7", price: "200", image: "https://oddessemania.in/wp-content/uploads/2024/05/Kangla-fort-featured.jpg", description: "Ancient fort reflecting Manipuri royal heritage." },
    { name: "Keibul Lamjao National Park", category: "Adventure", rating: "4.8", price: "500", image: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Keibul_Lamjao_National_Park_6a5e8fd635.jpg", description: "The world’s only floating national park." },
    { name: "Andro Village", category: "Nature", rating: "4.6", price: "150", image: "https://thehillstimes.in/wp-content/uploads/2022/04/1-andro-village.jpg", description: "Preserving ancient pottery and traditions of Manipur." },
    { name: "Ukhrul", category: "Hill Station", rating: "4.7", price: "250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEJ1Ezk2XnY53fKpcKXvryk89xz5q3k7rpw&s", description: "Known for scenic landscapes and Shirui lilies." },
    { name: "Sendra Island", category: "Nature", rating: "4.5", price: "300", image: "https://indiano.travel/wp-content/uploads/2022/09/Sendra-Ecological-Park-Picture.jpg", description: "Serene escape with mesmerizing lake views." }
  ],

  Meghalaya: [
    { name: "Living Root Bridges", category: "Heritage", rating: "4.8", price: "Free", image: "https://res.cloudinary.com/roundglass/image/upload/f_auto/ar_4:3,c_fill,w_auto/g_auto,q_auto/v1649765953/rg/collective/media/meghalaya-nongriat-double-decker-living-root-bridge-greenery-people-ashwin-ezhumalai_mmdvms.jpg", description: "Unique bio-engineered bridges formed by tree roots." },
    { name: "Cherrapunji", category: "Adventure", rating: "4.9", price: "250", image: "https://travenjo.com/wp-content/uploads/2022/06/Seven-Sisters-Falls-1-gaimg.jpg", description: "One of the wettest places on Earth with stunning waterfalls." },
    { name: "Mawlynnong", category: "Adventure", rating: "4.7", price: "200", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/27/0d/50/meghalaya-s-mawlynnong.jpg?w=900&h=500&s=1", description: "Asia’s cleanest village with breathtaking surroundings." },
    { name: "Umiam Lake", category: "Adventure", rating: "4.6", price: "100", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/b3/91/22/amazing-umium-lake.jpg?w=1200&h=-1&s=1", description: "A stunning artificial lake with water sports activities." },
    { name: "Shillong Peak", category: "Hill Station", rating: "4.7", price: "150", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/fe/f3/e5/shillong-peak.jpg?w=1200&h=-1&s=1", description: "Provides panoramic views of Shillong city." },
    { name: "Laitlum Canyon", category: "Nature", rating: "4.8", price: "200", image: "https://media1.thrillophilia.com/filestore/pcodcdp0o3e6sdbpsj8nbaun4uup_51636138283_50540c5c58_k.jpg", description: "A mesmerizing canyon with dramatic cliffs." }
  ],

  Mizoram: [
    { name: "Reiek", category: "Nature", rating: "4.7", price: "150", image: "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-mountain-reiek-mizoram-rural-hero?qlt=82&ts=1727162177885", description: "Scenic hilltop ideal for trekking and exploration." },
    { name: "Phawngpui", category: "Adventure", rating: "4.8", price: "200", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Phawngpui_national_park.jpg", description: "Blue Mountain with lush landscapes and diverse fauna." },
    { name: "Champhai", category: "Adventure", rating: "4.6", price: "100", image: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Champhai%2C_Mizoram%2C_from_south%2C_with_Zotlang_in_the_foreground.jpg", description: "A picturesque valley known for rice fields and vineyards." },
    { name: "Aizawl", category: "History", rating: "4.7", price: "Free", image: "https://s3.india.com/wp-content/uploads/2024/04/Feature-Image-_-Aziwal.jpg?impolicy=Medium_Widthonly&w=350&h=263", description: "The capital city offering cultural richness and modern appeal." },
    { name: "Vantawng Falls", category: "Adventure", rating: "4.8", price: "250", image: "https://www.mizoramtourism.com/post_images/626b8dff68d85_Vantawng-Falls.jpg", description: "The highest waterfall in Mizoram, surrounded by dense forests." },
    { name: "Tamdil Lake", category: "Nature", rating: "4.6", price: "300", image: "https://s7ap1.scene7.com/is/image/incredibleindia/tamdil-aizawl-mizoram-1-attr-hero?qlt=82&ts=1726665784318", description: "A serene lake surrounded by lush greenery." }
  ],
    Nagaland: [
      { name: "Dzukou Valley", category: "Hill Station", rating: "4.8", price: "200", image: "https://static.toiimg.com/photo/97834460.cms", description: "A mesmerizing valley famous for its seasonal flowers and trekking trails." },
      { name: "Kohima War Cemetery", category: "Heritage", rating: "4.7", price: "Free", image: "https://archive.cloud.cwgc.org/images-cemetery-images-prod/2058100/kohima2003-2.jpg", description: "A memorial dedicated to soldiers who fought in the Battle of Kohima." },
      { name: "Japfu Peak", category: "Nature", rating: "4.6", price: "300", image: "https://thegypsychiring.com/wp-content/uploads/2023/03/Mount-Japfu-Peak-in-Nagaland-The-Gypsy-Churing.webp", description: "Second-highest peak in Nagaland, ideal for trekking." },
      { name: "Touphema Village", category: "Heritage", rating: "4.7", price: "150", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTEFrj3m5S61tlj2sHrdbFRSgniXSihCeUA&s", description: "Experience Naga traditional culture in this heritage village." },
      { name: "Shilloi Lake", category: "Nature", rating: "4.6", price: "100", image: "https://web.uneecopscloud.com/ffoweb_dev/sites/default/files/styles/flexslider_full/public/2024-02/78edd860ace7fa7acf6a46b01cee34f0.jpg?itok=cujTf1nO", description: "A serene lake shaped like a human foot, located amidst lush greenery." },
      { name: "Kisama Heritage Village", category: "Heritage", rating: "4.9", price: "250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAn8NhA2PwZAmgrbB7lDuZs9OdQLVtbE7JA&s", description: "Host site for Nagaland’s famous Hornbill Festival." }
    ],
    Odisha: [
      { name: "Jagannath Temple", category: "Temple", rating: "4.9", price: "Free", image: "https://organiser.org/wp-content/uploads/2024/07/11-2-1-jpg.webp", description: "Sacred Hindu temple known for its Rath Yatra festival." },
      { name: "Chilika Lake", category: "Nature", rating: "4.8", price: "300", image: "https://upload.wikimedia.org/wikipedia/commons/9/94/Birds_eyeview_of_Chilika_Lake.jpg", description: "Asia’s largest coastal lagoon, home to migratory birds." },
      { name: "Konark Sun Temple", category: "Heritage", rating: "4.7", price: "500", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1200px-Konarka_Temple.jpg", description: "Magnificent 13th-century temple dedicated to Surya, the Sun God." },
      { name: "Dhauli", category: "Heritage", rating: "4.6", price: "150", image: "https://res.cloudinary.com/kmadmin/image/upload/v1724318940/kiomoi/Dhauli_8141.jpg", description: "Location of Emperor Ashoka’s transformation towards Buddhism." },
      { name: "Hirakud Dam", category: "Nature", rating: "4.7", price: "250", image: "https://www.sarkarijobs.link/public/storage/uploads/hirakud-dam-64cfb8367c102.png", description: "India’s longest earthen dam, providing scenic lake views." },
      { name: "Simlipal National Park", category: "Adventure", rating: "4.9", price: "600", image: "https://media.assettype.com/newindianexpress%2F2024-06%2Fdbd099c4-795f-4271-8b5a-ad793a6bf5fa%2Fentry_point_at_pithabata_under_baripada_territorial_division_0706chn_113.jpg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100", description: "A lush forest reserve home to tigers and elephants." }
    ],
    Punjab: [
      { name: "Golden Temple", category: "Temple", rating: "5.0", price: "Free", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/The_Golden_Temple_of_Amrithsar_7.jpg/1200px-The_Golden_Temple_of_Amrithsar_7.jpg", description: "Sacred Sikh shrine known for its golden façade and peaceful aura." },
      { name: "Wagah Border", category: "Heritage", rating: "4.8", price: "Free", image: "https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/09/isitors-watch-security-personnel-perform-during-the-beating-retreat-ceremony-at-the-attari-wagah-border-near-amritsar-1726053317.webp", description: "Daily border closing ceremony between India and Pakistan." },
      { name: "Jallianwala Bagh", category: "Heritage", rating: "4.7", price: "Free", image: "https://s7ap1.scene7.com/is/image/incredibleindia/jallianwala-bagh-amritsar-punjab-1-attr-hero?qlt=82&ts=1726662275638", description: "Memorial park marking the tragic 1919 massacre." },
      { name: "Sheesh Mahal", category: "Heritage", rating: "4.6", price: "200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95wLOoEdILuHKOu9Pd72ILu-LmtjPKsCGwQ&s", description: "A magnificent palace known for its stunning mirror work." },
      { name: "Anandpur Sahib", category: "Temple", rating: "4.7", price: "100", image: "https://upload.wikimedia.org/wikipedia/commons/9/95/1_Sri_Kesgarh_Takhat_Anandpur_Sahib_Khalsa_birthplace_Punjab_India.jpg", description: "The birthplace of Khalsa, an important Sikh pilgrimage site." },
      { name: "Qila Mubarak", category: "Fort", rating: "4.6", price: "150", image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Qila_Mubarak%2C_Patiala.jpg", description: "An ancient fort showcasing Mughal-era architecture." }
    ],
    Rajasthan: [
      { name: "Amber Fort", category: "Monument", rating: "4.8", price: "500", image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/20191219_Fort_Amber%2C_Amer%2C_Jaipur_0955_9481.jpg", description: "A grand fort offering scenic views of Jaipur." },
      { name: "Hawa Mahal", category: "Fort", rating: "4.7", price: "200", image: "https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg", description: "Iconic palace known for its honeycomb-like windows." },
      { name: "City Palace (Jaipur)", category: "Heritage", rating: "4.8", price: "300", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/96/8a/82/this-is-the-time-when.jpg?w=900&h=500&s=1", description: "A palace housing Rajput history and artifacts." },
      { name: "Mehrangarh Fort", category: "Heritage", rating: "4.9", price: "450", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/99/ae/7f/images-14-largejpg.jpg?w=700&h=400&s=1", description: "A massive fort with spectacular city views." },
      { name: "Lake Palace (Udaipur)", category: "Fort", rating: "5.0", price: "2000", image: "https://udaipurtourism.co.in/images/places-to-visit/headers/taj-lake-palace-udaipur-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg", description: "A floating palace in the middle of Lake Pichola." },
      { name: "Jaisalmer Fort", category: "Fort", rating: "4.8", price: "350", image: "https://jaisalmertourism.co.in/images/places-to-visit/headers/jaisalmer-fort-entry-fee-timings-holidays-reviews-header.jpg", description: "One of the largest forts in the world, built entirely of yellow sandstone." }
    ],
    Sikkim: [
      { name: "Nathu La", category: "Hill Station", rating: "4.7", price: "300", image: "https://holidaystripfactorysikkim.b-cdn.net/wp-content/uploads/sites/18/2024/05/Nathula-Pass.webp", description: "A high-altitude mountain pass along the Indo-China border." },
      { name: "Rumtek Monastery", category: "Monastery", rating: "4.8", price: "200", image: "https://www.karmapa.org/wp-content/uploads/Rumtek_Monastery_-_Inside_Close_View-1400px-cropped.jpg", description: "One of the largest Buddhist monasteries in Sikkim." },
      { name: "Gurudongmar Lake", category: "Heritage", rating: "4.9", price: "400", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/91/f3/9b/2015-03-08-17-largejpg.jpg?w=1200&h=1200&s=1", description: "A sacred high-altitude lake with stunning frozen landscapes." },
      { name: "Yuksom", category: "Heritage", rating: "4.7", price: "150", image: "https://static.toiimg.com/thumb/56619918/Yuksom1.jpg?width=1200&height=900", description: "The gateway to famous Himalayan treks." },
      { name: "Pelling", category: "Hill Station", rating: "4.8", price: "250", image: "https://travellingslacker.com/wp-content/uploads/2019/01/Pelling-Sky-Walk-17.jpg", description: "Scenic town offering magnificent views of Mt. Kanchenjunga." },
      { name: "Lachen", category: "Nature", rating: "4.9", price: "350", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/a5/e1/07/lachen-village-at-north.jpg?w=1400&h=1400&s=1", description: "A picturesque village known for its stunning valleys and lakes." }
    ],
      Tamil_Nadu: [
        { name: "Meenakshi Temple", category: "Temple", rating: "4.9", price: "Free", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/MEENAKSHI_TEMPLE-_WEST_TOWER.jpg/250px-MEENAKSHI_TEMPLE-_WEST_TOWER.jpg", description: "A magnificent temple with breathtaking architecture and sculptures." },
        { name: "Ooty", category: "Hill Station", rating: "4.8", price: "300", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp", description: "Lush green landscapes and stunning tea plantations." },
        { name: "Kodaikanal", category: "Hill Station", rating: "4.7", price: "250", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/medium-desktop/kodaikanal-1655279477_0cdce0d4e58596e4fb33.webp", description: "Known as the Princess of Hill Stations with serene views." },
        { name: "Mahabalipuram", category: "Heritage", rating: "4.6", price: "200", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/mahabalipuram-1654870108_c538505993052d39e713.webp", description: "Famous for its rock-cut temples and ancient architecture." },
        { name: "Rameswaram", category: "Temple", rating: "4.8", price: "100", image: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/rameswaram-1655457953_09de320de48b98dece1a.webp", description: "An important Hindu pilgrimage site with historical significance." },
        { name: "Courtallam", category: "Nature", rating: "4.5", price: "150", image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Courtallam.jpg", description: "Refreshing waterfalls known for their medicinal properties." }
      ],
      Telangana: [
        { name: "Golconda Fort", category: "Historical Site", rating: "4.8", price: "250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCqHCQSv2C5B6SgcdJCGvFTcc2BvjUdEtQ2A&s", description: "A grand fortress showcasing medieval engineering excellence." },
        { name: "Charminar", category: "Monument", rating: "4.7", price: "100", image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Charminar_Hyderabad_1.jpg", description: "Iconic structure representing Hyderabad’s rich heritage." },
        { name: "Ramoji Film City", category: "Entertainment", rating: "4.9", price: "1500", image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_124,w_2658,h_1496,r_0/q_80,w_900,h_506,dpr_1,f_auto,fl_progressive,c_limit/ramoji-studio-tour/Ramoji_Film_City_Signage_vb9v0p", description: "One of the largest film cities in the world, offering grand sets and attractions." },
        { name: "Warangal Fort", category: "Heritage Site", rating: "4.6", price: "200", image: "https://telanganatourism.gov.in/blog/images/02-08-2019.jpg", description: "An architectural marvel with impressive Kakatiya-era carvings." },
        { name: "Bhadrakali Temple", category: "Religious Site", rating: "4.7", price: "50", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYWIutvTHJcW2Rw39BjeRqReUhJ3wqkE3dg&s", description: "Sacred Hindu temple with spiritual significance." },
        { name: "Nagarjuna Sagar", category: "Nature & Engineering", rating: "4.8", price: "100", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/NagarjunaSagarDam.JPG/1200px-NagarjunaSagarDam.JPG", description: "One of India’s largest dams with a picturesque reservoir." }
      ],
      Tripura: [
        { name: "Neermahal", category: "Heritage", rating: "4.7", price: "150", image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Neer-Mahal.jpg", description: "A water palace blending Hindu and Mughal architecture." },
        { name: "Unakoti", category: "Heritage", rating: "4.8", price: "100", image: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Unakoti_3.jpg", description: "Ancient rock carvings dating back thousands of years." },
        { name: "Jampui Hills", category: "Hill Station", rating: "4.7", price: "250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4BM07GTyq04jkMzbkHsjbU-Ww9ej_6Xvb5Q&s", description: "A scenic paradise with orange orchards and stunning views." },
        { name: "Ujjayanta Palace", category: "Heritage", rating: "4.8", price: "300", image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Ujjayanta_palace_Tripura_State_Museum_Agartala_India.jpg", description: "A grand palace showcasing Tripura’s royal heritage." },
        { name: "Dumboor Lake", category: "Nature", rating: "4.6", price: "150", image: "https://tripuratourism.gov.in/images/tour/1698405363/296.jpg", description: "A stunning lake surrounded by lush greenery." },
        { name: "Bhuvaneshwari Temple", category: "Temple", rating: "4.7", price: "100", image: "https://s7ap1.scene7.com/is/image/incredibleindia/bhuvaneshwari-temple-jamshedpur-jharkhand-1-attr-hero?qlt=82&ts=1726724018087", description: "An important Hindu temple known for its spiritual significance." }
      ],
      Uttarakhand: [
        { name: "Kedarnath Temple", category: "Temple", rating: "4.9", price: "100", image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Kedarnath_Temple_in_Rainy_season.jpg", description: "One of the holiest Hindu temples dedicated to Lord Shiva." },
        { name: "Nainital", category: "Hill Station", rating: "4.8", price: "300", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nainital_metro.jpg/1200px-Nainital_metro.jpg", description: "A charming town centered around the beautiful Naini Lake." },
        { name: "Rishikesh", category: "Adventure", rating: "4.7", price: "250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn8LCMwPzG4sWf4s0UVAobA1xFd-Yxd3Qtkw&s", description: "Yoga capital of the world with thrilling rafting experiences." },
        { name: "Haridwar", category: "Temple", rating: "4.8", price: "Free", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Haridwar_Ganga_6.JPG/1200px-Haridwar_Ganga_6.JPG", description: "A sacred city hosting the famous Ganga Aarti." },
        { name: "Valley of Flowers", category: "Nature", rating: "4.9", price: "400", image: "https://trekthehimalayas.com/images/ValleyofFlowersTrek/Slider/b3d630fb-3f9a-4cc6-9fef-1be72e135695_VOF.jpg", description: "A stunning valley with vibrant seasonal flowers." },
        { name: "Badrinath", category: "Temple", rating: "4.7", price: "200", image: "badrinath.jpg", description: "An important pilgrimage site dedicated to Lord Vishnu." }
      ],
      Uttar_Pradesh: [
        { name: "Taj Mahal", category: "Heritage", rating: "5.0", price: "800", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg", description: "An architectural masterpiece and one of the Seven Wonders of the World." },
        { name: "Fatehpur Sikri", category: "Heritage", rating: "4.8", price: "300", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Fatehput_Sikiri_Buland_Darwaza_gate_2010.jpg/1200px-Fatehput_Sikiri_Buland_Darwaza_gate_2010.jpg", description: "A historical city built by Emperor Akbar." },
        { name: "Varanasi Ghats", category: "Temple", rating: "4.9", price: "Free", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7_weWXAsZdPaZLYwaxqoFWsOkW7yxgkeuKQ&s", description: "Sacred riverfront steps where the Ganga Aarti is performed." },
        { name: "Lucknow Residency", category: "Heritage", rating: "4.7", price: "250", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsf09bX3oHl8CM-USdPJrHqyPcOCjfNjuBQ&s", description: "A site marking the British era in India’s history." }
      ],
      Andaman_and_Nicobar_Islands: [
          { name: "Cellular Jail", category: "Heritage", rating: "4.8", price: "50", image: "https://s7ap1.scene7.com/is/image/incredibleindia/cellular-jail-port-blair-andaman-and-nicobar-islands-2-attr-hero?qlt=82&ts=1726816790676", description: "Infamous colonial-era prison, now a national memorial." },
          { name: "Radhanagar Beach", category: "Beach", rating: "4.9", price: "Free", image: "https://havelockislandbeachresort.com/storage/logo/sight-seeing-at-havelock/radhanagar-beach.jpg", description: "Ranked among Asia’s best beaches with crystal-clear waters." },
          { name: "Havelock Island", category: "Beach", rating: "4.8", price: "250", image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Havelock%2C_Andaman_%26_Nicobar_Islands.JPG", description: "A tropical paradise known for scuba diving and serene beaches." },
          { name: "Ross Island", category: "Heritage", rating: "4.7", price: "150", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ross_Island_%28Netaji_Subhas_Bose_Island%29.jpg/1200px-Ross_Island_%28Netaji_Subhas_Bose_Island%29.jpg", description: "Once the British administrative headquarters, now in ruins." },
          { name: "Neil Island", category: "Beach", rating: "4.6", price: "200", image: "https://waywardwayfarer.com/wp-content/uploads/2021/12/neil-island-travel-guide-natural-bridge.png", description: "A small island known for its coral reefs and tranquil ambiance." },
          { name: "Baratang Island", category: "Nature", rating: "4.7", price: "300", image: "https://www.go2andaman.com/wp-content/uploads/2021/05/baratang-mangrove-forest-go2andaman.jpeg", description: "Famous for limestone caves and mangrove creeks." }
        ],
      Chandigarh: [
          { name: "Rock Garden", category: "Nature", rating: "4.8", price: "50", image: "https://d2d45aw5ucb5xn.cloudfront.net/wp-content/uploads/2013/11/Rock-Garden.jpg", description: "A unique garden made entirely from industrial and urban waste." },
          { name: "Sukhna Lake", category: "Nature", rating: "4.7", price: "100", image: "https://s7ap1.scene7.com/is/image/incredibleindia/sukhna-lake-chandigarh-chandigarh-2-attr-hero?qlt=82&ts=1727353661631", description: "A scenic reservoir, ideal for boating and morning walks." },
          { name: "Rose Garden", category: "Nature", rating: "4.6", price: "50", image: "https://www.corvallisoregon.gov/sites/default/files/imageattachments/parksrec/page/12231/dscn2035.jpg", description: "Asia’s largest rose garden with thousands of varieties." },
          { name: "Elante Mall", category: "Adventure", rating: "4.5", price: "Free", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/81/80/07/elante-mall.jpg?w=1200&h=-1&s=1", description: "A modern shopping hub with branded stores and entertainment zones." },
          { name: "Le Corbusier Centre", category: "Adventure", rating: "4.6", price: "50", image: "https://images.adsttc.com/media/images/50fc/652e/b3fc/4b06/8c00/0067/newsletter/le-corbusier-switzerland-zurich-heidi-weber-pavilion-06-samuel-ludwig.jpg?1414589429", description: "A tribute to the architect who designed Chandigarh." },
          { name: "Government Museum", category: "Heritage", rating: "4.7", price: "100", image: "https://chdmuseum.gov.in/images/govt-museum-and-art-gallery.jpg", description: "Showcases artifacts from India’s rich heritage." }
        ],
      Dadra_and_Nagar_Haveli_and_Daman_and_Diu: [
          { name: "Devka Beach", category: "Beach", rating: "4.6", price: "Free", image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/02/03/73a0cffb0f9e105b4792282570a401e3_1000x1000.png", description: "Serene coastline with black sands and a relaxing vibe." },
          { name: "Diu Fort", category: "Heritage", rating: "4.8", price: "100", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4WkB9MFLtapNcMHo7m-VzIl5jM8aOolkuw&s", description: "A Portuguese-built fortress with stunning sea views." },
          { name: "St. Paul’s Church", category: "Heritage", rating: "4.7", price: "Free", image: "https://i0.wp.com/sh114.global.temp.domains/~stpaulsc/wp-content/uploads/2022/10/Screenshot-2022-10-07-at-11.25.48-copy-2-2.jpg?resize=1100%2C462", description: "A Portuguese-style church dating back to the 1600s." },
          { name: "Silvassa", category: "Nature", rating: "4.6", price: "200", image: "https://s7ap1.scene7.com/is/image/incredibleindia/5-daman-ganga-riverfront-silvassa-daman-and-diu-city-hero-new?qlt=82&ts=1726737598302", description: "A mix of nature and city life, known for tribal heritage." },
          { name: "Jampore Beach", category: "Beach", rating: "4.7", price: "150", image: "https://s7ap1.scene7.com/is/image/incredibleindia/jampore-beach-daman-daman-&-diu-attr-about?qlt=82&ts=1726737768842", description: "Famous for water sports and scenic sunset views." },
          { name: "Moti Daman Fort", category: "Heritage", rating: "4.5", price: "100", image: "https://indiano.travel/wp-content/uploads/2022/09/Jampore-Beach.jpg", description: "A grand fort showcasing Portuguese colonial heritage." }
        ],
        Delhi: [
          { name: "India Gate", category: "Heritage", rating: "4.8", price: "Free", image: "https://cdn.britannica.com/38/189838-050-83C7395E/India-War-Memorial-arch-New-Delhi-Sir.jpg", description: "A war memorial honoring Indian soldiers who fought in WWI." },
          { name: "Red Fort", category: "Heritage", rating: "4.9", price: "200", image: "https://cdn.britannica.com/20/189820-050-D650A54D/Red-Fort-Old-Delhi-India.jpg", description: "A historic Mughal fort known for its grand architecture." },
          { name: "Lotus Temple", category: "Temple", rating: "4.7", price: "Free", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/LotusDelhi.jpg/960px-LotusDelhi.jpg", description: "A Baha’i House of Worship shaped like a blooming lotus." },
          { name: "Humayun’s Tomb", category: "Heritage", rating: "4.8", price: "300", image: "https://s7ap1.scene7.com/is/image/incredibleindia/humayuns-tomb-delhi-3-musthead-hero?qlt=82&ts=1727352134370", description: "A masterpiece that inspired the design of the Taj Mahal." }
        ],
        Jammu_and_Kashmir: [
            { name: "Dal Lake", category: "Nature", rating: "4.9", price: "Free", image: "https://www.ekashmirtourism.com/wp-content/uploads/2022/12/dal-lake-in-winter.jpg", description: "A mesmerizing lake known for its floating gardens and houseboats." },
            { name: "Gulmarg", category: "Hill Station", rating: "4.8", price: "500", image: "https://www.tripplannersindia.com/assets/blog/images/thingstodoingulmargwebp/gondola_ride.webp", description: "A popular skiing destination with breathtaking views of the Himalayas." },
            { name: "Pahalgam", category: "Hill Station", rating: "4.7", price: "300", image: "https://static.toiimg.com/thumb/109691974/Pahalgam-Kashmir.jpg?width=636&height=358&resize=4", description: "A serene town known for lush valleys and trekking trails." },
            { name: "Sonmarg", category: "Hill Station", rating: "4.8", price: "250", image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Sonmarg_rishav7336.jpg", description: "A gateway to stunning glaciers and high-altitude treks." },
            { name: "Mughal Gardens", category: "Heritage", rating: "4.7", price: "100", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/68/f4/db/chasme-sahi.jpg?w=1200&h=-1&s=1", description: "Beautifully landscaped gardens built by the Mughals." },
            { name: "Shankaracharya Temple", category: "Temple", rating: "4.6", price: "Free", image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Shankaracharya_Temple_in_Srinagar%2C_India%2C_under_snow_%28cropped%29.jpg", description: "An ancient temple offering panoramic views of Srinagar." }
          ],
        Ladakh: [
            { name: "Pangong Lake", category: "Heritage", rating: "4.9", price: "Free", image: "https://www.ekashmirtourism.com/wp-content/uploads/2023/01/124.jpg", description: "A stunning high-altitude lake that changes colors with sunlight." },
            { name: "Nubra Valley", category: "Adventure", rating: "4.8", price: "400", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/b9/e6/1c/nubra-valley.jpg?w=1200&h=-1&s=1", description: "A beautiful cold desert with unique double-humped camels." },
            { name: "Leh Palace", category: "Heritage", rating: "4.7", price: "200", image: "https://charzanholidays.com/wp-content/uploads/2024/12/Leh-Palace_ladakh_charzan_holidays.jpg", description: "A grand nine-story palace reflecting Ladakh’s royal heritage." },
            { name: "Magnetic Hill", category: "Heritage", rating: "4.6", price: "150", image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2020/3/9/MageneticHIll_getty.jpg.rend.hgtvcom.1280.960.suffix/1583790287108.jpeg", description: "A gravity-defying phenomenon where vehicles appear to roll uphill." },
            { name: "Tso Moriri", category: "Adventure", rating: "4.9", price: "500", image: "https://hikerwolf.com/wp-content/uploads/2021/03/Tso-Moriri.jpg.webp", description: "A pristine lake surrounded by towering mountains." },
            { name: "Alchi Monastery", category: "Monastery", rating: "4.7", price: "100", image: "https://i0.wp.com/wovensouls.org/wp-content/uploads/2011/09/jam-1363b.jpg", description: "One of the oldest monasteries in Ladakh, with intricate frescoes." }
          ],
          West_Bengal: [
            { 
              name: "Victoria Memorial", 
              category: "Heritage", 
              rating: "4.7", 
              price: "30", 
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeIEx5VaLJu0eHEilcRw15LKjYnrKsmI2Iw&s", 
              description: "Iconic marble building dedicated to Queen Victoria, surrounded by lush gardens." 
            },
            { 
              name: "Darjeeling", 
              category: "Hill Station", 
              rating: "4.8", 
              price: "120", 
              image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/23/6637aafe36050ae25c5c1f50d807ddc6_1000x1000.jpg", 
              description: "UNESCO-listed toy train offering scenic rides through the hills of Darjeeling." 
            },
            { 
              name: "Sundarbans National Park", 
              category: "Adventure", 
              rating: "4.6", 
              price: "150", 
              image: "https://www.insideindianjungles.com/wp-content/uploads/2019/07/sunder-bans.jpg", 
              description: "World’s largest mangrove forest, home to Royal Bengal Tigers and exotic wildlife." 
            },
            { 
              name: "Howrah Bridge", 
              category: "Heritage", 
              rating: "4.5", 
              price: "Free", 
              image: "https://s7ap1.scene7.com/is/image/incredibleindia/howrah-bridge-kolkata-west-bengal-2-attr-hero?qlt=82&ts=1726642964904", 
              description: "Massive cantilever bridge and an iconic landmark of Kolkata." 
            },
            { 
              name: "Digha Beach", 
              category: "Beach", 
              rating: "4.3", 
              price: "Free", 
              image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/23/265c2d74294dae4cd58d5709a53bee96_1000x1000.jpg", 
              description: "Popular seaside resort town with shallow sand beaches and calm waves." 
            },
            { 
              name: "Kalimpong", 
              category: "Adventure", 
              rating: "4.6", 
              price: "Free", 
              image: "https://s7ap1.scene7.com/is/image/incredibleindia/lord-buddha-statue-kalimpong-west-bengal-city-1-hero?qlt=82&ts=1726645267006", 
              description: "Hill station with monasteries, flower markets, and panoramic Himalayan views." 
            },
          ],
          
        Lakshadweep: [
            { name: "Agatti Island", category: "Adventure", rating: "4.9", price: "800", image: "https://images.wanderon.in/blogs/new/2024/05/agatti-airport-lakshadweep.jpg", description: "A paradise for snorkeling and marine life exploration." },
            { name: "Minicoy Island", category: "Beach", rating: "4.8", price: "750", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/ISS002-E-7260.PNG", description: "Known for its stunning lighthouse and vibrant coral reefs." },
            { name: "Bangaram Atoll", category: "Beach", rating: "4.9", price: "1000", image: "https://static.toiimg.com/photo/msid-106291053,width-96,height-65.cms", description: "A secluded tropical island with turquoise waters and soft sands." },
            { name: "Kavaratti", category: "Adventure", rating: "4.7", price: "700", image: "https://s7ap1.scene7.com/is/image/incredibleindia/thinnakara-kavaratti-lakshwadeep-1-musthead-hero?qlt=82&ts=1727011585498", description: "The capital of Lakshadweep, offering pristine beaches and water activities." },
            { name: "Marine Museum", category: "Heritage", rating: "4.6", price: "300", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3b/7e/4a/img-20180223-101229-largejpg.jpg?w=1200&h=1200&s=1", description: "Showcases Lakshadweep’s rich marine biodiversity." },
            { name: "Kalpeni Island", category: "Beach", rating: "4.7", price: "500", image: "https://s7ap1.scene7.com/is/image/incredibleindia/kalpeni-kavaratti-lakshwadeep-3-musthead-hero?qlt=82&ts=1727011703260", description: "Famous for its coral reefs and serene lagoons." }
          ],
        Puducherry: [
            { name: "Auroville", category: "Temple", rating: "4.8", price: "Free", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPEkXAR_drr05lUw8rH8WHKoTEy3cW_oPRg&s", description: "An experimental township focused on unity and sustainable living." },
            { name: "French Quarter", category: "Heritage", rating: "4.7", price: "Free", image: "https://static.independent.co.uk/2023/07/28/16/newFile.jpg?width=1200&height=1200&fit=crop", description: "Colonial streets lined with colorful French-style buildings." },
            { name: "Paradise Beach", category: "Beach", rating: "4.9", price: "100", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/fa/d8/fd/photo2jpg.jpg?w=1200&h=-1&s=1", description: "One of Puducherry’s cleanest and most scenic beaches." },
            { name: "Promenade Beach", category: "Beach", rating: "4.8", price: "Free", image: "https://i0.wp.com/pondicherryin.com/wp-content/uploads/2021/01/Rock-Beach2-1.jpg?fit=1068%2C713&ssl=1", description: "A famous beachside walkway with stunning sunrise views." },
            { name: "Serenity Beach", category: "Beach", rating: "4.7", price: "150", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/af/3b/96/serenity-beach.jpg?w=1200&h=-1&s=1", description: "A picturesque spot perfect for surfing and relaxation." },
            { name: "Chunnambar Boat House", category: "Adventure", rating: "4.6", price: "300", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/fa/96/d9/chunnambar-boat-house.jpg?w=1200&h=1200&s=1", description: "Offers exciting boating experiences amidst beautiful landscapes." }
          ],
};
export default function StateDetails() {
  const { stateName } = useParams();
  const navigate = useNavigate();
  const places = dummyPlaces[stateName] || [];

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  // Filtering logic with proper price handling
  const filteredPlaces = places.filter((place) => {
    const priceNumber = place.price === "Free" ? 0 : Number(place.price); // Convert "Free" to 0

    return (
      (selectedCategory === "" || place.category === selectedCategory) &&
      (selectedPrice === "" ||
        (selectedPrice === "low" && priceNumber <= 500) ||
        (selectedPrice === "mid" && priceNumber > 500 && priceNumber <= 1500) ||
        (selectedPrice === "high" && priceNumber > 1500)) &&
      (selectedRating === "" || place.rating >= parseFloat(selectedRating))
    );
  });

  return (
    <>
      <Navbar />
      <div className="filters-container">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Nature">Nature</option>
          <option value="Monastery">Monastery</option>
          <option value="Beach">Beach & Islands</option>
          <option value="Adventure">Adventure & Fun</option>
          <option value="Heritage">History & Heritage</option>
          <option value="Temple">Temple</option>
          <option value="Hill Station">Hill Station</option>
        </select>

        <select onChange={(e) => setSelectedPrice(e.target.value)}>
          <option value="">All Prices</option>
          <option value="low">₹0-₹500</option>
          <option value="mid">₹500-₹1500</option>
          <option value="high">₹1500+</option>
        </select>

        <select onChange={(e) => setSelectedRating(e.target.value)}>
          <option value="">All Ratings</option>
          <option value="3">3+ Stars</option>
          <option value="3.5">3.5+ Stars</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
        </select>
      </div>

      <div className="places-container">
        <h2>{stateName} - Places to Visit</h2>
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place, i) => (
            <div key={i} className="place-card">
              <img src={place.image} alt={place.name} />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <p>Category: {place.category}</p>
              <p>Rating: ⭐ {place.rating}</p>
              <p>Price: {place.price === 0 ? "Free" : `₹${place.price}`}</p>
              <button onClick={() => navigate(`/book/${place.name}`)}>Book Tour</button>
            </div>
          ))
        ) : (
          <p className="no-results">No places found matching the selected filters.</p>
        )}
      </div>
    </>
  );
}