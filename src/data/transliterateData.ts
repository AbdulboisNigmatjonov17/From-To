import { Itransliterate } from "../app/models/Models";

export const transliterateData: Itransliterate[] = [
    { from: 'Uzbek Latin', fromCode: 'uz_latin', toCode: 'uz_cyrillic' },
    { from: 'Uzbek Cyrillic', fromCode: 'uz_cyrillic', toCode: 'uz_latin' },

    { from: 'Karakalpak Latin', fromCode: 'kaa_latin', toCode: 'kaa_cyrillic' },
    { from: 'Karakalpak Cyrillic', fromCode: 'kaa_cyrillic', toCode: 'kaa_latin' },

    { from: 'Kazakh Latin', fromCode: 'kz_latin', toCode: 'kz_cyrillic' },
    { from: 'Kazakh Cyrillic', fromCode: 'kz_cyrillic', toCode: 'kz_latin' },

    { from: 'Turkmen Latin', fromCode: 'tm_latin', toCode: 'tm_cyrillic' },
    { from: 'Turkmen Cyrillic', fromCode: 'tm_cyrillic', toCode: 'tm_latin' },

    { from: 'Azerbaijan Latin', fromCode: 'az_latin', toCode: 'az_cyrillic' },
    { from: 'Azerbaijan Cyrillic', fromCode: 'az_cyrillic', toCode: 'az_latin' },

    { from: 'Tajik Latin', fromCode: 'tj_latin', toCode: 'tj_cyrillic' },
    { from: 'Tajik Cyrillic', fromCode: 'tj_cyrillic', toCode: 'tj_latin' },

    { from: 'Mongolian Latin', fromCode: 'mn_latin', toCode: 'mn_cyrillic' },
    { from: 'Mongolian Cyrillic', fromCode: 'mn_cyrillic', toCode: 'mn_latin' },

    { from: 'Serbian/Bosnian Latin', fromCode: 'rs_latin', toCode: 'rs_cyrillic' },
    { from: 'Serbian/Bosnian Cyrillic', fromCode: 'rs_cyrillic', toCode: 'rs_latin' },
];
