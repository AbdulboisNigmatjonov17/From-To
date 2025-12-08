export interface Languages {
    name: string;
    code: string;
}
export interface TranslateResponse {
    result: string;
}
export interface Itransliterate {
    from: string
    fromCode: string
    toCode: string
}

export interface ICustomer {
    id: number
    title: string
    countWords: number
    targetLanguages: string[]
}

export interface IConditions {
    title: string;
    text: string;
};

export interface IAdvertisementData {
    desktop: {
        imageUrl: string;
        title: string;
        size: string;
    }[];

    mobile: {
        imageUrl: string;
        title: string;
        size: string;
    }[];
}


export type btnType = 'true' | 'false';
export type resultCaseType = 'latin' | 'cyrill';