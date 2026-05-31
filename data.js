const CHATGPT_URL = 'https://chatgpt.com/';

const HOME_ITEMS = [
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `blokea-${i + 1}`,
    title: `${i + 1}. BLOKEA`,
    description: 'Blokearen edukia, txantiloiak, dokumentazioa, promptak, adibideak eta checklista.',
    href: `block.html?block=${i + 1}`,
    index: `${i + 1}`
  })),
  {
    id: 'dokumentazio-gehigarria',
    title: 'DOKUMENTAZIO GEHIGARRIA',
    description: 'Drive-ko dokumentu osagarriak, normalean PDFan.',
    href: 'dokumentazio-gehigarria.html',
    index: '10'
  },
  {
    id: 'estekak',
    title: 'ESTEKAK',
    description: 'Kanpo webgune eta baliabide interesgarriak.',
    href: 'estekak.html',
    index: '11'
  }
];

const ADDITIONAL_DOCS = [
  {
    title: '2025 OPEaren Deialdia',
    description: 'Azken oposaketako deialdia',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1_u1bUB066_nQkMoP5K8jojtxuKl-bQJI/view?usp=drive_link'
  },
  {
    title: 'Programazio Didaktikoaren Errubrika',
    description: 'Programazio Didaktikoaren aurkezpena ebaluatzeko errubrika.',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/11LUmM1v3_fDcJJmRgGcKThoHNLtPW0Q1/view?usp=drive_link'
  },
  {
    title: 'Etapako Helburuak',
    description: 'Dekretuaren 7. artikuluan Etapako Helburuak jasota daude.',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1R2lIXLGW-g-tMjegtlw8E8KBLS8rR8P_/view?usp=drive_link'
  },
  {
    title: 'Natur Zientziak 2 (Curriculum laburtua)',
    description: 'Natur Zientziak irakasgaiko konpetentzia espezifikoak, ebaluazio irizpideak eta oinarrizko jakintzak.',
    type: 'PDF',
    url: 'https://drive.google.com/file/d/1UcAB7Y45XMpI703ge3sy0d3zz06vLW8t/view?usp=drive_link'
  },
  
];

const QUICK_LINKS = [
  {
    title: 'Euskal Curriculum-aren Infografia orokorra',
    description: 'Dekretua modu interaktiboan, behar duzun guztia hemen aurkitu ahal izango duzu.',
    url: 'https://www.berrigasteiz.com/monografikoak/ec22/etapa_oinarrizkoa/ec22_oinarrizkoa_e.html'
  },
  {
    title: 'Irteera Profila',
    description: 'Oinarrizko Hezkuntzaren Irteera Profila (Etapako Helburuak, Funtsezko Konpetentziak eta Deskribatzaile Operatiboak)',
    url: 'https://www.berrigasteiz.com/monografikoak/ec22/etapa_oinarrizkoa/ec22_oinarrizkoa_profila_e.html'
  },
  {
    title: 'Agenda 2030',
    description: 'Garapen Jasangarrirako Helburuen zerrenda',
    url: 'https://www.un.org/es/impacto-acad%C3%A9mico/page/objetivos-de-desarrollo-sostenible'
  },
  {
    title: 'ChatGPT',
    description: 'Promptak erabiltzeko sarbide zuzena.',
    url: CHATGPT_URL
  }
];

const SHARED_STRUCTURE = {
  txantiloiak: [
    {
      title: 'Programazioaren azaleko txantiloia',
      description: 'Deskargatzeko edo kopiatzeko Drive dokumentua.',
      url: 'https://drive.google.com/file/d/TXANTILOI-1/view?usp=sharing'
    },
    {
      title: 'Atalen antolaketa-orria',
      description: 'Blokearen egitura planifikatzeko dokumentua.',
      url: 'https://drive.google.com/file/d/TXANTILOI-2/view?usp=sharing'
    }
  ],
  dokumentazioa: [
    {
      title: '2025 OPEaren Deialdia',
      description: 'PDF edo Drive dokumentu osagarria.',
      url: 'https://drive.google.com/file/d/1_u1bUB066_nQkMoP5K8jojtxuKl-bQJI/view?usp=drive_link'
    },
    {
      title: 'Erreferentzia pedagogikoak',
      description: 'Blokearen edukia justifikatzeko oinarrizko baliabideak.',
      url: 'https://drive.google.com/file/d/DOK-2/view?usp=sharing'
    }
  ],
  prompts: [
    {
      title: 'Lehen zirriborroa sortzeko prompta',
      description: 'Blokearen atala lehen aldiz garatzeko erabilgarria.',
      prompt: 'Sortu nire programazio didaktikako atal honen lehen zirriborroa euskaraz. Testua formala baina argia izan dadila. Kontuan hartu Bigarren Hezkuntzako testuingurua, Euskal Autonomia Erkidegoko curriculum-esparrua eta oposizioetako tonu akademikoa. Eman epigrafe argiak eta testu koherentea.'
    },
    {
      title: 'Hobetzeko eta fintzeko prompta',
      description: 'Dagoeneko idatzita dagoen testu bati kalitate handiagoa emateko.',
      prompt: 'Berridatzi hurrengo testua hizkera akademiko zehatzagoarekin, ideiak hobeto lotuz eta oposizio baterako egokiago bihurtuz. Mantendu esanahia, saihestu errepikapenak eta eman bertsio trinkoa baina sendoa. Testua: [itsatsi hemen zure testua]'
    },
    {
      title: 'Egokitzapen kritikorako prompta',
      description: 'Testua ez dadin generikoa izan eta zure egoerara hobeto egokitzeko.',
      prompt: 'Aztertu hurrengo testua eta esan zein zati diren orokorregiak oposizio baterako. Ondoren, proposatu nola pertsonalizatu ikastetxearen testuingurura, ikasleen ezaugarrietara eta irakasgaiaren berezitasunetara egokituta. Testua: [itsatsi hemen]'
    }
  ],
  examples: [
    {
      label: 'Literalki erabil daiteke',
      type: 'allowed',
      text: 'Programazio didaktikoa ikaskuntza-prozesuaren plangintza sistematikoa da, hezkuntza-esku-hartzearen koherentzia, jarraitutasuna eta ebaluagarritasuna bermatzeko.'
    },
    {
      label: 'Egokitu behar da',
      type: 'adapt',
      text: 'Ikastetxearen testuingurua anitza da eta ikasleen beharrei erantzuten dien metodologia aktiboa lehenesten da. Zati hau zure ikastetxearen errealitatearekin berridatzi behar da.'
    },
    {
      label: 'Ez erabili',
      type: 'forbidden',
      text: 'Aurreko oposizioko programazio baten pasarte espezifikoak, izen propioak, datu zehatzak edo egiaztatu gabeko baieztapenak ez dira kopiatu behar.'
    }
  ]
};


const BLOCKS = {
  1: {
    title: '1. BLOKEA',
    subtitle: 'PD-aren Estruktura orokorra, Indarguneak eta programazioaren narratiba',
    helburuak: [
      'Programazio Didaktiko baten estruktura orokorra (atalak) aurkeztea.',
      'OPEIKASI plataforma nola erabiltzen den ikastea',
      'Irakasle bezala ditudan indarguneei buruz hausnartzea.',
      'Urte osoan zehar gure irakasgaiak izango duen narratiba pentsatzen hastea.'
    ],
    checklist: [
      'Programazi Didaktiko baten atalak zeintzuk diren ulertzen ditut (Oraindik nola garatu behar ditudan ez dakidan arren)',
      'OPEIKASI plataforma deskargatu dut nire ordenagailuan',
      'OPEIKASI plataforma erabiltzen dakit (Bloke ezberdinetan sartu, dokumentuak deskargatu, checklista-a erabili...)',
      'TXANTILOIA 1.1. (Indarguneak) bete dut.',
      'TXANTILOIA 1.2. (Indarguneak) bete dut.'
    ],

    txantiloiak: [
      {
        title: 'Txantiloia 1.1.',
        description: 'Indarguneak',
        url: 'https://drive.google.com/drive/folders/1KyaD2opLYYkTtRBh8whA4Ze00pjUyp4Z?usp=drive_link'
      },
      {
        title: 'Txantiloia 1.2.',
        description: 'Ikasturtearen narratiba edo logika',
        url: 'https://drive.google.com/drive/folders/1FSIb8P05qNsCXVP_k22py4ONK3eO4WBI?usp=drive_link'
      }
    ]
  },

  2: {
    title: '2. BLOKEA',
    subtitle: 'Curriculum-aren azalpena.',
    image: 'img/blokea2.png',
    helburuak: [
      'Irteera Profila, Funtsezko Konpetentziak eta Deskribatzaile Operatiboen arteko erlazioa ulertzea',
      'Deskribatzaile Operatiboen eta Konpetentzia Espezifikoen arteko erlazioa ulertzea',
      'Konpetentzia Espezifiko eta Ebaluazio Irizpideen arteko erlazioa ulertzea',
      'Ebaluazio Irizpideen eta Lorpen Adierazleen arteko erlazioa ulertzea',
      'Oinarrizko Jakintzak eta Konpetentzia Espezifikoak, Lorpen Adierazleen bitartez nola integratu daitezkeen ikastea'
    ],
    checklist: [
      'TXANTILOIA 2.1 (Curriculuma antolatu) bete dut'
    ],

    txantiloiak: [
      {
        title: 'TXANTILOIA 2.1 ',
        description: 'Elementu Curricularrak antolatu',
        url: 'https://drive.google.com/drive/folders/18Q0WszH4asq0l7HoM8zhi-ayFNa-hFcx?usp=drive_link'
      },

    ],

    dokumentazioa: [
      {
        title: 'Heziberriren Infografia orokorra',
        description: 'Curriculumari buruzko erreferentzia nagusia.',
        url: 'https://www.berrigasteiz.com/monografikoak/ec22/etapa_oinarrizkoa/ec22_oinarrizkoa_e.html'
      },
      {
        title: 'Irteera Profila',
        description: 'Irteera Profila, Funtsezko Konpetentziak, Etapako Helburuak eta Deskribatzaile Operatiboak',
        url: 'https://www.berrigasteiz.com/monografikoak/ec22/etapa_oinarrizkoa/ec22_oinarrizkoa_profila_e.html'
      },
      {
        title: 'Dekretuaren 7.artikulua',
        description: '7. artikuluan Etapako Helburuak aurki ditzakezu',
        url: 'https://www.berrigasteiz.com/monografikoak/ec22/etapa_oinarrizkoa/dekretua/art_01-09_e.pdf'
      },
      {
        title: 'Ekonomia 4.DBH',
        description: 'Ekonomia eta ekintzailetza irakasgiari lotutako Curriculum-aren atala',
        url: 'https://www.berrigasteiz.com/monografikoak/ec22/etapa_oinarrizkoa/jakintzagaiak_dbh/DBHA4_ekonomia_e.pdf'
      },
      {
        title: 'Natur Zientziak 2.DBH',
        description: 'Natur Zientziak irakasgiari lotutako Curriculum-aren atala',
        url: 'https://www.berrigasteiz.com/monografikoak/ec22/etapa_oinarrizkoa/jakintzagaiak_dbh/DBH8_natur_zientziak_e.pdf'
      },

    ]
  },

  3: {
    title: '3. BLOKEA',
    subtitle: '"Gehigarriak":Zeharlerroak, Disziplinartekotasuna, Agenda 2030, Irteerak.',
    helburuak: [
      'Gure PDan kontuan hartu behar ditugun gehigarriak (Zeharlerroak, ardatzak, erabakiak...) zeintzuk diren ezagutu',
      'Disziplinartekotasuna Zergatik eta Nola egin behar den ulertu',
      'Diszplinartekotasuna Programazio Didaktikoan nola islatzen den ikastea',
      'Agenda 2030eko Garapen Jasangarriko Helburuak zeintzuk diren jakitea',
      'Ikastetxearen Zeharlerroak zeintzuk diren ezagutzea: Hezkidetza, Plan Digitala eta Irakurketa Plana',
      'Ikas-irakas prozesua aurrera eramateko espazio ezberdinetaz hausnartzea'
    ],
    checklist: [
      'TXANTILOIA 3.1 (Gehigarriak) bete dut'
    ],

    txantiloiak: [
      {
        title: 'Txantiloia 3.1 (Gehigarriak)',
        description: 'Gehigarriak antolatzeko txantiloia.',
        url: 'https://drive.google.com/drive/folders/19-0aJSdUBIRCKVL3IW4e71QwNCODwKkH?usp=drive_link'
      }
    ],

    dokumentazioa: [
      {
        title: 'Funtsezko Ardatz Pedagogikoak',
        description: 'Egungo hezkuntza-eskaerei erantzuteko helburuarekin oinarri diren funtsezko ARDATZ PEDAGOGIKOAK.',
        url: 'https://curriculuma.euskadi.eus/eu/printzipioak'
      },
      {
        title: 'Garapen Iraunkorreko Helburuak (Agenda 2030)',
        description: 'Garapen Jasangarrirako Helburuei buruzko dokumentazioa.',
        url: 'https://www.un.org/sustainabledevelopment/es/sustainable-development-goals/'
      },
      {
        title: 'Hezkidetzagunea',
        description: 'ezkidetza zeharlerroari buruzko informazio guztia.',
        url: 'https://hezkidetzagune.euskadi.eus/eu/hasiera'
      },
      {
        title: 'Digigunea',
        description: 'Plan digitalaren zeharlerroari buruzko informazio guztia.',
        url: 'https://digigunea.euskadi.eus/eu/hasiera'
      },
      {
        title: 'Irakurgunea',
        description: 'Irakurketa planaren zeharlerroari buruzko informazio guztia.',
        url: 'https://digigunea.euskadi.eus/eu/hasiera'
      }
    ],

    examples: [
      // {
      //   label: 'Literalki erabil daiteke',
      //   type: 'allowed',
      //   text: 'Zeharlerroek programazio didaktikoaren ikuspegi integrala indartzen dute, ikaskuntza curriculumetik harago kokatuz.'
      // },
      {
        label: 'Egokitu behar da',
        type: 'adapt',
        text: '(HEZKIDETZAN APLIKATZEKO):   Klaseko giro ona izan arren, mutilek presentzia askoz handiagoa dute klasean: saioetan asko parte hartzen dute, maiz txandak errespetatu gabe; eta klase tarteetan elkarrekin borrokatzera jolasten dira espazio fisiko gehiena okupatuz. Beraz, gela honetarako irakasle taldeak ezarritako helburuetako bat nesken protagonismoa eta parte hartzea handitzea izan da. Horretarako, nesken parte hartzea sustatuko dugu, haien iritzia eskatuz edota taldeetako bozeramaile rola emanez. Honekin batera, Ikastetxeko Hezkidetza Planarekin bat eginez zenbait  jarduera planteatuko ditugu, emakumeek zientziaren historian egindako ekarpena balioan jarri eta neskengan bokazio zientifiko-teknologikoak sustatzeko ez ezik, presentzia femeninoa handitu eta nesken ahalduntzea lagundu ahal duelako.'
      },
      {
        label: 'Egokitu behar da',
        type: 'adapt',
        text: '(HEZKIDETZAN APLIKATZEKO):   Programazioaren helburuekin bat eginez hezkidetza lantzeko estrategia ezberdinak erabiltzen dira. Alde batetik, ikas-egoeratan emakume zientzialariei buruzko jarduerak programatu dira (2. eta 8. ikas-egoeratan CIEMAT erakundetik emango dizkiguten hizketaldietan emakumeak izango dira hizlariak), emakumeek zientzia eta teknologian egindako ekarpenak aintzatetsi eta neskengan STEAM bokazioak pizten laguntzeko erreferenteak eskaintzeko. Adibidez, 2. ikas-egoeran emakume zientzialariari ezberdinekin “Nor da Nor?” jolasaren moldaketa bat sortzen dute Udaletxeak martxan jarritako txapelketa batean parte hartzeko. Bestetik, material didaktikoak bilatzean neska eta mutilen proportzioa eta irudikapena zaindu da, estereotipoak baztertzeko apustua eginez. Taldekatzeak egitean hauek mistoak izatea irizpide gisa erabiliko da. Azkenik, talde honetan mutilek duten gehiegizko protagonismoa orekatzeko klaseetan nesken parte hartzea sustatu eta bozeramaile rolak haiei ematen saiatuko gara'
      },
      {
        label: 'Egokitu behar da',
        type: 'adapt',
        text: '(PLAN DIGITALEAN APLIKATZEKO):   Aurrerago komentatuko dudan bezala gure irakasgaia IKT ezberdinen erabilerak kontuan hartzen ditu Ikastetxeko Plan Digitalari dagokionez, baina bada horien artean bat gure irakasgaiari egokitu zaiona bereziki eta adimen artifizialaren erabilera da. Metodologiaren printzipio eta estrategiak eta gure ikasleriaren aniztasuna ulertuz ezinbestekoa da irakaskuntza modu indibidualizatu batean eskaintzea, baina hau askotan kimera batean bihurtzen da. Honengatik adimen artifizialak dituen aukerak erabiltzen ditugu modu gidatuan ikasleari autoerregulazioarako eta batez ere autonomiarako oso erabilgarria den ChatGPT tresna aurkezten. Gure ikastaldean detektatu da askotan ez direla kapazak jakiteko egin dituzten jarduerak ondo edo txartu egin dituzten eta horri aurre egiteko eta banakako ikas prozesua bermatzeko adimen artifizialen aldeko apustua egin dut. Plataforma hau ezaguna da ikasle askorentzat eta askotan informazioa bilatzeko erabiltzen dute, baina gure kasuan zentratu bahi gara ikasleari sortuko zaizkion zalantza konkretuak modu indibidualizatu batean konpontzeko. Gainera, ikasleekin Prompt zerrenda bat lantzen da zeintzuekin ikasleek hasiera modu gidatuan eta ondoren modu autonomoan jakin eta ulertzen dute haien ikas prozesuaren zein puntutan dauden eta zeintzuk diren aurrera jarraitzeko eman ditzaketen urratsak. Helburua ez irakaslearen lana ordezkatzea baizik eta modu bateratu batean honen osagarri izatea'
      },
      {
        label: 'Egokitu behar da',
        type: 'adapt',
        text: '(IRAKURKETA PLANEAN APLIKATZEKO):   Ikastetxeko Hizkuntza Planarekin bat egiteko ikas-egoera askotan bukaerako produktuak modu ahozkoan aurkezten dira (aniztasunaren trataera kontuan hartuta beharrezkoak diren adaptazioak eginez) erabilitako hizkuntzari erreparatuz eta bai zientziaren munduan eta beste testuinguruetan erabilgarriak diren terminoak eta esaldi motak landuz. Irakurketa Planak garrantzi handia du gure ikastetxean eta honengatik gure 2. ikas-egoeran gure auzoko udal liburutegira goaz “Nor da nor?” proiektuaren barnean. Honetan ikasleek bisita gidatu bat dute zeinetan azaltzen zaien liburutegiek eskaintzen dituzten aukera guztiak eta nola erabili daitezkeen. Gainera, irakasgaia zehar lantzen diren testu idatziak irakurtzerakoan ulermen galderak proposatzen dira ikasleei, testuen ulermena sendotzeko eta agertu daitezkeen arazoei aurre egiteko.'
      }
      // {
      //   label: 'Ez erabili',
      //   type: 'forbidden',
      //   text: 'Ez sortu ikas-egoerak elkarren arteko loturarik gabe edo kronologia didaktikorik gabe.'
      // }
      
    ]
  },

  4: {
    title: '4. BLOKEA',
    subtitle: 'Ikas-egoeren planifikazioa',
    helburuak: [
      'Programazio Didaktikoa osatzen duten 9 Ikas-egoeren erronka aukeratzea',
      'Ikas-egoera bakoitzean landuko diren Konpetentzia Espezifikoak aukeratzea',
      'Ikas-egoera bakoitzean landuko diren Oinarrizko Jakintzak aukeratzea',
      '9 ikas egoerak antolatu narratiba baten barruan non OJ eta KE kronologikoki antolatut dauden',
      'Ikas-egoera bakoitzean erabiliko diren pegatinak zehaztu'
    ],
    checklist: [
      '1. TXANTILOIA (Ikas-egoerak_1: Izenburuak + Erronkak) bete dut',
      '2. TXANTILOIA (Ikas-egoerak_2: KE + OJ = Ikas-egorak) bete dut',
      '3. TXANTILOIA (Oinarrizko_jakintzak_1)  bete dut',
      '4. TXANTILOIA (Konpetentzia_espezifikoak_1)  bete dut',
      '5. TXANTILOIA (Ikas_egoerak_3: Pegatinak)  bete dut'
    ],

    txantiloiak: [
      {
        title: 'Ikas-egoerak 1: izenburuak eta erronkak',
        description: 'Ikas-egoeren lehen antolaketa egiteko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-1/view?usp=sharing'
      },
      {
        title: 'Ikas-egoerak 2: KE + OJ',
        description: 'Konpetentzia espezifikoak eta oinarrizko jakintzak lotzeko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-2/view?usp=sharing'
      }
    ],

    dokumentazioa: [
      {
        title: 'Ikas-egoeren gida',
        description: 'Ikas-egoerak planifikatzeko dokumentazio nagusia.',
        url: 'https://drive.google.com/file/d/DOK-1/view?usp=sharing'
      },
      {
        title: 'Narratiba didaktikoaren erreferentzia',
        description: 'Ikasturteko progresioa eta koherentzia lantzeko.',
        url: 'https://drive.google.com/file/d/DOK-2/view?usp=sharing'
      }
    ],



    examples: [
      {
        label: 'Literalki erabil daiteke',
        type: 'allowed',
        text: 'Ikas-egoeren sekuentziazioak ikasturteko progresio logikoa bermatu behar du.'
      },
      {
        label: 'Egokitu behar da',
        type: 'adapt',
        text: 'Erronkak ikasleen interesekin eta irakasgaiaren berezko edukiekin lotu behar dira.'
      },
      {
        label: 'Ez erabili',
        type: 'forbidden',
        text: 'Ez sortu ikas-egoerak elkarren arteko loturarik gabe edo kronologia didaktikorik gabe.'
      }
    ]
  },

  5: {
    title: '5. BLOKEA',
    subtitle: 'Ikas Egoeren garapena.',
    helburuak: [
      'Ikas-egoera baten taula orokorra ezagutu eta ulertzea',
      'Ikas-egoeraren sarrera osatzen duten atalak ezagutu eta ulertu (Testuingurua, Erronka, Abiapuntua, Azken Ekoizpena, Xedea, Disziplinartekotasuna, Transferenzia)',
      'Ikas-egoera osatzen duten jarduerak pentsatzea eta hiru fase nagusietan banatzea',
    ],
    checklist: [
      'Ikas-egoeraren taularen kopia nire Drive pertsonalean daukat',
      'TXANTILOIA 1 (Ikas-egoera + Jarduerak + OJ + KE + Lorpen Adierazleak) bete dut',
      'TXANTILOIA 2 (Ikas-egoera + Jarduerak + Baliabideak + Ebaluazio produktuak/tresnak)',
      'TXANTILOIA 3 (Lorpen Adierazleak + Helburu Didaktikoak)',
      'TXANTILOIA 4 (Jarduerak + Saioak + Pegatinak)',
      'TXANTILOIA 5 (Helburu Didaktikoak + Pegatinak)'
    ],

    txantiloiak: [
      {
        title: 'Ikas-egoerak 1: izenburuak eta erronkak',
        description: 'Ikas-egoeren lehen antolaketa egiteko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-1/view?usp=sharing'
      },
      {
        title: 'Ikas-egoerak 2: KE + OJ',
        description: 'Konpetentzia espezifikoak eta oinarrizko jakintzak lotzeko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-2/view?usp=sharing'
      }
    ],

    dokumentazioa: [
      {
        title: 'Ikas-egoeren gida',
        description: 'Ikas-egoerak planifikatzeko dokumentazio nagusia.',
        url: 'https://drive.google.com/file/d/DOK-1/view?usp=sharing'
      },
      {
        title: 'Narratiba didaktikoaren erreferentzia',
        description: 'Ikasturteko progresioa eta koherentzia lantzeko.',
        url: 'https://drive.google.com/file/d/DOK-2/view?usp=sharing'
      }
    ],

    prompts: [
      {
        title: 'Opeikasi 1.0',
        description: 'Bigarren Hezkuntzako irakasleentzako laguntzaile adimenduna. Curriculum-dekretuan oinarrituta, programazio didaktikoaren garapen-fasea eraikitzen laguntzen du, curriculum-elementuak lotuz, lorpen-adierazleak sortuz eta ebaluazioaren plangintza modu egituratuan garatuz.',
        gptTitle: 'Ireki GPT hau',
        gptUrl: 'https://chatgpt.com/g/g-6a1c21230bd88191bdd7b45b6ddcddb3-opeikasi-1-1'
    }
    ],

    examples: [
      {
        label: 'Literalki erabil daiteke',
        type: 'allowed',
        text: 'Ikas-egoeren sekuentziazioak ikasturteko progresio logikoa bermatu behar du.'
      },
      {
        label: 'Egokitu behar da',
        type: 'adapt',
        text: 'Erronkak ikasleen interesekin eta irakasgaiaren berezko edukiekin lotu behar dira.'
      },
      {
        label: 'Ez erabili',
        type: 'forbidden',
        text: 'Ez sortu ikas-egoerak elkarren arteko loturarik gabe edo kronologia didaktikorik gabe.'
      }
    ]
  },
  6: {
    title: '6. BLOKEA',
    subtitle: 'Metodologia eta ebaluazioa.',
    helburuak: [
      'Ebaluazioaren ikuspegia azaltzea: hasierakoa, jarraitua eta amaierakoa.',
      'Irizpideak, adierazleak edo tresnak zehaztea.',
      'Ebaluazioa ikaskuntzaren hobekuntzarako tresna gisa aurkeztea.'
    ],
    checklist: [
      'Ebaluazio-tresna bat baino gehiago ageri dira.',
      'Irizpideak eta jarduerak lotuta daude.',
      'Autoebaluazioa edo koebaluazioa kontuan hartu da.',
      'Ebaluazioaren hizkera teknikoa eta ulergarria da.'
    ],

    txantiloiak: [
      {
        title: 'Ikas-egoerak 1: izenburuak eta erronkak',
        description: 'Ikas-egoeren lehen antolaketa egiteko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-1/view?usp=sharing'
      },
      {
        title: 'Ikas-egoerak 2: KE + OJ',
        description: 'Konpetentzia espezifikoak eta oinarrizko jakintzak lotzeko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-2/view?usp=sharing'
      }
    ],

    dokumentazioa: [
      {
        title: 'Ikas-egoeren gida',
        description: 'Ikas-egoerak planifikatzeko dokumentazio nagusia.',
        url: 'https://drive.google.com/file/d/DOK-1/view?usp=sharing'
      },
      {
        title: 'Narratiba didaktikoaren erreferentzia',
        description: 'Ikasturteko progresioa eta koherentzia lantzeko.',
        url: 'https://drive.google.com/file/d/DOK-2/view?usp=sharing'
      }
    ],

    prompts: [
      {
        title: 'Ikas-egoeren erronkak sortzeko prompta',
        description: '9 ikas-egoeren lehen proposamena sortzeko.',
        prompt: 'Proposatu nire irakasgairako 9 ikas-egoera, bakoitza erronka batekin, ikasturteko narratiba koherente baten barruan.'
      },
      {
        title: 'Ikas-egoeren koherentzia berrikusteko prompta',
        description: 'OJ, KE eta erronkak ondo lotuta dauden aztertzeko.',
        prompt: 'Aztertu hurrengo ikas-egoeren zerrenda eta esan ea erronkak, konpetentzia espezifikoak eta oinarrizko jakintzak modu koherentean lotuta dauden: [itsatsi hemen]'
      }
    ],

    examples: [
      {
        label: 'Literalki erabil daiteke',
        type: 'allowed',
        text: 'Ikas-egoeren sekuentziazioak ikasturteko progresio logikoa bermatu behar du.'
      },
      {
        label: 'Egokitu behar da',
        type: 'adapt',
        text: 'Erronkak ikasleen interesekin eta irakasgaiaren berezko edukiekin lotu behar dira.'
      },
      {
        label: 'Ez erabili',
        type: 'forbidden',
        text: 'Ez sortu ikas-egoerak elkarren arteko loturarik gabe edo kronologia didaktikorik gabe.'
      }
    ]
  },  
  7: {
    title: '7. BLOKEA',
    subtitle: 'Helburuak: Etapakoak, Programazioarenak eta Didaktikoak.',
    helburuak: [
      'Ikasleen behar anitzei emango zaien erantzuna definitzea.',
      'Neurri arruntak eta, hala badagokio, espezifikoak jasotzea.',
      'Ikuspegi inklusiboa programazio osoan txertatzea.'
    ],
    checklist: [
      'Ez dira esaldi hutsak: neurri zehatzak proposatu dira.',
      'Inklusioa metodologian eta ebaluazioan ere ageri da.',
      'Ikasleen aniztasunari buruzko ikuspegia errespetuzkoa da.',
      'Egokitzapenak modu errealistan planteatu dira.'
    ],

    txantiloiak: [
      {
        title: 'Ikas-egoerak 1: izenburuak eta erronkak',
        description: 'Ikas-egoeren lehen antolaketa egiteko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-1/view?usp=sharing'
      },
      {
        title: 'Ikas-egoerak 2: KE + OJ',
        description: 'Konpetentzia espezifikoak eta oinarrizko jakintzak lotzeko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-2/view?usp=sharing'
      }
    ],

    dokumentazioa: [
      {
        title: 'Ikas-egoeren gida',
        description: 'Ikas-egoerak planifikatzeko dokumentazio nagusia.',
        url: 'https://drive.google.com/file/d/DOK-1/view?usp=sharing'
      },
      {
        title: 'Narratiba didaktikoaren erreferentzia',
        description: 'Ikasturteko progresioa eta koherentzia lantzeko.',
        url: 'https://drive.google.com/file/d/DOK-2/view?usp=sharing'
      }
    ],

    prompts: [
      {
        title: 'Ikas-egoeren erronkak sortzeko prompta',
        description: '9 ikas-egoeren lehen proposamena sortzeko.',
        prompt: 'Proposatu nire irakasgairako 9 ikas-egoera, bakoitza erronka batekin, ikasturteko narratiba koherente baten barruan.'
      },
      {
        title: 'Ikas-egoeren koherentzia berrikusteko prompta',
        description: 'OJ, KE eta erronkak ondo lotuta dauden aztertzeko.',
        prompt: 'Aztertu hurrengo ikas-egoeren zerrenda eta esan ea erronkak, konpetentzia espezifikoak eta oinarrizko jakintzak modu koherentean lotuta dauden: [itsatsi hemen]'
      }
    ],

    examples: [
      {
        label: 'Literalki erabil daiteke',
        type: 'allowed',
        text: 'Ikas-egoeren sekuentziazioak ikasturteko progresio logikoa bermatu behar du.'
      },
      {
        label: 'Egokitu behar da',
        type: 'adapt',
        text: 'Erronkak ikasleen interesekin eta irakasgaiaren berezko edukiekin lotu behar dira.'
      },
      {
        label: 'Ez erabili',
        type: 'forbidden',
        text: 'Ez sortu ikas-egoerak elkarren arteko loturarik gabe edo kronologia didaktikorik gabe.'
      }
    ]
  },  
  8: {
    title: '8. BLOKEA',
    subtitle: 'Curriculum-aren zehaztapena.',
    helburuak: [
      'Programazioaren garapen praktikoa antolatzea.',
      'Unitate edo egoeren arteko progresioa erakustea.',
      'Denboralizazioa eta koherentzia didaktikoa zaintzea.'
    ],
    checklist: [
      'Unitate edo egoeren ordena logikoa da.',
      'Denboralizazioa sinesgarria da.',
      'Jarduerak eta ebaluazioa elkarlotuta daude.',
      'Ikasleen ekintza eta irakaslearen rola argi bereizten dira.'
    ],

    txantiloiak: [
      {
        title: 'Ikas-egoerak 1: izenburuak eta erronkak',
        description: 'Ikas-egoeren lehen antolaketa egiteko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-1/view?usp=sharing'
      },
      {
        title: 'Ikas-egoerak 2: KE + OJ',
        description: 'Konpetentzia espezifikoak eta oinarrizko jakintzak lotzeko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-2/view?usp=sharing'
      }
    ],

    dokumentazioa: [
      {
        title: 'Ikas-egoeren gida',
        description: 'Ikas-egoerak planifikatzeko dokumentazio nagusia.',
        url: 'https://drive.google.com/file/d/DOK-1/view?usp=sharing'
      },
      {
        title: 'Narratiba didaktikoaren erreferentzia',
        description: 'Ikasturteko progresioa eta koherentzia lantzeko.',
        url: 'https://drive.google.com/file/d/DOK-2/view?usp=sharing'
      }
    ],

    prompts: [
      {
        title: 'Ikas-egoeren erronkak sortzeko prompta',
        description: '9 ikas-egoeren lehen proposamena sortzeko.',
        prompt: 'Proposatu nire irakasgairako 9 ikas-egoera, bakoitza erronka batekin, ikasturteko narratiba koherente baten barruan.'
      },
      {
        title: 'Ikas-egoeren koherentzia berrikusteko prompta',
        description: 'OJ, KE eta erronkak ondo lotuta dauden aztertzeko.',
        prompt: 'Aztertu hurrengo ikas-egoeren zerrenda eta esan ea erronkak, konpetentzia espezifikoak eta oinarrizko jakintzak modu koherentean lotuta dauden: [itsatsi hemen]'
      }
    ],

    examples: [
      {
        label: 'Literalki erabil daiteke',
        type: 'allowed',
        text: 'Ikas-egoeren sekuentziazioak ikasturteko progresio logikoa bermatu behar du.'
      },
      {
        label: 'Egokitu behar da',
        type: 'adapt',
        text: 'Erronkak ikasleen interesekin eta irakasgaiaren berezko edukiekin lotu behar dira.'
      },
      {
        label: 'Ez erabili',
        type: 'forbidden',
        text: 'Ez sortu ikas-egoerak elkarren arteko loturarik gabe edo kronologia didaktikorik gabe.'
      }
    ]
  },  
  9: {
    title: '9. BLOKEA',
    subtitle: 'Testuingurua, Aniztasunaren Trataera eta Programazio Didaktikoaren Sarrera.',
    helburuak: [
      'Dokumentu osoa berrikustea eta estiloa bateratzea.',
      'Defentsa ahozkora begira ideiak sintetizatzea.',
      'Ahulguneak identifikatu eta azken hobekuntzak egitea.'
    ],
    checklist: [
      'Dokumentu osoan terminologia bateratua erabili da.',
      'Atalen arteko kontraesanik ez dago.',
      'Defentsarako ideia nagusiak prestatu dira.',
      'Azken zuzenketa ortografikoa eta formala eginda dago.'
    ],

    txantiloiak: [
      {
        title: 'Ikas-egoerak 1: izenburuak eta erronkak',
        description: 'Ikas-egoeren lehen antolaketa egiteko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-1/view?usp=sharing'
      },
      {
        title: 'Ikas-egoerak 2: KE + OJ',
        description: 'Konpetentzia espezifikoak eta oinarrizko jakintzak lotzeko.',
        url: 'https://drive.google.com/file/d/TXANTILOI-2/view?usp=sharing'
      }
    ],

    dokumentazioa: [
      {
        title: 'Ikas-egoeren gida',
        description: 'Ikas-egoerak planifikatzeko dokumentazio nagusia.',
        url: 'https://drive.google.com/file/d/DOK-1/view?usp=sharing'
      },
      {
        title: 'Narratiba didaktikoaren erreferentzia',
        description: 'Ikasturteko progresioa eta koherentzia lantzeko.',
        url: 'https://drive.google.com/file/d/DOK-2/view?usp=sharing'
      }
    ],

    prompts: [
      {
        title: 'Ikas-egoeren erronkak sortzeko prompta',
        description: '9 ikas-egoeren lehen proposamena sortzeko.',
        prompt: 'Proposatu nire irakasgairako 9 ikas-egoera, bakoitza erronka batekin, ikasturteko narratiba koherente baten barruan.'
      },
      {
        title: 'Ikas-egoeren koherentzia berrikusteko prompta',
        description: 'OJ, KE eta erronkak ondo lotuta dauden aztertzeko.',
        prompt: 'Aztertu hurrengo ikas-egoeren zerrenda eta esan ea erronkak, konpetentzia espezifikoak eta oinarrizko jakintzak modu koherentean lotuta dauden: [itsatsi hemen]'
      }
    ],

    examples: [
      {
        label: 'Literalki erabil daiteke',
        type: 'allowed',
        text: 'Ikas-egoeren sekuentziazioak ikasturteko progresio logikoa bermatu behar du.'
      },
      {
        label: 'Egokitu behar da',
        type: 'adapt',
        text: 'Erronkak ikasleen interesekin eta irakasgaiaren berezko edukiekin lotu behar dira.'
      },
      {
        label: 'Ez erabili',
        type: 'forbidden',
        text: 'Ez sortu ikas-egoerak elkarren arteko loturarik gabe edo kronologia didaktikorik gabe.'
      }
    ]
  }
  };

