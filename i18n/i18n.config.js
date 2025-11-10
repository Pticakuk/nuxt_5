import ar from '@root/i18n/messages/ar.js'
import de from '@root/i18n/messages/de.js'
import en from '@root/i18n/messages/en.js'
import es from '@root/i18n/messages/es.js'
import pl from '@root/i18n/messages/pl.js'
import pt from '@root/i18n/messages/pt.js'
import ru from '@root/i18n/messages/ru.js'
import uk from '@root/i18n/messages/uk.js'
import { countries } from '@root/i18n/messages/countries.js'

export default defineI18nConfig(() => {
    const messages = {ar, de, en, es, pl, pt, ru, uk}

    // Add countries to the corresponding locales
    for (const [locale, translations] of Object.entries(messages)) {
        translations.countries = countries[locale]
    }

    // Shared pluralization rules for Slavic languages
    const sharedPluralizationRules = (choice, choicesLength) => {
        if (choice === 0) {
        return 0
        }

        const teen = choice > 10 && choice < 20
        const endsWithOne = choice % 10 === 1

        if (choicesLength < 4) {
        return (!teen && endsWithOne) ? 1 : 2
        }
        if (!teen && endsWithOne) {
        return 1 // 21 учень
        }
        if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2 // 22 учня
        }

        return (choicesLength < 4) ? 2 : 3 // 25 учнів
    }
    return {
        legacy: false,
        locale: 'en',
        fallbackLocale: 'en',
        missingWarn: false, 
        fallbackWarn: false,
        escapeParameterHtml: false,
        warnHtmlMessage: false,
        messages,
        pluralRules: {
            ru: sharedPluralizationRules,
            uk: sharedPluralizationRules
        }
}});