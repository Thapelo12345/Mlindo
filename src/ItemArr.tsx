import { Description } from "@radix-ui/react-toast";
import { title } from "process";

interface Item {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  price: string;
}

const itemArr = [
    {
    id: 1,
    title: "M802UBTX-2",
    imageUrl: "/lovable-uploads/Qoute/M802UBTX-2.png",
    description: "The Behringer X32 digital mixer packs everything you need to easily mix and record a live show into a compact, roadworthy chassis. With its amazing-sounding Midas-designed mic preamps, the X32 is also great for the studio. Powerful and intuitive, the X32 sports 40 processing channels and 16 mix buses, giving you the flexibility you’ve always longed for.",
    price: "R550"
    }
    ,
    {
        id: 2,
        title: "Jbl top",
        imageUrl: "/lovable-uploads/Qoute/Jbl top.webp",
        description: "The JBL PRX915 is a 2000W powered PA speaker with a 15 woofer, 1.5 compression driver, and full DSP control via the JBL Pro Connect app. Ideal for live sound and monitor use, it features Bluetooth, DriveRack technology, dual pole mounts, and a rugged, lightweight cabinet. With high SPL, low latency, and advanced EQ and delay settings, it delivers professional sound performance.",
        price: "R350"
    },
    {
        id: 3,
        title: "Behringer-32-DIGITAL-MIXER",
        imageUrl: "/lovable-uploads/Qoute/Behringer-32-DIGITAL-MIXER.gif",
        description: "The Behringer X32 digital mixer packs everything you need to easily mix and record a live show into a compact, roadworthy chassis. With its amazing-sounding Midas-designed mic preamps, the X32 is also great for the studio. Powerful and intuitive, the X32 sports 40 processing channels and 16 mix buses, giving you the flexibility you’ve always longed for.",
        price: "R450"
    },
    {
        id: 4,
        title: "JBL PRX918XLF EK Powered 18″ Subwoofer",
        imageUrl: "/lovable-uploads/Qoute/JBL-PRX918XLF.jpg",
        description: "The JBL PRX918XLF is an 18 powered subwoofer delivering 2,000W peak power with deep, clear bass. Built for pros, it features advanced DSP, Class D amplification, full app control via JBL Pro Connect, and rugged birch construction. Ideal for DJs, bands, and venues, it offers precise tuning, low latency, and seamless integration with other JBL systems.",
        price: "R550"
    },
    {
        id: 5,
        title: "EV ELX200-12SP12 Powered Subwoofer",
        imageUrl: "/lovable-uploads/Qoute/ELX200_12SP-copy-min-scaled-600x600.jpg",
        description: "The EV ELX200-12SP powered subwoofer features a 1200W Class-D amplifier delivering up to 129 dB SPL with a 12-inch EVS-12L woofer. It includes integrated QuickSmartDSP for easy setup, system tuning, visual monitoring, and volume control via onboard LCD. The QuickSmart Mobile app allows wireless control of up to six speakers using Bluetooth. Lightweight, durable wood enclosures with M20 pole mounts and dual handles make it ideal for both portable and installed setups. Bluetooth availability may vary by country.",
        price: "490"
    },
    {
        id: 6,
        title: "Hybrid CX223 | 2-Way Stereo/3-Way Mono Active Crossover",
        imageUrl: "/lovable-uploads/Qoute/hybrid-cx223-2-way-stereo-3-way-mono-active-crossover.webp",
        description: "The Hybrid CX223 is a 2-way stereo/3-way mono active crossover that is suitable for any 2-way stereo active system with separate sub-bass and mid-top cabinets.Setting up the CX223 for the perfect ratio between frequency bandwidths is simple with the comprehensive face panel controls that includes crossover frequency, independent gain controls for inputs and both outputs, as well as phase invert switches for the outputs. The CX223 also features a third mono output for summed bass cabinets, allowing for 3-way active configuration set-ups.",
        price: "R350",
    },
    {
        id: 7,
        title: "Behringer EP4000 Power Amp",
        imageUrl: "/lovable-uploads/Qoute/MPTAL00416183-1-pdpxl.webp",
        description: "The Behringer EP4000 is a rugged 2U rack-mount 2,000-Watt stereo power amplifier with ATR technology for clarity and punch. It features professional connectors, thermal/DC protection, precise gain controls, and switchable limiters. A high-current toroidal transformer and efficient ventilation ensure reliability. Inputs include XLR and 1/4 TRS. Includes one EP4000 power amp in the box.",
        price: "R250"
    },
    {
        id: 8,
        title: "FTS-6000 MKIII Fts Professional Power Amplifier",
        imageUrl: "/lovable-uploads/Qoute/s-pdpxl.webp",
        description: "The FTS-6000 MKIII is a professional power amplifier delivering 2x600W at 8Ω, 2x920W at 4Ω, and 1840W bridged. It features binding and Speakon outputs, dual-speed fans, and stereo, bridge mono, and parallel input modes. With a wide 20Hz–20kHz response, high S/N ratio, and comprehensive protection, it’s built for performance and reliability. Uses a standard IEC power cable.",
        price: "R200"
    },
    {
        id: 9,
        title: "Pioneer DJ DDJ-200 DJ Controller Wireless DJ Controller",
        imageUrl: "/lovable-uploads/Qoute/dj mixer.webp",
        description: "1 x DDJ-200 1 x USB cable 1 x Split cable 1 x Warranty (for some regions) 1 x Quick Start Guide (WeDJ/rekordbox) 1 x Quick Start Guide (djay) 1 x Quick Start Guide (edjing) 1 x Precautions for use",
        pice: "R150"
    },
    {
        id: 10,
        title: "Hybrid Speakon-Speakon Speaker Cable - 10M",
        imageUrl: "/lovable-uploads/Qoute/hybrid cables.png",
        description: "Speakon-Speakon 5m 2 x 2 .5mm Conductor . 10 meter x Hybrid Speakon-Speakon Speaker Cable - 10M",
        price: "R100"
    },
    {
        id: 11,
        title: "Hybrid D1 MKII (3 Pack) Dynamic Microphones with Cables",
        imageUrl: "/lovable-uploads/Qoute/MICHYB033-1024x1024.jpeg",
        description:"The Hybrid D1 MKII (3 Pack) includes three dynamic, unidirectional cardioid microphones ideal for vocals in live or studio settings. Each mic features a black die-cast casing, steel mesh grille, and on-off switch. The set includes three 5m XLR cables, mic clips, and comes in a foam-padded magnetic box.",
        price: "R149"
    },
    {
        id: 12,
        title: "Hybrid MINI U-DF Dual Handheld Wireless Mic System",
        imageUrl: "/lovable-uploads/Qoute/products-MINIUD-FHANDHELD2.jpg",
        description: "This affordable dual handheld wireless microphone system features a dual-channel receiver with quartz-controlled fixed frequencies (670.55MHz or 725.80MHz) for stable performance. Offering a signal-to-noise ratio over 90dB, it delivers clear audio with 10mW power output. The microphones provide 5–7 hours of battery life, and the system runs on a DC 12–18V power supply.",
        price: "R149"
    },
    {
        id: 13,
        title: "Hubrid Microphone Cable 20M 20AWG XLR M-F Black",
        imageUrl: "/lovable-uploads/Qoute/mic cables.webp",
        description: "Our Original 20-gauge PVC jacket noise-free microphone cable is professionally designed to prevent external interference and ensure signals travel rapidly and smoothly with minimum distortion, delay, or loss. These cables feature two 20-gauge OFC conductors, which are twisted pair with cotton yarn fillers, conductive PVC shield with 100% coverage, and OFC braided shielding with 95% coverage.",
        price: "R100"
    },
    {
        id: 14,
        title: "Hybrid Six Pack XLR Male – XLR Female Cable 1M",
        imageUrl: "/lovable-uploads/Qoute/corssover cables.png",
        description: "The Hybrid Six Pack includes six 1-meter balanced XLR male to XLR female cables, ideal for professional audio setups. Each cable features a durable 6mm outer diameter for reliable signal transmission and long-lasting performance. Perfect for studio or live use.",
        price: "R50"
    }
]

export default itemArr