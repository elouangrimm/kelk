import { english } from './english';

export type TTranslationCode = keyof typeof english;

class LanguageStrings {
    private data: any;
    private listeners: (() => void)[] = [];
    private code: string;

    // ----------------------------------- public -----------------------------------
    constructor() {
        this.data = { ...english };
        this.code = 'en';
    }

    async setLanguage(langCode: string): Promise<void> {
        this.data = { ...english };
        this.code = langCode;
        document.documentElement.setAttribute('lang', langCode);
        this.listeners.forEach((item) => {
            item();
        });
    }

    get(code: TTranslationCode): string {
        if (!(code in this.data)) {
            throw new Error("translation code doesn't exist: " + code);
        }
        return this.data[code];
    }

    getLanguage(): { code: string; name: string } {
        return { code: 'en', name: 'English' };
    }

    getAutoLanguage(): { code: string; name: string } {
        return { code: 'en', name: 'English' };
    }

    getCode(): string {
        return this.code;
    }

    // get notified on language change
    subscribe(subscriber: () => void) {
        if (this.listeners.includes(subscriber)) {
            return;
        }
        this.listeners.push(subscriber);
    }

    unsubscribe(subscriber: () => void) {
        for (let i = 0; i < this.listeners.length; i++) {
            if (subscriber === this.listeners[i]) {
                this.listeners.splice(i, 1);
                return;
            }
        }
    }
}

export function getLanguage(useLocalStorage?: boolean): string {
    return 'en';
}

const activeLanguageCode = getLanguage(true);
export const languageStrings = new LanguageStrings();

export const LANG = (code: TTranslationCode, replace?: { [key: string]: string }): string => {
    if (replace) {
        let result = languageStrings.get(code);
        const keyArr = Object.keys(replace);
        keyArr.forEach((key) => {
            result = result.replace(`{${key}}`, replace[key]);
        });
        return result;
    } else {
        return languageStrings.get(code);
    }
};

export const initLANG = () => languageStrings.setLanguage(activeLanguageCode);
