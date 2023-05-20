

import { createStore } from "redux";
import appReducer from "./services/reducers/appReducer";

const products =  [
        {
            "id": 1,
            "name": "Canon EOS M50 Mark II Mirrorless Camera EF-M15-45mm (Black)",
            "shortDescription": "Flex Your Stories.Lightweight and stylish, the EOS M50 Mark II is fun and easy to use with Wi-Fi connectivity for content creators to stay close to your audience at all times.",
            "description": "Flex Your Stories.Lightweight and stylish, the EOS M50 Mark II is fun and easy to use with Wi-Fi connectivity for content creators to stay close to your audience at all times. Keep your social media feeds lit with high-quality visual storytelling in 4K and accurate eye and face detection autofocusing.Whatever content you create, set yourself apart from the crowd and give your audience something special. The EOS M50 Mark II gives you more ways to shoot photos, movies and live streams and connect with your followers.,suitable_for-Beginners,processor-DIGIC 8,sensor_type-APS-C CMOS,continuous_shooting_speed-11 fps (in High Continuous shooting)",
            "flashSale": true,
            "addedToCart": false,
            "wishlisted": false,
            "image": "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "price": 654,
            "quantity": 0,
            "productType": "Electronics",
            "specifications": [
                {"label": "Brand", "value": "Canon"}, 
                {"label": "Model Number", "value": "EOS 200D II"}, 
                {"label": "Model Name", "value": "eos200dii"},
                {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
                {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
                {"label": "Video Resolution", "value": "1920 x 1080"},
                {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
                {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
            ]
        },
        {
            "id": 2,
            "name": "APPLE iPhone 14 Plus (Grey, 128 GB)",
            "shortDescription": "HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 20,00,000:1, Max Brightness: 800 nits, Peak Brightness: 1,200 nits, Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously",
            "description": "Rated IP68 (Maximum Depth of 6 Metres Upto 30 Minutes) Under IEC Standard 60529, 16 Core Neural Engine, Enabled by TrueDepth Camera for Facial Recognition, Emergency SOS, Crash Detection, Digital Compass, Wi-Fi, Cellular, iBeacon Micro-Location, FaceTime Video Calling Over Cellular or Wi-Fi, FaceTime HD (1080p) Video Calling Over 5G or Wi-Fi, Share Experiences Like Movies, TV, Music and Other Apps in a FaceTime Call with SharePlay, Screen Sharing, Portrait Mode in FaceTime Video, Spatial Audio, Voice Isolation and Wide Spectrum, Microphone Modes, Zoom with Rear-Facing Camera, FaceTime Audio, Voice over LTE (VoLTE), Wi-Fi Calling, Spatial Audio Playback, User Configurable Maximum Volume Limit, HDR with Dolby Vision, HDR10 and HLG Upto 4K HDR AirPlay for Mirroring, Photos and Video Out to Apple TV (2nd generation or later) or AirPlay 2 Enabled Smart TV, Video Mirroring and Video Out Support: Upto 1080p Through Lightning Digital AV Adapter and Lightning to VGA Adapter (Adapters Sold Separately), MagSafe Wireless Charging Upto 15 W, Qi Wireless Charging Upto 7.5 W, Charging via USB to Computer System or Power Adapter, Magnet Array, Voice Control, Voice Over, Zoom, Magnifier, RTT and TTY Support, Siri and Dictation, Type to Siri, Switch Control, Closed Captions, Assistive Touch, Spoken Content, Back Tap, Alignment Magnet, Accessory Identification NFC, Magnetometer, System Requirement: Apple ID (Required for Some Features), Internet Access, Syncing to a Mac or PC Requires: macOS Catalina 10.15 or Later Using the Finder, macOS El Capitan 10.11.6 Through macOS Mojave 10.14.6 Using iTunes 12.8 or Later, Windows 7 or Later Using iTunes 12.10.10 or Later (Free Download from apple.com/in/itunes/download), Rating for Hearing Aids: M3, T4",
            "flashSale": true,
            "addedToCart": false,
            "wishlisted": false,
            "image": "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "price": 89,
            "quantity": 0,
            "productType": "Electronics",
            "specifications": [
                {"label": "Brand", "value": "Canon"}, 
                {"label": "Model Number", "value": "EOS 200D II"}, 
                {"label": "Model Name", "value": "eos200dii"},
                {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
                {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
                {"label": "Video Resolution", "value": "1920 x 1080"},
                {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
                {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
            ]
        },
        {
            "id": 3,
            "name": "SeaRegal BPA Free Gym Bottle 2000 ml Bottle)",
            "shortDescription": "Hygienic bottle: the bottle is made of 100% food grade polypropylene (pp) material from source which ensures a safer drinking than pet bottles",
            "description": "Sport Gym Water Bottle Motivational Water Gallon Bottle with Time Marker Large Capacity 2000ML, Leak-proof BPA Free Fitness Sports Water Bottle Capacity Marker & Lightweight: This 2000ml water bottles with capacity markers, translucent bottle can see your daily water consumption. Remind you to stay hydrated and drink enough water, better achieve fitness goals. It is also lightweight but durable to use. Perfect for running, hiking, cycling, travel and any outdoor activities. BPA FREE & Convenient Design: US1984 Gallon water bottle with capacity marker is made of quality food-grade plastic, 100% BPA & TOXIN FREE, odour free and healthy for your daily water drinking. The sports water bottle featured with a portable wrist strap design, which makes you easier to carry the water bottle to anywhere. Ideal Gift Choice & Use Tips: This 2 liter large capacity and a variety of bright colors motivational sports water bottles is the best gift for yourself, friends, kids, family, colleagues, women and men who enjoy a healthy lifestyle gift, help them keep hydrated and healthy! Use tips: Do not drop it; Not dishwasher safe; Clean with baking soda and vinegar. This Water Bottle is ideal for sports enthusiasts to fit any indoor & outdoor activities",
            "flashSale": true,
            "addedToCart": false,
            "wishlisted": false,
            "image": "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "price": 650,
            "quantity": 0,
            "productType": "Food",
            "specifications": [
                {"label": "Brand", "value": "Canon"}, 
                {"label": "Model Number", "value": "EOS 200D II"}, 
                {"label": "Model Name", "value": "eos200dii"},
                {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
                {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
                {"label": "Video Resolution", "value": "1920 x 1080"},
                {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
                {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
            ]
        },
        {
            "id": 4,
            "name": "Pentax K-3 Mark III DSLR Camera Black",
            "shortDescription": "1 Camera Body, Strap O-ST162, ME View Finder Cap, Rechargeable Lithium-ion Battery D-LI90, USB Power Adapter, Power Plug, USB Cable I-USB166",
            "description": "USB Terminal (USB Type-C), External Cable Switch Terminal (2.5 mm Diameter), X-sync Socket, HDMI Output Terminal (Type D), Stereo Microphone Input Terminal, Headphone Terminal",
            "flashSale": true,
            "addedToCart": false,
            "wishlisted": false,
            "image": "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "price": 908,
            "quantity": 0,
            "productType": "Electronics",
            "specifications": [
                {"label": "Brand", "value": "Canon"}, 
                {"label": "Model Number", "value": "EOS 200D II"}, 
                {"label": "Model Name", "value": "eos200dii"},
                {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
                {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
                {"label": "Video Resolution", "value": "1920 x 1080"},
                {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
                {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
            ]
        },
        {
            "id": 5,
            "name": "Godrej Peppermint, Jasmine, Lavender Spray",
            "shortDescription": "Contains 3 units of Godrej aer spray - Room freshener (240ml). Disinfectant Spray for Multi-Surfaces Triple protection against virus, bacteria and germs",
            "description": "Long lasting fragrance, that works with a simple push Can be used anywhere - Bedroom, Living Room, Workspaces & Public Spaces Available in 5 fragrance variants - Cool Surf Blue, Morning Misty Meadows, Fresh Lush Green, Musk After Smoke and Petal Crush Pink",
            "flashSale": true,
            "addedToCart": false,
            "wishlisted": false,
            "image": "https://images.pexels.com/photos/3616984/pexels-photo-3616984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=22",
            "price": 450,
            "quantity": 0,
            "productType": "Beauty & personal care",
            "specifications": [
                {"label": "Brand", "value": "Canon"}, 
                {"label": "Model Number", "value": "EOS 200D II"}, 
                {"label": "Model Name", "value": "eos200dii"},
                {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
                {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
                {"label": "Video Resolution", "value": "1920 x 1080"},
                {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
                {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
            ]
        },
        {
            "id": 6,
            "name": "FRECK OG, THE ORIGINAL FRECKLE",
            "shortDescription": "The World's First Freckle Cosmetic that took the internet by storm. FRECK OG boasts the most natural, longest lasting faux freckles on the market. Quick, realistic, buildable, and your new bff.",
            "description": "The World's First Freckle Cosmetic that took the internet by storm. FRECK OG boasts the most natural, longest lasting faux freckles on the market. Quick, realistic, buildable, and your new bff. Lightly apply FRECK OG as a cluster of dots, dipping your brush often. Allow formula to sit and develop naturally on your skin. Here's where the magic happens: copy/paste your frecks by tapping them out across your skin. FRECK OG is compatible with all skin tones and looks best on darker skin when left longer before tapping. Pro tip: lots of space between each tap will create the most natural freckles with the quickest application",
            "flashSale": true,
            "addedToCart": false,
            "wishlisted": false,
            "image": "https://images.pexels.com/photos/2622187/pexels-photo-2622187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "price": 786,
            "quantity": 0,
            "productType": "Beauty & personal care",
            "specifications": [
                {"label": "Brand", "value": "Canon"}, 
                {"label": "Model Number", "value": "EOS 200D II"}, 
                {"label": "Model Name", "value": "eos200dii"},
                {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
                {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
                {"label": "Video Resolution", "value": "1920 x 1080"},
                {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
                {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
            ]
        },
        {
            "id": 7,
            "name": "COACH Floral Eau de Parfum - 50 ml",
            "shortDescription": "Coach Floral Eau De Parfum Is Inspired By Coach’S Signature Leather Tea Roses. The Feminine Scent Opens With A Splash Of Citrus Coeur And A Touch Of Effervescent Pink Peppercorn With Radiant Sorbet.",
            "description": "Coach Floral Eau De Parfum Is Inspired By Coach’S Signature Leather Tea Roses. The Feminine Scent Opens With A Splash Of Citrus Coeur And A Touch Of Effervescent Pink Peppercorn With Radiant Pineapple Sorbet. The Heart Reveals A Bouquet Of Fragrant Flowers—Rose Tea, Jasmine Sambac And Gardenia—Before An Enveloping Dry-Down To Elegant Creamy Wood, Patchouli Essence And Musky Notes. This Unique Fragrance Perfectly Embodies Coach’S Feminine, Free Spirit.",
            "flashSale": true,
            "addedToCart": false,
            "wishlisted": false,
            "image": "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "price": 345,
            "quantity": 0,
            "productType": "Electronics",
            "specifications": [
                {"label": "Brand", "value": "Canon"}, 
                {"label": "Model Number", "value": "EOS 200D II"}, 
                {"label": "Model Name", "value": "eos200dii"},
                {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
                {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
                {"label": "Video Resolution", "value": "1920 x 1080"},
                {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
                {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
            ]
        },
        {
            "id": 8,
            "name": "MEDITERRANEAN PINE FOREST",
            "shortDescription": "Dry summer heat, a soft sea breeze, sun shimmering through green needles. Hot dry pine bark, resin pouring from gnarled tree trunks, glistening in the afternoon sun.",
            "description": "Dry summer heat, a soft sea breeze, sun shimmering through green needles. Hot dry pine bark, resin pouring from gnarled tree trunks, glistening in the afternoon sun. Sparkling turquoise waves carrying the breath of the Mediterranean Sea. The air saturated with the fresh herbal scent of the arid forest undergrowth. Capturing the scent of a sunny coastal forest.",
            "flashSale": true,
            "addedToCart": false,
            "wishlisted": false,
            "image": "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "price": 234,
            "quantity": 0,
            "productType": "Beauty & personal care",
            "specifications": [
                {"label": "Brand", "value": "Canon"}, 
                {"label": "Model Number", "value": "EOS 200D II"}, 
                {"label": "Model Name", "value": "eos200dii"},
                {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
                {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
                {"label": "Video Resolution", "value": "1920 x 1080"},
                {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
                {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
            ]
        },
        {
            "id": 9,
            "name": "GUITAR PICK SET ROMBO ORIGAMI (4 GUITAR PICKS) - 0,75 MM",
            "shortDescription": "Flexible but still rigid enough for note control. Right amount of flexibility for a snappy fluid attack that's bright and crisp. The concave surface on the hold area ensures an ergonomic and comfortable hold.",
            "description": "Flexible but still rigid enough for note control. Right amount of flexibility for a snappy fluid attack that's bright and crisp. The concave surface on the hold area ensures an ergonomic and comfortable hold. We believe shapes, materials, and textures are completely essential to fully control every chord. Guitar picks can help us achieve this. When it comes to guitar picks there are four main attributes: thickness, shape, material, and size. These attributes define 80% percent of a guitar pick. However, the last 20%, contains improvements, and attention to detail, making the playing experience much more comfortable, giving you better results, and a more enjoyable playing experience. These aspects are essential to get the most out of this guitar accessory.",
            "flashSale": true,
            "addedToCart": false,
            "wishlisted": false,
            "image": "https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "price": 654,
            "quantity": 0,
            "productType": "Games",
            "specifications": [
                {"label": "Brand", "value": "Canon"}, 
                {"label": "Model Number", "value": "EOS 200D II"}, 
                {"label": "Model Name", "value": "eos200dii"},
                {"label": "SLR Variant", "value": "EF-S18-55mm IS STM"},
                {"label": "Image Format", "value": "JPEG, RAW, C-RAW, RAW + JPEG, C-RAW + JPEG"},
                {"label": "Video Resolution", "value": "1920 x 1080"},
                {"label": "Warranty Summaryr", "value": "2 Year Warranty (1 year standard warranty + 1 year additional warranty from the date of purchase made by the customer.)"},
                {"label": "Covered in Warranty", "value": "Warranty of the Product is Limited to Only Manufacturing Defect on Camera Body and Lens"}
            ]
        }
    ];
const history = [
    {
        "orderDate": 1684422717000,
        "orderId": 2,
        "total": 900,
        "products": [
            {
                "id": 8,
                "name": "MEDITERRANEAN PINE FOREST",
                "shortDescription": "Dry summer heat, a soft sea breeze, sun shimmering through green needles. Hot dry pine bark, resin pouring from gnarled tree trunks, glistening in the afternoon sun.",
                "description": "Dry summer heat, a soft sea breeze, sun shimmering through green needles. Hot dry pine bark, resin pouring from gnarled tree trunks, glistening in the afternoon sun. Sparkling turquoise waves carrying the breath of the Mediterranean Sea. The air saturated with the fresh herbal scent of the arid forest undergrowth. Capturing the scent of a sunny coastal forest.",
                "flashSale": true,
                "addedToCart": false,
                "wishlisted": false,
                "image": "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "price": 234,
                "quantity": 0
            },
            {
                "id": 9,
                "name": "GUITAR PICK SET ROMBO ORIGAMI (4 GUITAR PICKS) - 0,75 MM",
                "shortDescription": "Flexible but still rigid enough for note control. Right amount of flexibility for a snappy fluid attack that's bright and crisp. The concave surface on the hold area ensures an ergonomic and comfortable hold.",
                "description": "Flexible but still rigid enough for note control. Right amount of flexibility for a snappy fluid attack that's bright and crisp. The concave surface on the hold area ensures an ergonomic and comfortable hold. We believe shapes, materials, and textures are completely essential to fully control every chord. Guitar picks can help us achieve this. When it comes to guitar picks there are four main attributes: thickness, shape, material, and size. These attributes define 80% percent of a guitar pick. However, the last 20%, contains improvements, and attention to detail, making the playing experience much more comfortable, giving you better results, and a more enjoyable playing experience. These aspects are essential to get the most out of this guitar accessory.",
                "flashSale": true,
                "addedToCart": false,
                "wishlisted": false,
                "image": "https://images.pexels.com/photos/3801990/pexels-photo-3801990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "price": 654,
                "quantity": 0
            }
        ]
    },
    {
        "orderDate": 1678495830000,
        "orderId": 1,
        "total": 600,
        "products": [
            {
                "id": 7,
                "name": "COACH Floral Eau de Parfum - 50 ml",
                "shortDescription": "Coach Floral Eau De Parfum Is Inspired By Coach’S Signature Leather Tea Roses. The Feminine Scent Opens With A Splash Of Citrus Coeur And A Touch Of Effervescent Pink Peppercorn With Radiant Sorbet.",
                "description": "Coach Floral Eau De Parfum Is Inspired By Coach’S Signature Leather Tea Roses. The Feminine Scent Opens With A Splash Of Citrus Coeur And A Touch Of Effervescent Pink Peppercorn With Radiant Pineapple Sorbet. The Heart Reveals A Bouquet Of Fragrant Flowers—Rose Tea, Jasmine Sambac And Gardenia—Before An Enveloping Dry-Down To Elegant Creamy Wood, Patchouli Essence And Musky Notes. This Unique Fragrance Perfectly Embodies Coach’S Feminine, Free Spirit.",
                "flashSale": true,
                "addedToCart": false,
                "wishlisted": false,
                "image": "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "price": 345,
                "quantity": 0
            },
            {
                "id": 8,
                "name": "MEDITERRANEAN PINE FOREST",
                "shortDescription": "Dry summer heat, a soft sea breeze, sun shimmering through green needles. Hot dry pine bark, resin pouring from gnarled tree trunks, glistening in the afternoon sun.",
                "description": "Dry summer heat, a soft sea breeze, sun shimmering through green needles. Hot dry pine bark, resin pouring from gnarled tree trunks, glistening in the afternoon sun. Sparkling turquoise waves carrying the breath of the Mediterranean Sea. The air saturated with the fresh herbal scent of the arid forest undergrowth. Capturing the scent of a sunny coastal forest.",
                "flashSale": true,
                "addedToCart": false,
                "wishlisted": false,
                "image": "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "price": 234,
                "quantity": 0
            }
        ]
    }
]
function configureStore(state = { products: products, cart: [], wishlist: [], filterData: products, cartItems: 0, history: history}) {
    return createStore(appReducer,state);
}

export default configureStore;