import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Landmark, Plane, Globe, Navigation } from "lucide-react";
import { motion } from "framer-motion";

/* Optional placeholder images per campus */
import WhitefieldBanglore from "@/assets/campuses/WhitefieldBanglore.jpg";
import GhatikiaBhubaneswar from "@/assets/campuses/GhatikiaBhubaneswar.avif";
import VarthurBangalore from "@/assets/campuses/VarthurBangalore.webp";
import KalakunjMangalore from "@/assets/campuses/KalakunjMangalore.avif";
import KodigehalliBangalore from "@/assets/campuses/KodigehalliBangalore.jpeg";
import ManikondaHyderabad from "@/assets/campuses/ManikondaHyderabad.avif";
import KalyanNagarBangaloreKarnataka from "@/assets/campuses/KalyanNagarBangloreKarnataka.avif";
import CytecareCampus from "@/assets/campuses/MalleshwaramBangalore.webp";
import NeeladriViharBhubaneswar from "@/assets/campuses/NeeladriViharBhubaneswar.avif";
import ChemburMumbai from "@/assets/campuses/ChemburMumbai.webp";
import Ahmedabad from "@/assets/campuses/ahmedabad.jpg";
import AtkinsCampus from "@/assets/campuses/AtkinsCampus.jpg";

/* Data */
type Campus = {
    cityLabel: string;
    addressLines: string[];
    phone: string;
    mapLink: string;
    image: string;
    stampColor: string;
};

const campuses: Campus[] = [
    {
        cityLabel: "Whitefield, Bangalore",
        addressLines: ["152, ECC Road, Whitefield, Bangalore- 560066"],
        phone: "+91 93426 71721",
        mapLink: "https://www.google.com/maps?sca_esv=b80a8cdde4dd043f&kgmid=/g/11cs5zyhjd&shndl=30&shem=lcuae,lsptbl1,sdl1psh,uaasie&kgs=520242ff305bdef3&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWWfS97_Da47MdAd_apQh3nQ&daddr=Prestige+sunflowers,+Villa+no,+5,+ECC+Rd,+opp.+to+Pattandur+Agrahara+ECC+Road,+Whitefield,+Bengaluru,+Karnataka+560066",
        image: WhitefieldBanglore,
        stampColor: "text-blue-500 border-blue-500"
    },
    {
        cityLabel: "Manikonda, Hyderabad",
        addressLines: ["Plot No : 259, Block H (Opp : Anuhar Morning Raga ) Road No : 25, Alkapur Township, Manikonda, Hyderabad."],
        phone: "+91 9010 434 434",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors+School+%26+Day+Care+-+Manikonda/@17.3896206,78.3683951,1085m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb95081d16ad35:0x8954a7126f6a2659!8m2!3d17.3896206!4d78.3683951!16s%2Fg%2F11h6x0xfm4?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: ManikondaHyderabad,
        stampColor: "text-green-500 border-green-500"
    },
    {
        cityLabel: "Bhubaneswar, Odisha - Neeladri Vihar",
        addressLines: ["484, 5th sector, Neeladri Vihar, Bhubaneswar - 751021"],
        phone: "+91 94838 16108",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors+Preschool+%26+Day+Care+-+Niladri+Vihar,+Bhubaneswar/@20.3283877,85.8013313,1066m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a1909a9c8cb82e9:0x9ae492543b41acb6!8m2!3d20.3283877!4d85.8013313!16s%2Fg%2F11h53zcs6h?authuser=0&rclk=1&coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: NeeladriViharBhubaneswar,
        stampColor: "text-orange-500 border-orange-500"
    },
    {
        cityLabel: "Kalyan Nagar, Bangalore",
        addressLines: ["#838, 3rd A Cross Rd, HRBR Layout 1st Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043"],
        phone: "+91 78997 49152",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Preschool+Academy,+Kalyan+Nagar/@13.0185898,77.6472177,998m/data=!3m1!1e3!4m6!3m5!1s0x3bae17f95607d43d:0x5f217071528fcad6!8m2!3d13.0185898!4d77.6472177!16s%2Fg%2F11h5rykj8n?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D",
        image: KalyanNagarBangaloreKarnataka,
        stampColor: "text-purple-500 border-purple-500"
    },
    {
        cityLabel: "PVS Kalakunj, Mangalore",
        addressLines: ["Basil Woods Gokul Juniors Preschool,", "PVS Kalakunj, Kodialbail, Mangalore – 575003"],
        phone: "+91 81970 36108",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors+Preschool+and+Daycare/@12.8774391,74.8361429,1108m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba35b1f15b6ad67:0xe1a6183124d177c0!8m2!3d12.8774391!4d74.8387178!16s%2Fg%2F11v6dccm7n?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: KalakunjMangalore,
        stampColor: "text-pink-500 border-pink-500"
    },
    {
        cityLabel: "Kodigehalli, Bangalore",
        addressLines: ["235, 7th cross, Canara bank layout, Kodigehalli, Bangalore - 560 097"],
        phone: "+91 95382 98988",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Preschool+Academy,+Kodigehalli/@13.0690799,77.5743181,1107m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae1959052627b9:0x75642e7b92254a4a!8m2!3d13.0690747!4d77.576893!16s%2Fg%2F11ft38yh57?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: KodigehalliBangalore,
        stampColor: "text-teal-500 border-teal-500"
    },
    {
        cityLabel: "Varthur, Bangalore",
        addressLines: ["Beside Govt. Hospital, Varthur, Bengaluru - 560087"],
        phone: "+91 63649 04888",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors,+Varthur/@12.9368994,77.7438148,1108m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae0d2cfa18ee1d:0x2a761abacb2e6278!8m2!3d12.9368994!4d77.7463897!16s%2Fg%2F11ft28hpp5?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: VarthurBangalore,
        stampColor: "text-indigo-500 border-indigo-500"
    },
    {
        cityLabel: "Bhubaneswar, Odisha - Ghatikia",
        addressLines: ["#6, K-7, Kalinga Nagar,", "Ghatikia, Bhubaneswar – 751019"],
        phone: "+91 94838 16108",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors+Preschool+%26+Day+Care+-+Kalinga+Nagar,+Bhubaneswar/@20.2697226,85.7574705,1067m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a19a9177d770afd:0x7a474bb5824a4f09!8m2!3d20.2697226!4d85.7600454!16s%2Fg%2F11t1nsvmgz?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: GhatikiaBhubaneswar,
        stampColor: "text-red-500 border-red-500"
    },
    {
        cityLabel: "Ahmedabad, Gujarat",
        addressLines: ["Hare Krishna Mandir campus, Bhadaj, Ahmedabad – 380060, Gujarat"],
        phone: "+91 97125 12524",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors+Ahmedabad/@23.0977405,72.4552022,1046m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e9d0054102581:0x119422d5c1067716!8m2!3d23.0977405!4d72.4577771!16s%2Fg%2F11lck604s5?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: Ahmedabad,
        stampColor: "text-yellow-600 border-yellow-600"
    },
    {
        cityLabel: "Basil Woods @ Atkins, Bangalore",
        addressLines: ["Prestige Lansdowne Complex, Ali Asker Rd, Vasanth Nagar, Bengaluru, Karnataka 560051"],
        phone: "+91 78469 09009",
        mapLink: "https://maps.google.com/?q=Prestige+Lansdowne+Complex,+Ali+Asker+Rd,+Vasanth+Nagar,+Bengaluru,+560051",
        image: AtkinsCampus,
        stampColor: "text-cyan-600 border-cyan-600"
    },
    {
        cityLabel: "Basil Woods @ Cytecare, Bangalore",
        addressLines: ["Near Bagalur Cross, BSF Campus, Yelahanka, Bengaluru, Karnataka 560064"],
        phone: "+91 78469 09009",
        mapLink: "https://maps.google.com/?q=Cytecare+Hospital,+Bagalur+Cross,+BSF+Campus,+Yelahanka,+Bengaluru,+560064",
        image: CytecareCampus,
        stampColor: "text-emerald-600 border-emerald-600"
    },
    {
        cityLabel: "Chembur, Mumbai",
        addressLines: ["Crystal 3, Sindhi Society Road, Near Sindhi Society Gymkhana, Chembur East, Mumbai, 400071"],
        phone: "+91 9820860108",
        mapLink: "https://maps.google.com/?q=Crystal+3,+Sindhi+Society+Road,+Chembur+East,+Mumbai,+400071",
        image: ChemburMumbai,
        stampColor: "text-rose-500 border-rose-500"
    },
];

const openMaps = (link: string) => window.open(link, "_blank", "noopener,noreferrer");

const OtherCampuses: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#fffdf5] font-sans">
            <Header />

            {/* HERO - "Our World" */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-blue-50">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/shattered-island.png')]" />

                {/* Floating Elements */}
                <motion.div className="absolute top-20 left-10 text-blue-400 opacity-60" animate={{ x: [0, 20, 0], y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity }}>
                    <Plane className="w-16 h-16 fill-current transform rotate-12" />
                </motion.div>
                <motion.div className="absolute bottom-20 right-10 text-green-400 opacity-60" animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                    <Globe className="w-16 h-16" />
                </motion.div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge className="bg-white text-blue-600 border-2 border-blue-400 px-4 py-1 text-sm font-bold rounded-full mb-6 shadow-sm">
                        <MapPin className="w-4 h-4 mr-2 inline" />
                        Our Network
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-black text-[hsl(var(--brand-dark-green))] mb-6 font-handwriting leading-tight">
                        Our Growing <span className="text-[hsl(var(--premium-orange))]">Family</span>
                    </h1>
                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
                        Spreading the joy of learning across India. Find a Basil Woods Juniors campus near you.
                    </p>
                </div>
            </section>

            {/* CAMPUS LIST - "The Journey" */}
            <section className="py-20 bg-white relative">
                {/* Dashed Flight Path (Visual Guide) */}
                <div className="absolute top-0 bottom-0 left-1/2 w-1 border-l-4 border-dashed border-neutral-200 hidden lg:block transform -translate-x-1/2" />

                <div className="container mx-auto px-4">
                    <div className="flex flex-col gap-12 md:gap-24">
                        {campuses.map((c, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative ${isEven ? "" : "lg:flex-row-reverse"}`}
                                >
                                    {/* Timeline Dot (Desktop) */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[hsl(var(--premium-orange))] rounded-full border-4 border-white shadow-md hidden lg:block z-10" />

                                    {/* Image Card - "Polaroid" */}
                                    <div className="w-full lg:w-1/2 group">
                                        <div className={`relative bg-white p-3 pb-12 shadow-xl transform transition-transform duration-300 hover:scale-105 hover:z-20 ${isEven ? "rotate-2" : "-rotate-2"}`}>
                                            {/* Tape */}
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm border border-white/50 shadow-sm transform rotate-1 z-20" />

                                            <div className="overflow-hidden bg-neutral-100 aspect-video">
                                                <img
                                                    src={c.image}
                                                    alt={c.cityLabel}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute bottom-4 left-0 right-0 text-center">
                                                <p className="font-handwriting text-xl font-bold text-neutral-800">{c.cityLabel}</p>
                                            </div>

                                            {/* Stamp */}
                                            <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-4 border-double ${c.stampColor} flex items-center justify-center transform -rotate-12 opacity-80 bg-white shadow-sm`}>
                                                <span className={`text-[10px] font-black uppercase text-center leading-tight ${c.stampColor.split(' ')[0]}`}>
                                                    Basil<br />Woods<br />Approved
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info Card - "Postcard/Luggage Tag" */}
                                    <div className="w-full lg:w-1/2">
                                        <div className="bg-[#fffdf5] p-8 rounded-2xl shadow-lg border-2 border-neutral-100 relative overflow-hidden">
                                            {/* Tag Hole */}
                                            <div className="absolute top-6 right-6 w-4 h-4 rounded-full bg-neutral-200 border border-neutral-300 shadow-inner" />

                                            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">
                                                <MapPin className="w-3 h-3 mr-1" /> Campus
                                            </Badge>

                                            <h3 className="text-2xl font-black text-neutral-800 mb-4">{c.cityLabel}</h3>

                                            <div className="space-y-4 mb-6">
                                                <div className="flex items-start gap-3 text-neutral-600">
                                                    <MapPin className="w-5 h-5 mt-1 text-[hsl(var(--premium-orange))]" />
                                                    <div className="text-sm leading-relaxed">
                                                        {c.addressLines.map((l, idx) => (
                                                            <p key={idx}>{l}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3 text-neutral-600">
                                                    <Phone className="w-5 h-5 text-[hsl(var(--premium-orange))]" />
                                                    <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="text-sm font-bold hover:underline">
                                                        {c.phone}
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-3">
                                                <Button
                                                    onClick={() => openMaps(c.mapLink)}
                                                    className="bg-[hsl(var(--premium-orange))] hover:bg-orange-600 text-white rounded-xl font-bold shadow-sm"
                                                >
                                                    <Navigation className="w-4 h-4 mr-2" />
                                                    Navigate
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    onClick={() => window.open(`tel:${c.phone.replace(/\s+/g, "")}`)}
                                                    className="border-2 border-[hsl(var(--premium-orange))] text-[hsl(var(--premium-orange))] hover:bg-orange-50 rounded-xl font-bold"
                                                >
                                                    <Phone className="w-4 h-4 mr-2" />
                                                    Call Now
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default OtherCampuses;