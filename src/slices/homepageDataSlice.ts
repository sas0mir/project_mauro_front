import { createSlice } from "@reduxjs/toolkit";

const mockNews = [
    {
        source: 'Corriere della sera',
        title: 'Credi nel bene oltre la religione',
        img_url: 'https://www.lagazzettadelmezzogiorno.it/resizer/818/539/true/2024_11_29/Candido_1859_-_BIGOG_Orizzontale_1-1732876701360.jpg--_believe_in_good_over_god___la_luminaria_a_maglie_fa_discutere__gli_ideatori___e_un_messaggio_per_un_natale_inclusivo_.jpg?1732876703487',
        content: 'Nella piazza protagonista di ben altre polemiche, vedi la statua di Aldo Moro con l’Unità sotto il braccio, a scandalizzare gli abitanti di Maglie ci si è messa una scritta sulla facciata dello storico negozio di abbigliamento «Candido 1859». «Believe in Good over God», recita a caratteri cubitali lo slogan natalizio, che nelle intenzioni della 26enne Claretta Candido, che ha avuto l’idea, e della sorella maggiore Cristiana, copywriter, che l’ha messa in pratica, voleva dire: «Credi nel bene a prescindere dal credo religioso».',
        author: 'Elvira Serra',
        date: new Date(2025, 11, 20),
        likes: [
            {userId: 11, username: 'Paolo Cavalli'},
            {userId: 14, username: 'Mario Sforda'},
            {userId: 17, username: 'Antonio Buffala'}
        ],
        comments: [
            {userId: 12, username: 'Maria Cavalli', text: 'Questo è un commento di prova'},
            {userId: 14, username: 'Mario Sforda', text: 'Mi piace molto)'},
            {userId: 17, username: 'Antonio Buffala', text: 'Voglo vedere 😳'}
        ]
    },
    {
        source: 'Il giorno',
        title: "Abolizione dell'ora di religione cattolica: un costo di 859 milioni di euro nel 2024",
        img_url: 'https://www.ilgiorno.it/image-service/view/acePublic/alias/contentid/MTIyNjMyYzQtMTBiOS00/0/fuga-dallora-di-religione-va-ripensata.webp?f=16%3A9&q=1&w=580',
        content: "Il Tribunale di Perugia, con decreto del 9.10.2024, pronunciato a seguito di ricorso ex art. 98 c.c., ordina ad un Comune di procedere con le pubblicazioni di matrimonio in favore dei nubendi cittadino italiano e cittadina iraniana.\nL'Ufficiale di Stato Civile del Comune aveva rifiutato l'adempimento in quanto la nubenda iraniana non aveva prodotto il nulla osta al matrimonio ex art. 116 c.c. che doveva essere rilasciato dal Consolato iraniano.\nLa nubenda aveva richiesto il nulla osta, ma il Consolato aveva risposto che, per ottenerne il rilascio, è necessaria la previa conversione alla religione islamica da parte del nubendo cittadino italiano (di religione non musulmana) e la previa celebrazione di matrimonio religioso islamico. Il Consolato richiedeva, inoltre, le analisi del sangue del nubendo che dimostrino l'assenza di patologie epatite/HIV.",
        author: '',
        date: new Date(2025, 11, 25),
        likes: [
            {userId: 11, username: 'Paolo Cavalli'},
            {userId: 17, username: 'Antonio Buffala'}
        ],
        comments: [
            {userId: 12, username: 'Maria Cavalli', text: 'Questo è un commento di prova'},
            {userId: 14, username: 'Mario Sforda', text: 'Mi piace molto)'},
            {userId: 17, username: 'Antonio Buffala', text: 'Voglo vedere 😳'}
        ]
    },
    {
        source: 'Melting pot',
        title: 'Autorizzazione al matrimonio tra cittadina iraniana di religione musulmana e cittadino italiano non musulmano',
        img_url: 'https://www.meltingpot.org/app/uploads/2024/11/pexels-aidilbahaman-5912545-scaled.jpg',
        content: 'Nella piazza protagonista di ben altre polemiche, vedi la statua di Aldo Moro con l’Unità sotto il braccio, a scandalizzare gli abitanti di Maglie ci si è messa una scritta sulla facciata dello storico negozio di abbigliamento «Candido 1859». «Believe in Good over God», recita a caratteri cubitali lo slogan natalizio, che nelle intenzioni della 26enne Claretta Candido, che ha avuto l’idea, e della sorella maggiore Cristiana, copywriter, che l’ha messa in pratica, voleva dire: «Credi nel bene a prescindere dal credo religioso».',
        author: 'Francesco di Pietro',
        date: new Date(2025, 11, 19),
        likes: [
            {userId: 11, username: 'Paolo Cavalli'},
            {userId: 14, username: 'Mario Sforda'},
            {userId: 17, username: 'Antonio Buffala'}
        ],
        comments: [
            {userId: 14, username: 'Mario Sforda', text: 'Mi piace molto)'},
            {userId: 17, username: 'Antonio Buffala', text: 'Voglo vedere 😳'}
        ]
    },
    {
        source: 'Azione Cattolica Italiana',
        title: 'Le religioni oltre le frontiere',
        img_url: 'https://azionecattolica.it/wp-content/uploads/elementor/thumbs/shutterstock_2209958889-qye6r0lyk6xs2f273z6uy2kk9rreq6rrsfgkf67p3m.jpg',
        content: "Religione e cultura si rivelano inscindibilmente legate lungo la storia dell’umanità, benché la modernità occidentale abbia cercato di separarle, creando una dicotomia che pare artificiosa. Le religioni, pur modificandosi nel contatto con culture diverse, custodiscono un nucleo comune che le rende ponti di dialogo e riconciliazione. Questo dialogo, sostenuto da papa Francesco, riconosce la specificità di ogni fede senza appiattirne le differenze. Il cristianesimo, in particolare, pur proponendosi come “più vero” per la rivelazione storica di Dio in Gesù di Nazaret, offre una prospettiva universale e inclusiva. La fede cristiana riconosce l’opera dello Spirito anche oltre i propri confini, contribuendo a costruire un cammino di pace e dialogo tra i popoli. Sono questi gli argomenti del dossier Le religioni oltre le frontiere proposto da Dialoghi",
        author: '',
        date: new Date(2025, 11, 17),
        likes: [
            {userId: 14, username: 'Mario Sforda'},
            {userId: 17, username: 'Antonio Buffala'}
        ],
        comments: [
            {userId: 17, username: 'Antonio Buffala', text: 'Voglo vedere 😳'}
        ]
    },
    {
        source: 'Quotidiano nazionale',
        title: 'L’ora X di religione. Chiesa tra facoltà e obbligo: "Pronti al passo indietro"',
        img_url: 'https://www.quotidiano.net/image-service/view/acePublic/alias/contentid/ODY0OWRlNDItYWNhMS00/0/religione-a-scuola.webp?f=16%3A9&q=1&w=580',
        content: "Roma, 25 novembre 2024 – Per qualcuno era una noia mortale, un’imposizione dei genitori in un’Italia, quella degli anni ‘90, sempre meno dalla sana e robusta costituzione cattolica; per altri, l’ora di religione, lodevoli eccezioni a parte, rappresentava un mero aggiornamento della dottrina frequentata da bambini. Questo era più che è oggi l’Irc (Insegnamento della religione cattolica), dal momento che la materia negli istituti scolastici pubblici sta vivendo il suo tramonto strutturale, progressivo ed ineludibile tale da spingere la stessa Chiesa a ripensarla. Anche a costo di compiere un clamoroso passo indietro, rinunciando allo stesso insegnamento.",
        author: 'Giovanni Panettiere',
        date: new Date(2025, 11, 25),
        likes: [
            {userId: 11, username: 'Paolo Cavalli'},
            {userId: 14, username: 'Mario Sforda'},
        ],
        comments: [
            {userId: 12, username: 'Maria Cavalli', text: 'Questo è un commento di prova'},
            {userId: 14, username: 'Mario Sforda', text: 'Mi piace molto)'},
            {userId: 17, username: 'Antonio Buffala', text: 'Voglo vedere 😳'}
        ]
    },
    {
        source: 'Avvenire',
        title: 'Il voto a Trump e la religione secondo l’infosfera ecclesiale',
        img_url: 'https://www.avvenire.it/c/Rubriche/DescrizioneRubriche/Mocellin-Guido.png?width=100',
        content: "Con grande tempismo la newsletter della sezione “Religion & Public Life” (shorturl.at/gRXxk) del Pew Research Center, il popolare istituto americano di sondaggi d’opinione, ha riproposto il 6 novembre scorso le proprie rilevazioni sul neoeletto presidente Usa Donald Trump e la religione. «Si definisce un cristiano non denominazionale», cioè non si riconosce in nessuna confessione cristiana. Da un’inchiesta dello scorso febbraio, aggiunge la newsletter riportando i relativi link, risultava che il 4% degli americani adulti considera Trump «molto religioso», il 25% ritiene che sia «un po’ religioso» e il 68% pensa che sia «non troppo» o «per nulla» religioso; ma quest’autunno, «dopo la nomination di Kamala Harris come candidata del Partito democratico», la quota di americani che accredita Trump di un sentimento religioso è salita complessivamente di otto punti percentuali: dal 4 al 6% quelli che lo vedono come «molto religioso» e dal 25 al 31% quelli che lo ritengono «un po’ religioso».",
        author: 'Guido Mocellin',
        date: new Date(2025, 11, 16),
        likes: [
            {userId: 11, username: 'Paolo Cavalli'}
        ],
        comments: [
            {userId: 12, username: 'Maria Cavalli', text: 'Questo è un commento di prova'}
        ]
    },
    {
        source: 'Comune di San Giovanni in Persiceto',
        title: 'In arrivo il “Festival delle religioni” di Persiceto dedicato al tema “Il silenzio. Ascolto e accolgo”',
        img_url: 'https://www.comunepersiceto.it/wp-content/uploads/2024/09/Banner_CS_Festival.jpg',
        content: "Lella Costa, David Riondino, Padre Guidalberto Bormolini e Max Casacci: quattro grandi protagonisti per tre serate imperdibili in cui esplorare – da diverse prospettive – la spiritualità, l’arte e il dialogo umano. Oltre a questi tre eventi principali, il Festival delle religioni di Persiceto, dedicato quest’anno al tema del silenzio, ospiterà anche il venerabile Alak Tsawa Tulku Rinpoche, una delle massime autorità della tradizione tibetana e il maestro Riccardo Pesce e la maestra Kotoko Iwakura,esperti di Shodō, l’arte della calligrafia giapponese. Sarà inoltre possibile visitare l’installazione “Il silenzio nelle arti performative”. Tutti gli eventi sono a ingresso gratuito.",
        author: 'Elvira Serra',
        date: new Date(2025, 10, 30),
        likes: [
            {userId: 11, username: 'Paolo Cavalli'},
            {userId: 14, username: 'Mario Sforda'},
            {userId: 17, username: 'Antonio Buffala'}
        ],
        comments: [
            {userId: 12, username: 'Maria Cavalli', text: 'Questo è un commento di prova'},
            {userId: 14, username: 'Mario Sforda', text: 'Mi piace molto)'},
            {userId: 17, username: 'Antonio Buffala', text: 'Voglo vedere 😳'}
        ]
    }
]

export const homepageDataSlice = createSlice({
    name: 'settings',
    initialState: {
        newsFeed: mockNews,
        language: 'it'
    }, reducers: {
        setNews: (state, action) => {
            state.newsFeed = action.payload
        },
        setLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { setNews, setLanguage } = homepageDataSlice.actions
export default homepageDataSlice.reducer