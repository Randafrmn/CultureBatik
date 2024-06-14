const dataBatiks = [
        {
            motif_batik: "images/parang.jpeg",
            nama_batik: "Parang",
            sejarah: "Batik Parang adalah salah satu motif batik tertua di Indonesia, berasal dari keraton Yogyakarta dan Solo. Motif ini diciptakan oleh Sultan Agung Hanyakrakusuma pada abad ke-16.",
            makna_batik: "Motif Parang melambangkan kekuatan, keberanian, dan keteguhan hati. Pola garis-garis menyerupai ombak laut menggambarkan semangat yang tak pernah padam.",
        },
        {
            motif_batik: "images/kawung.jpg",
            nama_batik: "Kawung",
            sejarah: "Motif Kawung telah ada sejak abad ke-9 dan sering digunakan oleh keluarga kerajaan. Motif ini dikenal berasal dari wilayah Jawa Tengah dan Yogyakarta.",
            makna_batik: "Motif Kawung melambangkan keinginan untuk mencapai kesempurnaan dan keseimbangan. Bentuk bulatannya menyerupai buah kawung atau kolang-kaling yang mengandung filosofi kehidupan yang penuh dengan kebijaksanaan.",
        },
        {
            motif_batik: "images/megamend.png",
            nama_batik: "Mega Mendung",
            sejarah: "Motif Mega Mendung berasal dari Cirebon, dipengaruhi oleh budaya Tionghoa yang datang ke Indonesia pada abad ke-16. Motif ini sering ditemukan di karya seni batik Cirebon.",
            makna_batik: "Mega Mendung melambangkan kesabaran, ketenangan, dan keteguhan hati. Bentuk awan yang bergulung-gulung merepresentasikan kondisi hati yang tenang meskipun menghadapi situasi yang sulit.",
        },
        {
            motif_batik: "images/truntum.jpg",
            nama_batik: "Truntum",
            sejarah: "Motif Truntum diciptakan oleh Kanjeng Ratu Kencana, permaisuri Sunan Paku Buwana III dari Solo, pada abad ke-18 sebagai simbol cinta dan kesetiaan dalam pernikahan.",
            makna_batik: "Truntum melambangkan cinta yang tumbuh kembali dan kesetiaan. Pola bintang-bintang kecil yang tersebar melambangkan cinta yang selalu menerangi dan tak pernah padam.",
        },
        {
            motif_batik: "images/sidoasih.jpg",
            nama_batik: "Sido Asih",
            sejarah: "Motif Sido Asih berasal dari Solo dan Yogyakarta, sering digunakan dalam upacara pernikahan untuk mendoakan pengantin dengan harapan akan hidup harmonis dan penuh kasih.",
            makna_batik: "Sido Asih melambangkan cinta kasih yang abadi dan kehidupan yang harmonis. Polanya mengandung makna harapan agar pemakainya selalu hidup dalam kasih sayang dan kedamaian.",
        },
        {
            motif_batik: "images/tambal.jpeg",
            nama_batik: "Tambal",
            sejarah: "Motif Tambal berasal dari Yogyakarta dan sering digunakan untuk membuat kain penutup. Nama 'Tambal' sendiri berarti 'menambal' yang merefleksikan harapan untuk memperbaiki kehidupan.",
            makna_batik: "Motif Tambal melambangkan harapan dan perbaikan dalam hidup. Kombinasi berbagai motif dalam satu kain menggambarkan kebersamaan dan keanekaragaman.",
        },
        {
            motif_batik: "images/mukti.jpg",
            nama_batik: "Sidomukti",
            sejarah: "Batik Sidomukti adalah motif batik yang berasal dari Solo dan Yogyakarta. Motif ini sering digunakan dalam upacara pernikahan Jawa untuk mendoakan kebahagiaan dan kemakmuran bagi pengantin.",
            makna_batik: "Sidomukti melambangkan kemakmuran, kebahagiaan, dan kehidupan yang mulia. Pola geometrisnya merepresentasikan harapan akan stabilitas dan keberuntungan.",
        },
        {
            motif_batik: "images/ceplok.jpeg",
            nama_batik: "Ceplok",
            sejarah: "Motif Ceplok adalah salah satu motif batik klasik yang ditemukan di seluruh Jawa. Bentuknya yang simetris berasal dari pengaruh geometris Hindu-Buddha.",
            makna_batik: "Motif Ceplok melambangkan keselarasan dan keseimbangan. Polanya yang teratur dan simetris mengajarkan tentang harmoni dalam kehidupan.",
        },
        {
            motif_batik: "images/gurda.jpg",
            nama_batik: "Gurda",
            sejarah: "Motif Gurda terinspirasi dari bentuk sayap burung Garuda, simbol kekuatan dan keagungan. Motif ini sering digunakan di keraton Yogyakarta dan Solo.",
            makna_batik: "Gurda melambangkan kekuasaan dan keberanian. Bentuk sayap Garuda yang megah mencerminkan semangat kepemimpinan dan keagungan.",
        },
        {
            motif_batik: "images/pastel.jpeg",
            nama_batik: "Pastel",
            sejarah: "Motif Pastel adalah batik modern yang terinspirasi dari warna-warna lembut pastel. Dikembangkan oleh pengrajin di Pekalongan untuk pasar anak muda.",
            makna_batik: "Motif Pastel melambangkan keceriaan dan kreativitas. Warna-warna lembutnya merefleksikan semangat muda dan inovasi.",
        },
        {
            motif_batik: "images/lereng.jpeg",
            nama_batik: "Lereng",
            sejarah: "Motif Lereng berasal dari daerah Solo dan Yogyakarta. Motif ini sering digunakan dalam kain batik untuk acara formal seperti pernikahan dan upacara adat.",
            makna_batik: "Motif Lereng melambangkan keteguhan dan ketenangan. Pola garis miringnya menyerupai lereng gunung yang stabil dan kokoh.",
        },
        {
            motif_batik: "images/palembang.jpg",
            nama_batik: "Palembang",
            sejarah: "Batik Palembang memiliki motif yang kaya dengan warna-warna cerah dan pola yang rumit, mencerminkan kebudayaan Melayu dan pengaruh Tionghoa.",
            makna_batik: "Motif Palembang melambangkan kemakmuran dan kebahagiaan. Warna-warna cerah dan pola yang rumit mencerminkan keragaman dan kekayaan budaya.",
        },
        {
            motif_batik: "images/sekarja.jpeg",
            nama_batik: "Sekar Jagad",
            sejarah: "Motif Sekar Jagad adalah motif batik dari Yogyakarta yang terkenal dengan pola yang kompleks. Nama 'Sekar Jagad' berarti 'Bunga Dunia'.",
            makna_batik: "Sekar Jagad melambangkan keindahan dan keragaman dunia. Pola yang rumit dan beraneka ragam merefleksikan keunikan dan keindahan setiap bagian dari dunia.",
        },
    ]

    const alatBatik = [
        {
            "nama_alat": "Canting",
            "deskripsi": "Alat yang digunakan untuk menerapkan malam (lilin) ke kain, terdiri dari pegangan kayu dengan semacam cerat logam.",
            "gambar": "/img/tools.png"
        },
        {
            "nama_alat": "Cap",
            "deskripsi": "Alat cap dari tembaga untuk membuat motif batik dengan cara mencap malam ke kain.",
            "gambar": "/img/tools.png"
        },
        {
            "nama_alat": "Malam",
            "deskripsi": "Lilin khusus untuk menutup bagian kain yang tidak akan diwarnai.",
            "gambar": "/img/tools.png"
        },
        {
            "nama_alat": "Kain Mori",
            "deskripsi": "Kain katun yang biasanya digunakan sebagai bahan dasar batik.",
            "gambar": "/img/tools.png"
        },
        {
            "nama_alat": "Pewarna",
            "deskripsi": "Bahan pewarna untuk kain batik.",
            "gambar": "/img/tools.png"
        },
        {
            "nama_alat": "Gawangan",
            "deskripsi": "Rangka kayu untuk menahan kain saat proses membatik.",
            "gambar": "/img/tools.png"
        },
        {
            "nama_alat": "Wajan dan Kompor",
            "deskripsi": "Untuk memanaskan malam agar mencair.",
            "gambar": "/img/tools.png"
        },
        {
            "nama_alat": "Tjap",
            "deskripsi": "Alat untuk menerapkan motif dengan cara mencetak malam panas ke kain.",
            "gambar": "/img/tools.png"
        }
    ];
    
    class DataBatiks {
        static getAll() {
            return dataBatiks;
        }
    }

    class DataAlat {
        static getAll() {
            return alatBatik;
        }
    }


    export { DataBatiks, DataAlat };