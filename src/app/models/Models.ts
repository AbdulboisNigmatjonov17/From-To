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
    to: string
    toCode: string
}

export type btnType = 'true' | 'false';
export type resultCaseType = 'latin' | 'cyrill';