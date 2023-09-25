import { reactive } from 'vue'
export const store = reactive({
    paragraphs: [
        {
            over_title: '',
            title: 'Soluzioni Digitali',
            subtitle: '',
            content: 'Rendiamo smart piccole e medie imprese, uffici e pubblica amministrazione',
        },
        {
            over_title: 'Chi siamo',
            title: 'Un team specializzato',
            subtitle: 'in soluzioni informatiche, tecniche, di marketing e comunicazione',
            content: 'Attivi in presenza sul territorio di Milano e in remoto ovunque, forniamo supporto tecnico e assistenza in merito alle infrastrutture informatiche aziendali, tradizionali o cloud, oltre ad attività di consulenza e formazione nel campo della comunicazione.',
        },
        {
            over_title: 'MANDACI LA TUA RICHIESTA',
            title: 'Mettiamoci in contatto',
            subtitle: '',
            content: 'Lascia i tuoi contatti e il motivo della tua richiesta: il nostro team risponderà nel tempo di un click',
        }
    ],
    images: [
        {
            image: '/img/banner-informatica.png'
        },
        {
            image: '/img/Chi-siamo.png'
        },
        {
            image: '/img/Contattaci.png'
        },
    ],
    titles: [
        {
            over_title: 'le nostre',
            title: 'competenze'
        },
        {
            over_title: 'i nostri',
            title: 'servizi'
        }
    ],
    cards: [
        {
            image: '/img/icon-competenze.png',
            title: 'ICT',
            content: 'Un supporto affidabile per tecnologie informatiche e di comunicazione'
        },
        {
            image: '/img/icon-certificazioni.png',
            title: 'Certificazioni',
            content: 'Know-how ed esperienza attestati dai principali player del settore tecnologico'
        },
        {
            image: '/img/icon-partnership.png',
            title: 'Partnership',
            content: 'Un network professionale a tua disposizione, con un unico interlocutore'
        }
    ],
    cards_service: [
        {
            image: '/img/icon-amministrazione.png',
            title: 'Amministrazione di rete',
            content: 'Supporto completo per la gestione dell’operatività aziendale'
        },
        {
            image: '/img/icon-disaster.png',
            title: 'Disaster recovery',
            content: 'Continuità operativa garantita ad aziende e professionisti'
        },
        {
            image: '/img/icon-web.png',
            title: 'Realizzazione siti web',
            content: 'Competenze tecniche e creative per la tua tua vetrina online'
        },
        {
            image: '/img/icon-software.png',
            title: 'Software house',
            content: 'Sviluppo custom di software applicativi, gestionali e webapp'
        },
        {
            image: '/img/icon-hosting.png',
            title: 'Hosting',
            content: 'Gestione per conto cliente dei principali servizi di rete'
        },
        {
            image: '/img/icon-marketing.png',
            title: 'Strategia di marketing online',
            content: 'Ideazione di piani marketing aziendali personalizzati'
        },
        {
            image: '/img/icon-consulenza.png',
            title: 'Consulenza E Formazione',
            content: 'Supporto alle aziende nello sviluppo di know-how interno'
        }
    ],
    licenses: [
        {
            image: '/img/Badge-Aruba-Business-Partner-Orizzontale.png',
        },
        {
            image: '/img/GfE-Partner-Badges-Horizontal.png',
        },
        {
            image: '/img/Lockup_Google_Workspace_Edu_vert_clr.png',
        },
        {
            image: '/img/bronze@2x.png',
        },
        {
            image: '/img/Badge-Aruba-Business-Partner-Orizzontale.png',
        },
        {
            image: '/img/GfE-Partner-Badges-Horizontal.png',
        },
        {
            image: '/img/Lockup_Google_Workspace_Edu_vert_clr.png',
        },
        {
            image: '/img/bronze@2x.png',
        },
    ],

});