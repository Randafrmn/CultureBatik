const daerahData = [
  {
    _id: { $oid: "666004a5f259298350a4889b" },
    nama_daerah: "Cirebon",
    alamat: "Jl. Pekiringan No.60, Kota Cirebon, Jawa Barat",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Cirebon dikenal dengan batik yang memiliki pengaruh budaya Tionghoa, salah satu motif terkenal adalah Mega Mendung.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Mega Mendung",
        sejarah: "Motif Mega Mendung berasal dari Cirebon, dipengaruhi oleh budaya Tionghoa yang datang ke Indonesia pada abad ke-16. Motif ini sering ditemukan di karya seni batik Cirebon.",
        makna_batik: "Mega Mendung melambangkan kesabaran, ketenangan, dan keteguhan hati. Bentuk awan yang bergulung-gulung merepresentasikan kondisi hati yang tenang meskipun menghadapi situasi yang sulit."
      }
    ]
  },
  {
    _id: { $oid: "666004a5f259298350a4889d" },
    nama_daerah: "Pekalongan",
    alamat: "Jl. Hayam Wuruk No.200, Kota Pekalongan, Jawa Tengah",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Pekalongan dikenal sebagai kota batik, terkenal dengan motif-motif batik modern yang berwarna cerah seperti Pastel.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Pastel",
        sejarah: "Motif Pastel adalah batik modern yang terinspirasi dari warna-warna lembut pastel. Dikembangkan oleh pengrajin di Pekalongan untuk pasar anak muda.",
        makna_batik: "Motif Pastel melambangkan keceriaan dan kreativitas. Warna-warna lembutnya merefleksikan semangat muda dan inovasi."
      }
    ]
  },
  {
    _id: { $oid: "666004a5f259298350a4889a" },
    nama_daerah: "Yogyakarta",
    alamat: "Jl. Malioboro No.50, Kota Yogyakarta, Daerah Istimewa Yogyakarta",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Yogyakarta adalah salah satu daerah penghasil batik terbesar di Indonesia, terkenal dengan motif batik klasik seperti Parang dan Kawung.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Parang",
        sejarah: "Batik Parang adalah salah satu motif batik tertua di Indonesia, berasal dari keraton Yogyakarta dan Solo. Motif ini diciptakan oleh Sultan Agung Hanyakrakusuma pada abad ke-16.",
        makna_batik: "Motif Parang melambangkan kekuatan, keberanian, dan keteguhan hati. Pola garis-garis menyerupai ombak laut menggambarkan semangat yang tak pernah padam."
      },
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Kawung",
        sejarah: "Motif Kawung telah ada sejak abad ke-9 dan sering digunakan oleh keluarga kerajaan. Motif ini dikenal berasal dari wilayah Jawa Tengah dan Yogyakarta.",
        makna_batik: "Motif Kawung melambangkan keinginan untuk mencapai kesempurnaan dan keseimbangan. Bentuk bulatannya menyerupai buah kawung atau kolang-kaling yang mengandung filosofi kehidupan yang penuh dengan kebijaksanaan."
      },
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Sido Asih",
        sejarah: "Motif Sido Asih berasal dari Solo dan Yogyakarta, sering digunakan dalam upacara pernikahan untuk mendoakan pengantin dengan harapan akan hidup harmonis dan penuh kasih.",
        makna_batik: "Sido Asih melambangkan cinta kasih yang abadi dan kehidupan yang harmonis. Polanya mengandung makna harapan agar pemakainya selalu hidup dalam kasih sayang dan kedamaian."
      }
    ]
  },
  {
    _id: { $oid: "666004a5f259298350a4889e" },
    nama_daerah: "Palembang",
    alamat: "Jl. Jenderal Sudirman No.1, Kota Palembang, Sumatera Selatan",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Palembang memiliki batik yang kaya dengan warna-warna cerah dan pola yang rumit, mencerminkan kebudayaan Melayu dan pengaruh Tionghoa.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Palembang",
        sejarah: "Batik Palembang memiliki motif yang kaya dengan warna-warna cerah dan pola yang rumit, mencerminkan kebudayaan Melayu dan pengaruh Tionghoa.",
        makna_batik: "Motif Palembang melambangkan kemakmuran dan kebahagiaan. Warna-warna cerah dan pola yang rumit mencerminkan keragaman dan kekayaan budaya."
      }
    ]
  },
  {
    _id: { $oid: "666004a5f259298350a4889c" },
    nama_daerah: "Solo",
    alamat: "Jl. Slamet Riyadi No.100, Kota Surakarta, Jawa Tengah",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Solo merupakan salah satu pusat budaya batik di Indonesia, dengan motif-motif khas seperti Truntum dan Sidomukti.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Truntum",
        sejarah: "Motif Truntum diciptakan oleh Kanjeng Ratu Kencana, permaisuri Sunan Paku Buwana III dari Solo, pada abad ke-18 sebagai simbol cinta dan kesetiaan dalam pernikahan.",
        makna_batik: "Truntum melambangkan cinta yang tumbuh kembali dan kesetiaan. Pola bintang-bintang kecil yang tersebar melambangkan cinta yang selalu menerangi dan tak pernah padam."
      },
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Sidomukti",
        sejarah: "Batik Sidomukti adalah motif batik yang berasal dari Solo dan Yogyakarta. Motif ini sering digunakan dalam upacara pernikahan Jawa untuk mendoakan kebahagiaan dan kemakmuran bagi pengantin.",
        makna_batik: "Sidomukti melambangkan kemakmuran, kebahagiaan, dan kehidupan yang mulia. Pola geometrisnya merepresentasikan harapan akan stabilitas dan keberuntungan."
      }
    ]
  },
  {
    _id: { $oid: "666004a5f259298350a4889f" },
    nama_daerah: "Yogyakarta",
    alamat: "Jl. Parangtritis No.300, Kota Yogyakarta, Daerah Istimewa Yogyakarta",
    gambar: "/img/TesItemBatik.png",
    deskripsi: "Yogyakarta juga terkenal dengan berbagai motif batik klasik lainnya seperti Ceplok dan Gurda.",
    batik: [
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Ceplok",
        sejarah: "Motif Ceplok adalah salah satu motif batik klasik yang ditemukan di seluruh Jawa. Bentuknya yang simetris berasal dari pengaruh geometris Hindu-Buddha.",
        makna_batik: "Motif Ceplok melambangkan keselarasan dan keseimbangan. Polanya yang teratur dan simetris mengajarkan tentang harmoni dalam kehidupan."
      },
      {
        motif_batik: "/img/Carousel3.png",
        nama_batik: "Gurda",
        sejarah: "Motif Gurda terinspirasi dari bentuk sayap burung Garuda, simbol kekuatan dan keagungan. Motif ini sering digunakan di keraton Yogyakarta dan Solo.",
        makna_batik: "Gurda melambangkan kekuasaan dan keberanian. Bentuk sayap Garuda yang megah mencerminkan semangat kepemimpinan dan keagungan."
      }
    ]
  }
];

export { daerahData };
