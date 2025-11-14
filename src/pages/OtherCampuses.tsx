import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Landmark } from "lucide-react";

/* Optional placeholder images per campus (replace with real assets if available) */
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


/* Waves reused */
const WaveTop = ({ fill = "#f6eee7" }) => (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill={fill} d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z" />
        </svg>
    </div>
);

const WaveBottom = ({ fill = "#f4f7ff" }) => (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill={fill} d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,208C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z" />
        </svg>
    </div>
);

/* Data */
type Campus = {
    cityLabel: string;
    addressLines: string[];
    phone: string;
    mapLink: string;
    image: string;
};

const campuses: Campus[] = [
    {
        cityLabel: "Whitefield, Bangalore",
        addressLines: ["152, ECC Road, Whitefield, Bangalore- 560066"],
        phone: "+91 93426 71721",
        mapLink: "https://www.google.com/maps?sca_esv=b80a8cdde4dd043f&kgmid=/g/11cs5zyhjd&shndl=30&shem=lcuae,lsptbl1,sdl1psh,uaasie&kgs=520242ff305bdef3&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KWWfS97_Da47MdAd_apQh3nQ&daddr=Prestige+sunflowers,+Villa+no,+5,+ECC+Rd,+opp.+to+Pattandur+Agrahara+ECC+Road,+Whitefield,+Bengaluru,+Karnataka+560066",
        image: WhitefieldBanglore,
    },
    {
        cityLabel: "Manikonda, Hyderabad",
        addressLines: [
            "Plot No : 259, Block H (Opp : Anuhar Morning Raga ) Road No : 25, Alkapur Township, Manikonda, Hyderabad.",
        ],
        phone: "+91 9010 434 434",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors+School+%26+Day+Care+-+Manikonda/@17.3896206,78.3683951,1085m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb95081d16ad35:0x8954a7126f6a2659!8m2!3d17.3896206!4d78.3683951!16s%2Fg%2F11h6x0xfm4?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: ManikondaHyderabad,
    },
    {
        cityLabel: "Bhubaneswar, Odisha - Neeladri Vihar",
        addressLines: ["484, 5th sector, Neeladri Vihar, Bhubaneswar - 751021"],
        phone: "+91 94838 16108 / +91 99863 16108",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors+Preschool+%26+Day+Care+-+Niladri+Vihar,+Bhubaneswar/@20.3283877,85.8013313,1066m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a1909a9c8cb82e9:0x9ae492543b41acb6!8m2!3d20.3283877!4d85.8013313!16s%2Fg%2F11h53zcs6h?authuser=0&rclk=1&coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: NeeladriViharBhubaneswar,
    },
    {
        cityLabel: "Kalyan Nagar, Bangalore",
        addressLines: [
            "#838, 3rd A Cross Rd, HRBR Layout 1st Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043",
        ],
        phone: "+91 78997 49152",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Preschool+Academy,+Kalyan+Nagar/@13.0185898,77.6472177,998m/data=!3m1!1e3!4m6!3m5!1s0x3bae17f95607d43d:0x5f217071528fcad6!8m2!3d13.0185898!4d77.6472177!16s%2Fg%2F11h5rykj8n?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D",
        image: KalyanNagarBangaloreKarnataka,
    },
    {
        cityLabel: "PVS Kalakunj, Mangalore",
        addressLines: [
            "Basil Woods Gokul Juniors Preschool,",
            "PVS Kalakunj, Kodialbail, Mangalore – 575003",
        ],
        phone: "+91 81970 36108",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors+Preschool+and+Daycare/@12.8774391,74.8361429,1108m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba35b1f15b6ad67:0xe1a6183124d177c0!8m2!3d12.8774391!4d74.8387178!16s%2Fg%2F11v6dccm7n?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: KalakunjMangalore,
    },
    {
        cityLabel: "Kodigehalli, Bangalore",
        addressLines: [
            "235, 7th cross, Canara bank layout, Kodigehalli, Bangalore - 560 097",
        ],
        phone: "+91 95382 98988",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Preschool+Academy,+Kodigehalli/@13.0690799,77.5743181,1107m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae1959052627b9:0x75642e7b92254a4a!8m2!3d13.0690747!4d77.576893!16s%2Fg%2F11ft38yh57?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: KodigehalliBangalore,
    },
    {
        cityLabel: "Varthur, Bangalore",
        addressLines: [
            "Beside Govt. Hospital, Varthur, Bengaluru - 560087",
        ],
        phone: "+91 63649 04888",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors,+Varthur/@12.9368994,77.7438148,1108m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae0d2cfa18ee1d:0x2a761abacb2e6278!8m2!3d12.9368994!4d77.7463897!16s%2Fg%2F11ft28hpp5?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: VarthurBangalore,
    },
    {
        cityLabel: "Bhubaneswar, Odisha - Ghatikia",
        addressLines: [
            "#6, K-7, Kalinga Nagar,",
            "Ghatikia, Bhubaneswar – 751019",
        ],
        phone: "+91 94838 16108",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors+Preschool+%26+Day+Care+-+Kalinga+Nagar,+Bhubaneswar/@20.2697226,85.7574705,1067m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a19a9177d770afd:0x7a474bb5824a4f09!8m2!3d20.2697226!4d85.7600454!16s%2Fg%2F11t1nsvmgz?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: GhatikiaBhubaneswar,
    },
    {
        cityLabel: "Ahmedabad, Gujarat",
        addressLines: [
            "Hare Krishna Mandir campus, Bhadaj, Ahmedabad – 380060, Gujarat",
        ],
        phone: "+91 97125 12524",
        mapLink: "https://www.google.com/maps/place/Basil+Woods+Juniors+Ahmedabad/@23.0977405,72.4552022,1046m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e9d0054102581:0x119422d5c1067716!8m2!3d23.0977405!4d72.4577771!16s%2Fg%2F11lck604s5?coh=225987&entry=tts&g_ep=EgoyMDI0MTIwMy4wIPu8ASoASAFQAw%3D%3D",
        image: Ahmedabad, // not available
    },
    {
        cityLabel: "Basil Woods @ Atkins, Bangalore",
        addressLines: [
            "Prestige Lansdowne Complex, Ali Asker Rd, Vasanth Nagar, Bengaluru, Karnataka 560051",
        ],
        phone: "+91 78469 09009",
        mapLink: "https://maps.google.com/?q=Prestige+Lansdowne+Complex,+Ali+Asker+Rd,+Vasanth+Nagar,+Bengaluru,+560051",
        image: AtkinsCampus, // add when available
    },
    {
        cityLabel: "Basil Woods @ Cytecare, Bangalore",
        addressLines: [
            "Near Bagalur Cross, BSF Campus, Yelahanka, Bengaluru, Karnataka 560064",
        ],
        phone: "+91 78469 09009",
        mapLink: "https://maps.google.com/?q=Cytecare+Hospital,+Bagalur+Cross,+BSF+Campus,+Yelahanka,+Bengaluru,+560064",
        image: CytecareCampus, // add when available
    },
    {
        cityLabel: "Chembur, Mumbai",
        addressLines: [
            "Crystal 3, Sindhi Society Road, Near Sindhi Society Gymkhana, Chembur East, Mumbai, 400071",
        ],
        phone: "+91 9820860108",
        mapLink: "https://maps.google.com/?q=Crystal+3,+Sindhi+Society+Road,+Chembur+East,+Mumbai,+400071",
        image: ChemburMumbai,
    },
];


/* Small util to open maps */
const openMaps = (link: string) =>
    window.open(link, "_blank", "noopener,noreferrer");

const OtherCampuses: React.FC = () => {
    return (
        <div className="min-h-screen bg-section-1">
            <Header />

            {/* HERO */}
            <section className="py-16 md:py-20 bg-section-1 relative overflow-hidden">
                <div className="absolute top-16 right-8 w-10 h-10 bg-gradient-primary rounded-full opacity-25" />
                <div className="absolute bottom-16 left-12 w-8 h-8 bg-gradient-secondary rounded-full opacity-25" />
                <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-gradient-accent rounded-xl opacity-20" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-5 py-2.5 rounded-full border-none font-medium text-xs md:text-sm mb-4 inline-block">
                            Our Network
                        </Badge>
                        <h1 className="text-[30px] md:text-[40px] font-bold text-neutral-700 leading-[1.15] mb-3">
                            Other Campuses
                        </h1>
                        <p className="text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                            Explore additional Basil Woods Juniors locations across India.
                        </p>
                    </div>
                </div>

                <WaveBottom fill="#feeee7" />
            </section>

            {/* LIST */}
            <section className="relative overflow-hidden bg-section-2 py-12 md:py-14">
                <WaveTop fill="#feeee7" />
                <div className="container mx-auto px-4">
                    <div className="grid gap-6">
                        {campuses.map((c, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <Card
                                    key={i}
                                    className="bg-white rounded-2xl border border-[hsl(var(--neutral-100))] shadow-sm hover:shadow-md transition-all"
                                >
                                    <div
                                        className={`grid lg:grid-cols-2 gap-6 items-stretch ${isEven ? "" : "lg:[&>*:first-child]:order-2"}`}
                                    >
                                        {/* Image */}
                                        <div className="p-4">
                                            <div className="relative h-full">
                                                <div className="overflow-hidden rounded-2xl border-4"
                                                    style={{ borderColor: "hsl(var(--premium-orange))" }}>
                                                    <img
                                                        src={c.image}
                                                        alt={c.cityLabel}
                                                        className="w-full h-[220px] md:h-[260px] lg:h-[300px] object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Text */}
                                        <div className="p-6 flex flex-col justify-center">
                                            <div className="mb-2">
                                                <Badge
                                                    className="px-3.5 py-1.5 rounded-full font-medium text-xs"
                                                    style={{ backgroundColor: "hsl(var(--light-teal))", color: "hsl(var(--premium-teal))" }}
                                                >
                                                    Campus
                                                </Badge>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-extrabold text-neutral-800 mb-2">
                                                {c.cityLabel}
                                            </h3>
                                            <div className="text-neutral-700 text-sm md:text-base leading-relaxed">
                                                {c.addressLines.map((l, idx) => (
                                                    <p key={idx}>{l}</p>
                                                ))}
                                            </div>

                                            <div className="mt-3 flex items-center gap-2 text-neutral-800 font-medium">
                                                <Phone className="w-4 h-4" />
                                                <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="hover:underline">
                                                    {c.phone}
                                                </a>
                                            </div>

                                            <div className="mt-5 flex flex-wrap gap-3">
                                                <Button
                                                    className="rounded-xl px-5 py-2.5 font-semibold shadow-sm hover:shadow-md transition-all"
                                                    style={{ backgroundColor: "hsl(var(--premium-orange))", color: "white" }}
                                                    onClick={() => openMaps(c.mapLink)}
                                                >
                                                    <MapPin className="w-5 h-5 mr-2" />
                                                    Locate on Map
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="rounded-xl px-5 py-2.5 font-semibold border-2 hover:bg-white"
                                                    style={{ borderColor: "hsl(var(--premium-orange))", color: "hsl(var(--premium-orange))" }}
                                                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                                >
                                                    <Landmark className="w-5 h-5 mr-2" />
                                                    Back to Top
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
                <WaveBottom fill="#f4f7ff" />
            </section>

            {/* Footer */}
            <footer className="relative bg-[#f4f7ff]">
                <WaveTop fill="#f4f7ff" />
                <Footer />
            </footer>
        </div>
    );
};

export default OtherCampuses;