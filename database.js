// --- BASE DE DONNÉES BUREAU DU RAP (database.js) ---
// Date : 22/11/2025

const dataRappeurs = [
    // ==========================================
    // 🏆 LES LÉGENDES
    // ==========================================
    {
        id: "booba",
        nom: "Booba",
        statut: "legende",
        style: "Trap",
        image: "img/RAP-data/booba.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3.7M Abonnés",
        bio: "Le Duc. Patron du 92i.",
        bioLongue: "Élie Yaffa, dit Booba. Pionnier du rap français, il a traversé les époques. Il a imposé l'autotune et le rap business en France.",
        albums: [
            { 
                titre: "ULTRA", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273b7c26131d453d1d9afb81aa0", 
                tracks: ["GP", "Azerty", "RST", "Bonne journée", "Mona Lisa", "Je t'aime", "5G", "Vue sur la mer", "L'olivier", "VVV", "31", "Ultra", "Dernière fois", "Grain de sable"] 
            },
            { 
                titre: "Trône", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2737b56fb8f7a5b37d234d53238", 
                tracks: ["Centurion", "Friday", "Drapeau noir", "Trône", "Bouyon", "DKR", "Nougat", "Fleur de saison", "Terrain", "Petite fille", "Ça va aller", "113", "Ridin'", "Éléphant"] 
            },
            { 
                titre: "Temps Mort", annee: "2002", cover: "https://i.scdn.co/image/ab67616d0000b2737b241e06d7cd749de581a806", 
                tracks: ["Temps mort", "Ma définition", "Jusqu'ici tout va bien", "Repose en paix", "Le bitume avec une plume", "Animals", "Sans ratures", "Ecoute bien", "Inédit", "Strass et paillettes", "Destinée"] 
            }
        ]
    },
    {
        id: "iam",
        nom: "IAM",
        statut: "legende",
        style: "Boom Bap",
        image: "img/RAP-data/iam.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "500k Abonnés",
        bio: "Les architectes du rap marseillais.",
        albums: [
            { 
                titre: "L'École du Micro d'Argent", annee: "1997", cover: "https://i.scdn.co/image/ab67616d0000b2739c8f1909f055f04ca6862853", 
                tracks: ["L'école du micro d'argent", "Dangereux", "Nés sous la même étoile", "La saga", "Petit frère", "Elle donne son corps avant son nom", "L'empire du côté obscur", "Regarde", "Demain, c'est loin"] 
            },
            { titre: "Ombre est lumière", annee: "1993", cover: "https://i.scdn.co/image/ab67616d0000b27311a234f25c01c55b9d339339", tracks: ["Le feu", "Cosmos", "Vos dieux ont les mains sales", "Le mia", "Je danse le mia"] },
            { titre: "Arts Martiens", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b27349d620228960a4094e37661e", tracks: ["Spartiate Spirit", "Les raisons de la colère", "Notre dame veille", "Benkei et Minamoto"] }
        ]
    },
    {
        id: "ntm",
        nom: "Suprême NTM",
        statut: "legende",
        style: "Boom Bap",
        image: "img/RAP-data/ntm.webp",
        certifications: { or: true, platine: true, diamant: true },
        bio: "L'énergie brute de la révolte.",
        albums: [
            { titre: "Suprême NTM", annee: "1998", cover: "https://i.scdn.co/image/ab67616d0000b273b0af6c9d26487cf55ba0efd6", tracks: ["Intro", "Back dans les bacs", "Laisse pas traîner ton fils", "Ma Benz", "Seine-Saint-Denis Style", "Pose ton gun"] },
            { titre: "Paris sous les bombes", annee: "1995", cover: "https://i.scdn.co/image/ab67616d0000b273f4159d20696d2114f7299711", tracks: ["Plus jamais ça", "Tout n'est pas si facile", "La fièvre", "Paris sous les bombes", "Qu'est-ce qu'on attend"] }
        ]
    },
    {
        id: "kaaris",
        nom: "Kaaris",
        statut: "legende",
        style: "Trap",
        image: "img/RAP-data/kaaris.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "2.1M Abonnés",
        bio: "Le Dozo. Père de la Trap française.",
        albums: [
            { titre: "Or Noir", annee: "2013", cover: "https://i.scdn.co/image/ab67616d0000b273320e2cbe61937f598b904ec4", tracks: ["Bizon", "Zoo", "Ciroc", "Or noir", "Bouchon de liège", "Dès le départ", "Pas de remède", "Je bibi", "2.7.0"] },
            { titre: "Le Bruit de mon âme", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b273a5aae82f65dcb67a0126ab55", tracks: ["Kadirov", "Se-vrak", "Four", "80 Zetrei", "El Chapo", "Zone de transit", "Le bruit de mon âme"] },
            { titre: "Okou Gnakouri", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273a8d054958a50a479fe720039", tracks: ["Le sang", "Blow", "Benz", "Boyz n the Hood", "Contact", "Poussière", "Tchoin"] }
        ]
    },

    // ==========================================
    // 🔥 TENDANCES
    // ==========================================
    {
        id: "gazo",
        nom: "Gazo",
        statut: "tendance",
        style: "Drill",
        image: "img/RAP-data/gazo.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "4.3M Abonnés",
        bio: "Le chef de la Drill FR.",
        albums: [
            { titre: "KMT", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273727b42d784eb74b9208a227a", tracks: ["BECTE", "BODIES", "LETTRE À UN OPPS", "RAPPEL", "JEUX DANGEREUX", "M.A.L.A", "GRA GRA BOOM", "HENNESSY", "DIE", "BOSS", "CÉLINE 3X", "MOLLAZI", "FLEURS"] },
            { titre: "Drill FR", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27318f052a725050c790a931801", tracks: ["Intro", "Haine&Sex", "Kassav", "Tchin 2x", "Parkinson", "A$AP", "Drill FR 5", "Euphon", "Mon cher"] },
            { titre: "La Mélo est Gangx", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cc1c81a9111484b340a08ec7", tracks: ["200%", "SOBAD", "CARTIER", "NOTRE DAME", "100K", "24/34", "OUTRO"] }
        ]
    },
    {
        id: "tiakola",
        nom: "Tiakola",
        statut: "tendance",
        style: "Mélo / Club",
        image: "img/RAP-data/tiakola.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "3.6M Abonnés",
        bio: "Le prince de la mélo.",
        albums: [
            { titre: "Mélo", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273c974e02a73a8c30738019a56", tracks: ["1ntro'p", "#TT", "Arsenik", "Parapluie", "La clé", "Mode AV", "Si j'savais", "Meuda", "Gasolina", "Soza", "Riri / No Camera", "M3lo", "Atasanté", "Roro", "Coucher de soleil"] },
            { titre: "BDLM Vol. 1", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273d10ff5df541f71c69c106a21", tracks: ["MANON B", "Y.J", "GRAND PRIX", "RESTE-LA", "PLAISIR NOCIF", "T.I.A", "LA TOUR", "PAPILLON"] }
        ]
    },
    {
        id: "werenoi",
        nom: "Werenoi",
        statut: "tendance",
        style: "Trap",
        image: "img/RAP-data/werenoi.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "2.8M Abonnés",
        bio: "La machine à hits du 93.",
        albums: [
            { titre: "Carré", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273cf93822043c831857ed3b6b4", tracks: ["Intro Rolex", "Maison hantée", "Ciao", "Figaro", "Grisaille", "Laboratoire", "Virus", "Tout seul", "L'ancien", "Vroum Vroum", "Satan 2", "Nos labels c'est du papel", "Boussole", "Escorte", "Salaire", "Chemin d'or"] },
            { titre: "Pyramide", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b27315a77fc58cab8c163a1b7509", tracks: ["Intro", "Pyramide", "Maudit", "Dans un verre", "Location", "Télescope", "La vie de star", "Chaleur", "Je suis en moto", "Matelas", "Les codes", "3x filtré", "Faf", "10.03.2023", "Animal", "Picasso", "Seul"] },
            { titre: "Telegram 2", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c52c479e4abc2aa659e9ed88", tracks: ["Magot", "Bang", "3x filtré", "Mauvaise", "Dans un verre", "Tu connais", "Bipolaire", "Alpha"] }
        ]
    },
    {
        id: "sdm",
        nom: "SDM",
        statut: "tendance",
        style: "Trap",
        image: "img/RAP-data/sdm.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "1.8M Abonnés",
        bio: "Ocho. La voix tonitruante du 92i.",
        albums: [
            { titre: "À la vie à la mort", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a325e460149f501926931d71", tracks: ["PLUS RIEN", "CARTIER SANTOS", "TOKA", "JEUX D'ECHECS", "MAINTENANT ÇA VA", "POUR ELLE", "METALLICA", "DANS LA TÊTE", "SCORPION", "TOUT CE QU'IL NOUS RESTE"] },
            { titre: "Liens du 100", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b27392c95d3cc8febc77abcc284e", tracks: ["Hier encore", "Mr. Ocho", "Bolide allemand", "Ragnar", "Nwar sur Nwar", "Si tu savais", "Cette année-là", "Fame", "Dans le club", "Franklin Saint", "2sang43", "Redescends", "File de gauche", "Le temps", "Sang40"] },
            { titre: "OCHO (Deluxe)", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273ec62df02695216324995130e", tracks: ["Intro", "Yakalelo", "Rousseau", "Titulaires", "Prince de la Calle", "Gâchette", "Appel manqué", "Daddy", "La vie de rêve", "Rentrer", "Keur nwar", "Droit de veto", "Cello", "Van Damme", "T'as peur", "Le bruit des applaudissements", "100-O", "Game Over", "Compte sur moi"] }
        ]
    },
    {
        id: "jul",
        nom: "Jul",
        statut: "tendance",
        style: "Mélo / Club",
        image: "img/RAP-data/jul.webp",
        certifications: { or: true, platine: true, diamant: true },
        chiffres: "7M Abonnés",
        bio: "L'OVNI. Le plus gros vendeur.",
        albums: [
            { titre: "L'OVNI", annee: "2016", cover: "https://i.scdn.co/image/ab67616d0000b273a3ccd9cc3107198b765742dc", tracks: ["On m'appelle l'ovni", "C'est le son de la gratte", "Tchikita", "Je dis rien", "E.T", "Je fais le sourd", "Qui a dit"] },
            { titre: "My World", annee: "2015", cover: "https://i.scdn.co/image/ab67616d0000b27387f416a5d60c26451569498b", tracks: ["En Y", "Wesh alors", "Comme d'hab", "Lova", "Mamasita", "Amnésia", "Dans l'appart", "Pour les vaillants"] },
            { titre: "La Machine", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273f82a0e7973c58b8623621f3f", tracks: ["Folie", "Italia", "Sousou", "Bande organisée", "Toute la nuit", "Pas de love"] }
        ]
    },

    // ==========================================
    // 💎 PÉPITES (Estime / Underground / New Wave)
    // ==========================================
    {
        id: "lafeve",
        nom: "La Fève",
        statut: "pepite",
        style: "New Wave",
        image: "img/RAP-data/la feve.webp",
        chiffres: "301k Abonnés",
        bio: "Le chef de file de la New Wave.",
        albums: [
            { titre: "ERRR", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730574e330a70e8d2426bcdaf7", tracks: ["BELEK", "OTW", "L'APPEL", "CASTRO", "NO HOOK", "SAOULÉ", "CRENSHAW", "RAT INTERLUDE", "ZAZA", "MAUVAIS PAYEUR", "VOIR AILLEURS", "BOXE INTERLUDE"] },
            { titre: "24", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a33d29964a9a8d7119bd73b6", tracks: ["ZOMBIE", "24", "DJ", "LOYAL", "QUI ?", "RIP KEED", "OUTRO"] },
            { titre: "KOLAF", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2736d59695e16cdf5e16d423e63", tracks: ["LA FOUDRE", "JEUNE INTERLUDE", "VILAIN", "TATOUE", "LADY D", "KOLAF"] }
        ]
    },
    {
        id: "alphawann",
        nom: "Alpha Wann",
        statut: "pepite",
        style: "Boom Bap",
        image: "img/RAP-data/alpha wann.webp",
        chiffres: "506k Abonnés",
        bio: "Le Don. La référence technique.",
        albums: [
            { titre: "UMLA", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273842b2c6c258fbaa254ff3b2c", tracks: ["Stupéfiant et noir", "Pistolet Rose", "Langage Crypté", "Pour celles", "Olive & Tom", "1500", "Ça va ensemble", "Contrex", "La lumière dans les yeux", "Le piège"] },
            { titre: "don dada mixtape vol 1", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273a49c00c7843b0232207f92a3", tracks: ["mitsubishi", "philly flingo", "soldat tue soldat", "ny à fond", "san andreas", "dirty", "velux", "t'as capté"] },
            { titre: "Alph Lauren 3", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273e08371d7196b3a7919af61f9", tracks: ["Paire de Prada", "R5", "Courchevel", "Turban", "Loub", "Shanghaï", "Kim K", "Le jeune de l'année"] }
        ]
    },
    {
        id: "laylow",
        nom: "Laylow",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "img/RAP-data/laylow.webp",
        chiffres: "876k Abonnés",
        bio: "Mr Anderson. Visionnaire digital.",
        albums: [
            { titre: "TRINITY", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273cf9726b68163ea79514a3435", tracks: ["Initialisation", "MEGATRON", "TRINITYVILLE", "VAMONOS", "PLUG", "PIRANA", "HILLZ", "AKIRA", "LOGICIEL TRISTE"] },
            { titre: "L'Étrange Histoire de Mr.Anderson", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735a3d26f61815307b18786a30", tracks: ["UN RÊVE ÉTRANGE", "L'HISTOIRE DE MR. ANDERSON", "IIV", "VOIR LE MONDE BRÛLER", "WINDOW SHOPPER PART. 1", "SPECIAL", "LOST FOREST"] },
            { titre: ".RAW-Z", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273cf62b87ffde24bdeb39ce231", tracks: ["KANYE WEST", "CITY", "MALADIE", "VISA", "AMY", "GOGO", "SWISH", "BOTOX"] }
        ]
    },
    {
        id: "hjeunecrack",
        nom: "H JeuneCrack",
        statut: "pepite",
        style: "New Wave",
        image: "img/RAP-data/h jeunecrack.webp",
        chiffres: "46k Abonnés",
        bio: "Le roi du DIY.",
        albums: [
            { titre: "3ème Cycle", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273f16862e7d10f265fcf354322", tracks: ["La Trinité", "Musée", "3 Meufs", "Vrai Crack", "La Cantine", "L'éther", "Le joueur le plus précieux"] },
            { titre: "MATIÈRE PREMIÈRE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a54c23c9aeeac4ae26b3f08c", tracks: ["Au max", "Mauvais", "Présidentiel flow", "La H", "Encore un matin", "T-Shirt blanc", "P.E.C.", "Cactus"] },
            { titre: "2ème Cycle", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734a61a62f65fcb25d452e54ed", tracks: ["Introduction", "Onyx", "Donne moi le", "Etoiles", "Cycle", "Tout droit", "Pape du hood", "Fin"] }
        ]
    },
    {
        id: "mairo",
        nom: "Mairo",
        statut: "pepite",
        style: "Boom Bap",
        image: "img/RAP-data/mairo.webp",
        chiffres: "52k Abonnés",
        bio: "La technique suisse.",
        albums: [
            { titre: "omar chappier", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735d9ae06e84346711dc45988b", tracks: ["la mouche", "crack crack", "2 jackets", "nouvelle écriture", "dope sound", "merci bonne journée", "larousse", "pov 2023"] },
            { titre: "Rougemort", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735cf180340c0ee8b22c9bd420", tracks: ["Rougemort", "Attentat", "La vigne", "Erythrée", "Kill Bill", "M.A.I.R"] },
            { titre: "95 monde libre", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273dd0a92b8b8f0e937a7c36757", tracks: ["g.o.a.t.", "eritrea", "satan 2", "coupe du monde", "superwak"] }
        ]
    },
    {
        id: "theodora",
        nom: "Theodora",
        statut: "pepite",
        style: "New Wave",
        image: "https://i.scdn.co/image/ab6761610000e5eb3bfbe791de7b8bb375eb0b63",
        bio: "La nouvelle voix hybride.",
        albums: [
             { titre: "BAD BOY LOVESTORY", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273789c34d16c0a31fa4a344be0", tracks: ["PAPA <3", "FNG", "PAY!", "ZOU BISOU", "FASHION DESIGNA", "MASSOKO NA MABELE", "I WANNA", "KONGOLESE SOUS BBL"] },
             { titre: "Neptune", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2730b56306b75632b26b8b2e963", tracks: ["Respect", "C'est Normal", "Prendre le large", "Neptune", "Habiba", "Rockstar", "Koby'z piano"] }
        ]
    },
    {
        id: "rowjay",
        nom: "Rowjay",
        statut: "pepite",
        style: "Trap",
        image: "https://i.scdn.co/image/ab6761610000e5eb29cfacd07106164138a78007",
        bio: "Le Jeune Fin du rap jeu.",
        albums: [
             { titre: "LA VIE RAPIDE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273918ae18ec9dd16328aa32497", tracks: ["RAP ARROGANT", "DOUBLE F", "SANGSUES", "POUR LA FINESSE", "ARGENT AU DELAWARE", "DANS CETTE MERDE", "EXERCICE DE FINESSE 2", "ORIGINAL FINESSEUR"] },
             { titre: "Carnaval de Finesse 2", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27349805946b4002387af6dc3f4", tracks: ["Carnaval de finesse freestyle", "Diddy Kadhafi", "10ème", "Champion", "Astral Drill"] },
             { titre: "Free Cdf2", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b273a11024598e83ee8b5b1d74e7", tracks: ["Free Cdf2 Intro", "Onlyfans", "La Finesse", "Majora Mask Freestyle", "Libre Échange", "Astral Drill"] }
        ]
    },
    {
        id: "osirusjack",
        nom: "Osirus Jack",
        statut: "pepite",
        style: "Drill",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Osirus+Jack",
        bio: "Le membre du 667.",
        albums: [
             { titre: "TSAR NOIR", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733b378bebce3611461afd6ab2", tracks: ["Killuavie", "Kyrie Irving", "Connectés", "OSS", "Lyoto Machida", "Normandie", "Bolo Yeung", "5000L", "Dangote", "Neuralink"] },
             { titre: "Nouvelle Ère", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273bfdaee6af094ccab1aa13d20", tracks: ["Ron Van Clief", "T.E.N.", "Mazout", "Trilogie", "C14", "Lampadaire, Pt. 2", "Nowitzki", "Or/Mif", "Plan De Match"] },
             { titre: "Nibiru", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b2735ebb7395365391692245969f", tracks: ["C.E.R.N", "Lufthansa", "Sous Teh", "V.V.T", "Dim Mak", "Même Merde", "MK Ultra", "Tsar Noir", "OV de Bavière"] }
        ]
    },
    {
        id: "zuukoumayzie",
        nom: "Zuukou Mayzie",
        statut: "pepite",
        style: "New Wave",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Zuukou",
        bio: "L'expert en pop culture.",
        albums: [
             { titre: "Le film : Le commencement", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734344efae32dd62e671ae2a73", tracks: ["L'air (Skit)", "Maman j'ai raté l'avion", "Top Boys", "Je t'aime si je peux", "Roméo + Juliette = mort", "True Romance", "Constantine", "Parasite"] },
             { titre: "Segunda Temporada", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273caeadac843a050cc39f92035", tracks: ["Pépé Anglais", "A.n.s.k.a", "Zuukou 2.2", "Skr Skr", "Mundo LDO", "Kevin Mitnick", "Pourquoi pas", "Victorinox"] },
             { titre: "Primera Temporada", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2735c179e806296a71055b8206d", tracks: ["Docteur Lulu", "Tarantino", "Qui-Gon Jinn", "Adouna Ko None"] }
        ]
    },
    {
        id: "jeunemorty",
        nom: "Jeune Morty",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Jeune+Morty",
        bio: "Sonorités Memphis.",
        albums: [
             { titre: "Eponyme", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273362a3161d4c7e8206f40678c", tracks: ["Oasis", "Plata", "Zoumana", "Glock Perfection", "Couture", "Ghetto Punk", "Zoo XXL", "Project"] },
             { titre: "ILUVMORTY", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273341e66db71462c78f35284a1", tracks: ["Dazed", "Bohème", "Mapuka", "Jagger", "Sergent Guei"] },
             { titre: "Ghetto Youth", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f9e727b58fbc1080f86be63a", tracks: ["Paluche", "4D", "Adesanya", "Solo Leveling", "Slayer", "Issey Miyake", "Money in the Bank", "Tokyo Drift"] }
        ]
    },
    {
        id: "g2b",
        nom: "G2B (L2B Gang)",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=G2B",
        bio: "L'énergie brute du 94.",
        albums: [
             { titre: "94 bois, Vol. 2", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732884426428293c160552c375", tracks: ["Montant", "Équipe de Daddy", "Amis d'enfance", "Jeune Banlieusard", "Bitume", "Mec D'ici", "Mauvais Djo", "Elle & Moi"] },
             { titre: "94 bois", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27373454e205655392951634162", tracks: ["94 Bois", "Traficante", "Cartel", "Poudrière"] }
        ]
    },
    {
        id: "8ruki",
        nom: "8ruki",
        statut: "pepite",
        style: "New Wave",
        image: "https://i.scdn.co/image/ab6761610000e5ebbcd42440c6aaf8bfdb20cfce",
        bio: "Le boss de la Plug.",
        albums: [
             { titre: "INT8TION", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273e03391e052342962076e9b02", tracks: ["y'a des gars", "ferme la", "OH LAla!!", "ANDREW TATE!!", "C'que j'en pense", "Blueface", "SWAG", "OUh!! (SPICE BOMB)", "Special", "On Go"] },
             { titre: "Green Lobby", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b2737e32c680838884275593575e", tracks: ["Lameshit", "Final Boss", "33R", "Blueface", "Rukidonmaj", "STFU", "Juul", "Fafa", "Univ8rs (maman)", "Biff"] },
             { titre: "PoweredByRuki", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273465069352576343045678518", tracks: ["AYA NAKAMURA*", "YOONIE.Comb*", "CARTIER*"] }
        ]
    },
    {
        id: "femtogo",
        nom: "Femtogo",
        statut: "pepite",
        style: "New Wave",
        image: "https://i.scdn.co/image/ab6761610000e5eb61236a1115008d0eb5795add",
        bio: "Baby Hayabusa.",
        albums: [
             { titre: "PRETTY DOLLCORPSE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f5b92f9fb4a143a70af526d2", tracks: ["WHITE CHAMBER TALK", "100 000 LUMEN", "HANK J", "BACHA BAZI WHISTLEBLOWER", "GEIGER COUNTER", "EVIL KNIEVEL", "SIXTH FLOOR", "G. MCKENNA", "PUKE SOMETHING", "MIRRROIR", "SEPTICÉMIE", "LE MÔME"] },
             { titre: "archives", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e1db04368efe629a3995b6a9", tracks: ["ZAGA", "ANY MERCY FORBIDDEN"] }
        ]
    },
    {
        id: "nes",
        nom: "NeS",
        statut: "pepite",
        style: "New Wave",
        image: "https://i.scdn.co/image/ab6761610000e5ebddcc049c87a10fd3ad940f96",
        bio: "Technique et style.",
        albums: [
             { titre: "ÇA VA ALLER", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c66a8347383590013021d8c3", tracks: ["CVA", "A/R", "SCOREBOARD", "LES SAPES QUE J'VEUX", "-94°C", "4X4", "RER C", "LE SOURIRE D'UNE TOMBE"] },
             { titre: "COSMIC", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273982602313642782144422447", tracks: ["SPACESHIP", "Exosquelette", "Lex Luthor", "Ninana", "Évidence", "Colibri", "Export", "COSMIC"] }
        ]
    },
    {
        id: "malo",
        nom: "Malo",
        statut: "pepite",
        style: "Trap",
        image: "https://i.scdn.co/image/ab6761610000e5ebe17c0aa1714a03d62b5ce4e0",
        bio: "Flow tout terrain.",
        albums: [
             { titre: "FROIDCOMMEDEHORS", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a17416a2430f74493c8351e7", tracks: ["4X4", "FROIDCOMMEDEHORS", "LA CAGE", "AU REVOIR", "X3", "PAS DE SEMBLANT", "PORSCHE", "VODOO", "MÉDICATION"] },
             { titre: "404", annee: "2023", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=404", tracks: ["404", "Error", "Not Found"] }
        ]
    },
    {
        id: "kekra",
        nom: "Kekra",
        statut: "pepite",
        style: "Drill",
        image: "https://i.scdn.co/image/ab6761610000e5eb2c0779b024e2292f655cbad0",
        bio: "Le masqué de Courbevoie.",
        albums: [
             { titre: "Vréel 3", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b2732d1603424134643512462435", tracks: ["Charbonne", "Pull Up", "Intermission", "Poches Pleines", "Tout Seul", "TLB", "Rap de Zulu", "Gros", "Pas Millionné", "Lexro", "Envoie La Monnaie 3.0", "Capuché"] },
             { titre: "Land", annee: "2018", cover: "https://i.scdn.co/image/ab67616d0000b273174443444343144341434143", tracks: ["Frérot", "10 balles", "Les autres", "Viceland", "J'fais pas ça", "Batman", "Wing Chun", "C'est bon", "Segpa", "Trabajo"] },
             { titre: "Stratos", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2735f938a76f6cbeca226cdcab9", tracks: ["Stratos", "Iverson", "J'arrête", "Ingé son", "Bloc de glace"] }
        ]
    },
    {
        id: "bbjacques",
        nom: "B.B. Jacques",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://i.scdn.co/image/ab6761610000e5eb4dfecaf883652dc5600ba055",
        bio: "L'intensité.",
        albums: [
             { titre: "Poésie d'une pulsion", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2735600ba055123456789012345", tracks: ["Fend Le Ciel", "Comme Une Cicatrice", "Déchirée", "La Promesse De L'aube", "Enfin Seul", "Loin D'ici", "Une Impression De Déjà-Vu", "Bleu Cristal", "Lnsc", "Océan Sonore"] },
             { titre: "New Blues, Old Wine", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273123456789012345678901234", tracks: ["HARMONIE", "NDSM", "INTÉRIEUR SCANDINAVE", "MÉTRO", "SPORT DE RICHE", "ALEX ADLER", "NO LOVE", "CINCINNATI", "PARDON", "INTERLUDE", "BLUE BIRD", "FUCK LA FAME", "RAINBOW"] }
        ]
    },
    {
        id: "menacesantana",
        nom: "Menace Santana",
        statut: "pepite",
        style: "Drill",
        image: "https://i.scdn.co/image/ab6761610000e5ebdbe5fb3873e4834fbf567f91",
        bio: "L'ambiance film d'horreur.",
        albums: [
             { titre: "Into The Dark", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e16e72525ce6d38393e98e94", tracks: ["1809", "Il Était Une Fois", "FREDDY KRUEGER", "Le Cauchemar Continue", "45 Seconds", "Belek mS", "Into The Dark", "Halloween"] },
             { titre: "!", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273fb043950d2c2ed3d61f05bf0", tracks: ["Michael Myers", "Skiboy", "Vendredi 13", "Cauchemar", "Adios"] }
        ]
    },
    {
        id: "deenburbigo",
        nom: "Deen Burbigo",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://i.scdn.co/image/ab6761610000e5ebd41e9d7d5ec773666a18acbc",
        bio: "Grand Cru.",
        albums: [
             { titre: "OG SAN II", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273f137fe7ba328ec4a9620923b", tracks: ["AM", "Oji", "Sennin", "Jdid", "Mansa", "Désolé", "Savane", "Dommage", "Rêve de gosse", "Tout ce qu'il faut"] },
             { titre: "Cercle vertueux", annee: "2020", cover: "https://i.scdn.co/image/ab67616d0000b27330baf01b00d9afedc52851c4", tracks: ["Tout est noir", "Cercle vertueux", "Vroom", "Jeu d'échecs", "Pura vida"] },
             { titre: "Grand Cru", annee: "2017", cover: "https://i.scdn.co/image/ab67616d0000b273123456789012345678901234", tracks: ["On y va", "Me réveiller", "Pas une autre", "Tu rêves", "Fils de riche"] }
        ]
    },
    {
        id: "404billy",
        nom: "404Billy",
        statut: "pepite",
        style: "Technique / Lyriciste",
        image: "https://i.scdn.co/image/ab6761610000e5eb8a59af09c109a4325463529d",
        bio: "Sombre et technique.",
        albums: [
             { titre: "SAMO.", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27311cc828faff0314dde37c2d6", tracks: ["Samo Era", "U. Paix & Amour", "N. B1jam1", "D. Extremist", "E. Musique Noire", "R. JeanJass Speech", "G. Cracovie", "R. Monsieur X"] },
             { titre: "Supernova", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2732d8e481b11bbd7eaa90345e5", tracks: ["Sombre", "RVRE", "Prends de la vitesse", "404", "Espèce", "Rage", "Titre", "Vérité", "Noir", "Supernova"] },
             { titre: "Process", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b273a05bf3bb45b52541a5e5f4ef", tracks: ["Process", "Error", "Loading", "System Failure", "Reboot", "Virus", "Data", "Shutdown"] }
        ]
    },
    {
        id: "34murphy",
        nom: "34Murphy",
        statut: "pepite",
        style: "New Wave",
        image: "https://i.scdn.co/image/ab6761610000e5ebfda095239f17100a885857f3",
        bio: "Mélodies introspectives.",
        albums: [
             { titre: "la chouette", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2730ccd7e346ecf4c8da393ca52", tracks: ["Encore un", "No Meta", "Gunz", "Milwaukee", "Tout comme", "L'amour et la haine", "Spécial", "24/24", "Sans fin"] },
             { titre: "9m²", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273c3a2b5d1674fc8b6c69e1840", tracks: ["9m2", "Cage", "Liberté"] },
             { titre: "fata morgana", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273ad35084d9a0f325c1bec5789", tracks: ["Mirage", "Désert", "Oasis"] }
        ]
    },
    {
        id: "lalaace",
        nom: "Lala &ce",
        statut: "pepite",
        style: "Cloud / Aérien",
        image: "https://i.scdn.co/image/ab6761610000e5eb2a9c1ccf62a81fbc03765596",
        bio: "Le flow le plus cool.",
        albums: [
             { titre: "SOLSTICE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2733f4e6cb1a3cf19984b150773", tracks: ["Intro", "No More Time", "Santos", "Licorne", "Drogue d'hiver", "Skit: RadioLaLigne", "Jalouse", "Money to Get to", "BUT", "Sexyy Red", "Apocalypse Sitcom", "Djinzin"] },
             { titre: "Everything Tasteful", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b273f000fb1e4f3a880456b54342", tracks: ["Sous l'eau", "Show Me Love", "Sipa", "Parapluie", "In Luv Again"] },
             { titre: "Le son d'après", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b27373a34a9d58e5dc9e70b4e9a4", tracks: ["Wet", "Amen", "Coulée", "Cellophane"] }
        ]
    },
    {
        id: "keeqaid",
        nom: "Keeqaid",
        statut: "pepite",
        style: "Trap",
        image: "https://i.scdn.co/image/ab6761610000e5eb5f6e9e9b1afc29e32d38d53e",
        bio: "L'énergie brute du 93.",
        albums: [
             { titre: "PATRON", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2734f691d14b20f10742c4d0b3f", tracks: ["Abana", "Arranger", "Bails", "Barzante", "Bâtard", "BÉBÉ", "Bénéfice", "Blablabla", "CHOSE", "Cinéma", "COURAGE", "Cru la rue"] },
             { titre: "PURIZÉ", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2736cf3384e94ae6626e145e3d3", tracks: ["Pur", "Mélange", "Chimie"] },
             { titre: "ANTICIPE", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b2736e76bffd1d41e06d7c8932f9", tracks: ["Avant", "Après", "Maintenant"] }
        ]
    },
    {
        id: "diditrix",
        nom: "Didi Trix",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/8A2BE2?text=Didi+Trix",
        bio: "Le flow bondissant de Bondy.",
        albums: [
             { titre: "Trix City", annee: "2019", cover: "https://i.scdn.co/image/ab67616d0000b2732e2b42419056364186241312", tracks: ["Bizz", "Dans la caisse", "Bédo", "Wow", "Périmètre", "Compton", "Yo Diddi", "Chien d'la casse", "Nine", "Trix City", "La maille", "La touche", "Dans l'block"] },
             { titre: "Cartel de Bondy", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Cartel", tracks: ["Cartel", "Bondy", "Nord"] },
             { titre: "Dope Boyz", annee: "2021", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Dope", tracks: ["Dope", "Boyz", "Gang"] }
        ]
    },
    {
        id: "junglejack",
        nom: "Jungle Jack",
        statut: "pepite",
        style: "Boom Bap",
        image: "https://i.scdn.co/image/ab6761610000e5ebee435ebbdd7b1f33b3d656fb",
        bio: "Technique et flows précis.",
        albums: [
             { titre: "JUNGLE DES ILLUSIONS VOL 2", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273af73f776b92d4614152fb141", tracks: ["CHARBON ET DEVOUEMENT", "KABUKI", "SYSTÈME D", "L'ÉQUILIBRISTE", "VUE IMPRENABLE SUR LA JUNGLE", "QUARTIERS EST", "L'HOMME AU PLAN", "CAMP D'ENTRAÎNEMENT", "AVEC LE TEMPS", "XX FILES", "LE CHEMIN", "MENIL ET UNE NUIT"] },
             { titre: "JUNGLE DES ILLUSIONS VOL 1", annee: "2021", cover: "https://i.scdn.co/image/ab67616d0000b27390fec704a65cffc55371b230", tracks: ["Illusion", "Réalité", "Mirage"] },
             { titre: "Cognacs & Cigarettes", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273555bfdf6dd67fd3ab34befe4", tracks: ["Cognac", "Cigarette", "Fumée"] }
        ]
    },
    {
        id: "hladrogue",
        nom: "H La Drogue",
        statut: "pepite",
        style: "Trap",
        image: "https://i.scdn.co/image/ab6761610000e5ebf55c942bf9b1d3449ec253a0",
        bio: "Le 92 dans sa forme street.",
        albums: [
             { titre: "Drogue", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27372cacec2e6e2d1bc838883b7", tracks: ["Seklenland Pt.5", "Sonorité", "Navou", "Mauvais Mélange", "Seklenland Pt.1"] },
             { titre: "Beretta", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2734f0e644e1335c640e545fe25", tracks: ["Beretta", "Seklenland Pt.6", "Tir"] }
        ]
    },
    {
        id: "maureen",
        nom: "Maureen",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://i.scdn.co/image/ab6761610000e5eb65be997de2bc70742162d288",
        bio: "Shatta Queen.",
        albums: [
             { titre: "BAD QUEEN", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273a45aac90a544aa9fc2d333ed", tracks: ["Jiggle", "Kompet", "C'est quoi ça", "Ding Dong", "Pum Fat", "Kompet x Jiggle"] },
             { titre: "Tic", annee: "2020", cover: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Tic", tracks: ["Tic", "Tac"] }
        ]
    },
    {
        id: "tks2g",
        nom: "TKS 2G",
        statut: "pepite",
        style: "Mélo / Club",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=TKS+2G",
        chiffres: "20k Abonnés",
        bio: "La relève Shatta/Rap.",
        albums: [
             { titre: "AVTLR", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b2736970ad8e627d2e812514f32a", tracks: ["AVTLR", "Soum Soum", "Pas ton temps", "Paddle", "Whine", "La Police", "Célibataire Polygame", "Célibataire Polygame Part.2"] }
        ]
    },
    {
        id: "laioss",
        nom: "Laïoss",
        statut: "pepite",
        style: "New Wave",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Laïoss",
        chiffres: "10k Abonnés",
        bio: "Underground quality.",
        albums: [
             { titre: "BRISE L'AUTOMNE", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273bc3b8e3830e928216f782f38", tracks: ["LAÏOSS COURS!", "ZIA", "AMMONITE", "DANS TA MÉMOIRE", "SAUVAGE", "RAVIN", "UN PEU GIVRÉ", "FOU DE TOI"] },
             { titre: "don't cryyy", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b273e7c80009093581adfe63ff16", tracks: ["don't", "cryyy"] }
        ]
    },
    {
        id: "sherifflazone",
        nom: "Sherifflazone",
        statut: "pepite",
        style: "New Wave",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Sherifflazone",
        chiffres: "15k Abonnés",
        bio: "Pionnier de la DMV Crank.",
        albums: [
             { titre: "DMVP", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b27382d726d3a3001ee4da245d03", tracks: ["SHINE", "BRICKS", "ERABLE", "LOCAL", "MBELI", "EASTPACK", "CHEATCODE", "AMIRI", "STACK", "FAST FORD", "SHERIFF", "JUMPMAN", "DMVP"] }
        ]
    },
    {
        id: "benndoz",
        nom: "Beendo Z",
        statut: "pepite",
        style: "Drill",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Beendo+Z",
        chiffres: "50k Abonnés",
        bio: "Inspiré de faits réels.",
        albums: [
             { titre: "L'Élu", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273a240195dc784c77e37a12d99", tracks: ["Le Papa", "Comics", "L'Élu", "Est-ce que c'est vrai ?", "Booska Z", "Chrome", "EDL 75", "Cas Contact", "Ngannou", "1ère Pierre", "Houdini", "17 Joints"] }
        ]
    },
    {
        id: "jeunelion",
        nom: "Jeune Lion",
        statut: "pepite",
        style: "New Wave",
        image: "https://i.scdn.co/image/ab6761610000e5eb61700dc6eba1474354d1812c",
        bio: "L'esprit d'Abidjan.",
        albums: [
             { titre: "HIGHLY SPIRITUAL", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b27332e52f38b7af55440d15f013", tracks: ["INTRO MYSTIC (DIEU)", "LION NOUVELLE VAGUE", "23", "SOUL", "PETER TOSH", "RICH", "DISPENSARY", "ROUGE LIBANAIS", "KONGO"] },
             { titre: "BEFORE BABYLONE BURNT", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b273e5c0c6b5506c1c593e624b81", tracks: ["BABYLONE", "BURNT"] }
        ]
    },
    {
        id: "inocasablanca",
        nom: "Ino Casablanca",
        statut: "pepite",
        style: "New Wave",
        image: "https://i.scdn.co/image/ab6761610000e5eb99a1b4ab4c81bef19061ade6",
        bio: "Fusion unique.",
        albums: [
             { titre: "TAMARA", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273330d6552132a184df90d4341", tracks: ["NOUVO GROOVE", "ALBUFEIRA", "AVANT LA FIN", "FUCK LARR", "CIAO, MY LOVE !", "PARAPLUI"] },
             { titre: "DEMNA", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2738c72a4409fe11fa3c336f9c9", tracks: ["DEMNA"] }
        ]
    },
    {
        id: "folies",
        nom: "Folie's",
        statut: "pepite",
        style: "New Wave",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=Folie's",
        chiffres: "83 Abonnés",
        bio: "Univers coloré.",
        albums: [
             { titre: "Folie's je t'aime", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2738a22db41c72eace14f65702f", tracks: ["ILY Intro", "F*Love", "Nosleeve", "BAD!", "Nymphomaniac", "IHY Outro"] }
        ]
    },
    {
        id: "gapman",
        nom: "Gapman",
        statut: "pepite",
        style: "Trap",
        image: "https://i.scdn.co/image/ab6761610000e5eb040c3009faa552350ae5cc12",
        bio: "La Trap du Nord.",
        albums: [
             { titre: "Prochaine Chèvre", annee: "2023", cover: "https://i.scdn.co/image/ab67616d0000b273a9c62cfbad601895931281c3", tracks: ["Draco / Intro", "Mephisto", "Lundi", "21", "Piège", "Crazy Story", "Monopole", "Souvent"] }
        ]
    },
    {
        id: "jima",
        nom: "Jima",
        statut: "pepite",
        style: "New Wave",
        image: "https://i.scdn.co/image/ab6761610000e5ebaf2b24c1d7e3f69b25b2e70f",
        chiffres: "7k Abonnés",
        bio: "Underground et créatif.",
        albums: [
             { titre: "JIMALDUIN", annee: "2024", cover: "https://i.scdn.co/image/ab67616d0000b2734e9482f5c64dd6f381a5493f", tracks: ["⭢", "sam est =", "attention!! screamer à 0:00", "avance2bz", "staross EX"] }
        ]
    },
    {
        id: "tkkf",
        nom: "TKKF",
        statut: "pepite",
        style: "New Wave",
        image: "https://i.scdn.co/image/ab6761610000e5eba3b678758ed7d936771e806e",
        chiffres: "18k Abonnés",
        bio: "Hyperpop Rap.",
        albums: [
             { titre: "pale blue dot", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273ce92f419b4da1a732eb0892e", tracks: ["0gravité", "Olive et TON-618", "absolute black", "Voyager 1", "Voyager 2", "La fin du voyage", "bye! blue"] }
        ]
    },
    {
        id: "ptitesoeur",
        nom: "Ptite Soeur",
        statut: "pepite",
        style: "New Wave",
        image: "https://i.scdn.co/image/ab6761610000e5eb1ff4823cc2d279543d3d3e0b",
        chiffres: "53k Abonnés",
        bio: "Talent émergent.",
        albums: [
             { titre: "PRETTY DOLLCORPSE", annee: "2025", cover: "https://i.scdn.co/image/ab67616d0000b273f5b92f9fb4a143a70af526d2", tracks: ["WHITE CHAMBER TALK", "100 000 LUMEN", "HANK J", "BACHA BAZI WHISTLEBLOWER", "GEIGER COUNTER", "EVIL KNIEVEL", "SIXTH FLOOR", "G. MCKENNA", "PUKE SOMETHING", "MIRRROIR", "SEPTICÉMIE", "LE MÔME"] }
        ]
    },
    {
        id: "g2b",
        nom: "G2B (L2B Gang)",
        statut: "pepite",
        style: "Trap",
        image: "https://placehold.co/400x400/1a1a1a/00FFFF?text=G2B",
        chiffres: "60k Abonnés",
        bio: "L'énergie brute du groupe.",
        albums: [
             { titre: "94 bois, Vol. 2", annee: "2022", cover: "https://i.scdn.co/image/ab67616d0000b2732884426428293c160552c375", tracks: ["Montant", "Équipe de Daddy", "Amis d'enfance", "Jeune Banlieusard", "Bitume", "Mec D'ici", "Mauvais Djo", "Elle & Moi"] }
        ]
    }
];