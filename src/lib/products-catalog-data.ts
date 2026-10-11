export type CatalogProduct = {
  id: string;
  code: string;
  slug: string;
  name: string;
  category: string;
  stock: string;
  image: string;
  specs: Record<string, string>;
  specs_raw: string[];
};

export const PRODUCTS_CATALOG: CatalogProduct[] = [
  {
    "id": "545",
    "code": "SMI 1",
    "slug": "smi-1",
    "name": "TAPER SMALL ICE BUCKET",
    "category": "Ice Buckets",
    "stock": "\\r\\n 00 sets\\r\\n",
    "image": "img/products/smi-1.jpg",
    "specs": {
      "Weight": "850 gm",
      "Height": "162 mm",
      "Base Die": "115 mm",
      "Upper Die": "163 mm"
    },
    "specs_raw": [
      "Weight - 850 gm",
      "Height - 162 mm",
      "Base Die- 115 mm",
      "Upper Die- 163 mm"
    ]
  },
  {
    "id": "548",
    "code": "SMI 2",
    "slug": "smi-2",
    "name": "TAPPER BIG ICE BUCKET",
    "category": "Ice Buckets",
    "stock": "\\r\\n2100 sets\\r\\n",
    "image": "img/products/smi-2.jpg",
    "specs": {
      "Weight": "1.070 kg",
      "Height": "190 mm",
      "Base Die": "124 mm",
      "Upper Die": "183 mm"
    },
    "specs_raw": [
      "Weight - 1.070 kg",
      "Height - 190 mm",
      "Base Die- 124 mm",
      "Upper Die- 183 mm"
    ]
  },
  {
    "id": "551",
    "code": "SMI 3",
    "slug": "smi-3",
    "name": "ICE BUCKET 6 X 6",
    "category": "Ice Buckets",
    "stock": "\\r\\n2000 sets\\r\\n",
    "image": "img/products/smi-3.jpg",
    "specs": {
      "Weight": "678 gm",
      "Height": "152 mm",
      "Base Die": "150 mm",
      "Upper Die": "152 mm"
    },
    "specs_raw": [
      "Weight - 678 gm",
      "Height - 152 mm",
      "Base Die- 150 mm",
      "Upper Die- 152 mm"
    ]
  },
  {
    "id": "553",
    "code": "SMI 4",
    "slug": "smi-4",
    "name": "ICE BUCKET 7 X 7",
    "category": "Ice Buckets",
    "stock": "\\r\\n2000 sets\\r\\n",
    "image": "img/products/smi-4.jpg",
    "specs": {
      "Weight": "940 gm",
      "Height": "178 mm",
      "Base Die": "175 mm",
      "Upper Die": "180 mm"
    },
    "specs_raw": [
      "Weight\t-\t940 gm",
      "Height\t-\t178 mm",
      "Base Die-\t175 mm",
      "Upper Die-\t180 mm"
    ]
  },
  {
    "id": "555",
    "code": "SMI 5",
    "slug": "smi-5",
    "name": "ICE BUCKET 8 X 8 1/2",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-5.jpg",
    "specs": {
      "Weight": "1.4 kg",
      "Height": "202 mm",
      "Base Die": "215 mm",
      "Upper Die": "218 mm"
    },
    "specs_raw": [
      "Weight\t-\t1.4 kg",
      "Height\t-\t202 mm",
      "Base Die-\t215 mm",
      "Upper Die-\t218 mm"
    ]
  },
  {
    "id": "557",
    "code": "SMI 6",
    "slug": "smi-6",
    "name": "WINE CHILLER 13+15",
    "category": "Barware",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-6.jpg",
    "specs": {
      "Weight": "573 gm",
      "Height": "200 mm",
      "Base Die": "115 mm",
      "Upper Die": "120 mm"
    },
    "specs_raw": [
      "Weight\t-\t573 gm",
      "Height\t-\t200 mm",
      "Base Die-\t115 mm",
      "Upper Die-\t120 mm"
    ]
  },
  {
    "id": "559",
    "code": "SMI 7",
    "slug": "smi-7",
    "name": "BIG CUTLERY HOLDER",
    "category": "Cutlery Holders",
    "stock": "\\r\\n1500 pcs\\r\\n",
    "image": "img/products/smi-7.jpg",
    "specs": {
      "Weight": "627 gm",
      "Height": "180 mm",
      "Base Die": "165 mm",
      "Upper Die": "178 mm B to B"
    },
    "specs_raw": [
      "Weight\t-\t627 gm",
      "Height\t-\t180 mm",
      "Base Die-\t165 mm",
      "Upper Die-\t178 mm B to B"
    ]
  },
  {
    "id": "561",
    "code": "SMI 8",
    "slug": "smi-8",
    "name": "SMALL CUTLERY HOLDER",
    "category": "Cutlery Holders",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-8.jpg",
    "specs": {
      "Weight": "410 gm",
      "Height": "155 mm",
      "Base Die": "130 mm",
      "Upper Die": "B to B:130mm"
    },
    "specs_raw": [
      "Weight\t-\t410 gm",
      "Height\t-\t155 mm",
      "Base Die-\t130 mm",
      "Upper Die-\tB to B:130mm"
    ]
  },
  {
    "id": "563",
    "code": "SMI 9",
    "slug": "smi-9",
    "name": "BIG DIBBA 10\"",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-9.jpg",
    "specs": {
      "Weight": "862 gm",
      "Height": "254 mm",
      "Base Die": "190 mm",
      "Upper Die": "203 mm"
    },
    "specs_raw": [
      "Weight\t-\t862 gm",
      "Height\t-\t254 mm",
      "Base Die-\t190 mm",
      "Upper Die-\t203 mm"
    ]
  },
  {
    "id": "565",
    "code": "SMI 10",
    "slug": "smi-10",
    "name": "MULE MUG",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-10.jpg",
    "specs": {
      "Weight": "147 gm",
      "Height": "37 mm",
      "Base Die": "60 mm",
      "Upper Die": "60 mm"
    },
    "specs_raw": [
      "Weight\t-\t147 gm",
      "Height\t-\t37 mm",
      "Base Die-\t60 mm",
      "Upper Die-\t60 mm"
    ]
  },
  {
    "id": "567",
    "code": "SMI 11",
    "slug": "smi-11",
    "name": "INNER",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-11.jpg",
    "specs": {
      "Weight": "864 gm",
      "Height": "234 mm",
      "Base Die": "193  mm",
      "Upper Die": "212 mm"
    },
    "specs_raw": [
      "Weight\t-\t864 gm",
      "Height\t-\t234 mm",
      "Base Die-\t193  mm",
      "Upper Die-\t212 mm"
    ]
  },
  {
    "id": "569",
    "code": "SMI 12",
    "slug": "smi-12",
    "name": "CHIP CUP",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n900 pcs\\r\\n",
    "image": "img/products/smi-12.jpg",
    "specs": {
      "Weight": "123 gm",
      "Height": "90 mm",
      "Base Die": "73 mm",
      "Upper Die": "88 mm"
    },
    "specs_raw": [
      "Weight\t-\t123 gm",
      "Height\t-\t90 mm",
      "Base Die-\t73 mm",
      "Upper Die-\t88 mm"
    ]
  },
  {
    "id": "571",
    "code": "SMI 13",
    "slug": "smi-13",
    "name": "MULE MUG BIDDING",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-13.jpg",
    "specs": {
      "Weight": "182 gm",
      "Height": "95 mm",
      "Base Die": "85 mm",
      "Upper Die": "95 mm"
    },
    "specs_raw": [
      "Weight\t-\t182 gm",
      "Height\t-\t95 mm",
      "Base Die-\t85 mm",
      "Upper Die-\t95 mm"
    ]
  },
  {
    "id": "573",
    "code": "SMI 15",
    "slug": "smi-15",
    "name": "TAPER MUG",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-15.jpg",
    "specs": {
      "Weight": "104 gm",
      "Height": "100 mm",
      "Base Die": "70 mm",
      "Upper Die": "105 mm"
    },
    "specs_raw": [
      "Weight\t-\t104 gm",
      "Height\t-\t100 mm",
      "Base Die-\t70 mm",
      "Upper Die-\t105 mm"
    ]
  },
  {
    "id": "575",
    "code": "SMI 16",
    "slug": "smi-16",
    "name": "MULE MUG",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n4100 pcs\\r\\n",
    "image": "img/products/smi-16.jpg",
    "specs": {
      "Weight": "156 gm",
      "Height": "104 mm",
      "Base Die": "60 mm",
      "Upper Die": "88 mm"
    },
    "specs_raw": [
      "Weight\t-\t156 gm",
      "Height\t-\t104 mm",
      "Base Die-\t60 mm",
      "Upper Die-\t88 mm"
    ]
  },
  {
    "id": "724",
    "code": "SMI 16",
    "slug": "smi-16-2",
    "name": "MUG SETS",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n4100 pcs\\r\\n",
    "image": "img/products/smi-16-2.jpg",
    "specs": {
      "Weight": "250 gm",
      "Height": "153 mm",
      "Base Die": "125 mm",
      "Upper Die": "B to B:135 mm"
    },
    "specs_raw": [
      "Weight\t-\t250 gm",
      "Height\t-\t153 mm",
      "Base Die-\t125 mm",
      "Upper Die-\tB to B:135 mm"
    ]
  },
  {
    "id": "577",
    "code": "SMI 18-A",
    "slug": "smi-18-a",
    "name": "BEAR MUG",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-18-a.jpg",
    "specs": {
      "Weight": "139 gm",
      "Height": "115 mm",
      "Base Die": "70 mm",
      "Upper Die": "B to B:73 mm"
    },
    "specs_raw": [
      "Weight\t-\t139 gm",
      "Height\t-\t115 mm",
      "Base Die-\t70 mm",
      "Upper Die-\tB to B:73 mm"
    ]
  },
  {
    "id": "579",
    "code": "SMI-18-B",
    "slug": "smi-18-b",
    "name": "Weight - 158 gm",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-18-b.jpg",
    "specs": {
      "Height": "140 mm",
      "Base Die": "80 mm",
      "Upper Die": "80 mm"
    },
    "specs_raw": [
      "Height - 140 mm",
      "Base Die- 80 mm",
      "Upper Die- 80 mm"
    ]
  },
  {
    "id": "581",
    "code": "SMI 19",
    "slug": "smi-19",
    "name": "TEA POT",
    "category": "Kalvat Pots & Utensils",
    "stock": "\\r\\n3000 pcs\\r\\n",
    "image": "img/products/smi-19.jpg",
    "specs": {
      "Weight": "98 gm",
      "Height": "75 mm",
      "Base Die": "95 mm",
      "Upper Die": "92 mm"
    },
    "specs_raw": [
      "Weight\t-\t98 gm",
      "Height\t-\t75 mm",
      "Base Die-\t95 mm",
      "Upper Die-\t92 mm"
    ]
  },
  {
    "id": "585",
    "code": "SMI 20",
    "slug": "smi-20",
    "name": "TEA POT",
    "category": "Kalvat Pots & Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-20.jpg",
    "specs": {
      "Weight": "144 gm",
      "Height": "91 mm",
      "Base Die": "100 mm",
      "Upper Die": "107 mm"
    },
    "specs_raw": [
      "Weight\t-\t144 gm",
      "Height\t-\t91 mm",
      "Base Die-\t100 mm",
      "Upper Die-      107 mm"
    ]
  },
  {
    "id": "587",
    "code": "SMI 21",
    "slug": "smi-21",
    "name": "GLASS ROYAL",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n3400 pcs\\r\\n",
    "image": "img/products/smi-21.jpg",
    "specs": {
      "Weight": "113 gm",
      "Height": "123 mm",
      "Base Die": "65 mm",
      "Upper Die": "73 mm"
    },
    "specs_raw": [
      "Weight\t-\t113 gm",
      "Height\t-\t123 mm",
      "Base Die-\t65 mm",
      "Upper Die-\t73 mm"
    ]
  },
  {
    "id": "589",
    "code": "SMI 22",
    "slug": "smi-22",
    "name": "GLASS ROYAL",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n1100 pcs\\r\\n",
    "image": "img/products/smi-22.jpg",
    "specs": {
      "Weight": "113 gm",
      "Height": "123 mm",
      "Base Die": "65 mm",
      "Upper Die": "73 mm"
    },
    "specs_raw": [
      "Weight\t-\t113 gm",
      "Height\t-\t123 mm",
      "Base Die-\t65 mm",
      "Upper Die-\t73 mm"
    ]
  },
  {
    "id": "591",
    "code": "SMI 23",
    "slug": "smi-23",
    "name": "GLASS A.M.P",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-23.jpg",
    "specs": {
      "Weight": "95 gm",
      "Height": "126 mm",
      "Base Die": "63 mm",
      "Upper Die": "67 mm"
    },
    "specs_raw": [
      "Weight\t-\t95 gm",
      "Height\t-\t126 mm",
      "Base Die-\t63 mm",
      "Upper Die-\t67 mm"
    ]
  },
  {
    "id": "593",
    "code": "SMI 24",
    "slug": "smi-24",
    "name": "GLASS ROYAL",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-24.jpg",
    "specs": {
      "Weight": "95 gm",
      "Height": "125 mm",
      "Base Die": "63 mm",
      "Upper Die": "67 mm"
    },
    "specs_raw": [
      "Weight\t-\t95 gm",
      "Height\t-\t125 mm",
      "Base Die-\t63 mm",
      "Upper Die-\t67 mm"
    ]
  },
  {
    "id": "595",
    "code": "SMI 25",
    "slug": "smi-25",
    "name": "INNER UPPER",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n6300 pcs\\r\\n",
    "image": "img/products/smi-25.jpg",
    "specs": {
      "Weight": "165 gm",
      "Height": "124 mm",
      "Base Die": "76 mm",
      "Upper Die": "80 mm"
    },
    "specs_raw": [
      "Weight\t-\t165 gm",
      "Height\t-\t124 mm",
      "Base Die-\t76 mm",
      "Upper Die-\t80 mm"
    ]
  },
  {
    "id": "597",
    "code": "SMI 26",
    "slug": "smi-26",
    "name": "MULE MUG",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n1300 pcs\\r\\n",
    "image": "img/products/smi-26.jpg",
    "specs": {
      "Weight": "157 gm",
      "Height": "94 mm",
      "Base Die": "85 mm",
      "Upper Die": "92 mm"
    },
    "specs_raw": [
      "Weight\t-\t157 gm",
      "Height\t-\t94 mm",
      "Base Die-\t85 mm",
      "Upper Die-\t92 mm"
    ]
  },
  {
    "id": "599",
    "code": "SMI 29",
    "slug": "smi-29",
    "name": "ICE BUCKET 7 X 63/4",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-29.jpg",
    "specs": {
      "Weight": "940 gm",
      "Height": "181 mm",
      "Base Die": "168  mm",
      "Upper Die": "171 mm"
    },
    "specs_raw": [
      "Weight\t-\t940 gm",
      "Height\t-\t181 mm",
      "Base Die-\t168  mm",
      "Upper Die-\t171 mm"
    ]
  },
  {
    "id": "601",
    "code": "SMI 30.1",
    "slug": "smi-30-1",
    "name": "MULE MUG",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-30-1.jpg",
    "specs": {
      "Weight": "182 gm",
      "Height": "110 mm",
      "Base Die": "85 mm",
      "Upper Die": "95 mm"
    },
    "specs_raw": [
      "Weight\t-\t182 gm",
      "Height\t-\t110 mm",
      "Base Die-\t85 mm",
      "Upper Die-\t95 mm"
    ]
  },
  {
    "id": "603",
    "code": "SMI 30",
    "slug": "smi-30",
    "name": "MUG SETS",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-30.jpg",
    "specs": {
      "Weight": "120 gm",
      "Height": "108 mm",
      "Base Die": "99 mm",
      "Upper Die": "101 mm"
    },
    "specs_raw": [
      "Weight\t-\t120 gm",
      "Height\t-\t108 mm",
      "Base Die-\t99 mm",
      "Upper Die-\t101 mm"
    ]
  },
  {
    "id": "605",
    "code": "SMI 30",
    "slug": "smi-30-2",
    "name": "ICE BUCKET",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-30-2.jpg",
    "specs": {
      "Weight": "434 gm",
      "Height": "152 mm",
      "Base Die": "150 mm",
      "Upper Die": "152 mm"
    },
    "specs_raw": [
      "Weight\t-\t434 gm",
      "Height\t-\t152 mm",
      "Base Die-\t150 mm",
      "Upper Die-\t152 mm"
    ]
  },
  {
    "id": "607",
    "code": "SMI 31",
    "slug": "smi-31",
    "name": "Measuring Cup Small",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-31.jpg",
    "specs": {
      "Weight": "434 gm",
      "Height": "152 mm",
      "Base Die": "150 mm",
      "Upper Die": "152 mm"
    },
    "specs_raw": [
      "Weight\t-\t434 gm",
      "Height\t-\t152 mm",
      "Base Die-\t150 mm",
      "Upper Die-\t152 mm"
    ]
  },
  {
    "id": "609",
    "code": "SMI 32",
    "slug": "smi-32",
    "name": "Measuring Cup Medium",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-32.jpg",
    "specs": {
      "Weight": "52 gm",
      "Height": "28 mm",
      "Base Die": "61.5 mm",
      "Upper Die": "61.5 mm"
    },
    "specs_raw": [
      "Weight\t-\t52 gm",
      "Height\t-\t28 mm",
      "Base Die-\t61.5 mm",
      "Upper Die-\t61.5 mm"
    ]
  },
  {
    "id": "611",
    "code": "SMI 33",
    "slug": "smi-33",
    "name": "Measuring Cup Big",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-33.jpg",
    "specs": {
      "Weight": "78 gm",
      "Height": "32 mm",
      "Base Die": "72 mm",
      "Upper Die": "72 mm"
    },
    "specs_raw": [
      "Weight\t-\t78 gm",
      "Height\t-\t32 mm",
      "Base Die-\t72 mm",
      "Upper Die-\t72 mm"
    ]
  },
  {
    "id": "613",
    "code": "SMI 34",
    "slug": "smi-34",
    "name": "Measuring Cup Large",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-34.jpg",
    "specs": {
      "Weight": "110 gm",
      "Height": "47 mm",
      "Base Die": "81.5 mm",
      "Upper Die": "81.5 mm"
    },
    "specs_raw": [
      "Weight\t-\t110 gm",
      "Height\t-\t47 mm",
      "Base Die-\t81.5 mm",
      "Upper Die-\t81.5 mm"
    ]
  },
  {
    "id": "615",
    "code": "SMI 35",
    "slug": "smi-35",
    "name": "CANISTER SETS",
    "category": "Milk Cans",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-35.jpg",
    "specs": {
      "Weight": "234 gm",
      "Height": "105 mm",
      "Base Die": "90 mm",
      "Upper Die": "100 mm"
    },
    "specs_raw": [
      "Weight\t-\t234 gm",
      "Height\t-\t105 mm",
      "Base Die\t-\t90 mm",
      "Upper Die\t-\t100 mm"
    ]
  },
  {
    "id": "617",
    "code": "SMI 36",
    "slug": "smi-36",
    "name": "CANISTER SETS",
    "category": "Milk Cans",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-36.jpg",
    "specs": {
      "Weight": "315 gm",
      "Height": "128 mm",
      "Base Die": "110 mm",
      "Upper Die": "B to B:-119mm"
    },
    "specs_raw": [
      "Weight\t-\t315 gm",
      "Height\t-\t128 mm",
      "Base Die-\t110 mm",
      "Upper Die-\tB to B:-119mm"
    ]
  },
  {
    "id": "619",
    "code": "SMI 37",
    "slug": "smi-37",
    "name": "CANISTER SETS",
    "category": "Milk Cans",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-37.jpg",
    "specs": {
      "Weight": "404 gm",
      "Height": "152 mm",
      "Base Die": "135 mm",
      "Upper Die": "B to B:-143mm"
    },
    "specs_raw": [
      "Weight\t-\t404 gm",
      "Height\t-\t152 mm",
      "Base Die-\t135 mm",
      "Upper Die-\tB to B:-143mm"
    ]
  },
  {
    "id": "621",
    "code": "SMI 38",
    "slug": "smi-38",
    "name": "CANISTER SETS",
    "category": "Milk Cans",
    "stock": "\\r\\n2400 pcs\\r\\n",
    "image": "img/products/smi-38.jpg",
    "specs": {
      "Weight": "585 gm",
      "Height": "178 mm",
      "Base Die": "157 mm",
      "Upper Die": "B to B:-168mm"
    },
    "specs_raw": [
      "Weight\t-\t585 gm",
      "Height\t-\t178 mm",
      "Base Die-\t157 mm",
      "Upper Die-\tB to B:-168mm"
    ]
  },
  {
    "id": "623",
    "code": "SMI 39",
    "slug": "smi-39",
    "name": "CANISTER SETS",
    "category": "Milk Cans",
    "stock": "\\r\\n00 PCS\\r\\n",
    "image": "img/products/smi-39.jpg",
    "specs": {
      "Weight": "688 gm",
      "Height": "194 mm",
      "Base Die": "177 mm",
      "Upper Die": "184 mm"
    },
    "specs_raw": [
      "Weight\t-\t688 gm",
      "Height\t-\t194 mm",
      "Base Die-\t177 mm",
      "Upper Die-\t184 mm"
    ]
  },
  {
    "id": "625",
    "code": "SMI 40",
    "slug": "smi-40",
    "name": "CANISTER SETS",
    "category": "Milk Cans",
    "stock": "\\r\\n900 pcs\\r\\n",
    "image": "img/products/smi-40.jpg",
    "specs": {
      "Weight": "795 gm",
      "Height": "205 mm",
      "Base Die": "194 mm",
      "Upper Die": "202 mm"
    },
    "specs_raw": [
      "Weight\t-\t795 gm",
      "Height\t-\t205 mm",
      "Base Die-\t194 mm",
      "Upper Die-\t202 mm"
    ]
  },
  {
    "id": "627",
    "code": "SMI 41",
    "slug": "smi-41",
    "name": "CANISTER SETS",
    "category": "Milk Cans",
    "stock": "\\r\\n600 pcs\\r\\n",
    "image": "img/products/smi-41.jpg",
    "specs": {
      "Weight": "969 gm",
      "Height": "220 mm",
      "Base Die": "214 mm",
      "Upper Die": "220 mm"
    },
    "specs_raw": [
      "Weight\t-\t969 gm",
      "Height\t-\t220 mm",
      "Base Die-\t214 mm",
      "Upper Die-\t220 mm"
    ]
  },
  {
    "id": "629",
    "code": "SMI 42",
    "slug": "smi-42",
    "name": "4 QUART ICE BUCKET",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-42.jpg",
    "specs": {
      "Weight": "1.130 kg",
      "Height": "194 mm",
      "Base Die": "192 mm",
      "Upper Die": "B to B:-196mm"
    },
    "specs_raw": [
      "Weight\t-\t1.130 kg",
      "Height\t-\t194 mm",
      "Base Die-\t192 mm",
      "Upper Die-\tB to B:-196mm"
    ]
  },
  {
    "id": "631",
    "code": "SMI 43",
    "slug": "smi-43",
    "name": "BIG BALTI TAPER",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n1200 pcs\\r\\n",
    "image": "img/products/smi-43.jpg",
    "specs": {
      "Weight": "700 gm",
      "Height": "265 mm",
      "Base Die": "175 mm",
      "Upper Die": "254  mm"
    },
    "specs_raw": [
      "Weight\t-\t700 gm",
      "Height\t-\t265 mm",
      "Base Die-\t175 mm",
      "Upper Die-\t254  mm"
    ]
  },
  {
    "id": "633",
    "code": "SMI 44",
    "slug": "smi-44",
    "name": "INNER BIDDING SMALL POT",
    "category": "Kalvat Pots & Utensils",
    "stock": "\\r\\n700 pcs\\r\\n",
    "image": "img/products/smi-44.jpg",
    "specs": {
      "Weight": "200 gm",
      "Height": "180 mm",
      "Base Die": "103  mm",
      "Upper Die": "100 mm"
    },
    "specs_raw": [
      "Weight\t-\t200 gm",
      "Height\t-\t180 mm",
      "Base Die-\t103  mm",
      "Upper Die-\t100 mm"
    ]
  },
  {
    "id": "635",
    "code": "SMI 45",
    "slug": "smi-45",
    "name": "INNER BIDDING BIG POT",
    "category": "Kalvat Pots & Utensils",
    "stock": "\\r\\n1800 pcs\\r\\n",
    "image": "img/products/smi-45.jpg",
    "specs": {
      "Weight": "217 gm",
      "Height": "159 mm",
      "Base Die": "114  mm",
      "Upper Die": "119 mm"
    },
    "specs_raw": [
      "Weight\t-\t217 gm",
      "Height\t-\t159 mm",
      "Base Die-\t114  mm",
      "Upper Die-\t119 mm"
    ]
  },
  {
    "id": "637",
    "code": "SMI 46",
    "slug": "smi-46",
    "name": "CANISTERS T.S.C",
    "category": "Milk Cans",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-46.jpg",
    "specs": {
      "Weight": "298 gm",
      "Height": "132 mm",
      "Base Die": "94 mm",
      "Upper Die": "B to B:-92mm"
    },
    "specs_raw": [
      "Weight\t-\t298 gm",
      "Height\t-\t132 mm",
      "Base Die-\t94 mm",
      "Upper Die-\tB to B:-92mm"
    ]
  },
  {
    "id": "639",
    "code": "SMI 47",
    "slug": "smi-47",
    "name": "TAPPER BALTI",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n300 pcs\\r\\n",
    "image": "img/products/smi-47.jpg",
    "specs": {
      "Weight": "298 gm",
      "Height": "132 mm",
      "Base Die": "94 mm",
      "Upper Die": "B to B:-92mm"
    },
    "specs_raw": [
      "Weight\t-\t298 gm",
      "Height\t-\t132 mm",
      "Base Die-\t94 mm",
      "Upper Die-\tB to B:-92mm"
    ]
  },
  {
    "id": "641",
    "code": "SMI 48",
    "slug": "smi-48",
    "name": "APPLE BALTI",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-48.jpg",
    "specs": {
      "Weight": "610 gm",
      "Height": "144 mm",
      "Base Die": "180 mm",
      "Upper Die": "215 mm"
    },
    "specs_raw": [
      "Weight\t-\t610 gm",
      "Height\t-\t144 mm",
      "Base Die-\t180 mm",
      "Upper Die-\t215 mm"
    ]
  },
  {
    "id": "643",
    "code": "SMI 49",
    "slug": "smi-49",
    "name": "SMALL TAPER BALTI",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-49.jpg",
    "specs": {
      "Weight": "455 gm",
      "Height": "145 mm",
      "Base Die": "175 mm",
      "Upper Die": "225 mm"
    },
    "specs_raw": [
      "Weight\t-\t455 gm",
      "Height\t-\t145 mm",
      "Base Die-\t175 mm",
      "Upper Die-\t225 mm"
    ]
  },
  {
    "id": "645",
    "code": "SMI 50",
    "slug": "smi-50",
    "name": "BIG CHIP CUP",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n1200 pcs\\r\\n",
    "image": "img/products/smi-50.jpg",
    "specs": {
      "Weight": "159 gm",
      "Height": "120 mm",
      "Base Die": "78 mm",
      "Upper Die": "95 mm"
    },
    "specs_raw": [
      "Weight\t-\t159 gm",
      "Height\t-\t120 mm",
      "Base Die-\t78 mm",
      "Upper Die-\t95 mm"
    ]
  },
  {
    "id": "647",
    "code": "SMI 51",
    "slug": "smi-51",
    "name": "DIBBI",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-51.jpg",
    "specs": {
      "Weight": "159 gm",
      "Height": "55 mm",
      "Base Die": "92 mm",
      "Upper Die": "90 mm"
    },
    "specs_raw": [
      "Weight\t-\t159 gm",
      "Height\t-\t55 mm",
      "Base Die-\t92 mm",
      "Upper Die-\t90 mm"
    ]
  },
  {
    "id": "649",
    "code": "SMI 52",
    "slug": "smi-52",
    "name": "ICE BUCKET  7 x 7  MINI",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-52.jpg",
    "specs": {
      "Weight": "780 gm",
      "Height": "134 mm",
      "Base Die": "175 mm",
      "Upper Die": "180 mm"
    },
    "specs_raw": [
      "Weight\t-\t780 gm",
      "Height\t-\t134 mm",
      "Base Die\t-\t175 mm",
      "Upper Die\t-\t180 mm"
    ]
  },
  {
    "id": "651",
    "code": "SMI 53",
    "slug": "smi-53",
    "name": "MINI ICE BUCKET 8x8 1/2",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-53.jpg",
    "specs": {
      "Weight": "1.100 kg",
      "Height": "172 mm",
      "Detail_3": "Base Die\t215 mm",
      "Upper Die": "218 mm"
    },
    "specs_raw": [
      "Weight\t-\t1.100 kg",
      "Height\t-\t172 mm",
      "Base Die\t215 mm",
      "Upper Die-\t218 mm"
    ]
  },
  {
    "id": "653",
    "code": "SMI 54",
    "slug": "smi-54",
    "name": "SALTER",
    "category": "Stainless Steel Utensils",
    "stock": "Made to Order",
    "image": "img/products/smi-54.jpg",
    "specs": {
      "Weight": "108 gm",
      "Height": "124 mm",
      "Base Die": "-",
      "Upper Die": "90 mm"
    },
    "specs_raw": [
      "Weight\t-\t108 gm",
      "Height\t-\t124 mm",
      "Base Die-\t-",
      "Upper Die-\t90 mm"
    ]
  },
  {
    "id": "655",
    "code": "SMI 55",
    "slug": "smi-55",
    "name": "KATORI",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n1500 pcs\\r\\n",
    "image": "img/products/smi-55.jpg",
    "specs": {
      "Weight": "76 gm",
      "Height": "48 mm",
      "Base Die": "-",
      "Upper Die": "116 mm"
    },
    "specs_raw": [
      "Weight\t-\t76 gm",
      "Height\t-\t48 mm",
      "Base Die-\t-",
      "Upper Die-\t116 mm"
    ]
  },
  {
    "id": "658",
    "code": "SMI 56",
    "slug": "smi-56",
    "name": "SMALL UTENSILS HOLDER",
    "category": "Cutlery Holders",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-56.jpg",
    "specs": {
      "Weight": "285 gm",
      "Height": "180 mm",
      "Base Die": "144 mm",
      "Upper Die": "126 mm"
    },
    "specs_raw": [
      "Weight\t-\t285 gm",
      "Height\t-\t180 mm",
      "Base Die-\t144 mm",
      "Upper Die-\t126 mm"
    ]
  },
  {
    "id": "661",
    "code": "SMI 57",
    "slug": "smi-57",
    "name": "MEDIUM UTENSILS HOLDER",
    "category": "Cutlery Holders",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-57.jpg",
    "specs": {
      "Weight": "347 gm",
      "Height": "180 mm",
      "Base Die": "135 mm",
      "Upper Die": "140 mm"
    },
    "specs_raw": [
      "Weight\t-\t347 gm",
      "Height\t-\t180 mm",
      "Base Die-\t135 mm",
      "Upper Die-\t140 mm"
    ]
  },
  {
    "id": "663",
    "code": "SMI 58",
    "slug": "smi-58",
    "name": "BIG UTENSILS HOLDER",
    "category": "Cutlery Holders",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-58.jpg",
    "specs": {
      "Weight": "418 gm",
      "Height": "180 mm",
      "Base Die": "160 mm",
      "Upper Die": "B to B: 163 mm"
    },
    "specs_raw": [
      "Weight\t-\t418 gm",
      "Height\t-\t180 mm",
      "Base Die-\t160 mm",
      "Upper Die-\tB to B: 163 mm"
    ]
  },
  {
    "id": "665",
    "code": "SMI 59",
    "slug": "smi-59",
    "name": "CHAMPANGE BUCKET DOUBLE WALL",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-59.jpg",
    "specs": {
      "Weight": "788 gm",
      "Height": "215 mm",
      "Base Die": "140 mm",
      "Upper Die": "200 mm"
    },
    "specs_raw": [
      "Weight\t-\t788 gm",
      "Height\t-\t215 mm",
      "Base Die-\t140 mm",
      "Upper Die-\t200 mm"
    ]
  },
  {
    "id": "667",
    "code": "SMI 60",
    "slug": "smi-60",
    "name": "CHAMPANGE BUCKET",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-60.jpg",
    "specs": {
      "Detail_1": "SINGLE WALL",
      "Weight": "400 gm",
      "Height": "216 mm",
      "Base Die": "153 mm",
      "Upper Die": "196 mm"
    },
    "specs_raw": [
      "SINGLE WALL",
      "Weight\t-\t400 gm",
      "Height\t-\t216 mm",
      "Base Die-\t153 mm",
      "Upper Die-\t196 mm"
    ]
  },
  {
    "id": "669",
    "code": "SMI 61",
    "slug": "smi-61",
    "name": "CHAMPANGE BUCKET",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-61.jpg",
    "specs": {
      "Detail_1": "SINGLE WALL",
      "Weight": "470 gm",
      "Height": "205 mm",
      "Base Die": "140 mm",
      "Upper Die": "210 mm"
    },
    "specs_raw": [
      "SINGLE WALL",
      "Weight\t-\t470 gm",
      "Height\t-\t205 mm",
      "Base Die-\t140 mm",
      "Upper Die-\t210 mm"
    ]
  },
  {
    "id": "671",
    "code": "SMI 62",
    "slug": "smi-62",
    "name": "SMALL MUG",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n1000 pcs\\r\\n",
    "image": "img/products/smi-62.jpg",
    "specs": {
      "Detail_1": "BOTTOM RING",
      "Weight": "85 gm",
      "Height": "81 mm",
      "Base Die": "47 mm",
      "Upper Die": "82 mm"
    },
    "specs_raw": [
      "BOTTOM RING",
      "Weight\t-\t85 gm",
      "Height\t-\t81 mm",
      "Base Die-\t47 mm",
      "Upper Die-\t82 mm"
    ]
  },
  {
    "id": "673",
    "code": "SMI 63",
    "slug": "smi-63",
    "name": "MEDIUM MUG",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n1300 pcs\\r\\n",
    "image": "img/products/smi-63.jpg",
    "specs": {
      "Detail_1": "BOTTOM RING",
      "Weight": "125 gm",
      "Height": "102 mm",
      "Base Die": "63 mm",
      "Upper Die": "99 mm"
    },
    "specs_raw": [
      "BOTTOM RING",
      "Weight\t-\t125 gm",
      "Height\t-\t102 mm",
      "Base Die-\t63 mm",
      "Upper Die-\t99 mm"
    ]
  },
  {
    "id": "675",
    "code": "SMI 64",
    "slug": "smi-64",
    "name": "CANISTOR SMALL",
    "category": "Milk Cans",
    "stock": "Made to Order",
    "image": "img/products/smi-64.jpg",
    "specs": {
      "Weight": "173 gm",
      "Height": "114 mm",
      "Base Die": "89 mm",
      "Upper Die": "98 mm"
    },
    "specs_raw": [
      "Weight\t-\t173 gm",
      "Height\t-\t114 mm",
      "Base Die-\t89 mm",
      "Upper Die-\t98 mm"
    ]
  },
  {
    "id": "677",
    "code": "SMI 65",
    "slug": "smi-65",
    "name": "CANISTOR MEDIUM",
    "category": "Milk Cans",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-65.jpg",
    "specs": {
      "Weight": "288 gm",
      "Height": "137 mm",
      "Base Die": "110 mm",
      "Upper Die": "121 mm"
    },
    "specs_raw": [
      "Weight\t-\t288 gm",
      "Height\t-\t137 mm",
      "Base Die-\t110 mm",
      "Upper Die-\t121 mm"
    ]
  },
  {
    "id": "679",
    "code": "SMI 66",
    "slug": "smi-66",
    "name": "CANISTOR BIG",
    "category": "Milk Cans",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-66.jpg",
    "specs": {
      "Weight": "328 gm",
      "Height": "152 mm",
      "Base Die": "127 mm",
      "Upper Die": "138 mm"
    },
    "specs_raw": [
      "Weight\t-\t328 gm",
      "Height\t-\t152 mm",
      "Base Die-\t127 mm",
      "Upper Die-\t138 mm"
    ]
  },
  {
    "id": "681",
    "code": "SMI 67",
    "slug": "smi-67",
    "name": "CANISTOR LARGE",
    "category": "Milk Cans",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-67.jpg",
    "specs": {
      "Weight": "659 gm",
      "Height": "178 mm",
      "Base Die": "165 mm",
      "Upper Die": "175 mm"
    },
    "specs_raw": [
      "Weight\t-\t659 gm",
      "Height\t-\t178 mm",
      "Base Die-\t165 mm",
      "Upper Die-\t175 mm"
    ]
  },
  {
    "id": "683",
    "code": "SMI 68",
    "slug": "smi-68",
    "name": "MUG WITH CURV BOTTOM",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-68.jpg",
    "specs": {
      "Weight": "180 gm",
      "Height": "120 mm",
      "Base Die": "85 mm",
      "Upper Die": "120 mm"
    },
    "specs_raw": [
      "Weight\t-\t180 gm",
      "Height\t-\t120 mm",
      "Base Die-\t85 mm",
      "Upper Die-\t120 mm"
    ]
  },
  {
    "id": "685",
    "code": "SMI 69",
    "slug": "smi-69",
    "name": "CANISTOR TAPER SMALL",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-69.jpg",
    "specs": {
      "Weight": "360 gm",
      "Height": "140 mm",
      "Base Die": "109 mm",
      "Upper Die": "122 mm"
    },
    "specs_raw": [
      "Weight\t-\t360 gm",
      "Height\t-\t140 mm",
      "Base Die-\t109 mm",
      "Upper Die-\t122 mm"
    ]
  },
  {
    "id": "687",
    "code": "SMI 70",
    "slug": "smi-70",
    "name": "CANISTOR TAPER SMALL",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-70.jpg",
    "specs": {
      "Weight": "653 gm",
      "Height": "164 mm",
      "Base Die": "156 mm",
      "Upper Die": "182 mm"
    },
    "specs_raw": [
      "Weight\t-\t653 gm",
      "Height\t-\t164 mm",
      "Base Die-\t156 mm",
      "Upper Die-\t182 mm"
    ]
  },
  {
    "id": "690",
    "code": "SMI 71",
    "slug": "smi-71",
    "name": "CANISTOR TAPER SMALL",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-71.jpg",
    "specs": {
      "Weight": "770 gm",
      "Height": "195 mm",
      "Base Die": "163 mm",
      "Upper Die": "193 mm"
    },
    "specs_raw": [
      "Weight\t-\t770 gm",
      "Height\t-\t195 mm",
      "Base Die-\t163 mm",
      "Upper Die-\t193 mm"
    ]
  },
  {
    "id": "692",
    "code": "SMI 72",
    "slug": "smi-72",
    "name": "TAPER ICE BUCKET",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-72.jpg",
    "specs": {
      "Detail_1": "WITH PANDI",
      "Weight": "1.300 gm",
      "Height": "190 mm",
      "Base Die": "124 mm",
      "Upper Die": "183 mm"
    },
    "specs_raw": [
      "WITH PANDI",
      "Weight\t-\t1.300 gm",
      "Height\t-\t190 mm",
      "Base Die-\t124 mm",
      "Upper Die-\t183 mm"
    ]
  },
  {
    "id": "694",
    "code": "SMI 73",
    "slug": "smi-73",
    "name": "ICE BUCKET",
    "category": "Ice Buckets",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-73.jpg",
    "specs": {
      "Detail_1": "CURVE DESIGN",
      "Weight": "940 gm",
      "Height": "178 mm",
      "Base Die": "175 mm",
      "Upper Die": "180 mm"
    },
    "specs_raw": [
      "CURVE DESIGN",
      "Weight\t-\t940 gm",
      "Height\t-\t178 mm",
      "Base Die-\t175 mm",
      "Upper Die-\t180 mm"
    ]
  },
  {
    "id": "696",
    "code": "SMI 201",
    "slug": "smi-201",
    "name": "JUG SETS",
    "category": "Water Jugs",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-201.jpg",
    "specs": {
      "Weight": "230 gm",
      "Height": "178 mm",
      "Base Die": "102 mm",
      "Upper Die": "B to B:108 mm"
    },
    "specs_raw": [
      "Weight\t-\t230 gm",
      "Height\t-\t178 mm",
      "Base Die-\t102 mm",
      "Upper Die-\tB to B:108 mm"
    ]
  },
  {
    "id": "698",
    "code": "SMI 202",
    "slug": "smi-202",
    "name": "JUG SETS",
    "category": "Water Jugs",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-202.jpg",
    "specs": {
      "Weight": "255 gm",
      "Height": "184 mm",
      "Base Die": "108 mm",
      "Upper Die": "B to B:115 mm"
    },
    "specs_raw": [
      "Weight\t-\t255 gm",
      "Height\t-\t184 mm",
      "Base Die-\t108 mm",
      "Upper Die-\tB to B:115 mm"
    ]
  },
  {
    "id": "700",
    "code": "SMI 203",
    "slug": "smi-203",
    "name": "JUG SETS",
    "category": "Water Jugs",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-203.jpg",
    "specs": {
      "Weight": "285 gm",
      "Height": "191 mm",
      "Base Die": "114 mm",
      "Upper Die": "B to B:121 mm"
    },
    "specs_raw": [
      "Weight\t-\t285 gm",
      "Height\t-\t191 mm",
      "Base Die-\t114 mm",
      "Upper Die-\tB to B:121 mm"
    ]
  },
  {
    "id": "702",
    "code": "SMI 204",
    "slug": "smi-204",
    "name": "JUG SETS",
    "category": "Water Jugs",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-204.jpg",
    "specs": {
      "Weight": "380 gm",
      "Height": "196 mm",
      "Base Die": "121 mm",
      "Upper Die": "B to B:127 mm"
    },
    "specs_raw": [
      "Weight\t-\t380 gm",
      "Height\t-\t196 mm",
      "Base Die\t-\t121 mm",
      "Upper Die\t-\tB to B:127 mm"
    ]
  },
  {
    "id": "704",
    "code": "SMI 205",
    "slug": "smi-205",
    "name": "JUG SETS",
    "category": "Water Jugs",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-205.jpg",
    "specs": {
      "Weight": "418 gm",
      "Height": "203 mm",
      "Base Die": "130 mm",
      "Upper Die": "B to B:133mm"
    },
    "specs_raw": [
      "Weight\t-\t418 gm",
      "Height\t-\t203 mm",
      "Base Die-\t130 mm",
      "Upper Die-\tB to B:133mm"
    ]
  },
  {
    "id": "706",
    "code": "SMI 206",
    "slug": "smi-206",
    "name": "MATKI SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-206.jpg",
    "specs": {
      "Weight": "165 gm",
      "Height": "130 mm",
      "Base Die": "90 mm",
      "Upper Die": "B to B:92 mm"
    },
    "specs_raw": [
      "Weight\t-\t165 gm",
      "Height\t-\t130 mm",
      "Base Die-\t90 mm",
      "Upper Die-\tB to B:92 mm"
    ]
  },
  {
    "id": "708",
    "code": "SMI 207",
    "slug": "smi-207",
    "name": "MATKI SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-207.jpg",
    "specs": {
      "Weight": "201 gm",
      "Height": "147 mm",
      "Base Die": "103 mm",
      "Upper Die": "B to B:101mm"
    },
    "specs_raw": [
      "Weight\t-\t201 gm",
      "Height\t-\t147 mm",
      "Base Die-\t103 mm",
      "Upper Die-\tB to B:101mm"
    ]
  },
  {
    "id": "710",
    "code": "SMI 208",
    "slug": "smi-208",
    "name": "MATKI SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-208.jpg",
    "specs": {
      "Weight": "230 gm",
      "Height": "157 mm",
      "Base Die": "105 mm",
      "Upper Die": "B to B:107 mm"
    },
    "specs_raw": [
      "Weight\t-\t230 gm",
      "Height\t-\t157 mm",
      "Base Die-\t105 mm",
      "Upper Die-\tB to B:107 mm"
    ]
  },
  {
    "id": "712",
    "code": "SMI 209",
    "slug": "smi-209",
    "name": "MATKI SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-209.jpg",
    "specs": {
      "Weight": "255 gm",
      "Height": "169 mm",
      "Base Die": "111 mm",
      "Upper Die": "B to B:113mm"
    },
    "specs_raw": [
      "Weight\t-\t255 gm",
      "Height\t-\t169 mm",
      "Base Die-\t111 mm",
      "Upper Die-\tB to B:113mm"
    ]
  },
  {
    "id": "714",
    "code": "SMI 210",
    "slug": "smi-210",
    "name": "MATKI SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-210.jpg",
    "specs": {
      "Weight": "285 gm",
      "Height": "180 mm",
      "Base Die": "117 mm",
      "Upper Die": "B to B:119 mm"
    },
    "specs_raw": [
      "Weight\t-\t285 gm",
      "Height\t-\t180 mm",
      "Base Die-\t117 mm",
      "Upper Die-\tB to B:119 mm"
    ]
  },
  {
    "id": "716",
    "code": "SMI 211",
    "slug": "smi-211",
    "name": "MATKI SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-211.jpg",
    "specs": {
      "Weight": "418 gm",
      "Height": "200 mm",
      "Base Die": "129 mm",
      "Upper Die": "B to B:113mm"
    },
    "specs_raw": [
      "Weight\t-\t418 gm",
      "Height\t-\t200 mm",
      "Base Die-\t129 mm",
      "Upper Die-\tB to B:113mm"
    ]
  },
  {
    "id": "718",
    "code": "SMI 212",
    "slug": "smi-212",
    "name": "MUG SETS",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-212.jpg",
    "specs": {
      "Weight": "105 gm",
      "Height": "102 mm",
      "Base Die": "89 mm",
      "Upper Die": "B to B:95 mm"
    },
    "specs_raw": [
      "Weight\t-\t105 gm",
      "Height\t-\t102 mm",
      "Base Die-\t89 mm",
      "Upper Die-\tB to B:95 mm"
    ]
  },
  {
    "id": "720",
    "code": "SMI 214",
    "slug": "smi-214",
    "name": "MUG SETS",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-214.jpg",
    "specs": {
      "Weight": "140 gm",
      "Height": "114 mm",
      "Base Di": "105 mm",
      "Upper Die\tB to B": "108 mm"
    },
    "specs_raw": [
      "Weight\t-\t140 gm",
      "Height\t-\t114 mm",
      "Base Di-\t105 mm",
      "Upper Die\tB to B:108 mm"
    ]
  },
  {
    "id": "722",
    "code": "SMI 215",
    "slug": "smi-215",
    "name": "MUG SETS",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-215.jpg",
    "specs": {
      "Weight": "155 gm",
      "Height": "121 mm",
      "Base Die": "108 mm",
      "Upper Die": "B to B:115  mm"
    },
    "specs_raw": [
      "Weight\t-\t155 gm",
      "Height\t-\t121 mm",
      "Base Die-\t108 mm",
      "Upper Die-\tB to B:115  mm"
    ]
  },
  {
    "id": "789",
    "code": "SMI 216",
    "slug": "smi-216",
    "name": "Weight-Â  Â  Â  Â  Â 250gm",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-216.jpg",
    "specs": {
      "Height": "Â  Â  Â  Â  Â  153mm",
      "Base Die": "Â  Â  Â  125mm",
      "Upper Die": "Â  Â  B to B:135mm",
      "Detail_4": "&nbsp;"
    },
    "specs_raw": [
      "Height-Â  Â  Â  Â  Â  153mm",
      "Base Die-Â  Â  Â  125mm",
      "Upper Die-Â  Â  B to B:135mm",
      "&nbsp;"
    ]
  },
  {
    "id": "726",
    "code": "SMI 217",
    "slug": "smi-217",
    "name": "MUG SETS",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-217.jpg",
    "specs": {
      "Weight": "285 gm",
      "Height": "127 mm",
      "Base Die": "114 mm",
      "Upper Die": "B to B:121 mm"
    },
    "specs_raw": [
      "Weight\t-\t285 gm",
      "Height\t-\t127 mm",
      "Base Die-\t114 mm",
      "Upper Die-\tB to B:121 mm"
    ]
  },
  {
    "id": "727",
    "code": "SMI 218",
    "slug": "smi-218",
    "name": "MUG SETS",
    "category": "Mugs & Tapers",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-218.jpg",
    "specs": {
      "Weight": "318 gm",
      "Height": "178 mm",
      "Base Die": "145 mm",
      "Upper Die": "B to B:160 mm"
    },
    "specs_raw": [
      "Weight\t-\t318 gm",
      "Height\t-\t178 mm",
      "Base Die-\t145 mm",
      "Upper Die-\tB to B:160 mm"
    ]
  },
  {
    "id": "729",
    "code": "SMI 219",
    "slug": "smi-219",
    "name": "APPLE SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-219.jpg",
    "specs": {
      "Weight": "163 gm",
      "Height": "140 mm",
      "Base Die": "85 mm",
      "Upper Die": "B to B:100 mm"
    },
    "specs_raw": [
      "Weight\t-\t163 gm",
      "Height\t-\t140 mm",
      "Base Die-\t85 mm",
      "Upper Die-\tB to B:100 mm"
    ]
  },
  {
    "id": "731",
    "code": "SMI 220",
    "slug": "smi-220",
    "name": "APPLE SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-220.jpg",
    "specs": {
      "Weight": "200 gm",
      "Height": "160 mm",
      "Base Die": "95 mm",
      "Upper Die": "B to B:115mm"
    },
    "specs_raw": [
      "Weight\t-\t200 gm",
      "Height\t-\t160 mm",
      "Base Die-\t95 mm",
      "Upper Die-\tB to B:115mm"
    ]
  },
  {
    "id": "733",
    "code": "SMI 221",
    "slug": "smi-221",
    "name": "APPLE SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-221.jpg",
    "specs": {
      "Weight": "228 gm",
      "Height": "171 mm",
      "Base Die": "105 mm",
      "Upper Die": "B to B:115 mm"
    },
    "specs_raw": [
      "Weight\t-\t228 gm",
      "Height\t-\t171 mm",
      "Base Die-\t105 mm",
      "Upper Die-\tB to B:115 mm"
    ]
  },
  {
    "id": "735",
    "code": "SMI 222",
    "slug": "smi-222",
    "name": "APPLE SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs \\r\\n",
    "image": "img/products/smi-222.jpg",
    "specs": {
      "Weight": "255 gm",
      "Height": "169 mm",
      "Base Die": "105 mm",
      "Upper Die": "B to B:115mm"
    },
    "specs_raw": [
      "Weight\t-\t255 gm",
      "Height\t-\t169 mm",
      "Base Die-\t105 mm",
      "Upper Die-\tB to B:115mm"
    ]
  },
  {
    "id": "737",
    "code": "SMI 223",
    "slug": "smi-223",
    "name": "APPLE SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-223.jpg",
    "specs": {
      "Weight": "285 gm",
      "Height": "185 mm",
      "Base Die": "110 mm",
      "Upper Die": "B to B:125 mm"
    },
    "specs_raw": [
      "Weight\t-\t285 gm",
      "Height\t-\t185 mm",
      "Base Die-\t110 mm",
      "Upper Die-\tB to B:125 mm"
    ]
  },
  {
    "id": "739",
    "code": "SMI 224",
    "slug": "smi-224",
    "name": "APPLE SETS",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-224.jpg",
    "specs": {
      "Weight": "415 gm",
      "Height": "200 mm",
      "Base Die": "129  mm",
      "Upper Die": "B to B:131mm"
    },
    "specs_raw": [
      "Weight\t-\t415 gm",
      "Height\t-\t200 mm",
      "Base Die-\t129  mm",
      "Upper Die-\tB to B:131mm"
    ]
  },
  {
    "id": "741",
    "code": "SMI 225",
    "slug": "smi-225",
    "name": "BIG BOTTLE",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-225.jpg",
    "specs": {
      "Weight": "170 gm",
      "Height": "170 mm",
      "Base Die": "80 mm",
      "Upper Die": "B to B:82 mm"
    },
    "specs_raw": [
      "Weight\t-\t170 gm",
      "Height\t-\t170 mm",
      "Base Die-\t80 mm",
      "Upper Die-\tB to B:82 mm"
    ]
  },
  {
    "id": "743",
    "code": "SMI 226",
    "slug": "smi-226",
    "name": "SMALL BOTTLE",
    "category": "Stainless Steel Utensils",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-226.jpg",
    "specs": {
      "Weight": "163 gm",
      "Height": "215 mm",
      "Base Die": "172 mm",
      "Upper Die": "B to B:80mm"
    },
    "specs_raw": [
      "Weight\t-\t163 gm",
      "Height\t-\t215 mm",
      "Base Die-\t172 mm",
      "Upper Die-\tB to B:80mm"
    ]
  },
  {
    "id": "745",
    "code": "SMI 227",
    "slug": "smi-227",
    "name": "PLATE 5.30\"",
    "category": "Dishes & Bowls",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-227.jpg",
    "specs": {
      "Weight": "69 gm",
      "Height": "70 mm",
      "Base Die": "105 mm"
    },
    "specs_raw": [
      "Weight\t-\t69 gm",
      "Height\t-\t70 mm",
      "Base Die-\t105 mm"
    ]
  },
  {
    "id": "747",
    "code": "SMI 228",
    "slug": "smi-228",
    "name": "PLATE 6\"",
    "category": "Dishes & Bowls",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-228.jpg",
    "specs": {
      "Weight": "80 gm",
      "Height": "80 mm",
      "Base Die": "115 mm"
    },
    "specs_raw": [
      "Weight\t-\t80 gm",
      "Height\t-\t80 mm",
      "Base Die-\t115 mm"
    ]
  },
  {
    "id": "749",
    "code": "SMI 229",
    "slug": "smi-229",
    "name": "LONG JUG",
    "category": "Water Jugs",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-229.jpg",
    "specs": {
      "Weight": "252 gm",
      "Height": "190 mm",
      "Base Die": "110 mm",
      "Upper die": "140 mm"
    },
    "specs_raw": [
      "Weight\t-\t252 gm",
      "Height\t-\t190 mm",
      "Base Die-\t110 mm",
      "Upper die-\t140 mm"
    ]
  },
  {
    "id": "751",
    "code": "SMI 230",
    "slug": "smi-230",
    "name": "COLLAR JUG",
    "category": "Water Jugs",
    "stock": "Made to Order",
    "image": "img/products/smi-230.jpg",
    "specs": {
      "Weight": "287 gm",
      "Height": "190 mm",
      "Base Die": "110 mm",
      "Upper die": "140 mm"
    },
    "specs_raw": [
      "Weight\t-\t287 gm",
      "Height\t-\t190 mm",
      "Base Die-\t110 mm",
      "Upper die-\t140 mm"
    ]
  },
  {
    "id": "753",
    "code": "SMI 231",
    "slug": "smi-231",
    "name": "DONGA PLATE 5.30\"",
    "category": "Dishes & Bowls",
    "stock": "\\r\\n00 pcs\\r\\n",
    "image": "img/products/smi-231.jpg",
    "specs": {
      "Weight": "388 gm",
      "Height": "75 mm",
      "Base Die": "160 mm",
      "Upper die": "155 mm"
    },
    "specs_raw": [
      "Weight\t-\t388 gm",
      "Height\t-\t75 mm",
      "Base Die-\t160 mm",
      "Upper die-\t155 mm"
    ]
  }
];
