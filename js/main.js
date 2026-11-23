
/* =========================================
   MENU MOBILE
========================================= */

const menuButton = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {

    const open = nav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(open));

    menuButton.innerHTML = open
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';

  });

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

  });

}


/* =========================================
   DICIONÁRIO DE TRADUÇÕES
========================================= */

const translations = {

  en: {
    // MENU E RODAPÉ
    "Início": "Home",
    "Quem somos": "About Us",
    "Serviços": "Services",
    "Parceiros": "Partners",
    "Nossa equipa": "Our Team",
    "Contactos": "Contact",
    "Todos os direitos reservados.": "All rights reserved.",
    "Voltar ao início": "Back to top",

    // INDEX - HERO
    "Distribuição de combustível,": "Fuel distribution,",
    "onde e quando precisar.": "where and when you need it.",
    "Levamos gasóleo e gasolina directamente às instalações da sua empresa, com rapidez, confiança e transparência.": "We deliver diesel and petrol directly to your company's premises, with speed, reliability and transparency.",
    "Solicitar fornecimento": "Request a Supply",
    "Conhecer a empresa": "Discover Our Company",

    // INDEX - INTRODUÇÃO
    "Energia para manter": "Energy to keep",
    "o seu negócio em movimento.": "your business moving.",
    "A M.V. NGINAMAU BUSINESS é uma empresa angolana especializada na distribuição e venda a retalho de gasóleo e gasolina. Recolhemos o combustível junto dos nossos fornecedores e fazemos a entrega directamente nas instalações do cliente.": "M.V. NGINAMAU BUSINESS is an Angolan company specialising in the distribution and retail sale of diesel and petrol. We collect fuel from our suppliers and deliver it directly to the customer's premises.",
    "Conheça melhor a nossa empresa": "Learn More About Our Company",

    // INDEX - SERVIÇOS
    "O que fazemos?": "What Do We Do?",
    "Abastecimento simples.": "Simple Fuel Supply.",
    "Entrega directa.": "Direct Delivery.",
    "Uma solução de fornecimento para empresas e instituições que precisam de combustível para as suas operações diárias.": "A fuel supply solution for companies and institutions that need fuel for their daily operations.",

    "Distribuição de combustível": "Fuel Distribution",
    "Gasóleo e gasolina para as necessidades operacionais da sua empresa ou instituição.": "Diesel and petrol for your company's or institution's operational needs.",

    "Levantamento na refinaria": "Collection from Refineries",
    "Tratamos do levantamento junto dos fornecedores e refinarias, sem preocupações para si.": "We handle fuel collection from suppliers and refineries, making the process easier for you.",

    "Controlo da quantidade": "Quality and Quantity Control",
    "Verificamos a qualidade e cumprimos as regras de segurança.": "We verify fuel quality and comply with safety regulations.",

    "Entrega nas suas instalações": "Delivery to Your Premises",
    "O combustível chega diretamente ao seu depósito, na hora certa.": "Fuel arrives directly at your storage facility, at the right time.",

    // INDEX - PROCESSO
    "Como trabalhamos?": "How Do We Work?",
    "Um processo simples e transparente.": "A Simple and Transparent Process.",
    "Recebemos o pedido": "We Receive Your Request",
    "Identificamos a quantidade, o tipo de combustível e o local de entrega.": "We identify the quantity, type of fuel and delivery location.",
    "Organizamos o fornecimento": "We Organise the Supply",
    "Contactamos os fornecedores e coordenamos o levantamento.": "We contact suppliers and coordinate fuel collection.",
    "Fazemos a entrega": "We Make the Delivery",
    "Programamos a logística para entregar nas instalações do cliente.": "We organise logistics to deliver fuel to the customer's premises.",

    // INDEX - FORNECEDORES E CLIENTES
    "Os nossos fornecedores": "Our Suppliers",
    "Parcerias de fornecimento para garantir a disponibilidade de combustível e a continuidade das operações.": "Supply partnerships to ensure fuel availability and business continuity.",
    "Os nossos clientes": "Our Clients",
    "Empresas e instituições que necessitam de combustível para viaturas, geradores e outras operações.": "Companies and institutions that need fuel for vehicles, generators and other operations.",

    "LOGÓTIPO": "LOGO",
    "EXEMPLO": "EXAMPLE",
    "EXEMPLO 02": "EXAMPLE 02",
    "EXEMPLO 03": "EXAMPLE 03",
    "EXEMPLO 04": "EXAMPLE 04",
    "EXEMPLO 05": "EXAMPLE 05",
    "CLIENTE EXEMPLO 01": "SAMPLE CLIENT 01",
    "CLIENTE EXEMPLO 02": "SAMPLE CLIENT 02",
    "CLIENTE EXEMPLO 03": "SAMPLE CLIENT 03",
    "CLIENTE EXEMPLO 04": "SAMPLE CLIENT 04",
    "Fornecedor demonstrativo": "Sample Supplier",

    "Anterior": "Previous",
    "Seguinte": "Next",

    // CONTACTOS
    "NOSSOS CONTACTOS": "OUR CONTACTS",
    "Precisa de combustível": "Do You Need Fuel",
    "para a sua operação?": "for Your Operations?",
    "Entre em contacto para solicitar informações ou apresentar a sua necessidade de fornecimento.": "Contact us to request information or discuss your fuel supply requirements.",
    "Contactar a NGINAMAU": "Contact NGINAMAU",
    "Bairro Rangel, Município do Rangel, Luanda, Angola": "Rangel Neighbourhood, Rangel Municipality, Luanda, Angola",
    "NIF: 5002972042": "Tax ID: 5002972042",

    // SOBRE - HERO E APRESENTAÇÃO
    "Quem": "Who",
    "Somos": "We Are",
    "M.V. NGINAMAU BUSINESS": "M.V. NGINAMAU BUSINESS",
    "Uma empresa angolana focada em levar energia até si.": "An Angolan company focused on bringing energy to you.",

    "A M.V. NGINAMAU BUSINESS - COMÉRCIO & SERVIÇOS, LDA é uma empresa angolana devidamente registada, especializada na distribuição e venda a retalho de combustíveis, nomeadamente gasóleo e gasolina.": "M.V. NGINAMAU BUSINESS - COMÉRCIO & SERVIÇOS, LDA is a duly registered Angolan company specialising in the distribution and retail sale of fuels, namely diesel and petrol.",

    "Vamos directamente aos nossos fornecedores, como as refinarias, levantamos o combustível solicitado pelo cliente e fazemos a entrega nas suas instalações. O nosso trabalho procura simplificar o abastecimento e ajudar a manter as operações dos nossos clientes em funcionamento.": "We go directly to our suppliers, such as refineries, collect the fuel requested by the customer and deliver it to their premises. Our work aims to simplify fuel supply and help keep our customers' operations running.",

    // MISSÃO E VISÃO
    "A nossa missão": "Our Mission",
    "Levar combustível de qualidade até ao cliente.": "Deliver quality fuel to our customers.",
    "Fazê-lo com rapidez, confiança e transparência, para que a actividade dos nossos clientes não pare.": "To do so with speed, reliability and transparency, ensuring that our customers' activities continue without interruption.",

    "A nossa visão": "Our Vision",
    "Ser uma referência na distribuição de combustíveis.": "To become a reference in fuel distribution.",
    "Consolidar a nossa presença em Luanda e expandir gradualmente o serviço para empresas, pessoas individuais, periferias, subúrbios e zonas rurais.": "To strengthen our presence in Luanda and gradually expand our services to companies, individuals, outskirts, suburbs and rural areas.",

    // VALORES
    "O que nos orienta": "What Guides Us",
    "Os nossos valores.": "Our Values.",
    "Princípios que orientam a forma como trabalhamos e nos relacionamos com os clientes.": "Principles that guide how we work and interact with our customers.",
    "Confiança": "Trust",
    "Pontualidade": "Punctuality",
    "Qualidade": "Quality",
    "Transparência": "Transparency",
    "Compromisso": "Commitment",

    // OBJECTIVOS SMART
    "Os nossos objectivos": "Our Objectives",
    "Crescer com consistência e responsabilidade.": "Growing with Consistency and Responsibility.",

    "Específico:": "Specific:",
    "distribuir gasóleo e gasolina directamente aos clientes empresariais e, futuramente, a pessoas individuais e comunidades.": "distribute diesel and petrol directly to business customers and, in the future, to individuals and communities.",

    "Mensurável:": "Measurable:",
    "aumentar o número de clientes e o volume de combustível distribuído mês após mês.": "increase the number of customers and the volume of fuel distributed month after month.",

    "Atingível:": "Achievable:",
    "manter parcerias estáveis com fornecedores para apoiar a continuidade do serviço.": "maintain stable partnerships with suppliers to support service continuity.",

    "Relevante:": "Relevant:",
    "responder às necessidades de abastecimento de empresas, instituições e populações.": "meet the fuel supply needs of companies, institutions and communities.",

    "Temporal:": "Time-bound:",
    "consolidar a carteira empresarial e, depois, expandir para periferias e zonas rurais.": "consolidate our business customer base and then expand into outskirts and rural areas.",

    // ÁREA DE ACTUAÇÃO
    "Área de actuação": "Areas of Operation",
    "Presentes em Luanda. Com ambição nacional.": "Present in Luanda. With National Ambitions.",
    "A nossa primeira área de actuação é a Província de Luanda e as demais zonas da cidade. A expansão futura prevê alcançar periferias, subúrbios e áreas rurais, aproximando o acesso ao combustível de mais pessoas e organizações.": "Our initial area of operation is Luanda Province and other areas of the city. Future expansion aims to reach outskirts, suburbs and rural areas, bringing fuel closer to more people and organisations.",
    "Entre em contacto": "Get in Touch",

    // EQUIPA - HERO
    "ESTRUTURA ORGANIZACIONAL": "ORGANISATIONAL STRUCTURE",
    "Nossa Equipa": "Our Team",
    "Responsabilidade, coordenação e compromisso em cada departamento.": "Responsibility, coordination and commitment in every department.",

    // EQUIPA - INTRODUÇÃO
    "Uma estrutura clara": "A Clear Structure",
    "para servir melhor.": "to Serve Better.",
    "A Gerência Geral coordena as actividades da empresa, com apoio das estruturas consultivas e dos quatro departamentos fundamentais.": "General Management coordinates the company's activities, supported by advisory structures and four key departments.",

    // ORGANIGRAMA
    "SECRETÁRIA-GERAL": "GENERAL SECRETARY",
    "Apoio directo à Gerência: agenda, expediente, arquivo e comunicação interna e externa.": "Direct support to Management: scheduling, correspondence, archiving and internal and external communication.",

    "GERÊNCIA GERAL": "GENERAL MANAGEMENT",
    "MICHEL VANSENDE NGINAMAU": "MICHEL VANSENDE NGINAMAU",
    "Director Geral": "General Director",

    "Empresário e Engenheiro Informático, formado pelo Instituto de Tecnologias de Informação e Comunicação (INSTIC) da Universidade de Luanda, e estudante de Matemática na Universidade Agostinho Neto.": "Entrepreneur and Computer Engineer, graduated from the Institute of Information and Communication Technologies (INSTIC) of the University of Luanda, and a Mathematics student at Agostinho Neto University.",

    "CONSELHO CONSULTIVO": "ADVISORY COUNCIL",
    "Consultores especializados com experiência no ramo petrolífero e na distribuição de combustível, gasóleo e gasolina.": "Specialised consultants with experience in the petroleum industry and in the distribution of fuel, diesel and petrol.",

    // DEPARTAMENTO COMERCIAL
    "CHEFE DO DEPARTAMENTO DE COMÉRCIO E VENDA": "HEAD OF THE SALES AND COMMERCIAL DEPARTMENT",
    "YAMBA MAIMBI WAZIETO GISELA": "YAMBA MAIMBI WAZIETO GISELA",
    "Prospecção de clientes, recepção de encomendas, negociação e gestão da carteira de clientes.": "Customer prospecting, order reception, negotiation and customer portfolio management.",

    // DEPARTAMENTO DE LOGÍSTICA
    "RESPONSÁVEL": "DEPARTMENT REPRESENTATIVE",
    "Nome a definir": "Name to be announced",
    "Contacto com fornecedores, levantamento de combustível, gestão de viaturas e programação das entregas.": "Supplier contact, fuel collection, vehicle management and delivery scheduling.",

    // DEPARTAMENTO ADMINISTRATIVO E FINANCEIRO
    "CHEFE DO DEPARTAMENTO ADMINISTRATIVO & FINANCEIRO": "HEAD OF THE ADMINISTRATIVE & FINANCIAL DEPARTMENT",
    "MATEUS JOÃO MANUEL": "MATEUS JOÃO MANUEL",
    "Contabilista Certificado pela OCPA": "Certified Accountant by OCPA",
    "Facturação, controlo de receitas e despesas, gestão financeira, impostos e documentação da empresa.": "Invoicing, revenue and expense control, financial management, taxes and company documentation.",

    // QUALIDADE E SEGURANÇA
    "Verificação da qualidade do combustível, cumprimento das regras de segurança e fiscalização das condições operacionais.": "Fuel quality verification, compliance with safety regulations and inspection of operating conditions.",

    // ATRIBUTOS
    "NGINAMAU - Início": "NGINAMAU - Home",
    "logotipo NGUINAMAU": "NGINAMAU Logo",
    "Abrir menu": "Open menu",
    "Idioma": "Language",
    "Seleccionar idioma": "Select language",
    "Voltar ao início": "Back to top"
  },

  fr: {
    // MENU E RODAPÉ
    "Início": "Accueil",
    "Quem somos": "Qui sommes-nous",
    "Serviços": "Services",
    "Parceiros": "Partenaires",
    "Nossa equipa": "Notre équipe",
    "Contactos": "Contacts",
    "Todos os direitos reservados.": "Tous droits réservés.",
    "Voltar ao início": "Retour en haut",

    // INDEX - HERO
    "Distribuição de combustível,": "Distribution de carburant,",
    "onde e quando precisar.": "où et quand vous en avez besoin.",
    "Levamos gasóleo e gasolina directamente às instalações da sua empresa, com rapidez, confiança e transparência.": "Nous livrons du diesel et de l'essence directement dans les locaux de votre entreprise, avec rapidité, fiabilité et transparence.",
    "Solicitar fornecimento": "Demander un approvisionnement",
    "Conhecer a empresa": "Découvrir l'entreprise",

    // INDEX - INTRODUÇÃO
    "Energia para manter": "L'énergie pour maintenir",
    "o seu negócio em movimento.": "votre activité en mouvement.",
    "A M.V. NGINAMAU BUSINESS é uma empresa angolana especializada na distribuição e venda a retalho de gasóleo e gasolina. Recolhemos o combustível junto dos nossos fornecedores e fazemos a entrega directamente nas instalações do cliente.": "M.V. NGINAMAU BUSINESS est une entreprise angolaise spécialisée dans la distribution et la vente au détail de diesel et d'essence. Nous récupérons le carburant auprès de nos fournisseurs et le livrons directement chez le client.",
    "Conheça melhor a nossa empresa": "Découvrez mieux notre entreprise",

    // INDEX - SERVIÇOS
    "O que fazemos?": "Que faisons-nous ?",
    "Abastecimento simples.": "Approvisionnement simple.",
    "Entrega directa.": "Livraison directe.",
    "Uma solução de fornecimento para empresas e instituições que precisam de combustível para as suas operações diárias.": "Une solution d'approvisionnement pour les entreprises et institutions qui ont besoin de carburant pour leurs opérations quotidiennes.",

    "Distribuição de combustível": "Distribution de carburant",
    "Gasóleo e gasolina para as necessidades operacionais da sua empresa ou instituição.": "Du diesel et de l'essence pour les besoins opérationnels de votre entreprise ou institution.",

    "Levantamento na refinaria": "Collecte auprès des raffineries",
    "Tratamos do levantamento junto dos fornecedores e refinarias, sem preocupações para si.": "Nous organisons la collecte auprès des fournisseurs et des raffineries, pour vous simplifier la tâche.",

    "Controlo da quantidade": "Contrôle de la qualité et de la quantité",
    "Verificamos a qualidade e cumprimos as regras de segurança.": "Nous vérifions la qualité et respectons les règles de sécurité.",

    "Entrega nas suas instalações": "Livraison dans vos locaux",
    "O combustível chega diretamente ao seu depósito, na hora certa.": "Le carburant arrive directement dans votre dépôt, au bon moment.",

    // INDEX - PROCESSO
    "Como trabalhamos?": "Comment travaillons-nous ?",
    "Um processo simples e transparente.": "Un processus simple et transparent.",
    "Recebemos o pedido": "Nous recevons votre demande",
    "Identificamos a quantidade, o tipo de combustível e o local de entrega.": "Nous identifions la quantité, le type de carburant et le lieu de livraison.",
    "Organizamos o fornecimento": "Nous organisons l'approvisionnement",
    "Contactamos os fornecedores e coordenamos o levantamento.": "Nous contactons les fournisseurs et coordonnons la collecte.",
    "Fazemos a entrega": "Nous effectuons la livraison",
    "Programamos a logística para entregar nas instalações do cliente.": "Nous organisons la logistique pour livrer dans les locaux du client.",

    // FORNECEDORES E CLIENTES
    "Os nossos fornecedores": "Nos fournisseurs",
    "Parcerias de fornecimento para garantir a disponibilidade de combustível e a continuidade das operações.": "Des partenariats d'approvisionnement pour garantir la disponibilité du carburant et la continuité des opérations.",
    "Os nossos clientes": "Nos clients",
    "Empresas e instituições que necessitam de combustível para viaturas, geradores e outras operações.": "Entreprises et institutions ayant besoin de carburant pour leurs véhicules, générateurs et autres opérations.",

    "LOGÓTIPO": "LOGO",
    "EXEMPLO": "EXEMPLE",
    "EXEMPLO 02": "EXEMPLE 02",
    "EXEMPLO 03": "EXEMPLE 03",
    "EXEMPLO 04": "EXEMPLE 04",
    "EXEMPLO 05": "EXEMPLE 05",
    "CLIENTE EXEMPLO 01": "CLIENT EXEMPLE 01",
    "CLIENTE EXEMPLO 02": "CLIENT EXEMPLE 02",
    "CLIENTE EXEMPLO 03": "CLIENT EXEMPLE 03",
    "CLIENTE EXEMPLO 04": "CLIENT EXEMPLE 04",
    "Fornecedor demonstrativo": "Fournisseur démonstratif",

    "Anterior": "Précédent",
    "Seguinte": "Suivant",

    // CONTACTOS
    "NOSSOS CONTACTOS": "NOS CONTACTS",
    "Precisa de combustível": "Besoin de carburant",
    "para a sua operação?": "pour vos opérations ?",
    "Entre em contacto para solicitar informações ou apresentar a sua necessidade de fornecimento.": "Contactez-nous pour demander des informations ou présenter vos besoins en approvisionnement.",
    "Contactar a NGINAMAU": "Contacter NGINAMAU",
    "Bairro Rangel, Município do Rangel, Luanda, Angola": "Quartier Rangel, municipalité de Rangel, Luanda, Angola",
    "NIF: 5002972042": "NIF : 5002972042",

    // SOBRE
    "Quem": "Qui",
    "Somos": "Sommes-nous",
    "M.V. NGINAMAU BUSINESS": "M.V. NGINAMAU BUSINESS",
    "Uma empresa angolana focada em levar energia até si.": "Une entreprise angolaise qui s'engage à vous apporter de l'énergie.",

    "A M.V. NGINAMAU BUSINESS - COMÉRCIO & SERVIÇOS, LDA é uma empresa angolana devidamente registada, especializada na distribuição e venda a retalho de combustíveis, nomeadamente gasóleo e gasolina.": "M.V. NGINAMAU BUSINESS - COMÉRCIO & SERVIÇOS, LDA est une entreprise angolaise dûment enregistrée, spécialisée dans la distribution et la vente au détail de carburants, notamment le diesel et l'essence.",

    "Vamos directamente aos nossos fornecedores, como as refinarias, levantamos o combustível solicitado pelo cliente e fazemos a entrega nas suas instalações. O nosso trabalho procura simplificar o abastecimento e ajudar a manter as operações dos nossos clientes em funcionamento.": "Nous nous rendons directement chez nos fournisseurs, tels que les raffineries, récupérons le carburant demandé par le client et le livrons dans ses locaux. Notre travail vise à simplifier l'approvisionnement et à assurer la continuité des activités de nos clients.",

    // MISSÃO E VISÃO
    "A nossa missão": "Notre mission",
    "Levar combustível de qualidade até ao cliente.": "Fournir du carburant de qualité à nos clients.",
    "Fazê-lo com rapidez, confiança e transparência, para que a actividade dos nossos clientes não pare.": "Le faire avec rapidité, fiabilité et transparence afin que les activités de nos clients ne s'arrêtent pas.",

    "A nossa visão": "Notre vision",
    "Ser uma referência na distribuição de combustíveis.": "Devenir une référence dans la distribution de carburants.",
    "Consolidar a nossa presença em Luanda e expandir gradualmente o serviço para empresas, pessoas individuais, periferias, subúrbios e zonas rurais.": "Consolider notre présence à Luanda et étendre progressivement nos services aux entreprises, aux particuliers, aux périphéries, aux banlieues et aux zones rurales.",

    // VALORES
    "O que nos orienta": "Ce qui nous guide",
    "Os nossos valores.": "Nos valeurs.",
    "Princípios que orientam a forma como trabalhamos e nos relacionamos com os clientes.": "Les principes qui guident notre travail et nos relations avec les clients.",
    "Confiança": "Confiance",
    "Pontualidade": "Ponctualité",
    "Qualidade": "Qualité",
    "Transparência": "Transparence",
    "Compromisso": "Engagement",

    // OBJECTIVOS SMART
    "Os nossos objectivos": "Nos objectifs",
    "Crescer com consistência e responsabilidade.": "Grandir avec cohérence et responsabilité.",

    "Específico:": "Spécifique :",
    "distribuir gasóleo e gasolina directamente aos clientes empresariais e, futuramente, a pessoas individuais e comunidades.": "distribuer du diesel et de l'essence directement aux entreprises et, à l'avenir, aux particuliers et aux communautés.",

    "Mensurável:": "Mesurable :",
    "aumentar o número de clientes e o volume de combustível distribuído mês após mês.": "augmenter le nombre de clients et le volume de carburant distribué chaque mois.",

    "Atingível:": "Atteignable :",
    "manter parcerias estáveis com fornecedores para apoiar a continuidade do serviço.": "maintenir des partenariats stables avec les fournisseurs pour assurer la continuité du service.",

    "Relevante:": "Pertinent :",
    "responder às necessidades de abastecimento de empresas, instituições e populações.": "répondre aux besoins en carburant des entreprises, institutions et populations.",

    "Temporal:": "Temporel :",
    "consolidar a carteira empresarial e, depois, expandir para periferias e zonas rurais.": "consolider notre portefeuille de clients professionnels, puis nous développer dans les périphéries et les zones rurales.",

    // ÁREA DE ACTUAÇÃO
    "Área de actuação": "Zone d'activité",
    "Presentes em Luanda. Com ambição nacional.": "Présents à Luanda. Avec une ambition nationale.",
    "A nossa primeira área de actuação é a Província de Luanda e as demais zonas da cidade. A expansão futura prevê alcançar periferias, subúrbios e áreas rurais, aproximando o acesso ao combustível de mais pessoas e organizações.": "Notre première zone d'activité est la province de Luanda et les autres quartiers de la ville. Notre expansion future vise à atteindre les périphéries, les banlieues et les zones rurales, afin de rapprocher le carburant d'un plus grand nombre de personnes et d'organisations.",
    "Entre em contacto": "Contactez-nous",

    // EQUIPA
    "ESTRUTURA ORGANIZACIONAL": "STRUCTURE ORGANISATIONNELLE",
    "Nossa Equipa": "Notre équipe",
    "Responsabilidade, coordenação e compromisso em cada departamento.": "Responsabilité, coordination et engagement dans chaque département.",
    "Uma estrutura clara": "Une structure claire",
    "para servir melhor.": "pour mieux servir.",
    "A Gerência Geral coordena as actividades da empresa, com apoio das estruturas consultivas e dos quatro departamentos fundamentais.": "La direction générale coordonne les activités de l'entreprise avec le soutien des structures consultatives et des quatre départements fondamentaux.",

    // ORGANIGRAMA
    "SECRETÁRIA-GERAL": "SECRÉTAIRE GÉNÉRALE",
    "Apoio directo à Gerência: agenda, expediente, arquivo e comunicação interna e externa.": "Soutien direct à la direction : agenda, correspondance, archives et communication interne et externe.",

    "GERÊNCIA GERAL": "DIRECTION GÉNÉRALE",
    "MICHEL VANSENDE NGINAMAU": "MICHEL VANSENDE NGINAMAU",
    "Director Geral": "Directeur général",

    "Empresário e Engenheiro Informático, formado pelo Instituto de Tecnologias de Informação e Comunicação (INSTIC) da Universidade de Luanda, e estudante de Matemática na Universidade Agostinho Neto.": "Entrepreneur et ingénieur informatique, diplômé de l'Institut des technologies de l'information et de la communication (INSTIC) de l'Université de Luanda, et étudiant en mathématiques à l'Université Agostinho Neto.",

    "CONSELHO CONSULTIVO": "CONSEIL CONSULTATIF",
    "Consultores especializados com experiência no ramo petrolífero e na distribuição de combustível, gasóleo e gasolina.": "Consultants spécialisés ayant une expérience dans le secteur pétrolier et dans la distribution de carburant, de diesel et d'essence.",

    "CHEFE DO DEPARTAMENTO DE COMÉRCIO E VENDA": "CHEF DU DÉPARTEMENT COMMERCIAL ET DES VENTES",
    "YAMBA MAIMBI WAZIETO GISELA": "YAMBA MAIMBI WAZIETO GISELA",
    "Prospecção de clientes, recepção de encomendas, negociação e gestão da carteira de clientes.": "Prospection de clients, réception des commandes, négociation et gestion du portefeuille clients.",

    "RESPONSÁVEL": "RESPONSABLE",
    "Nome a definir": "Nom à définir",
    "Contacto com fornecedores, levantamento de combustível, gestão de viaturas e programação das entregas.": "Contact avec les fournisseurs, collecte de carburant, gestion des véhicules et planification des livraisons.",

    "CHEFE DO DEPARTAMENTO ADMINISTRATIVO & FINANCEIRO": "CHEF DU DÉPARTEMENT ADMINISTRATIF ET FINANCIER",
    "MATEUS JOÃO MANUEL": "MATEUS JOÃO MANUEL",
    "Contabilista Certificado pela OCPA": "Comptable certifié par l'OCPA",
    "Facturação, controlo de receitas e despesas, gestão financeira, impostos e documentação da empresa.": "Facturation, contrôle des recettes et des dépenses, gestion financière, impôts et documentation de l'entreprise.",

    "Verificação da qualidade do combustível, cumprimento das regras de segurança e fiscalização das condições operacionais.": "Vérification de la qualité du carburant, respect des règles de sécurité et inspection des conditions opérationnelles.",

    // ATRIBUTOS
    "NGINAMAU - Início": "NGINAMAU - Accueil",
    "logotipo NGUINAMAU": "Logo NGINAMAU",
    "Abrir menu": "Ouvrir le menu",
    "Idioma": "Langue",
    "Seleccionar idioma": "Sélectionner la langue",
    "Voltar ao início": "Retour en haut"
  },

  ar: {
    // MENU E RODAPÉ
    "Início": "الرئيسية",
    "Quem somos": "من نحن",
    "Serviços": "خدماتنا",
    "Parceiros": "شركاؤنا",
    "Nossa equipa": "فريقنا",
    "Contactos": "اتصل بنا",
    "Todos os direitos reservados.": "جميع الحقوق محفوظة.",
    "Voltar ao início": "العودة إلى الأعلى",

    // INDEX - HERO
    "Distribuição de combustível,": "توزيع الوقود،",
    "onde e quando precisar.": "أينما ومتى احتجت إليه.",
    "Levamos gasóleo e gasolina directamente às instalações da sua empresa, com rapidez, confiança e transparência.": "نوصل الديزل والبنزين مباشرة إلى منشآت شركتكم بسرعة وموثوقية وشفافية.",
    "Solicitar fornecimento": "طلب توريد الوقود",
    "Conhecer a empresa": "تعرّف على الشركة",

    // INDEX - INTRODUÇÃO
    "Energia para manter": "الطاقة للحفاظ على",
    "o seu negócio em movimento.": "استمرار أعمالكم.",
    "A M.V. NGINAMAU BUSINESS é uma empresa angolana especializada na distribuição e venda a retalho de gasóleo e gasolina. Recolhemos o combustível junto dos nossos fornecedores e fazemos a entrega directamente nas instalações do cliente.": "شركة M.V. NGINAMAU BUSINESS هي شركة أنغولية متخصصة في توزيع وبيع الديزل والبنزين بالتجزئة. نستلم الوقود من موردينا ونسلمه مباشرة إلى منشآت العملاء.",
    "Conheça melhor a nossa empresa": "تعرّف أكثر على شركتنا",

    // INDEX - SERVIÇOS
    "O que fazemos?": "ماذا نقدم؟",
    "Abastecimento simples.": "توريد سهل.",
    "Entrega directa.": "توصيل مباشر.",
    "Uma solução de fornecimento para empresas e instituições que precisam de combustível para as suas operações diárias.": "حل لتوريد الوقود للشركات والمؤسسات التي تحتاج إليه لتسيير عملياتها اليومية.",

    "Distribuição de combustível": "توزيع الوقود",
    "Gasóleo e gasolina para as necessidades operacionais da sua empresa ou instituição.": "الديزل والبنزين لتلبية الاحتياجات التشغيلية لشركتكم أو مؤسستكم.",

    "Levantamento na refinaria": "استلام الوقود من المصافي",
    "Tratamos do levantamento junto dos fornecedores e refinarias, sem preocupações para si.": "نتولى استلام الوقود من الموردين والمصافي لتسهيل العملية عليكم.",

    "Controlo da quantidade": "مراقبة الجودة والكمية",
    "Verificamos a qualidade e cumprimos as regras de segurança.": "نتحقق من جودة الوقود ونلتزم بقواعد السلامة.",

    "Entrega nas suas instalações": "التوصيل إلى منشآتكم",
    "O combustível chega diretamente ao seu depósito, na hora certa.": "يصل الوقود مباشرة إلى مستودعكم في الوقت المناسب.",

    // INDEX - PROCESSO
    "Como trabalhamos?": "كيف نعمل؟",
    "Um processo simples e transparente.": "عملية بسيطة وشفافة.",
    "Recebemos o pedido": "نتلقى الطلب",
    "Identificamos a quantidade, o tipo de combustível e o local de entrega.": "نحدد الكمية ونوع الوقود ومكان التسليم.",
    "Organizamos o fornecimento": "ننظم عملية التوريد",
    "Contactamos os fornecedores e coordenamos o levantamento.": "نتواصل مع الموردين ونتولى تنسيق استلام الوقود.",
    "Fazemos a entrega": "نقوم بالتوصيل",
    "Programamos a logística para entregar nas instalações do cliente.": "ننظم عمليات النقل لتوصيل الوقود إلى منشآت العميل.",

    // FORNECEDORES E CLIENTES
    "Os nossos fornecedores": "موردونا",
    "Parcerias de fornecimento para garantir a disponibilidade de combustível e a continuidade das operações.": "شراكات توريد لضمان توفر الوقود واستمرارية العمليات.",
    "Os nossos clientes": "عملاؤنا",
    "Empresas e instituições que necessitam de combustível para viaturas, geradores e outras operações.": "الشركات والمؤسسات التي تحتاج إلى الوقود للمركبات والمولدات والعمليات الأخرى.",

    "LOGÓTIPO": "شعار",
    "EXEMPLO": "مثال",
    "EXEMPLO 02": "مثال 02",
    "EXEMPLO 03": "مثال 03",
    "EXEMPLO 04": "مثال 04",
    "EXEMPLO 05": "مثال 05",
    "CLIENTE EXEMPLO 01": "عميل نموذجي 01",
    "CLIENTE EXEMPLO 02": "عميل نموذجي 02",
    "CLIENTE EXEMPLO 03": "عميل نموذجي 03",
    "CLIENTE EXEMPLO 04": "عميل نموذجي 04",
    "Fornecedor demonstrativo": "مورد توضيحي",

    "Anterior": "السابق",
    "Seguinte": "التالي",

    // CONTACTOS
    "NOSSOS CONTACTOS": "معلومات الاتصال",
    "Precisa de combustível": "هل تحتاج إلى الوقود",
    "para a sua operação?": "لتشغيل أعمالك؟",
    "Entre em contacto para solicitar informações ou apresentar a sua necessidade de fornecimento.": "تواصل معنا لطلب المعلومات أو لتوضيح احتياجاتك من الوقود.",
    "Contactar a NGINAMAU": "تواصل مع NGINAMAU",
    "Bairro Rangel, Município do Rangel, Luanda, Angola": "حي رانجيل، بلدية رانجيل، لواندا، أنغولا",
    "NIF: 5002972042": "الرقم الضريبي: 5002972042",

    // SOBRE
    "Quem": "من",
    "Somos": "نحن",
    "M.V. NGINAMAU BUSINESS": "M.V. NGINAMAU BUSINESS",
    "Uma empresa angolana focada em levar energia até si.": "شركة أنغولية تسعى إلى إيصال الطاقة إليكم.",

    "A M.V. NGINAMAU BUSINESS - COMÉRCIO & SERVIÇOS, LDA é uma empresa angolana devidamente registada, especializada na distribuição e venda a retalho de combustíveis, nomeadamente gasóleo e gasolina.": "شركة M.V. NGINAMAU BUSINESS - COMÉRCIO & SERVIÇOS, LDA هي شركة أنغولية مسجلة قانونياً ومتخصصة في توزيع وبيع الوقود بالتجزئة، وخاصة الديزل والبنزين.",

    "Vamos directamente aos nossos fornecedores, como as refinarias, levantamos o combustível solicitado pelo cliente e fazemos a entrega nas suas instalações. O nosso trabalho procura simplificar o abastecimento e ajudar a manter as operações dos nossos clientes em funcionamento.": "نتوجه مباشرة إلى موردينا، مثل المصافي، لاستلام الوقود الذي يطلبه العميل ثم نقوم بتوصيله إلى منشآته. يهدف عملنا إلى تسهيل التزود بالوقود والمساعدة في استمرار عمليات عملائنا.",

    // MISSÃO E VISÃO
    "A nossa missão": "رسالتنا",
    "Levar combustível de qualidade até ao cliente.": "إيصال وقود عالي الجودة إلى العملاء.",
    "Fazê-lo com rapidez, confiança e transparência, para que a actividade dos nossos clientes não pare.": "تقديم هذه الخدمة بسرعة وموثوقية وشفافية حتى لا تتوقف أنشطة عملائنا.",

    "A nossa visão": "رؤيتنا",
    "Ser uma referência na distribuição de combustíveis.": "أن نصبح من الشركات الرائدة في توزيع الوقود.",
    "Consolidar a nossa presença em Luanda e expandir gradualmente o serviço para empresas, pessoas individuais, periferias, subúrbios e zonas rurais.": "تعزيز وجودنا في لواندا والتوسع تدريجياً لتقديم خدماتنا للشركات والأفراد والمناطق الطرفية والضواحي والمناطق الريفية.",

    // VALORES
    "O que nos orienta": "ما يوجهنا",
    "Os nossos valores.": "قيمنا.",
    "Princípios que orientam a forma como trabalhamos e nos relacionamos com os clientes.": "المبادئ التي توجه طريقة عملنا وتعاملنا مع العملاء.",
    "Confiança": "الثقة",
    "Pontualidade": "الالتزام بالمواعيد",
    "Qualidade": "الجودة",
    "Transparência": "الشفافية",
    "Compromisso": "الالتزام",

    // OBJECTIVOS SMART
    "Os nossos objectivos": "أهدافنا",
    "Crescer com consistência e responsabilidade.": "النمو بثبات ومسؤولية.",

    "Específico:": "محدد:",
    "distribuir gasóleo e gasolina directamente aos clientes empresariais e, futuramente, a pessoas individuais e comunidades.": "توزيع الديزل والبنزين مباشرة على العملاء من الشركات، وفي المستقبل على الأفراد والمجتمعات.",

    "Mensurável:": "قابل للقياس:",
    "aumentar o número de clientes e o volume de combustível distribuído mês após mês.": "زيادة عدد العملاء وحجم الوقود الموزع شهراً بعد شهر.",

    "Atingível:": "قابل للتحقيق:",
    "manter parcerias estáveis com fornecedores para apoiar a continuidade do serviço.": "الحفاظ على شراكات مستقرة مع الموردين لضمان استمرارية الخدمة.",

    "Relevante:": "ذو صلة:",
    "responder às necessidades de abastecimento de empresas, instituições e populações.": "تلبية احتياجات الشركات والمؤسسات والسكان من الوقود.",

    "Temporal:": "محدد زمنياً:",
    "consolidar a carteira empresarial e, depois, expandir para periferias e zonas rurais.": "تعزيز قاعدة العملاء من الشركات، ثم التوسع إلى المناطق الطرفية والريفية.",

    // ÁREA DE ACTUAÇÃO
    "Área de actuação": "مناطق النشاط",
    "Presentes em Luanda. Com ambição nacional.": "حاضرون في لواندا. بطموح وطني.",
    "A nossa primeira área de actuação é a Província de Luanda e as demais zonas da cidade. A expansão futura prevê alcançar periferias, subúrbios e áreas rurais, aproximando o acesso ao combustível de mais pessoas e organizações.": "منطقة نشاطنا الأولى هي مقاطعة لواندا ومناطق المدينة الأخرى. وتهدف خطط التوسع المستقبلية إلى الوصول إلى المناطق الطرفية والضواحي والمناطق الريفية، لتقريب الوقود من المزيد من الأشخاص والمؤسسات.",
    "Entre em contacto": "تواصل معنا",

    // EQUIPA
    "ESTRUTURA ORGANIZACIONAL": "الهيكل التنظيمي",
    "Nossa Equipa": "فريقنا",
    "Responsabilidade, coordenação e compromisso em cada departamento.": "المسؤولية والتنسيق والالتزام في كل قسم.",
    "Uma estrutura clara": "هيكل تنظيمي واضح",
    "para servir melhor.": "لتقديم خدمة أفضل.",
    "A Gerência Geral coordena as actividades da empresa, com apoio das estruturas consultivas e dos quatro departamentos fundamentais.": "تنسق الإدارة العامة أنشطة الشركة بدعم من الهياكل الاستشارية والأقسام الأربعة الأساسية.",

    // ORGANIGRAMA
    "SECRETÁRIA-GERAL": "الأمانة العامة",
    "Apoio directo à Gerência: agenda, expediente, arquivo e comunicação interna e externa.": "الدعم المباشر للإدارة: تنظيم المواعيد والمراسلات والأرشيف والاتصالات الداخلية والخارجية.",

    "GERÊNCIA GERAL": "الإدارة العامة",
    "MICHEL VANSENDE NGINAMAU": "MICHEL VANSENDE NGINAMAU",
    "Director Geral": "المدير العام",

    "Empresário e Engenheiro Informático, formado pelo Instituto de Tecnologias de Informação e Comunicação (INSTIC) da Universidade de Luanda, e estudante de Matemática na Universidade Agostinho Neto.": "رجل أعمال ومهندس معلوماتية، تخرج من معهد تكنولوجيا المعلومات والاتصالات (INSTIC) بجامعة لواندا، ويدرس الرياضيات في جامعة أغوستينو نيتو.",

    "CONSELHO CONSULTIVO": "المجلس الاستشاري",
    "Consultores especializados com experiência no ramo petrolífero e na distribuição de combustível, gasóleo e gasolina.": "مستشارون متخصصون ذوو خبرة في قطاع النفط وتوزيع الوقود والديزل والبنزين.",

    "CHEFE DO DEPARTAMENTO DE COMÉRCIO E VENDA": "رئيس قسم التجارة والمبيعات",
    "YAMBA MAIMBI WAZIETO GISELA": "YAMBA MAIMBI WAZIETO GISELA",
    "Prospecção de clientes, recepção de encomendas, negociação e gestão da carteira de clientes.": "استقطاب العملاء واستقبال الطلبات والتفاوض وإدارة قاعدة العملاء.",

    "RESPONSÁVEL": "المسؤول",
    "Nome a definir": "الاسم سيحدد لاحقاً",
    "Contacto com fornecedores, levantamento de combustível, gestão de viaturas e programação das entregas.": "التواصل مع الموردين واستلام الوقود وإدارة المركبات وتنظيم عمليات التسليم.",

    "CHEFE DO DEPARTAMENTO ADMINISTRATIVO & FINANCEIRO": "رئيس القسم الإداري والمالي",
    "MATEUS JOÃO MANUEL": "MATEUS JOÃO MANUEL",
    "Contabilista Certificado pela OCPA": "محاسب معتمد من OCPA",
    "Facturação, controlo de receitas e despesas, gestão financeira, impostos e documentação da empresa.": "إصدار الفواتير ومراقبة الإيرادات والمصروفات والإدارة المالية والضرائب ووثائق الشركة.",

    "Verificação da qualidade do combustível, cumprimento das regras de segurança e fiscalização das condições operacionais.": "التحقق من جودة الوقود والالتزام بقواعد السلامة ومراقبة ظروف التشغيل.",

    // ATRIBUTOS
    "NGINAMAU - Início": "NGINAMAU - الرئيسية",
    "logotipo NGUINAMAU": "شعار NGINAMAU",
    "Abrir menu": "فتح القائمة",
    "Idioma": "اللغة",
    "Seleccionar idioma": "اختيار اللغة",
    "Voltar ao início": "العودة إلى الأعلى"
  }
};



/* =========================================
   MOTOR DE TRADUÇÃO NGINAMAU
========================================= */

const languageSelect = document.getElementById("languageSelect");

const DEFAULT_LANGUAGE = "pt";

function translateTextNodes(language) {

  const dictionary = translations[language] || {};

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  const nodes = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parent = node.parentElement;

    if (!parent) continue;

    if (
      ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName) ||
      parent.closest("[data-no-translate]")
    ) {
      continue;
    }

    nodes.push(node);
  }

  nodes.forEach(node => {

    const original = node.nodeValue;
    const trimmed = original.trim();

    if (!trimmed) return;

    if (Object.prototype.hasOwnProperty.call(dictionary, trimmed)) {

      const leading = original.match(/^\s*/)[0];
      const trailing = original.match(/\s*$/)[0];

      node.nodeValue =
        leading + dictionary[trimmed] + trailing;
    }

  });

}


/* =========================================
   TRADUZIR ATRIBUTOS HTML
========================================= */

function translateAttributes(language) {

  const dictionary = translations[language] || {};

  const attributes = [
    "alt",
    "title",
    "placeholder",
    "aria-label"
  ];

  document.querySelectorAll("*").forEach(element => {

    attributes.forEach(attribute => {

      const original = element.getAttribute(attribute);

      if (
        original &&
        Object.prototype.hasOwnProperty.call(dictionary, original)
      ) {
        element.setAttribute(attribute, dictionary[original]);
      }

    });

  });

}


/* =========================================
   TRADUZIR TÍTULO E DESCRIÇÃO DA PÁGINA
========================================= */

function translatePageMetadata(language) {

  const metadata = {
    en: {
      "NGINAMAU | Início": "NGINAMAU | Home",
      "Quem Somos | NGINAMAU": "About Us | NGINAMAU",
      "Nossa Equipa | NGINAMAU": "Our Team | NGINAMAU",
      "NGINAMAU — Distribuição de combustível, onde e quando precisar.": "NGINAMAU — Fuel distribution, where and when you need it.",
      "Conheça a NGINAMAU, empresa angolana de distribuição de combustíveis.": "Discover NGINAMAU, an Angolan fuel distribution company.",
      "Conheça a estrutura organizacional da NGINAMAU.": "Discover NGINAMAU's organisational structure."
    },

    fr: {
      "NGINAMAU | Início": "NGINAMAU | Accueil",
      "Quem Somos | NGINAMAU": "Qui sommes-nous | NGINAMAU",
      "Nossa Equipa | NGINAMAU": "Notre équipe | NGINAMAU",
      "NGINAMAU — Distribuição de combustível, onde e quando precisar.": "NGINAMAU — Distribution de carburant, où et quand vous en avez besoin.",
      "Conheça a NGINAMAU, empresa angolana de distribuição de combustíveis.": "Découvrez NGINAMAU, une entreprise angolaise de distribution de carburants.",
      "Conheça a estrutura organizacional da NGINAMAU.": "Découvrez la structure organisationnelle de NGINAMAU."
    },

    ar: {
      "NGINAMAU | Início": "NGINAMAU | الرئيسية",
      "Quem Somos | NGINAMAU": "من نحن | NGINAMAU",
      "Nossa Equipa | NGINAMAU": "فريقنا | NGINAMAU",
      "NGINAMAU — Distribuição de combustível, onde e quando precisar.": "NGINAMAU — توزيع الوقود أينما ومتى احتجت إليه.",
      "Conheça a NGINAMAU, empresa angolana de distribuição de combustíveis.": "تعرّف على NGINAMAU، الشركة الأنغولية المتخصصة في توزيع الوقود.",
      "Conheça a estrutura organizacional da NGINAMAU.": "تعرّف على الهيكل التنظيمي لشركة NGINAMAU."
    }
  };

  const pageDictionary = metadata[language] || {};

  const originalTitle = document.title;

  if (pageDictionary[originalTitle]) {
    document.title = pageDictionary[originalTitle];
  }

  const description = document.querySelector(
    'meta[name="description"]'
  );

  if (description) {

    const originalDescription =
      description.getAttribute("content");

    if (pageDictionary[originalDescription]) {
      description.setAttribute(
        "content",
        pageDictionary[originalDescription]
      );
    }

  }

}


/* =========================================
   CONFIGURAR DIRECÇÃO DO TEXTO
========================================= */

function setLanguageDirection(language) {

  const isArabic = language === "ar";

  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  document.body.classList.toggle("rtl-layout", isArabic);

}


/* =========================================
   APLICAR IDIOMA
========================================= */

function applyLanguage(language) {

  if (language === "pt") {
    setLanguageDirection("pt");
    return;
  }

  if (!translations[language]) {
    language = DEFAULT_LANGUAGE;
  }

  setLanguageDirection(language);

  translateTextNodes(language);
  translateAttributes(language);
  translatePageMetadata(language);

  if (languageSelect) {
    languageSelect.value = language;
  }

}


/* =========================================
   INICIALIZAR IDIOMA
========================================= */

function initializeLanguage() {

  let savedLanguage = DEFAULT_LANGUAGE;

  try {

    savedLanguage =
      localStorage.getItem("nginamau-language") || DEFAULT_LANGUAGE;

  } catch (error) {

    console.warn("Não foi possível recuperar o idioma.");

  }

  if (!["pt", "en", "fr", "ar"].includes(savedLanguage)) {
    savedLanguage = DEFAULT_LANGUAGE;
  }

  if (languageSelect) {
    languageSelect.value = savedLanguage;
  }

  applyLanguage(savedLanguage);

}


/* =========================================
   EVENTO DE ALTERAÇÃO DE IDIOMA
========================================= */

if (languageSelect) {

  languageSelect.addEventListener("change", event => {

    const selectedLanguage = event.target.value;

    try {

      localStorage.setItem(
        "nginamau-language",
        selectedLanguage
      );

    } catch (error) {

      console.warn("Não foi possível guardar o idioma.");

    }

    // Recarregar para começar sempre pelo conteúdo original.
    location.reload();

  });

}

initializeLanguage();

