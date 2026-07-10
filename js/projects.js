/*==========================================================
  ENTITY ENTERPRISES â€” Projects Page v3
==========================================================*/

const PROJECTS = [// â”€â”€ 01. OFFICE INTERIOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id:1,  name:"National Commission for Indian System of Medicine", shortName:"NCISM", location:"Punjabi Bagh, Delhi", client:"All India Ayurvedic Congress", category:"office-interior", type:"Office Interior", scope:"Interior design, detailed planning, material selection, and execution.", delivered:"A fully completed office interior with furniture, finishes, and lighting.", image:"assets/projects/optimized/ncism-office-interior-delhi.webp", images:["assets/projects/optimized/ncism-office-interior-delhi-1.webp","assets/projects/optimized/ncism-office-interior-delhi-2.webp","assets/projects/optimized/ncism-office-interior-delhi-3.webp","assets/projects/optimized/ncism-office-interior-delhi-4.webp","assets/projects/optimized/ncism-office-interior-delhi-5.webp","assets/projects/optimized/ncism-office-interior-delhi-6.webp","assets/projects/optimized/ncism-office-interior-delhi-7.webp","assets/projects/optimized/ncism-office-interior-delhi-8.webp","assets/projects/optimized/ncism-office-interior-delhi-9.webp","assets/projects/optimized/ncism-office-interior-delhi-10.webp"] , slug:"ncism-office-interior-delhi"},
  { id:2,  name:"3M India Experience Centre", shortName:"3M Science Applied to Life", location:"RMZ Infinity, Gurgaon", client:"3M Science Applied to Life", category:"office-interior", type:"Office Interior", scope:"Interior design, planning, and execution of the Regional Head Office.", delivered:"Fully completed office interiors from concept to handover.", image:"assets/projects/optimized/3m-science-applied-to-life-office-interior.webp", images:["assets/projects/optimized/3m-science-applied-to-life-office-interior-1.webp","assets/projects/3M/entity-enterprises-project.webp","assets/projects/optimized/3m-science-applied-to-life-office-interior-3.webp","assets/projects/optimized/3m-science-applied-to-life-office-interior-4.webp","assets/projects/optimized/3m-science-applied-to-life-office-interior-5.webp","assets/projects/optimized/3m-science-applied-to-life-office-interior-6.webp","assets/projects/optimized/3m-science-applied-to-life-office-interior-7.webp","assets/projects/optimized/3m-science-applied-to-life-office-interior-8.webp","assets/projects/optimized/3m-science-applied-to-life-office-interior-9.webp","assets/projects/optimized/3m-science-applied-to-life-office-interior-10.webp","assets/projects/optimized/3m-science-applied-to-life-office-interior-11.webp","assets/projects/optimized/3m-science-applied-to-life-office-interior-12.webp"] , slug:"3m-science-applied-to-life-office-interior"},
  { id:3,  name:"Sterling Tools Limited", shortName:"Sterling Tools ” Faridabad", location:"Faridabad, Haryana", client:"Sterling Tools Limited", category:"office-interior", type:"Office Interior", scope:"Complete interior design and plant upgradation, flooring, lighting, partitions, and finishing works.", delivered:"Successfully upgraded plant with modern interiors and improved infrastructure.", image:"assets/projects/optimized/sterling-tools-office-interior-faridabad.webp", images:["assets/projects/optimized/sterling-tools-office-interior-faridabad-1.webp","assets/projects/optimized/sterling-tools-office-interior-faridabad-2.webp","assets/projects/optimized/sterling-tools-office-interior-faridabad-3.webp","assets/projects/optimized/sterling-tools-office-interior-faridabad-4.webp","assets/projects/optimized/sterling-tools-office-interior-faridabad-5.webp","assets/projects/optimized/sterling-tools-office-interior-faridabad-6.webp","assets/projects/optimized/sterling-tools-office-interior-faridabad-7.webp"] , slug:"sterling-tools-office-interior-faridabad"},
  { id:4,  name:"Sterling Tools Limited", shortName:"Sterling Tools ” Prithla", location:"Prithla, Haryana", client:"Sterling Tools Limited", category:"office-interior", type:"Office Interior", scope:"Complete interior design and plant upgradation, flooring, lighting, partitions, and finishing works.", delivered:"Successfully upgraded plant with modern interiors and improved infrastructure.", image:"assets/projects/optimized/sterling-tools-office-interior-prithla.webp" , slug:"sterling-tools-office-interior-prithla"},
  { id:5,  name:"Sterling Tools Limited", shortName:"Sterling Tools ” Bangalore", location:"Bangalore, Karnataka", client:"Sterling Tools Limited", category:"office-interior", type:"Office Interior", scope:"Complete interior design and plant upgradation, flooring, lighting, partitions, and finishing works.", delivered:"Successfully upgraded plant with modern interiors and improved infrastructure.", image:"assets/projects/optimized/sterling-tools-office-interior-bangalore.webp" , slug:"sterling-tools-office-interior-bangalore"},
  { id:6,  name:"VI-JOHN Group Office", shortName:"VI-JOHN", location:"Gurugram", client:"VI-John Group", category:"office-interior", type:"Office Interior", scope:"Complete interior execution from scratch on a newly developed facility.", delivered:"A fully developed modern interior workspace delivered ready for immediate operations.", image:"assets/projects/optimized/vi-john-corporate-office-interior.webp", images:["assets/projects/optimized/vi-john-corporate-office-interior-1.webp","assets/projects/optimized/vi-john-corporate-office-interior-2.webp","assets/projects/optimized/vi-john-corporate-office-interior-3.webp","assets/projects/optimized/vi-john-corporate-office-interior-4.webp","assets/projects/optimized/vi-john-corporate-office-interior-5.webp","assets/projects/optimized/vi-john-corporate-office-interior-6.webp","assets/projects/optimized/vi-john-corporate-office-interior-7.webp","assets/projects/optimized/vi-john-corporate-office-interior-8.webp"] , slug:"vi-john-corporate-office-interior"},
  { id:52, name:"VI-JOHN Office — Modular Furniture", shortName:"VI-JOHN Modular", location:"Gurugram", client:"VI-John Group", category:"office-interior", type:"Office Interior", scope:"Supply and installation of modular workstations, ergonomic task chairs, lounge furniture, and carpet flooring.", delivered:"Premium modular office furniture fit-out delivered and installed to client specification.", image:"assets/projects/optimized/vi-john-office-modular-furniture.webp", images:["assets/projects/optimized/vi-john-office-modular-furniture-1.webp","assets/projects/optimized/vi-john-office-modular-furniture-2.webp","assets/projects/optimized/vi-john-office-modular-furniture-3.webp","assets/projects/optimized/vi-john-office-modular-furniture-4.webp","assets/projects/optimized/vi-john-office-modular-furniture-5.webp","assets/projects/optimized/vi-john-office-modular-furniture-6.webp","assets/projects/optimized/vi-john-office-modular-furniture-7.webp","assets/projects/optimized/vi-john-office-modular-furniture-8.webp"] , slug:"vi-john-office-modular-furniture"},
  { id:45, name:"Rashtriya Ayurvedic Vidya Peeth", shortName:"RAVP", location:"Punjabi Bagh, Delhi", client:"All India Ayurvedic Congress", category:"office-interior", type:"Office Interior", scope:"Complete interior design, flooring, lighting, partitions, and finishing works.", delivered:"Successfully upgraded with modern interiors and improved infrastructure.", image:"assets/projects/optimized/rashtriya-ayurvedic-vidya-peeth-office.webp" , slug:"rashtriya-ayurvedic-vidya-peeth-office"},
  { id:46, name:"National Commission of Homoeopathy", shortName:"NCH", location:"Janakpuri, Delhi", client:"National Commission of Homoeopathy", category:"office-interior", type:"Office Interior", scope:"Complete interior design, flooring, lighting, partitions, and finishing works.", delivered:"Successfully upgraded with modern interiors and improved infrastructure.", image:"assets/projects/optimized/national-commission-of-homoeopathy-office.webp", images:["assets/projects/optimized/national-commission-of-homoeopathy-office-1.webp","assets/projects/optimized/national-commission-of-homoeopathy-office-2.webp","assets/projects/optimized/national-commission-of-homoeopathy-office-3.webp","assets/projects/optimized/national-commission-of-homoeopathy-office-4.webp"] , slug:"national-commission-of-homoeopathy-office"},

  // â”€â”€ 02. COMMERCIAL INTERIOR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id:7,  name:"Honda Cars Showroom", shortName:"Honda ” Dilshad Garden", location:"Dilshad Garden, Delhi", client:"Capital Cars Pvt. Ltd.", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda Corporate Identity norms including civil, ceiling, flooring, lighting, painting, and branding works.", delivered:"A fully renovated Honda CI-compliant interior with standardized branding and premium finish.", image:"assets/projects/optimized/honda-showroom-dilshad-garden.webp", images:["assets/projects/optimized/honda-showroom-dilshad-garden-1.webp","assets/projects/optimized/honda-showroom-dilshad-garden-2.webp","assets/projects/optimized/honda-showroom-dilshad-garden-3.webp"] , slug:"honda-showroom-dilshad-garden"},
  { id:8,  name:"Honda Cars Showroom", shortName:"Honda ” Patparganj", location:"Patparganj, Delhi", client:"Capital Cars Pvt. Ltd.", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda Corporate Identity norms.", delivered:"A fully renovated Honda CI-compliant interior.", image:"assets/projects/optimized/honda-showroom-patparganj.webp", images:["assets/projects/optimized/honda-showroom-patparganj-1.webp","assets/projects/optimized/honda-showroom-patparganj-2.webp"] , slug:"honda-showroom-patparganj"},
  { id:9,  name:"Honda Cars Showroom", shortName:"Honda ” Agra", location:"Agra, UP", client:"MGR Automobiles", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda Corporate Identity norms including civil, ceiling, flooring, lighting, painting, and branding works.", delivered:"A fully renovated Honda CI-compliant interior with standardized branding and premium finish.", image:"assets/projects/optimized/honda-showroom-agra.webp", images:["assets/projects/optimized/honda-showroom-agra-1.webp","assets/projects/optimized/honda-showroom-agra-2.webp","assets/projects/optimized/honda-showroom-agra-3.webp","assets/projects/optimized/honda-showroom-agra-4.webp","assets/projects/optimized/honda-showroom-agra-5.webp","assets/projects/optimized/honda-showroom-agra-6.webp","assets/projects/optimized/honda-showroom-agra-7.webp","assets/projects/optimized/honda-showroom-agra-8.webp","assets/projects/optimized/honda-showroom-agra-9.webp","assets/projects/optimized/honda-showroom-agra-10.webp","assets/projects/optimized/honda-showroom-agra-11.webp","assets/projects/optimized/honda-showroom-agra-12.webp","assets/projects/optimized/honda-showroom-agra-13.webp","assets/projects/optimized/honda-showroom-agra-14.webp","assets/projects/optimized/honda-showroom-agra-15.webp","assets/projects/optimized/honda-showroom-agra-16.webp","assets/projects/optimized/honda-showroom-agra-17.webp"] , slug:"honda-showroom-agra"},
  { id:10, name:"Honda Cars Showroom", shortName:"Honda ” Mathura", location:"Mathura, UP", client:"MGR Automobiles", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda CI norms.", delivered:"A fully renovated Honda CI-compliant interior.", image:"assets/projects/optimized/honda-showroom-mathura.webp" , slug:"honda-showroom-mathura"},
  { id:11, name:"Honda Cars Showroom", shortName:"Honda ” Motinagar", location:"Motinagar, Delhi", client:"Ring Road Honda", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda CI norms.", delivered:"A fully renovated Honda CI-compliant interior.", image:"assets/projects/optimized/honda-showroom-motinagar.webp" , slug:"honda-showroom-motinagar"},
  { id:12, name:"Honda Cars Showroom", shortName:"Honda ” Gurgaon", location:"Gurgaon, Haryana", client:"Ring Road Honda", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda CI norms.", delivered:"A fully renovated Honda CI-compliant interior.", image:"assets/projects/optimized/honda-showroom-gurgaon.webp", images:["assets/projects/optimized/honda-showroom-gurgaon-1.webp","assets/projects/optimized/honda-showroom-gurgaon-2.webp","assets/projects/optimized/honda-showroom-gurgaon-3.webp","assets/projects/optimized/honda-showroom-gurgaon-4.webp","assets/projects/optimized/honda-showroom-gurgaon-5.webp"] , slug:"honda-showroom-gurgaon"},
  { id:13, name:"Honda Cars Showroom", shortName:"Honda ” Peeragarhi", location:"Peeragarhi, Delhi", client:"Ring Road Honda", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda CI norms.", delivered:"A fully renovated Honda CI-compliant interior.", image:"assets/projects/optimized/honda-showroom-peeragarhi.webp" , slug:"honda-showroom-peeragarhi"},
  { id:14, name:"Honda Cars Showroom", shortName:"Honda ” Wazirpur", location:"Wazirpur, Delhi", client:"Courtesy Honda", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda CI norms.", delivered:"A fully renovated Honda CI-compliant interior.", image:"assets/projects/optimized/honda-showroom-wazirpur.webp" , slug:"honda-showroom-wazirpur"},
  { id:15, name:"Honda Cars Showroom", shortName:"Honda ” Rohtak", location:"Rohtak, Haryana", client:"Joy Honda", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda CI norms.", delivered:"A fully renovated Honda CI-compliant interior.", image:"assets/projects/optimized/honda-showroom-rohtak.webp" , slug:"honda-showroom-rohtak"},
  { id:16, name:"Honda Cars Showroom", shortName:"Honda ” Hisar", location:"Hisar, Haryana", client:"Joy Honda", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda CI norms.", delivered:"A fully renovated Honda CI-compliant interior.", image:"assets/projects/optimized/honda-showroom-hisar.webp" , slug:"honda-showroom-hisar"},
  { id:17, name:"Honda Cars Showroom", shortName:"Honda ” Faridabad", location:"Faridabad, Haryana", client:"Classic Honda", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per Honda CI norms.", delivered:"A fully renovated Honda CI-compliant interior.", image:"assets/projects/optimized/honda-showroom-faridabad.webp" , slug:"honda-showroom-faridabad"},
  { id:18, name:"Ather Scooters Showroom", shortName:"Ather ” Agra", location:"Agra, UP", client:"MGR Automobiles", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation as per CI norms including layout redesign, lighting, branding, and execution.", delivered:"A fully renovated, CI-compliant Ather showroom with modern display and customer experience areas.", image:"assets/projects/optimized/ather-experience-centre-agra.webp", images:["assets/projects/optimized/ather-experience-centre-agra-1.webp","assets/projects/optimized/ather-experience-centre-agra-2.webp"] , slug:"ather-experience-centre-agra"},
  { id:19, name:"Ather Scooters Showroom", shortName:"Ather ” Mathura", location:"Mathura, UP", client:"MGR Automobiles", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation of Ather showroom as per CI norms.", delivered:"A fully renovated, CI-compliant Ather showroom.", image:"assets/projects/optimized/ather-experience-centre-mathura.webp", images:["assets/projects/optimized/ather-experience-centre-mathura-1.webp","assets/projects/optimized/ather-experience-centre-mathura-2.webp","assets/projects/optimized/ather-experience-centre-mathura-3.webp","assets/projects/optimized/ather-experience-centre-mathura-4.webp","assets/projects/optimized/ather-experience-centre-mathura-5.webp","assets/projects/optimized/ather-experience-centre-mathura-6.webp"] , slug:"ather-experience-centre-mathura"},
  { id:20, name:"Ather Scooters Showroom", shortName:"Ather ” Gurgaon", location:"Gurgaon, Haryana", client:"Sai Shreeja Group", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation of Ather showroom as per CI norms.", delivered:"A fully renovated, CI-compliant Ather showroom.", image:"assets/projects/optimized/ather-experience-centre-gurgaon.webp" , slug:"ather-experience-centre-gurgaon"},
  { id:21, name:"Ather Scooters Showroom", shortName:"Ather ” Noida", location:"Noida, UP", client:"Bagga Link", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation of Ather showroom as per CI norms.", delivered:"A fully renovated, CI-compliant Ather showroom.", image:"assets/projects/optimized/ather-experience-centre-noida.webp", images:["assets/projects/optimized/ather-experience-centre-noida-1.webp","assets/projects/optimized/ather-experience-centre-noida-2.webp"] , slug:"ather-experience-centre-noida"},
  { id:22, name:"Ather Scooters Showroom", shortName:"Ather ” Patparganj", location:"Patparganj, Delhi", client:"Bagga Link", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation of Ather showroom as per CI norms.", delivered:"A fully renovated, CI-compliant Ather showroom.", image:"assets/projects/optimized/ather-experience-centre-patparganj.webp", images:["assets/projects/optimized/ather-experience-centre-patparganj-1.webp","assets/projects/optimized/ather-experience-centre-patparganj-2.webp","assets/projects/optimized/ather-experience-centre-patparganj-3.webp","assets/projects/optimized/ather-experience-centre-patparganj-4.webp","assets/projects/optimized/ather-experience-centre-patparganj-5.webp"] , slug:"ather-experience-centre-patparganj"},
  { id:23, name:"Ather Scooters Showroom", shortName:"Ather ” Dilshad Garden", location:"Dilshad Garden, Delhi", client:"Bagga Link", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation of Ather showroom as per CI norms.", delivered:"A fully renovated, CI-compliant Ather showroom.", image:"assets/projects/optimized/ather-experience-centre-dilshad-garden.webp" , slug:"ather-experience-centre-dilshad-garden"},
  { id:24, name:"TVS Scooters Showroom", shortName:"TVS ” Agra", location:"Agra, UP", client:"Kansal Automobiles", category:"commercial-interior", type:"Commercial Interior", scope:"Interior renovation of TVS showroom as per CI norms including layout redesign, lighting, branding, and execution.", delivered:"A fully renovated, CI-compliant TVS showroom.", image:"assets/projects/optimized/tvs-showroom-agra.webp" , slug:"tvs-showroom-agra"},
  { id:43, name:"Renault Cars Showroom", shortName:"Renault ” Patparganj", location:"Patparganj, Delhi", client:"SDA Iconic Wheels Pvt. Ltd.", category:"commercial-interior", type:"Commercial Interior", scope:"Complete interior renovation, including ceilings, flooring, painting, lighting, partitions, and finishing works.", delivered:"A modernized interior space completed to the client's requirements.", image:"assets/projects/optimized/renault-showroom-patparganj.webp", images:["assets/projects/optimized/renault-showroom-patparganj-1.webp","assets/projects/optimized/renault-showroom-patparganj-2.webp","assets/projects/optimized/renault-showroom-patparganj-3.webp","assets/projects/optimized/renault-showroom-patparganj-4.webp","assets/projects/optimized/renault-showroom-patparganj-5.webp","assets/projects/optimized/renault-showroom-patparganj-6.webp","assets/projects/optimized/renault-showroom-patparganj-7.webp","assets/projects/optimized/renault-showroom-patparganj-8.webp"] , slug:"renault-showroom-patparganj"},
  { id:44, name:"Renault Cars Showroom", shortName:"Renault ” Alwar", location:"Alwar, Rajasthan", client:"SDA Iconic Wheels Pvt. Ltd.", category:"commercial-interior", type:"Commercial Interior", scope:"Complete interior renovation, including ceilings, flooring, painting, lighting, partitions, and finishing works.", delivered:"A modernized interior space completed to the client's requirements.", image:"assets/projects/optimized/renault-showroom-alwar.webp" , slug:"renault-showroom-alwar"},
  { id:47, name:"Indoasian Switchgears", shortName:"Indoasian Switchgears", location:"Haridwar, Uttarakhand", client:"Indoasian Switchgears", category:"commercial-interior", type:"Commercial Interior", scope:"Complete interior fit-out including civil, electrical, partitions, flooring, and finishing works.", delivered:"A fully completed commercial interior delivered to client specifications.", image:"assets/projects/optimized/indoasian-switchgears-showroom.webp" , slug:"indoasian-switchgears-showroom"},
  { id:50, name:"Vaid Triguna Ji", shortName:"Vaid Triguna Ji", location:"Delhi", client:"Vaid Triguna Ji", category:"commercial-interior", type:"Commercial Interior", scope:"Complete interior fit-out including civil, partitions, flooring, and finishing works.", delivered:"A fully completed commercial interior delivered to client specifications.", image:"assets/projects/optimized/vaid-triguna-ji-commercial-interior.webp", images:["assets/projects/optimized/vaid-triguna-ji-commercial-interior-1.webp","assets/projects/optimized/vaid-triguna-ji-commercial-interior-2.webp","assets/projects/optimized/vaid-triguna-ji-commercial-interior-3.webp","assets/projects/optimized/vaid-triguna-ji-commercial-interior-4.webp"] , slug:"vaid-triguna-ji-commercial-interior"},
  { id:49, name:"Shriram Veritech Solutions", shortName:"Shriram Veritech", location:"Greater Noida", client:"Shriram Veritech Solutions Pvt. Ltd.", category:"commercial-interior", type:"Commercial Interior", scope:"Complete interior fit-out including civil, electrical, partitions, flooring, and finishing works.", delivered:"A fully completed commercial interior delivered to client specifications.", image:"assets/projects/optimized/shriram-veritech-solutions-commercial-interior.webp", images:["assets/projects/optimized/shriram-veritech-solutions-commercial-interior-1.webp","assets/projects/optimized/shriram-veritech-solutions-commercial-interior-2.webp","assets/projects/optimized/shriram-veritech-solutions-commercial-interior-3.webp","assets/projects/optimized/shriram-veritech-solutions-commercial-interior-4.webp","assets/projects/optimized/shriram-veritech-solutions-commercial-interior-5.webp"] , slug:"shriram-veritech-solutions-commercial-interior"},

  // â”€â”€ 03. COMMERCIAL BUILDING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id:25, name:"All India Ayurvedic Congress Building", shortName:"AIAC", location:"Punjabi Bagh, Delhi", client:"All India Ayurvedic Congress", category:"commercial-building", type:"Commercial Building", scope:"End-to-end construction including structure, masonry, plastering, flooring, painting, MEP works, and finishing.", delivered:"A fully completed building with structural, interior, and service works ready for occupancy.", image:"assets/projects/optimized/all-india-ayurvedic-congress-building.webp", images:["assets/projects/optimized/all-india-ayurvedic-congress-building-1.webp","assets/projects/optimized/all-india-ayurvedic-congress-building-2.webp","assets/projects/optimized/all-india-ayurvedic-congress-building-3.webp","assets/projects/optimized/all-india-ayurvedic-congress-building-4.webp"] , slug:"all-india-ayurvedic-congress-building"},
  { id:26, name:"Kia Cars Showroom", shortName:"KIA ” Rajouri Garden", location:"Rajouri Garden, Delhi", client:"Ritu Kia", category:"commercial-building", type:"Commercial Building", scope:"Complete building construction including structure, architecture, and finishing works.", delivered:"A fully developed building delivered with quality construction and finishing.", image:"assets/projects/optimized/kia-showroom-rajouri-garden.webp", images:["assets/projects/optimized/kia-showroom-rajouri-garden-1.webp","assets/projects/optimized/kia-showroom-rajouri-garden-2.webp","assets/projects/optimized/kia-showroom-rajouri-garden-3.webp","assets/projects/optimized/kia-showroom-rajouri-garden-4.webp"] , slug:"kia-showroom-rajouri-garden"},

  // â”€â”€ 04. INDUSTRIAL BUILDING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id:28, name:"Sacheerome Pvt. Ltd.", shortName:"Sacheerome", location:"Okhla, Delhi", client:"Sacheerome Pvt. Ltd.", category:"industrial-building", type:"Industrial Building", scope:"End-to-end construction including structural works, architectural finishes, interior fit-out.", delivered:"Completed and handed over a fully operational industrial facility.", image:"assets/projects/optimized/sacheerome-manufacturing-facility.webp", images:["assets/projects/optimized/sacheerome-manufacturing-facility-1.webp","assets/projects/optimized/sacheerome-manufacturing-facility-2.webp","assets/projects/optimized/sacheerome-manufacturing-facility-3.webp","assets/projects/optimized/sacheerome-manufacturing-facility-4.webp","assets/projects/optimized/sacheerome-manufacturing-facility-5.webp","assets/projects/optimized/sacheerome-manufacturing-facility-6.webp","assets/projects/optimized/sacheerome-manufacturing-facility-7.webp","assets/projects/optimized/sacheerome-manufacturing-facility-8.webp","assets/projects/optimized/sacheerome-manufacturing-facility-9.webp","assets/projects/optimized/sacheerome-manufacturing-facility-10.webp","assets/projects/optimized/sacheerome-manufacturing-facility-11.webp","assets/projects/optimized/sacheerome-manufacturing-facility-12.webp","assets/projects/optimized/sacheerome-manufacturing-facility-13.webp","assets/projects/optimized/sacheerome-manufacturing-facility-14.webp"] , slug:"sacheerome-manufacturing-facility"},
  { id:29, name:"Multani Pharmaceuticals Pvt. Ltd.", shortName:"Multani Pharma ” Roorkee", location:"Roorkee, Uttarakhand", client:"Multani Pharmaceuticals Ltd.", category:"industrial-building", type:"Industrial Building", scope:"End-to-end construction including structural works, architectural finishes, interior fit-out.", delivered:"Completed and handed over a fully operational industrial facility ready for production.", image:"assets/projects/optimized/multani-pharma-industrial-building-roorkee.webp", images:["assets/projects/optimized/multani-pharma-industrial-building-roorkee-1.webp","assets/projects/optimized/multani-pharma-industrial-building-roorkee-2.webp","assets/projects/optimized/multani-pharma-industrial-building-roorkee-3.webp","assets/projects/optimized/multani-pharma-industrial-building-roorkee-4.webp"] , slug:"multani-pharma-industrial-building-roorkee"},
  { id:30, name:"Multani Pharmaceuticals Pvt. Ltd.", shortName:"Multani Pharma ” Okhla", location:"Okhla, Delhi", client:"Multani Pharmaceuticals Ltd.", category:"industrial-building", type:"Industrial Building", scope:"End-to-end construction including structural works, architectural finishes, interior fit-out.", delivered:"Completed and handed over a fully operational industrial facility.", image:"assets/projects/optimized/multani-pharma-industrial-building-okhla.webp" , slug:"multani-pharma-industrial-building-okhla"},
  { id:32, name:"Kent RO Systems Ltd.", shortName:"Kent RO", location:"Noida, UP", client:"Kent RO Systems Ltd.", category:"industrial-building", type:"Industrial Building", scope:"Complete electrical installation, including wiring, power distribution, lighting, switchboards, and testing & commissioning.", delivered:"A complete electrical infrastructure meeting project specifications and safety standards.", image:"assets/projects/optimized/kent-ro-industrial-facility.webp" , slug:"kent-ro-industrial-facility"},
  { id:33, name:"Jivo Wellness", shortName:"Jivo Wellness", location:"Gannaur, Haryana", client:"Jivo Wellness Pvt. Ltd.", category:"industrial-building", type:"Industrial Building", scope:"Complete electrical installation, including wiring, power distribution, lighting, switchboards, and testing & commissioning.", delivered:"A complete electrical infrastructure meeting project specifications and safety standards.", image:"assets/projects/optimized/jivo-wellness-industrial-building.webp" , slug:"jivo-wellness-industrial-building"},
  { id:34, name:"Organic Tattva", shortName:"Organic Tattva", location:"Greater Noida", client:"Mehrotra Consumer Products Pvt. Ltd.", category:"industrial-building", type:"Industrial Building", scope:"Complete electrical installation including wiring, power distribution, lighting, switchboards, and testing & commissioning.", delivered:"A complete electrical infrastructure meeting project specifications and safety standards.", image:"assets/projects/optimized/organic-tattva-industrial-unit.webp" , slug:"organic-tattva-industrial-unit"},
  { id:35, name:"Allied Blenders", shortName:"Allied Blenders", location:"Saha, Haryana", client:"Allied Blenders & Distillers Ltd.", category:"industrial-building", type:"Industrial Building", scope:"Complete electrical installation including wiring, power distribution, lighting, switchboards, and testing & commissioning.", delivered:"A complete electrical infrastructure meeting project specifications and safety standards.", image:"assets/projects/optimized/allied-blenders-industrial-building.webp" , slug:"allied-blenders-industrial-building"},
  { id:36, name:"Albatross ICD", shortName:"Albatross ICD", location:"Dadri, UP", client:"Albatross Inland Ports Pvt. Ltd.", category:"industrial-building", type:"Industrial Building", scope:"Complete electrical installation including wiring, power distribution, lighting, switchboards, and testing & commissioning.", delivered:"A complete electrical infrastructure meeting project specifications and safety standards.", image:"assets/projects/optimized/albatross-icd-industrial-facility.webp" , slug:"albatross-icd-industrial-facility"},
  { id:42, name:"Bonn Bread", shortName:"Bonn Bread", location:"Sonipat, Haryana", client:"Bonn Group of Industries", category:"industrial-building", type:"Industrial Building", scope:"Complete building construction including foundation, structural works, masonry, roofing, electrical, plumbing, interior finishing, and exterior works.", delivered:"Delivered a fully completed, turnkey building ready for occupancy.", image:"assets/projects/optimized/bonn-bread-production-facility.webp" , slug:"bonn-bread-production-facility"},
  { id:48, name:"B2B Logistics", shortName:"B2B Logistics", location:"Sonipat, Haryana", client:"B2B Logistics", category:"industrial-building", type:"Industrial Building", scope:"End-to-end construction of logistics and warehousing facility including structural works, flooring, electrical, and finishing.", delivered:"A fully completed logistics facility delivered ready for operations.", image:"assets/projects/optimized/b2b-logistics-industrial-building.webp", images:["assets/projects/optimized/b2b-logistics-industrial-building-1.webp","assets/projects/optimized/b2b-logistics-industrial-building-2.webp","assets/projects/optimized/b2b-logistics-industrial-building-3.webp","assets/projects/optimized/b2b-logistics-industrial-building-4.webp"] , slug:"b2b-logistics-industrial-building"},

  // â”€â”€ 05. INSTITUTIONAL BUILDING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id:37, name:"Andra Education Society", shortName:"AES ” Pushp Vihar", location:"Pushp Vihar, Delhi", client:"Andra Education Society", category:"institutional-building", type:"Institutional Building", scope:"Complete building construction including structure, architecture, and finishing works.", delivered:"A fully developed building delivered with quality construction and finishing.", image:"assets/projects/optimized/andhra-education-society-pushp-vihar.webp", images:["assets/projects/optimized/andhra-education-society-pushp-vihar-1.webp","assets/projects/optimized/andhra-education-society-pushp-vihar-2.webp"] , slug:"andhra-education-society-pushp-vihar"},
  { id:38, name:"Andra Education Society", shortName:"AES ” R.K Puram", location:"R.K Puram, Delhi", client:"Andra Education Society", category:"institutional-building", type:"Institutional Building", scope:"Complete building construction including structure, architecture, and finishing works.", delivered:"A fully developed building delivered with quality construction and finishing.", image:"assets/projects/optimized/andhra-education-society-rk-puram.webp" , slug:"andhra-education-society-rk-puram"},
  { id:39, name:"Andra Education Society", shortName:"AES ” ITO", location:"ITO, Delhi", client:"Andra Education Society", category:"institutional-building", type:"Institutional Building", scope:"Complete building construction including structure, architecture, and finishing works.", delivered:"A fully developed building delivered with quality construction and finishing.", image:"assets/projects/optimized/andhra-education-society-ito.webp", images:["assets/projects/optimized/andhra-education-society-ito-1.webp","assets/projects/optimized/andhra-education-society-ito-2.webp"] , slug:"andhra-education-society-ito"},
  { id:40, name:"Andra Education Society", shortName:"AES ” Janakpuri", location:"Janakpuri, Delhi", client:"Andra Education Society", category:"institutional-building", type:"Institutional Building", scope:"Complete building construction including structure, architecture, and finishing works.", delivered:"A fully developed building delivered with quality construction and finishing.", image:"assets/projects/optimized/andhra-education-society-janakpuri.webp", images:["assets/projects/optimized/andhra-education-society-janakpuri-1.webp","assets/projects/optimized/andhra-education-society-janakpuri-2.webp"] , slug:"andhra-education-society-janakpuri"},
  { id:41, name:"Andra Education Society", shortName:"AES ” Karol Bagh", location:"Karol Bagh, Delhi", client:"Andra Education Society", category:"institutional-building", type:"Institutional Building", scope:"Complete building construction including structure, architecture, and finishing works.", delivered:"A fully developed building delivered with quality construction and finishing.", image:"assets/projects/optimized/andhra-education-society-karol-bagh.webp", images:["assets/projects/optimized/andhra-education-society-karol-bagh-1.webp","assets/projects/optimized/andhra-education-society-karol-bagh-2.webp"] , slug:"andhra-education-society-karol-bagh"},

  // â”€â”€ 06. ARCHITECTURAL DESIGN â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  { id:51, name:"GovindGarh Factory", shortName:"GovindGarh Factory", location:"GovindGarh", client:"GovindGarh Factory", category:"architectural-design", type:"Architectural Design", scope:"Complete industrial facility construction including structural works and finishing.", delivered:"Fully completed and handed over industrial facility.", image:"assets/projects/optimized/govindgarh-factory-architectural-design.webp" , slug:"govindgarh-factory-architectural-design"},];

const CATEGORIES = [
  { key:"office-interior",        num:"01", label:"Office\nInterior",        desc:"Turnkey interior fit-outs for offices, government bodies, and corporate spaces.", color:"#0D3B8C" },
  { key:"commercial-interior",    num:"02", label:"Commercial\nInterior",    desc:"Showroom and retail interior renovation to brand CI standards.",               color:"#0D3B8C" },
  { key:"commercial-building",    num:"03", label:"Commercial\nBuilding",    desc:"End-to-end commercial building construction from foundation to handover.",     color:"#0D3B8C" },
  { key:"industrial-building",    num:"04", label:"Industrial\nBuilding",    desc:"Industrial facility construction, MEP works and turnkey delivery.",           color:"#0D3B8C" },
  { key:"institutional-building", num:"05", label:"Institutional\nBuilding", desc:"Educational and institutional building construction delivered with precision.", color:"#0D3B8C" },
  { key:"architectural-design",   num:"06", label:"Architectural\nDesign",   desc:"Architecture and design services including concept, drawings and 3D visualizations.", color:"#0D3B8C" },
  { key:"modular-furniture",      num:"07", label:"Modular\nFurniture",      desc:"Premium modular workstations, lounge furniture, chairs, carpet, and AV-ready office fit-outs.", color:"#0D3B8C" },
];

const FEATURED_IDS = [1, 2, 26, 29, 9, 7];
const PER_PAGE = 4;

/* â”€â”€ State â”€â”€ */
const catState = {};
let featIdx = 0;

/* ── Card builder ── */
function buildImgCard(p) {
  let imgHTML = '';
  if (p.images && p.images.length > 1) {
    imgHTML = [
      '<div class="pv2-slideshow">',
        '<div class="pv2-slideshow-track" style="--n: ' + p.images.length + ';">',
          p.images.map(function(imgSrc) {
            return '<img src="' + imgSrc + '" alt="' + p.shortName + '" loading="lazy" width="400" height="300" onerror="this.parentElement.classList.add(\'no-img\')">';
          }).join(''),
        '</div>',
      '</div>'
    ].join('');
  } else if (p.image) {
    imgHTML = '<img src="' + p.image + '" alt="' + p.shortName + '" loading="lazy" width="400" height="300" onerror="this.parentElement.classList.add(\'no-img\')">';
  } else {
    imgHTML = '<div class="pv2-img-card-placeholder"></div>';
  }
  return [
    '<article class="pv2-img-card" data-id="' + p.id + '" role="button" tabindex="0" aria-label="View ' + p.shortName + ' project">',
      imgHTML,
      '<div class="pv2-img-card-logo"><div class="pv2-logo-ph"></div></div>',
      '<div class="pv2-img-card-overlay">',
        '<h4>' + p.shortName + '</h4>',
        '<p>&#128205; ' + p.location + '</p>',
      '</div>',
      '<div class="pv2-img-card-arrow">&#8594;</div>',
    '</article>'
  ].join('');
}

/* ── Category section builder ── */
function buildCatSection(cat, idx) {
  const list = PROJECTS.filter(function(p){ return p.category === cat.key; });
  const total = list.length;
  catState[cat.key] = { list: list, page: 0, total: total };
  const nameParts = cat.label.split('\n');
  return [
    '<section class="pv2-cat-section" id="cat-' + cat.key + '">',
      '<div class="container pv2-cat-inner">',
        '<div class="pv2-cat-sidebar">',
          '<p class="pv2-cat-num">' + cat.num + '</p>',
          '<h2 class="pv2-cat-name">' + nameParts.join('<br>') + '</h2>',
          '<p class="pv2-cat-desc">' + cat.desc + '</p>',
          '<a href="#" class="pv2-cat-viewall" data-cat="' + cat.key + '">VIEW ALL (' + total + ') &nbsp;&rarr;</a>',
        '</div>',
        '<div class="pv2-cat-cards-area">',
          '<div class="pv2-cat-nav">',
            '<button class="pv2-nav-btn pv2-prev-btn" data-cat="' + cat.key + '" aria-label="Previous">&#8592;</button>',
            '<button class="pv2-nav-btn pv2-next-btn" data-cat="' + cat.key + '" aria-label="Next">&#8594;</button>',
          '</div>',
          '<div class="pv2-cat-grid" id="pv2-grid-' + cat.key + '"></div>',
        '</div>',
      '</div>',
    '</section>'
  ].join('');
}

/* ── Render page of cards ── */
function renderCatPage(key) {
  const s = catState[key];
  const grid = document.getElementById('pv2-grid-' + key);
  if (!grid) return;

  // Clean up any existing slideshow intervals in this grid to prevent memory leaks
  grid.querySelectorAll('.pv2-slideshow-track').forEach(function(track) {
    if (track._slideshowInterval) {
      clearInterval(track._slideshowInterval);
      delete track._slideshowInterval;
    }
  });

  const start = s.page * PER_PAGE;
  const slice = s.list.slice(start, start + PER_PAGE);
  grid.innerHTML = slice.map(buildImgCard).join('');
  grid.querySelectorAll('.pv2-img-card').forEach(function(card) {
    card.addEventListener('click', function() { openModal(parseInt(card.dataset.id)); });
    card.addEventListener('keydown', function(e) { if (e.key === 'Enter') openModal(parseInt(card.dataset.id)); });
  });

  // Re-run slideshow initialization
  initCardSlideshows();
}

/* ── Category nav ── */
function setupCatNav() {
  document.querySelectorAll('.pv2-prev-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const k = btn.dataset.cat;
      if (catState[k].page > 0) { catState[k].page--; renderCatPage(k); }
    });
  });
  document.querySelectorAll('.pv2-next-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const k = btn.dataset.cat;
      const s = catState[k];
      const maxPage = Math.ceil(s.total / PER_PAGE) - 1;
      if (s.page < maxPage) { s.page++; renderCatPage(k); }
    });
  });
}

/* â”€â”€ Featured carousel â”€â”€ */
function renderFeatured() {
  const wrap = document.getElementById('pv2-featured-wrap');
  if (!wrap) return;
  const p = PROJECTS.find(function(x){ return x.id === FEATURED_IDS[featIdx]; });
  if (!p) return;
  const total = FEATURED_IDS.length;
  const counter = (featIdx + 1) + ' / ' + total;

  const imgHTML = p.image
    ? '<img src="' + p.image + '" alt="' + p.name + '" loading="eager" width="800" height="600" fetchpriority="high">'
    : '<div class="pv2-feat-right-placeholder"></div>';

  const locIcon = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
  const bldIcon = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="15" rx="1"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>';
  const govIcon = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 22V8l9-5 9 5v14"/></svg>';

  wrap.innerHTML = [
    '<div class="pv2-feat-card">',
      '<div class="pv2-feat-left">',
        '<div class="pv2-feat-top">',
          '<p class="pv2-feat-label">FEATURED PROJECT</p>',
          '<h2 class="pv2-feat-name">' + p.shortName + '</h2>',
          '<p class="pv2-feat-fullname">' + p.name + '</p>',
          '<div class="pv2-feat-chips">',
            '<span class="pv2-feat-chip">' + govIcon + ' ' + p.type + '</span>',
            '<span class="pv2-feat-chip">' + locIcon + ' ' + p.location + '</span>',
            '<span class="pv2-feat-chip">' + bldIcon + ' ' + p.client + '</span>',
          '</div>',
          '<a href="#" class="pv2-feat-cta" data-feat-id="' + p.id + '">VIEW CASE STUDY &nbsp;&rarr;</a>',
        '</div>',
        '<div class="pv2-feat-bottom">',
          '<span class="pv2-feat-counter">' + counter + '</span>',
          '<div class="pv2-feat-nav">',
            '<button class="pv2-feat-nav-btn" id="pv2-feat-prev">&#8592;</button>',
            '<button class="pv2-feat-nav-btn" id="pv2-feat-next">&#8594;</button>',
          '</div>',
        '</div>',
      '</div>',
      '<div class="pv2-feat-right">' + imgHTML + '</div>',
    '</div>'
  ].join('');

  document.getElementById('pv2-feat-prev').addEventListener('click', function() {
    featIdx = (featIdx - 1 + total) % total;
    renderFeatured();
  });
  document.getElementById('pv2-feat-next').addEventListener('click', function() {
    featIdx = (featIdx + 1) % total;
    renderFeatured();
  });
  const ctaBtn = wrap.querySelector('.pv2-feat-cta');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openModal(parseInt(ctaBtn.dataset.featId));
    });
  }
}

/* â”€â”€ Modal â”€â”€ */
function openModal(id) {
  const p = PROJECTS.find(function(x){ return x.id === id; });
  if (!p) return;
  const modal = document.getElementById('project-modal');
  const body  = document.getElementById('pv2-modal-body');

  let imgHTML = '';
  if (p.images && p.images.length > 1) {
    imgHTML = [
      '<div class="pv2-modal-img-slider">',
        '<div class="pv2-modal-img-track" style="--n: ' + p.images.length + '; transform: translateX(0%);">',
          p.images.map(function(imgSrc) {
            return '<div class="pv2-modal-slide"><img src="' + imgSrc + '" alt="' + p.name + '" width="800" height="500"></div>';
          }).join(''),
        '</div>',
        '<button class="pv2-modal-slider-btn pv2-modal-slider-prev" aria-label="Previous image">&#8592;</button>',
        '<button class="pv2-modal-slider-btn pv2-modal-slider-next" aria-label="Next image">&#8594;</button>',
        '<div class="pv2-modal-slider-dots">',
          p.images.map(function(_, idx) {
            return '<span class="pv2-modal-dot' + (idx === 0 ? ' active' : '') + '" data-idx="' + idx + '"></span>';
          }).join(''),
        '</div>',
      '</div>'
    ].join('');
  } else if (p.image) {
    imgHTML = '<div class="pv2-modal-img"><img src="' + p.image + '" alt="' + p.name + '" width="800" height="500"></div>';
  } else {
    imgHTML = '<div class="pv2-modal-img"><div class="pv2-modal-img-ph"></div></div>';
  }

  body.innerHTML = [
    imgHTML,
    '<div class="pv2-modal-info">',
      '<span class="pv2-modal-type">' + p.type + '</span>',
      '<h2>' + p.name + '</h2>',
      '<div class="pv2-modal-chips">',
        '<span class="pv2-modal-chip">&#128205; ' + p.location + '</span>',
        '<span class="pv2-modal-chip">&#128100; ' + p.client + '</span>',
      '</div>',
      '<div class="pv2-modal-divider"></div>',
      '<div class="pv2-modal-field"><h4>Scope of Work</h4><p>' + p.scope + '</p></div>',
      '<div class="pv2-modal-field"><h4>What Was Delivered</h4><p>' + p.delivered + '</p></div>',
    '</div>'
  ].join('');

  // Setup modal slider navigation if there is a slider track
  const track = body.querySelector('.pv2-modal-img-track');
  if (track) {
    const prevBtn = body.querySelector('.pv2-modal-slider-prev');
    const nextBtn = body.querySelector('.pv2-modal-slider-next');
    const dots = body.querySelectorAll('.pv2-modal-dot');
    const n = p.images.length;
    let idx = 0;

    function updateSlider(newIdx) {
      idx = (newIdx + n) % n;
      track.style.transform = 'translateX(' + (-100 / n * idx) + '%)';
      dots.forEach(function(dot, dIdx) {
        if (dIdx === idx) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function() {
        updateSlider(idx - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function() {
        updateSlider(idx + 1);
      });
    }

    dots.forEach(function(dot) {
      dot.addEventListener('click', function() {
        const dotIdx = parseInt(dot.dataset.idx);
        updateSlider(dotIdx);
      });
    });
  }

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

function setupModal() {
  document.getElementById('pv2-modal-close').addEventListener('click', closeModal);
  document.getElementById('pv2-modal-bd').addEventListener('click', closeModal);
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeModal(); });
}

/* â”€â”€ Smooth explore scroll â”€â”€ */
function setupExploreBtn() {
  const btn = document.getElementById('pv2-explore-btn');
  if (!btn) return;
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const filterSec = document.querySelector('.pv2-filter-section');
    if (filterSec) {
      filterSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const root = document.getElementById('projects-root');
      if (root) root.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* â”€â”€ Switching views â”€â”€ */
function setFilter(filter) {
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const featSec = document.querySelector('.pv2-featured-section');
  const projRoot = document.getElementById('projects-root');
  const showcaseRoot = document.getElementById('showcase-root');

  if (filter === 'all') {
    if (featSec) featSec.style.display = '';
    if (projRoot) projRoot.style.display = '';
    if (showcaseRoot) {
      showcaseRoot.style.display = 'none';
      showcaseRoot.innerHTML = '';
    }
    initCardSlideshows();
  } else {
    if (featSec) featSec.style.display = 'none';
    if (projRoot) projRoot.style.display = 'none';
    if (showcaseRoot) {
      showcaseRoot.style.display = 'block';
      renderCategoryShowcase(filter);
    }
  }
}

/* â”€â”€ Render vertical showcase â”€â”€ */
function renderCategoryShowcase(catKey) {
  const showcaseRoot = document.getElementById('showcase-root');
  if (!showcaseRoot) return;

  const list = PROJECTS.filter(function(p) { return p.category === catKey; });
  
  if (list.length === 0) {
    showcaseRoot.innerHTML = '<p style="text-align:center; padding: 40px; color: #4A5A70;">No projects found in this category.</p>';
    return;
  }

  const rowsHTML = list.map(function(p, idx) {
    const isReverse = idx % 2 === 1;
    const rowClass = isReverse ? 'category-showcase-row reverse' : 'category-showcase-row';

    const imgColHTML = p.image
      ? '<div class="showcase-image-col"><img src="' + p.image + '" alt="' + p.name + '" loading="lazy"></div>'
      : [
          '<div class="showcase-image-col">',
            '<div class="showcase-image-placeholder">',
              '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">',
                '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
              '</svg>',
              '<span>TECHNICAL BLUEPRINT DRAWING</span>',
            '</div>',
          '</div>'
        ].join('');

    return [
      '<div class="' + rowClass + '">',
        imgColHTML,
        '<div class="showcase-content-col">',
          '<span class="showcase-tag">' + p.type + '</span>',
          '<h2 class="showcase-title">' + p.name + '</h2>',
          '<p class="showcase-desc">' + p.scope + '</p>',
          '<ul class="showcase-meta-list">',
            '<li class="showcase-meta-item">',
              '<span class="showcase-meta-label">Client</span>',
              '<span class="showcase-meta-val">' + p.client + '</span>',
            '</li>',
            '<li class="showcase-meta-item">',
              '<span class="showcase-meta-label">Location</span>',
              '<span class="showcase-meta-val">' + p.location + '</span>',
            '</li>',
            '<li class="showcase-meta-item">',
              '<span class="showcase-meta-label">Delivered</span>',
              '<span class="showcase-meta-val">' + p.delivered + '</span>',
            '</li>',
          '</ul>',
          '<a href="#" class="showcase-link" data-id="' + p.id + '">VIEW CASE STUDY &nbsp;&rarr;</a>',
        '</div>',
      '</div>'
    ].join('');
  }).join('');

  showcaseRoot.innerHTML = rowsHTML;

  // Add click handlers
  showcaseRoot.querySelectorAll('.showcase-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      openModal(parseInt(link.dataset.id));
    });
  });
}

/* â”€â”€ Setup filter buttons â”€â”€ */
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const filter = btn.dataset.filter;
      setFilter(filter);
      const url = new URL(window.location);
      if (filter === 'all') {
        url.searchParams.delete('category');
      } else {
        url.searchParams.set('category', filter);
      }
      window.history.pushState({}, '', url);
    });
  });
}

/* â”€â”€ Setup slider View All links â”€â”€ */
function setupViewAllLinks() {
  document.querySelectorAll('.pv2-cat-viewall').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const cat = link.dataset.cat;
      setFilter(cat);
      
      const url = new URL(window.location);
      url.searchParams.set('category', cat);
      window.history.pushState({}, '', url);

      const filterSec = document.querySelector('.pv2-filter-section');
      if (filterSec) {
        filterSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* â”€â”€ Parse query params â”€â”€ */
function handleQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('category');
  const projId = params.get('project');

  if (cat) {
    const validCat = CATEGORIES.some(function(c) { return c.key === cat.toLowerCase(); });
    if (validCat) {
      setFilter(cat.toLowerCase());
      const filterSec = document.querySelector('.pv2-filter-section');
      if (filterSec) {
        setTimeout(function() {
          filterSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    }
  }

  if (projId) {
    const id = parseInt(projId);
    if (!isNaN(id)) {
      setTimeout(function() {
        openModal(id);
      }, 500);
    }
  }
}

/* ── Card Slideshow Manager ── */
function initCardSlideshows() {
  const tracks = document.querySelectorAll('.pv2-slideshow-track');
  tracks.forEach(function(track) {
    // If there is already an active interval on this track, clear it first
    if (track._slideshowInterval) {
      clearInterval(track._slideshowInterval);
      delete track._slideshowInterval;
    }

    const n = parseInt(track.style.getPropertyValue('--n') || '1');
    if (n <= 1) return;

    let activeIdx = 0;
    
    // Slide every 5 seconds (5000ms)
    track._slideshowInterval = setInterval(function() {
      // Pause if user is hovering over the card
      const card = track.closest('.pv2-img-card');
      if (card && card.matches(':hover')) {
        return;
      }

      activeIdx = (activeIdx + 1) % n;
      const shift = -(100 / n) * activeIdx;
      track.style.transform = 'translateX(' + shift + '%)';
    }, 5000);
  });
}

/* ── INIT ── */
(function() {
  renderFeatured();

  const root = document.getElementById('projects-root');
  if (root) {
    root.innerHTML = CATEGORIES.map(buildCatSection).join('');
    CATEGORIES.forEach(function(cat) { renderCatPage(cat.key); });
    setupCatNav();
  }

  setupFilters();
  setupViewAllLinks();
  setupModal();
  setupExploreBtn();
  handleQueryParams();
})();
